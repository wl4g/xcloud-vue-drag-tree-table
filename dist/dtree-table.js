!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("dtree-table",[],t):"object"==typeof exports?exports["dtree-table"]=t():e["dtree-table"]=t()}(window,(function(){return function(e){var t={};function i(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist/",i(i.s=15)}([function(e,t,i){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=function(e,t){var i=e[1]||"",o=e[3];if(!o)return i;if(t&&"function"==typeof btoa){var n=(s=o,l=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(a," */")),r=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")}));return[i].concat(r).concat([n]).join("\n")}var s,l,a;return[i].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(i,"}"):i})).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},n=0;n<this.length;n++){var r=this[n][0];null!=r&&(o[r]=!0)}for(var s=0;s<e.length;s++){var l=e[s];null!=l[0]&&o[l[0]]||(i&&!l[2]?l[2]=i:i&&(l[2]="(".concat(l[2],") and (").concat(i,")")),t.push(l))}},t}},function(e,t,i){"use strict";function o(e,t){for(var i=[],o={},n=0;n<t.length;n++){var r=t[n],s=r[0],l={id:e+":"+n,css:r[1],media:r[2],sourceMap:r[3]};o[s]?o[s].parts.push(l):i.push(o[s]={id:s,parts:[l]})}return i}i.r(t),i.d(t,"default",(function(){return p}));var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},s=n&&(document.head||document.getElementsByTagName("head")[0]),l=null,a=0,d=!1,c=function(){},u=null,f="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,i,n){d=i,u=n||{};var s=o(e,t);return g(s),function(t){for(var i=[],n=0;n<s.length;n++){var l=s[n];(a=r[l.id]).refs--,i.push(a)}t?g(s=o(e,t)):s=[];for(n=0;n<i.length;n++){var a;if(0===(a=i[n]).refs){for(var d=0;d<a.parts.length;d++)a.parts[d]();delete r[a.id]}}}}function g(e){for(var t=0;t<e.length;t++){var i=e[t],o=r[i.id];if(o){o.refs++;for(var n=0;n<o.parts.length;n++)o.parts[n](i.parts[n]);for(;n<i.parts.length;n++)o.parts.push(v(i.parts[n]));o.parts.length>i.parts.length&&(o.parts.length=i.parts.length)}else{var s=[];for(n=0;n<i.parts.length;n++)s.push(v(i.parts[n]));r[i.id]={id:i.id,refs:1,parts:s}}}}function m(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function v(e){var t,i,o=document.querySelector("style["+f+'~="'+e.id+'"]');if(o){if(d)return c;o.parentNode.removeChild(o)}if(h){var n=a++;o=l||(l=m()),t=_.bind(null,o,n,!1),i=_.bind(null,o,n,!0)}else o=m(),t=C.bind(null,o),i=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else i()}}var b,y=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function _(e,t,i,o){var n=i?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(t,n);else{var r=document.createTextNode(n),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function C(e,t){var i=t.css,o=t.media,n=t.sourceMap;if(o&&e.setAttribute("media",o),u.ssrId&&e.setAttribute(f,t.id),n&&(i+="\n/*# sourceURL="+n.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}},function(e,t,i){var o=i(8);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,i(1).default)("5d89b4ee",o,!1,{})},function(e,t,i){var o=i(10);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,i(1).default)("962a344c",o,!1,{})},function(e,t,i){var o=i(12);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,i(1).default)("5583fe66",o,!1,{})},function(e,t,i){var o=i(14);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,i(1).default)("16937dac",o,!1,{})},function(e,t){function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(t){return"function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?e.exports=o=function(e){return i(e)}:e.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":i(e)},o(t)}e.exports=o},function(e,t,i){"use strict";var o=i(2);i.n(o).a},function(e,t,i){(e.exports=i(0)(!1)).push([e.i,".tree-column{position:relative;min-width:60px;text-align:center;overflow:hidden}.tree-column.border{border-right:1px solid #eee}.resize-line{position:absolute;top:0;right:-3px;width:6px;height:100%;cursor:col-resize}\n",""])},function(e,t,i){"use strict";var o=i(3);i.n(o).a},function(e,t,i){(e.exports=i(0)(!1)).push([e.i,"\n.space{\n  display: inline-block;\n  width: 15px;\n}\n",""])},function(e,t,i){"use strict";var o=i(4);i.n(o).a},function(e,t,i){(e.exports=i(0)(!1)).push([e.i,'.tree-block{width:100%;background:rgba(255,255,255,0.8)}.tree-row{position:relative;display:flex;border-bottom:1px solid #eee;line-height:32px}.tree-row:hover{background:#ecf5ff}.tree-row.highlight-row{background:#ffe88c}.tree-row .align-left{text-align:left}.tree-row .align-right{text-align:right}.tree-row .align-center{text-align:center}.hover-model{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(255,255,255,0.6)}.hover-block{display:flex;opacity:0.1;transition:opacity 0.5s;justify-content:center;align-items:center}.hover-block i{color:#FFF}.prev-block{height:25%;background:#a0c8f7}.center-block{height:50%;background:#a0c8f7}.next-block{height:25%;background:#a0c8f7}.action-item{color:#409eff;cursor:pointer}.action-item i{font-style:normal}.zip-icon{display:inline-block;width:8px;height:8px;vertical-align:middle;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAf0lEQVQ4T7XT0Q2AMAhF0dvNdALdSEdzBB3BDXQD85LGRNMCauS7nAKBxMdIhfwemIAtYpeAEeiANoLUgAGYI4gFqAMX8QAXiQBCNFDNRBVdIgpUkSfADjT3KqLACmg/XrWw5J+Li+VVYCZrMBbgJluA+tXA3Hv45ZgiR3i+OQBeSyYRPEyeUAAAAABJRU5ErkJggg==") no-repeat center;background-size:cover}.arrow-transparent{visibility:hidden}.arrow-bottom{transform:rotate(90deg)}[draggable=true]{-khtml-user-drag:element}\n',""])},function(e,t,i){"use strict";var o=i(5);i.n(o).a},function(e,t,i){(e.exports=i(0)(!1)).push([e.i,".drag-tree-table{position:relative;margin:20px 0;color:#606266;font-size:12px}.drag-tree-table.border{border:1px solid #eee;border-right:none}.drag-line{position:absolute;top:0;left:-1000px;height:100%;width:1px;background:#ccc}.drag-tree-table-header{display:flex;background:#f5f7fa;height:66px;line-height:36px;box-sizing:border-box;font-weight:600}.drag-tree-table-header .align-left{text-align:left}.drag-tree-table-header .align-right{text-align:right}.drag-tree-table-header .align-center{text-align:center}.drag-tree-table-header .tree-column{user-select:none}.tree-icon-hidden{visibility:hidden}.is-draging .tree-row:hover{background:transparent !important}.tree-row{background-color:rgba(64,158,255,0);transition:background-color 0.5s linear}\n",""])},function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"table",staticClass:"drag-tree-table",class:{border:void 0!==e.border}},[i("div",{staticClass:"drag-tree-table-header"},e._l(e.data.columns,(function(t,o){return i("column",{key:o,class:["align-"+t.titleAlign,"colIndex"+o],attrs:{width:t.width,flex:t.flex,border:void 0===e.border?e.resize:e.border}},["checkbox"==t.type?i("input",{staticClass:"checkbox",attrs:{type:"checkbox"},on:{click:function(i){return e.onCheckAll(i,t.onChange)}}}):i("span",{domProps:{innerHTML:e._s(t.title)}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.resize,expression:"resize!== undefined"}],staticClass:"resize-line",on:{mousedown:function(t){return e.mousedown(o,t)}}})])})),1),e._v(" "),i("div",{staticClass:"drag-tree-table-body",class:e.isDraing?"is-draging":"",style:e.bodyStyle,on:{dragover:e.draging,dragend:e.drop}},e._l(e.data.lists,(function(t,o){return i("row",{key:o,attrs:{depth:"0",columns:e.data.columns,isdraggable:e.isdraggable,model:t,custom_field:e.custom_field,onCheck:e.onSingleCheckChange,border:void 0===e.border?e.resize:e.border,isContainChildren:e.isContainChildren}})})),1),e._v(" "),i("div",{staticClass:"drag-line"})])};o._withStripped=!0;var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"tree-block",attrs:{draggable:e.isDraggableCol},on:{dragstart:function(t){return e.dragstart(t)},dragend:function(t){return e.dragend(t)}}},[i("div",{staticClass:"tree-row",class:{"highlight-row":1==e.model.highlight},style:{backgroundColor:e.model.backgroundColor},attrs:{"data-level":e.depth,"tree-id":e.model[e.custom_field.id],"tree-p-id":e.model[e.custom_field.parent_id]},on:{click:e.toggle}},[e._l(e.columns,(function(t,o){return i("column",{key:o,class:["align-"+t.align,"colIndex"+o],attrs:{field:t.field,width:t.width,flex:t.flex,border:e.border},on:{mouseover:function(i){t.isdraggable?e.setColDraggable(t.isdraggable):e.setColDraggable(!1)},mouseout:function(t){return e.setColDraggable(!1)}}},["selection"===t.type?i("div",{staticStyle:{width:"100%",height:"100%"}},[i("div",{style:"box-sizing:border-box;height: 100%;width: 100%;padding-left: "+10*e.depth+"px"},[e.model[e.custom_field.lists]&&e.model[e.custom_field.lists].length?i("span",{staticClass:"zip-icon",class:[e.model[e.custom_field.open]?"arrow-bottom":"arrow-right"]}):i("span",{staticClass:"zip-icon arrow-transparent"}),e._v(" "),t.formatter?i("span",{domProps:{innerHTML:e._s(t.formatter(e.model))}}):t.editable?[t.input&&"select"===t.input.type?i("el-select",{staticStyle:{width:"100%"},attrs:{filterable:!0},model:{value:e.model[t.field],callback:function(i){e.$set(e.model,t.field,i)},expression:"model[subItem.field]"}},e._l(t.input.selectData.list,(function(e){return i("el-option",{key:e[t.input.selectData.value?t.input.selectData.value:"value"],attrs:{label:e[t.input.selectData.label?t.input.selectData.label:"label"],value:e[t.input.selectData.value?t.input.selectData.value:"value"]}})})),1):t.input&&"checkbox"===t.input.type?i("el-checkbox",{attrs:{"false-label":"0","true-label":"1"},model:{value:e.model[t.field],callback:function(i){e.$set(e.model,t.field,i)},expression:"model[subItem.field]"}}):i("el-input",{staticStyle:{width:"calc(100% - 12px)"},model:{value:e.model[t.field],callback:function(i){e.$set(e.model,t.field,i)},expression:"model[subItem.field]"}})]:i("span",[e._v(e._s(e.model[t.field]))])],2)]):"action"===t.type?i("span",e._l(t.actions,(function(t,o){return i("a",{key:o,staticClass:"action-item",attrs:{type:"text",size:"small"},on:{click:function(i){return i.stopPropagation(),i.preventDefault(),t.onclick(e.model)}}},[i("i",{class:t.icon,domProps:{innerHTML:e._s(t.formatter(e.model))}})])})),0):"checkbox"===t.type?i("span",[!1!==e.model.isShowCheckbox?i("input",{directives:[{name:"model",rawName:"v-model",value:e.model[e.custom_field.checked],expression:"model[custom_field.checked]"}],staticClass:"checkbox action-item",attrs:{type:"checkbox",name:e.model[e.custom_field.id]},domProps:{checked:Array.isArray(e.model[e.custom_field.checked])?e._i(e.model[e.custom_field.checked],null)>-1:e.model[e.custom_field.checked]},on:{click:function(t){return t.stopPropagation(),e.onCheckboxClick(t,e.model)},change:function(t){var i=e.model[e.custom_field.checked],o=t.target,n=!!o.checked;if(Array.isArray(i)){var r=e._i(i,null);o.checked?r<0&&e.$set(e.model,e.custom_field.checked,i.concat([null])):r>-1&&e.$set(e.model,e.custom_field.checked,i.slice(0,r).concat(i.slice(r+1)))}else e.$set(e.model,e.custom_field.checked,n)}}}):e._e()]):i("span",[t.formatter?i("span",{domProps:{innerHTML:e._s(t.formatter(e.model))}}):t.editable?[t.input&&"select"===t.input.type?i("el-select",{staticStyle:{width:"100%"},attrs:{filterable:!0},model:{value:e.model[t.field],callback:function(i){e.$set(e.model,t.field,i)},expression:"model[subItem.field]"}},e._l(t.input.selectData.list,(function(e){return i("el-option",{key:e[t.input.selectData.value?t.input.selectData.value:"value"],attrs:{label:e[t.input.selectData.label?t.input.selectData.label:"label"],value:e[t.input.selectData.value?t.input.selectData.value:"value"]}})})),1):t.input&&"checkbox"===t.input.type?i("el-checkbox",{attrs:{"false-label":0,"true-label":1},model:{value:e.model[t.field],callback:function(i){e.$set(e.model,t.field,i)},expression:"model[subItem.field]"}}):i("el-input",{staticStyle:{width:"calc(100% - 12px)"},model:{value:e.model[t.field],callback:function(i){e.$set(e.model,t.field,i)},expression:"model[subItem.field]"}})]:i("span",[e._v(e._s(e.model[t.field]))])],2)])})),e._v(" "),e._m(0)],2),e._v(" "),e._l(e.model[e.custom_field.lists],(function(t,o){return e.isFolder?i("row",{directives:[{name:"show",rawName:"v-show",value:e.model[e.custom_field.open],expression:"model[custom_field.open]"}],key:o,attrs:{model:t,columns:e.columns,isdraggable:e.isdraggable,border:e.border,depth:1*e.depth+1,custom_field:e.custom_field,onCheck:e.onCheck,isContainChildren:e.isContainChildren}}):e._e()}))],2)};n._withStripped=!0;var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.flex?i("div",{staticClass:"tree-column",class:{border:void 0!==e.border},style:{width:e.width+"px",flex:e.flex},on:{mouseover:e.mouseover,mouseleave:e.mouseout}},[e._t("default")],2):i("div",{staticClass:"tree-column",class:{border:void 0!==e.border},style:{width:e.width+"px"},on:{mouseover:e.mouseover,mouseleave:e.mouseout}},[e._t("default")],2)};r._withStripped=!0;var s={name:"column",props:{width:Number,field:String,label:String,flex:Number,border:String},data:function(){return{open:!1}},mounted:function(){},methods:{mouseover:function(e){this.$emit("mouseover")},mouseout:function(e){this.$emit("mouseout")}}};i(7);function l(e,t,i,o,n,r,s,l){var a,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=i,d._compiled=!0),o&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),s?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},d._ssrRegister=a):n&&(a=l?function(){n.call(this,this.$root.$options.shadowRoot)}:n),a)if(d.functional){d._injectStyles=a;var c=d.render;d.render=function(e,t){return a.call(t),c(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,a):[a]}return{exports:e,options:d}}var a=l(s,r,[],!1,null,null,null);a.options.__file="src/lib/column.vue";var d=a.exports,c=function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"space-container"},this._l(this.spaces,(function(e,i){return t("span",{key:i,staticClass:"space"})})),0)};c._withStripped=!0;var u={name:"space",props:["depth"],computed:{spaces:function(){for(var e=[],t=0;t<this.depth;t++)e.push("");return e}}},f=(i(9),l(u,c,[],!1,null,null,null));f.options.__file="src/lib/space.vue";var h=f.exports,p={name:"row",props:["model","depth","columns","isdraggable","border","custom_field","onCheck","isContainChildren"],data:function(){return{open:!1,visibility:"visible",isDraggableCol:!1}},components:{column:d,space:h},computed:{isFolder:function(){return this.model[this.custom_field.lists]&&this.model[this.custom_field.lists].length}},methods:{toggle:function(){this.isFolder&&(this.model[this.custom_field.open]=!this.model[this.custom_field.open],this.$forceUpdate())},dragstart:function(e){navigator.userAgent.indexOf("Firefox")>=0&&e.dataTransfer.setData("Text",this.id),window.dragId=e.target.children[0].getAttribute("tree-id"),window.dragPId=e.target.children[0].getAttribute("tree-p-id"),window.dragParentNode=e.target,e.target.style.opacity=.2},dragend:function(e){e.target.style.opacity=1},setAllCheckData:function(e,t){for(var i=this.custom_field.lists,o=0;o<e.length;o++){var n=e[o];this.$set(n,"checked",t),n[i]&&n[i].length&&this.setAllCheckData(n[i],t)}},onCheckboxClick:function(e,t){t[this.custom_field.lists]&&this.isContainChildren?this.setAllCheckData([t]||!1,!!e.target.checked):this.$set(t,"checked",!!e.target.checked),this.onCheck&&this.onCheck()},setColDraggable:function(e){this.isDraggableCol=e}}},g=(i(11),l(p,n,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hover-model",staticStyle:{display:"none"}},[t("div",{staticClass:"hover-block prev-block"},[t("i",{staticClass:"el-icon-caret-top"})]),this._v(" "),t("div",{staticClass:"hover-block center-block"},[t("i",{staticClass:"el-icon-caret-right"})]),this._v(" "),t("div",{staticClass:"hover-block next-block"},[t("i",{staticClass:"el-icon-caret-bottom"})])])}],!1,null,null,null));g.options.__file="src/lib/row.vue";var m=g.exports,v=i(6),b=i.n(v),y={clearHoverStatus:function(){for(var e=document.querySelectorAll(".tree-row"),t=0;t<e.length;t++){var i=e[t],o=i.children[i.children.length-1];o.style.display="none",o.children[0].style.opacity=.1,o.children[1].style.opacity=.1,o.children[2].style.opacity=.1}},getElementTop:function(e,t){for(var i=t.querySelector(".drag-tree-table-body").scrollTop,o=e.offsetTop-i,n=e.offsetParent;null!==n;)o+=n.offsetTop,n=n.offsetParent;return o},getElementLeft:function(e){for(var t=e.offsetLeft,i=e.offsetParent;null!==i;)t+=i.offsetLeft,i=i.offsetParent;return t},deepClone:function(e){if(!e)return e;var t,i,o;for(o in t=Array.isArray(e)?[]:{},e)i=e[o],t[o]="object"===b()(i)?y.deepClone(i):i;return t}},_=y;document.body.ondrop=function(e){e.preventDefault(),e.stopPropagation()};var C={name:"dragTreeTable",components:{row:m,column:d,space:h},computed:{bodyStyle:function(){return{overflow:void 0!==this.fixed&&!1!==this.fixed?"auto":"hidden"}}},props:{isdraggable:{type:Boolean,default:!0},data:Object,onDrag:Function,fixed:String|Boolean,height:String|Number,border:String,onlySameLevelCanDrag:String,hightRowChange:String,resize:String,beforeDragOver:Function},data:function(){return{dragX:0,dragY:0,dragId:"",targetId:"",whereInsert:"",isDraing:!1,custom_field:{id:"id",parent_id:"parent_id",order:"order",lists:"lists",open:"open",checked:"checked",highlight:"highlight"},onCheckChange:null,isContainChildren:!1,mouse:{status:0,startX:0,curColWidth:0,curIndex:0}}},methods:{draging:function(e){this.isDraing=!0,e.pageX==this.dragX&&e.pageY==this.dragY||(this.dragX=e.pageX,this.dragY=e.clientY,this.filter(e.pageX,e.clientY),e.clientY<100?window.scrollTo(0,scrollY-6):e.clientY>document.body.clientHeight-160&&window.scrollTo(0,scrollY+6))},drop:function(e){_.clearHoverStatus(),this.resetTreeData(),this.isDraing=!1,void 0!==this.targetId&&void 0!==this.hightRowChange&&this.$nextTick((function(){var e=document.querySelector("[tree-id='"+window.dragId+"']");e.style.backgroundColor="rgba(64,158,255,0.5)",setTimeout((function(){e.style.backgroundColor="rgba(64,158,255,0)"}),2e3)}))},filter:function(e,t){var i=document.querySelectorAll(".tree-row");this.targetId=void 0;var o=window.dragParentNode.getBoundingClientRect(),n=o.left+window.dragParentNode.clientWidth,r=o.top+window.dragParentNode.clientHeight;if(!(e>=o.left&&e<=n&&t>=o.top&&t<=r)){for(var s=void 0,l=void 0,a="",d=0;d<i.length;d++){var c=i[d],u=c.getBoundingClientRect(),f=u.left,h=u.top,p=c.clientWidth,g=c.clientHeight;if(e>f&&e<f+p&&t>h&&t<h+g){var v=t-h,b=c.getAttribute("tree-p-id");if(void 0!==this.onlySameLevelCanDrag&&b!==window.dragPId)return;if(l=c.getAttribute("tree-id"),s=c.children[c.children.length-1],v/(k=c.offsetHeight)>.75)a="bottom";else if(v/k>.25){if(void 0!==this.onlySameLevelCanDrag)return;a="center"}else a="top";break}}if(void 0!==l){var y=!0;if(this.beforeDragOver){var C=this.getItemById(this.data.lists,window.dragId),x=this.getItemById(this.data.lists,l);y=this.beforeDragOver(C,x,a)}if(0!=y){s.style.display="block";var k=m.offsetHeight;"bottom"==a?"0.5"!==s.children[2].style.opacity&&(_.clearHoverStatus(),s.children[2].style.opacity=.5):"center"==a?"0.5"!==s.children[1].style.opacity&&(_.clearHoverStatus(),s.children[1].style.opacity=.5):"0.5"!==s.children[0].style.opacity&&(_.clearHoverStatus(),s.children[0].style.opacity=.5),this.targetId=l,this.whereInsert=a}}else{_.clearHoverStatus()}}},resetTreeData:function(){if(void 0!==this.targetId){var e=this.custom_field.lists,t=this.custom_field.parent_id,i=this.custom_field.id,o=[],n=this.data.lists,r=this,s=null,l=null;!function o(n,a){for(var d=0;d<n.length;d++){var c=n[d],u=_.deepClone(c);u[e]=[],r.targetId==c[i]?(s=r.getItemById(r.data.lists,window.dragId),l=r.getItemById(r.data.lists,r.targetId),"top"===r.whereInsert?(s[t]=c[t],a.push(s),a.push(u)):"center"===r.whereInsert?(s[t]=c[i],u.open=!0,u[e].push(s),a.push(u)):(s[t]=c[t],a.push(u),a.push(s))):window.dragId!=c[i]&&a.push(u),c[e]&&c[e].length&&o(c[e],u[e])}}(n,o),this.resetOrder(o),this.onDrag(o,s,l,r.whereInsert)}},resetOrder:function(e){for(var t=this.custom_field.lists,i=0;i<e.length;i++)e[i][this.custom_field.order]=i,e[i][t]&&e[i][t].length&&this.resetOrder(e[i][t])},getItemById:function(e,t){var i=null,o=this.custom_field.lists,n=this.custom_field.id;return function e(r){for(var s=0;s<r.length;s++){var l=r[s];if(l[n]==t){i=JSON.parse(JSON.stringify(l));break}l[o]&&l[o].length&&e(l[o])}}(e),i},DelById:function(e){var t=this.custom_field.lists,i=this.custom_field.order,o=this.custom_field.id,n=[];return function n(r,s){for(var l=0,a=0;a<r.length;a++){var d=r[a];if(d[o]!=e){var c=_.deepClone(d);c[i]=l,c[t]=[],s.push(c),l++,d[t]&&d[t].length&&n(d[t],c[t])}}}(this.data.lists,n),n},deepSetAttr:function(e,t,i,o){for(var n=this.custom_field.lists,r=0;r<i.length;r++)void 0!==o?o.includes(i[r][this.custom_field.id])&&(i[r][this.custom_field[e]]=t):i[r][this.custom_field[e]]=t,i[r][n]&&i[r][n].length&&this.deepSetAttr(e,t,i[r][n],o)},ZipAll:function(e){!(arguments.length>1&&void 0!==arguments[1])||arguments[1];var t=_.deepClone(this.data.lists);this.deepSetAttr("open",!1,t),this.data.lists=t},OpenAll:function(e){!(arguments.length>1&&void 0!==arguments[1])||arguments[1];var t=_.deepClone(this.data.lists);this.deepSetAttr("open",!0,t),this.data.lists=t},GetLevelById:function(e){return 1*this.$refs.table.querySelector('[tree-id="'+e+'"]').getAttribute("data-level")},HighlightRow:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=_.deepClone(this.data.lists),n=[e];1==i&&(n=n.concat(this.GetChildIds(e,!0))),this.deepSetAttr("highlight",t,o,n),this.data.lists=o},AddRow:function(e,t){var i=_.deepClone(this.data.lists),o=this;!function i(n){for(var r=o.custom_field.lists,s=0;s<n.length;s++){if(n[s][o.custom_field.id]==e){n[s][o.custom_field.open]=!0;var l=Object.assign({},t);l[o.custom_field.parent_id]=e,n[s][r]?(l[o.custom_field.order]=n[s][r].length,n[s][r].push(l)):(n[s][r]=[],l[o.custom_field.order]=0,n[s][r].push(l))}n[s][r]&&n[s][r].length&&i(n[s][r])}}(i),this.data.lists=i},EditRow:function(e,t){var i=_.deepClone(this.data.lists),o=this;!function i(n){for(var r=o.custom_field.lists,s=0;s<n.length;s++){if(n[s][o.custom_field.id]==e){var l=Object.assign({},n[s],t);console.log(2222,l),n[s]=l}n[s][r]&&n[s][r].length&&i(n[s][r])}}(i),console.log(i),this.data.lists=i},GetChildIds:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=[],o=this;function n(e,r){for(var s=o.custom_field.lists,l=0;l<e.length;l++){var a="";r==e[l][o.custom_field.parent_id]?(a=e[l][o.custom_field.id],i.push(a)):a=r,1!=t&&r!=a||e[l][s]&&e[l][s].length&&n(e[l][s],a)}}return n(this.data.lists,e),i},onCheckAll:function(e,t){this.setAllCheckData(this.data.lists,!!e.target.checked);var i=this.getCheckedList(this.data.lists);t&&t(i)},onSingleCheckChange:function(){var e=this.getCheckedList(this.data.lists);this.onCheckChange&&this.onCheckChange(e)},setAllCheckData:function(e,t){for(var i=this.custom_field.lists,o=0;o<e.length;o++){var n=e[o];this.$set(n,"checked",t),n[i]&&n[i].length&&this.setAllCheckData(n[i],t)}},getCheckedList:function(e){var t=this.custom_field.lists,i=[];return function e(o){for(var n=0;n<o.length;n++){var r=o[n];r.checked&&0!=r.isShowCheckbox&&i.push(r),r[t]&&r[t].length&&e(r[t])}}(_.deepClone(e)),i},mousedown:function(e,t){var i=t.target.getBoundingClientRect().x,o=t.target.parentElement.offsetWidth;this.mouse={status:1,startX:i,curIndex:e,curColWidth:o}}},mounted:function(){var e=this;this.data.custom_field&&(this.custom_field=Object.assign({},this.custom_field,this.data.custom_field)),setTimeout((function(){e.data.columns.map((function(t){"checkbox"==t.type&&(e.onCheckChange=t.onChange,e.isContainChildren=t.isContainChildren)}))}),100),window.addEventListener("mouseup",(function(t){if(e.mouse.status){var i=t.clientX;document.querySelector(".drag-line").style.left="-10000px",e.mouse.status=0;for(var o=e.mouse.curColWidth+(i-e.mouse.startX),n=document.querySelectorAll(".colIndex"+e.mouse.curIndex),r=0;r<n.length;r++){n[r].style.width=o+"px"}e.data.columns[e.mouse.curIndex].width=o}})),window.addEventListener("mousemove",(function(t){if(e.mouse.status){var i=t.clientX,o=document.querySelector(".drag-tree-table").getBoundingClientRect().left;document.querySelector(".drag-line").style.left=i-o+"px"}}))}},x=(i(13),l(C,o,[],!1,null,null,null));x.options.__file="src/lib/dragTreeTable.vue";var k=x.exports;k.install=function(e){return e.component(k.name,k)};t.default=k}])}));