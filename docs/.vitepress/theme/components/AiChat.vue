<script setup lang="ts">
import { ref, computed } from 'vue'
import { useData, useRoute } from 'vitepress'

const isOpen = ref(false)
const copied = ref(false)
const route = useRoute()
const { page, frontmatter } = useData()

function getPageContent(): string {
  const main = document.querySelector('.vp-doc') || document.querySelector('main')
  if (!main) return document.title
  return main.innerText.slice(0, 4000)
}

function getPageTitle(): string {
  return document.title || 'Documentation page'
}

const toast = ref('')

function showToast(msg: string) {
  toast.value = msg
  setTimeout(() => { toast.value = '' }, 3000)
}

function copyContext() {
  const prompt = `Help me understand this payment API documentation:\n\n# ${getPageTitle()}\n\n${getPageContent()}`
  navigator.clipboard.writeText(prompt)
}

function copyMarkdown() {
  const content = getPageContent()
  navigator.clipboard.writeText(`# ${getPageTitle()}\n\n${content}`)
  copied.value = true
  showToast('Copied to clipboard')
  setTimeout(() => { copied.value = false }, 2000)
  isOpen.value = false
}

function viewMarkdown() {
  const content = getPageContent()
  const blob = new Blob([`# ${getPageTitle()}\n\n${content}`], { type: 'text/markdown' })
  const url = URL.createObjectURL(blob)
  window.open(url, '_blank')
  isOpen.value = false
}

function getMdUrl(): string {
  let p = route.path
  // strip .html suffix: /payment-methods/pix.html → /payment-methods/pix
  if (p.endsWith('.html')) p = p.slice(0, -5)
  // /gate/ → /gate/index.md, /gate/integration → /gate/integration.md
  const mdPath = p.endsWith('/') ? p + 'index.md' : p + '.md'
  return window.location.origin + mdPath
}

function openClaude() {
  const mdUrl = getMdUrl()
  const prompt = encodeURIComponent(`Hi Claude! Can you please read [this page](${mdUrl}) and prepare to answer questions about it?`)
  window.open(`https://claude.ai/new?q=${prompt}`, '_blank')
  isOpen.value = false
}

function openChatGPT() {
  const mdUrl = getMdUrl()
  const prompt = encodeURIComponent(`Hi! Can you please read [this page](${mdUrl}) and prepare to answer questions about it?`)
  window.open(`https://chat.openai.com/?q=${prompt}`, '_blank')
  isOpen.value = false
}

function toggle() {
  isOpen.value = !isOpen.value
}

// Close on click outside
function onClickOutside(e: Event) {
  const target = e.target as HTMLElement
  if (!target.closest('.ask-ai')) {
    isOpen.value = false
  }
}
</script>

<template>
  <div class="ask-ai" v-on="{ click: onClickOutside }" @click.stop>
    <button class="ask-ai-btn" @click="toggle">
      ✨ Ask AI
      <span class="ask-ai-caret" :class="{ open: isOpen }">&#9662;</span>
    </button>

    <Transition name="dropdown">
      <div v-if="isOpen" class="ask-ai-menu">
        <div class="ask-ai-section">Last Used</div>
        <button class="ask-ai-item" @click="openClaude">
          <span class="ask-ai-item-icon">❋</span>
          Claude
          <span class="ask-ai-external">↗</span>
        </button>
        <button class="ask-ai-item" @click="openChatGPT">
          <span class="ask-ai-item-icon">◎</span>
          ChatGPT
          <span class="ask-ai-external">↗</span>
        </button>
        <div class="ask-ai-divider" />
        <button class="ask-ai-item" @click="copyMarkdown">
          <span class="ask-ai-item-icon">📋</span>
          {{ copied ? 'Copied!' : 'Copy Markdown' }}
        </button>
        <button class="ask-ai-item" @click="viewMarkdown">
          <span class="ask-ai-item-icon">📄</span>
          View as Markdown
        </button>
      </div>
    </Transition>

    <!-- Toast -->
    <Transition name="toast">
      <div v-if="toast" class="ask-ai-toast">{{ toast }}</div>
    </Transition>
  </div>
</template>

<style scoped>
.ask-ai {
  position: relative;
  z-index: 100;
}

.ask-ai-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 12px;
  background: linear-gradient(135deg, #efe9ff 0%, #b8a8ff 55%, #9dc3ff 100%);
  color: #05111f;
  border: none;
  border-radius: 7px;
  font-size: 12px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.25);
}

.ask-ai-btn:hover {
  filter: brightness(0.97);
}

.ask-ai-icon {
  font-size: 12px;
}

.ask-ai-caret {
  font-size: 8px;
  transition: transform 0.2s;
  margin-left: 0;
  line-height: 1;
}
.ask-ai-caret.open {
  transform: rotate(180deg);
}

.ask-ai-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 240px;
  background: #0a0a0a;
  border: 1px solid rgba(143, 124, 255, 0.16);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45);
  overflow: hidden;
  padding: 6px;
}

.ask-ai-section {
  padding: 8px 12px 4px;
  font-size: 10px;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.ask-ai-item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 12px;
  background: none;
  border: none;
  border-radius: 8px;
  color: #e0e0e0;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  text-align: left;
  transition: background 0.1s;
}

.ask-ai-item:hover {
  background: rgba(143, 124, 255, 0.1);
  color: #fff;
}

.ask-ai-item-icon {
  font-size: 18px;
  width: 24px;
  text-align: center;
}

.ask-ai-external {
  margin-left: auto;
  font-size: 12px;
  color: #666;
}

.ask-ai-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 4px 8px;
}

/* Transitions */
.dropdown-enter-active { transition: all 0.2s ease-out; }
.dropdown-leave-active { transition: all 0.15s ease-in; }
.dropdown-enter-from { opacity: 0; transform: translateY(8px) scale(0.95); }
.dropdown-leave-to { opacity: 0; transform: translateY(4px) scale(0.98); }

.ask-ai-toast {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  white-space: nowrap;
  padding: 8px 14px;
  background: #0a0a0a;
  color: #ededed;
  font-size: 13px;
  font-weight: 500;
  border-radius: 8px;
  border: 1px solid rgba(143, 124, 255, 0.16);
  box-shadow: 0 4px 12px rgba(0,0,0,0.35);
  pointer-events: none;
}
.toast-enter-active { transition: all 0.2s ease-out; }
.toast-leave-active { transition: all 0.3s ease-in; }
.toast-enter-from { opacity: 0; transform: translateY(4px); }
.toast-leave-to { opacity: 0; }
</style>
