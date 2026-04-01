import React, {useEffect, useMemo, useRef, useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useLocation} from '@docusaurus/router';

function getPageTitle() {
  if (typeof document === 'undefined') {
    return 'Documentation page';
  }
  return document.title || 'Documentation page';
}

function getPageContent() {
  if (typeof document === 'undefined') {
    return '';
  }
  const main =
    document.querySelector('article') ||
    document.querySelector('.theme-doc-markdown') ||
    document.querySelector('main');
  return main?.innerText?.slice(0, 4000) || '';
}

export default function AskAiNavbarItem() {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState('');
  const rootRef = useRef(null);
  const location = useLocation();
  const askAiBase = useBaseUrl('/api-reference/');

  const pageUrl = useMemo(() => {
    if (typeof window === 'undefined') {
      return '';
    }
    return `${window.location.origin}${location.pathname}${location.search}${location.hash}`;
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    function onPointerDown(event) {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, []);

  function showToast(message) {
    setToast(message);
    window.clearTimeout(showToast._timer);
    showToast._timer = window.setTimeout(() => setToast(''), 2500);
  }

  function openChatGPT() {
    const prompt = encodeURIComponent(
      `Hi! Can you please read [this page](${pageUrl}) and prepare to answer questions about it?`,
    );
    window.open(`https://chat.openai.com/?q=${prompt}`, '_blank', 'noopener,noreferrer');
    setOpen(false);
  }

  function openClaude() {
    const prompt = encodeURIComponent(
      `Hi Claude! Can you please read [this page](${pageUrl}) and prepare to answer questions about it?`,
    );
    window.open(`https://claude.ai/new?q=${prompt}`, '_blank', 'noopener,noreferrer');
    setOpen(false);
  }

  async function copyMarkdown() {
    const markdown = `# ${getPageTitle()}\n\n${getPageContent()}`;
    await navigator.clipboard.writeText(markdown);
    showToast('Copied to clipboard');
    setOpen(false);
  }

  function openReferenceHub() {
    window.location.href = askAiBase;
  }

  return (
    <div className="ask-ai-nav" ref={rootRef}>
      <button
        type="button"
        className="ask-ai-nav__button"
        onClick={() => setOpen((value) => !value)}>
        <span className="ask-ai-nav__sparkle">✦</span>
        <span>Ask AI</span>
        <span className={`ask-ai-nav__caret${open ? ' is-open' : ''}`}>▾</span>
      </button>

      {open && (
        <div className="ask-ai-nav__menu">
          <div className="ask-ai-nav__section">Open with</div>
          <button type="button" className="ask-ai-nav__item" onClick={openChatGPT}>
            <span className="ask-ai-nav__itemIcon">◎</span>
            <span>ChatGPT</span>
            <span className="ask-ai-nav__external">↗</span>
          </button>
          <button type="button" className="ask-ai-nav__item" onClick={openClaude}>
            <span className="ask-ai-nav__itemIcon">❋</span>
            <span>Claude</span>
            <span className="ask-ai-nav__external">↗</span>
          </button>
          <div className="ask-ai-nav__divider" />
          <button type="button" className="ask-ai-nav__item" onClick={copyMarkdown}>
            <span className="ask-ai-nav__itemIcon">📋</span>
            <span>Copy Markdown</span>
          </button>
          <button type="button" className="ask-ai-nav__item" onClick={openReferenceHub}>
            <span className="ask-ai-nav__itemIcon">↗</span>
            <span>Open API Reference</span>
          </button>
        </div>
      )}

      {toast && <div className="ask-ai-nav__toast">{toast}</div>}
    </div>
  );
}

