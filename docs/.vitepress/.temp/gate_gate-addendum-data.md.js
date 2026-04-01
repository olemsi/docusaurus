import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Using addendum with itinerary data","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-addendum-data.md","filePath":"gate/gate-addendum-data.md"}');
const _sfc_main = { name: "gate/gate-addendum-data.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="using-addendum-with-itinerary-data" tabindex="-1">Using addendum with itinerary data <a class="header-anchor" href="#using-addendum-with-itinerary-data" aria-label="Permalink to &quot;Using addendum with itinerary data&quot;">​</a></h1><p><code>lodging</code>For more information about theobject parameters and child objects, see and the specification of the Gate API at.</p><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>The<em>financial details addendum</em>Gate allows you to include so-calledin your payment request you submit to the payment platform. The addendum data is widely used in travel industry and contains detailed booking and itinerary information such as booking number, hotel guest name(s) and check-in and check-out dates. The addendum data are submitted into the payment platform along with the payment request details. Usage of addendum data allows payment providers to make payments more secure and offer more competitive rates to merchants.</p><p>Payments with addendum data follow the general processing routine except for some specific requirements:</p><p><strong>Not all MCCs are applicable</strong>Addendum data is used only in travel industry; that is why only merchants with the following MCC codes can initiate payments with hotel booking data: 3501–3999 and 7011.<strong>Addendum data must always be included in the initial checkout request</strong>to you payment providerAny checkout that involves transmission of addendum data must start with a request that contains addendum data. Though, you may omit addendum data in any other requests you send. If you fail to send addendum data in the initial request, and then attempt to use addendum data in any of the subsequent messages, payment platform will refuse to process your request and will return an error message.</p><p>Addendum data may be used only in operations that use Visa and Mastercard cards.</p><p><code>lodginglodgingroomcharges</code>All the booking itinerary information is included in aobject. Theobject contains the general booking information while the information about hotel room and charges are included in its child objectsandobject respectively.</p><h2 id="related-links" tabindex="-1">Related links <a class="header-anchor" href="#related-links" aria-label="Permalink to &quot;Related links&quot;">​</a></h2><p>Specification of the Gate API</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-addendum-data.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateAddendumData = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateAddendumData as default
};
