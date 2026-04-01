import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Receiving automated emails","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-fraud-operations-control-mail.md","filePath":"dashboard/dbl-fraud-operations-control-mail.md"}');
const _sfc_main = { name: "dashboard/dbl-fraud-operations-control-mail.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="receiving-automated-emails" tabindex="-1">Receiving automated emails <a class="header-anchor" href="#receiving-automated-emails" aria-label="Permalink to &quot;Receiving automated emails&quot;">​</a></h1><p>and 17:00<code>Merchant admin</code>You can monitor information about operations flagged as fraudulent by payment systems not only with the use of different Dashboard tools but also by receiving automated emails sent to the email address associated with the Dashboard user account. Emails with notifications are sent out at 14:00UTC+0 if the platform receives any new information about detected fraud. By default, the option to receive these emails is enabled for all user accounts. You can disable this option on your own, or an employee with therole can do it for you.</p><p>To disable the option to receive automated emails on your own:</p><ol><li><strong>My profile</strong>Click the user name or the user account icon in the top right corner and selectin the dropdown menu.Open the user profile.</li><li><strong>Receive emails about fraudulent transactions****User ProfileSaveUser Profile</strong>Switch to the editing mode by clickingon thepanel, turn off the toggle switch and save changes by clickingon the upper-right side of thepanel.Disable theoption.</li><li>The option should be disabled.Make sure all changes have been saved.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-fraud-operations-control-mail.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblFraudOperationsControlMail = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblFraudOperationsControlMail as default
};
