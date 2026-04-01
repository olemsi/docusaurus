import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Setting up","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-receipts-setting-up.md","filePath":"gate/gate-receipts-setting-up.md"}');
const _sfc_main = { name: "gate/gate-receipts-setting-up.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="setting-up" tabindex="-1">Setting up <a class="header-anchor" href="#setting-up" aria-label="Permalink to &quot;Setting up&quot;">​</a></h1><p>Platform technical support specialists enable and set up the capability of sending notifications to customers. The following settings are configured upon agreement with the merchant:</p><ul><li>List of operations and other events to generate notifications.</li><li><code>successdecline</code>Operations statuses that generate notifications (can be enabled both for the final statusand for the final status).</li><li>Subject line of the email with the notification (for instance, Receipt or Notification about completed purchase).</li><li>Sender&#39;s email address (can be Platform domain or custom domain)</li><li>Option to send blind carbon copy (bcc) of the notification to the address provided by the merchant.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-receipts-setting-up.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateReceiptsSettingUp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateReceiptsSettingUp as default
};
