import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"File upload requirements","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-payments-mass-info-requirements.md","filePath":"dashboard/dbl-payments-mass-info-requirements.md"}');
const _sfc_main = { name: "dashboard/dbl-payments-mass-info-requirements.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="file-upload-requirements" tabindex="-1">File upload requirements <a class="header-anchor" href="#file-upload-requirements" aria-label="Permalink to &quot;File upload requirements&quot;">​</a></h1><p>hereTo prepare the file, you can use the template available for download on Dashboard or. Having downloaded the template, you can fill it in any CSV file editor, for example, Microsoft Excel. Each file used for adding criteria in bulk must meet the following requirements:</p><ul><li>The data files must be uploaded in CSV format and the character encoding must be UTF-8 without BOM (Byte Order Mark string).</li><li>The file size cannot exceed 128 MB.</li><li>The first row must contain the names of parameters. The order of parameters can be random.</li><li>The subsequent rows must contain values of target parameters. Specifying values for optional parameters is recommended but not required.</li><li>All parameter values in the file must meet the requirements provided in the table below.</li><li>If you use Microsoft Excel to create and prepare the file, make sure that strings do not include incorrect separators or extra characters. You should use a different editor, for example Notepad, to check if extra characters have been added.If operation parameters are specified in strings (not in table format), parameter values in each row must be separated by a semicolon (&quot;;&quot;). In addition, the fields without values are separated by semicolons in the same way as the fields with values, and two or more &quot;;&quot; characters can follow one another, for example:</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-payments-mass-info-requirements.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblPaymentsMassInfoRequirements = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblPaymentsMassInfoRequirements as default
};
