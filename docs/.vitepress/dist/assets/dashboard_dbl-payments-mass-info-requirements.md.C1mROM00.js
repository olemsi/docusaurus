import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"File upload requirements","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-payments-mass-info-requirements.md","filePath":"dashboard/dbl-payments-mass-info-requirements.md"}');
const _sfc_main = { name: "dashboard/dbl-payments-mass-info-requirements.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "file-upload-requirements",
      tabindex: "-1"
    }, [
      createTextVNode("File upload requirements "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#file-upload-requirements",
        "aria-label": 'Permalink to "File upload requirements"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "hereTo prepare the file, you can use the template available for download on Dashboard or. Having downloaded the template, you can fill it in any CSV file editor, for example, Microsoft Excel. Each file used for adding criteria in bulk must meet the following requirements:", -1),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, "The data files must be uploaded in CSV format and the character encoding must be UTF-8 without BOM (Byte Order Mark string)."),
      createBaseVNode("li", null, "The file size cannot exceed 128 MB."),
      createBaseVNode("li", null, "The first row must contain the names of parameters. The order of parameters can be random."),
      createBaseVNode("li", null, "The subsequent rows must contain values of target parameters. Specifying values for optional parameters is recommended but not required."),
      createBaseVNode("li", null, "All parameter values in the file must meet the requirements provided in the table below."),
      createBaseVNode("li", null, 'If you use Microsoft Excel to create and prepare the file, make sure that strings do not include incorrect separators or extra characters. You should use a different editor, for example Notepad, to check if extra characters have been added.If operation parameters are specified in strings (not in table format), parameter values in each row must be separated by a semicolon (";"). In addition, the fields without values are separated by semicolons in the same way as the fields with values, and two or more ";" characters can follow one another, for example:')
    ], -1)
  ])]);
}
const dblPaymentsMassInfoRequirements = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  dblPaymentsMassInfoRequirements as default
};
