import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Activating and deactivating the bot","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-telegram-bot-activation.md","filePath":"dashboard/dbl-telegram-bot-activation.md"}');
const _sfc_main = { name: "dashboard/dbl-telegram-bot-activation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="activating-and-deactivating-the-bot" tabindex="-1">Activating and deactivating the bot <a class="header-anchor" href="#activating-and-deactivating-the-bot" aria-label="Permalink to &quot;Activating and deactivating the bot&quot;">​</a></h1><p>To activate the Telegram bot, you should link your Telegram account to your Dashboard account:</p><p><strong>Activate bot</strong>To deactivate the bot, turn off the toggle switch.</p><p>A deactivated Dashboard account automatically deactivates the bot for a linked Telegram account. If the bot is deactivated, when you message it, you will be asked to activate a Telegram account in Dashboard. If your employees use personal Telegram accounts to work with the bot, it is recommended to check whether their Dashboard accounts have been deactivated when they leave the company.</p><ol><li><strong>My profileTelegram BOT</strong>Go to thesection, open the link that is shown in thepanel, and connect to the chatbot.<strong>Telegram BOT</strong>If thepanel is not shown in your profile, contact the Platform technical support for assistance.Initiate a conversation with the bot and read its welcome message.</li><li>You can find it in the welcome message of the bot or in its settings.Copy your Telegram ID.</li><li><strong>My profileTelegram BOTActivate bot</strong>Go toin Dashboard, paste your Telegram ID into the corresponding field of thepanel, toggle theswitch on, and in the popup window that opens enter a confirmation code sent to you in the message from the bot.Activate the Telegram bot in Dashboard.</li><li><strong>Activate bot</strong>The toggle switchis on, and the bot has sent you the confirmation message.Make sure that the bot is activated.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-telegram-bot-activation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblTelegramBotActivation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblTelegramBotActivation as default
};
