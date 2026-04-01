import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Available workflows","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-money-transfer.md","filePath":"gate/gate-money-transfer.md"}');
const _sfc_main = { name: "gate/gate-money-transfer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="available-workflows" tabindex="-1">Available workflows <a class="header-anchor" href="#available-workflows" aria-label="Permalink to &quot;Available workflows&quot;">​</a></h1><p>To initiate money transfer processing through Gate, the web service is required to do the following:</p><p>The following diagram illustrates the money transfer processing workflow (without completion of additional procedures).</p><ol><li>Send a request to theendpoint.</li><li>If necessary, complete an additional procedure (for example, the ).</li><li>Receive a callback with the money transfer result from the payment platform.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-money-transfer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateMoneyTransfer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateMoneyTransfer as default
};
