import{d as n,j as i}from"./tax-BACo6kIE.js";import"./bootstrap-B7E2wy_a.js";import{_ as e}from"./currency-ZXKMLAC0.js";import{_ as p}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{n as a}from"./ns-prompt-popup-BbWKrSku.js";import"./index.es-BED_8l8F.js";import{o as l,c as m,b as t,t as c}from"./runtime-core.esm-bundler-DCfIpxDt.js";const u={name:"ns-pos-reset-button",mounted(){this.popupCloser()},methods:{__:e,popupCloser:n,reset(){i.show(a,{title:e("Confirm Your Action"),message:e("The current order will be cleared. But not deleted if it's persistent. Would you like to proceed ?"),onAction:o=>{o&&POS.reset()}})}}},d={class:"ns-button error"},f=t("i",{class:"mr-1 text-xl las la-eraser"},null,-1);function _(o,s,x,h,b,r){return l(),m("div",d,[t("button",{onClick:s[0]||(s[0]=k=>r.reset()),class:"rounded shadow flex-shrink-0 h-12 flex items-center px-2 py-1 text-sm"},[f,t("span",null,c(r.__("Reset")),1)])])}const v=p(u,[["render",_]]);export{v as default};