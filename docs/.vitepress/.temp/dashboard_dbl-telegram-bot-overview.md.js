import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Telegram bot","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-telegram-bot-overview.md","filePath":"dashboard/dbl-telegram-bot-overview.md"}');
const _sfc_main = { name: "dashboard/dbl-telegram-bot-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="telegram-bot" tabindex="-1">Telegram bot <a class="header-anchor" href="#telegram-bot" aria-label="Permalink to &quot;Telegram bot&quot;">​</a></h1><p>To check the status of a payment or an operation, you can use a number of options which include the Telegram bot of the Platform technical support (see FAQ to find more information about other options). The bot allows you to:</p><p>However, when you work with the bot, keep in mind the following:</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-telegram-bot-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblTelegramBotOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblTelegramBotOverview as default
};
