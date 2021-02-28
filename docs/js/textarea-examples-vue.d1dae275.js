(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["textarea-examples-vue"],{"1b47":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("title-link",{attrs:{h2:""}},[e._v("Default")]),e._m(0),a("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v("<w-textarea>Label</w-textarea>\n")]},proxy:!0}])},[a("w-textarea",[e._v("Label")])],1),a("title-link",{attrs:{h2:""}},[e._v("Label and / or placeholder")]),a("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-textarea>Label</w-textarea>\n\n<w-textarea\n  class="mt4"\n  placeholder="Placeholder">\n</w-textarea>\n\n<w-textarea\n  class="mt4"\n  label="Label"\n  placeholder="Placeholder">\n</w-textarea>\n')]},proxy:!0}])},[a("w-textarea",[e._v("Label")]),a("w-textarea",{staticClass:"mt4",attrs:{placeholder:"Placeholder"}}),a("w-textarea",{staticClass:"mt4",attrs:{label:"Label",placeholder:"Placeholder"}})],1),a("title-link",{attrs:{h2:""}},[e._v("No autogrow & resizable")]),a("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-textarea\n  no-autogrow\n  rows="6">\n  Textarea label\n</w-textarea>\n\n<w-textarea\n  class="mt4"\n  no-autogrow\n  resizable\n  rows="6">\n  Textarea label\n</w-textarea>\n')]},proxy:!0}])},[a("w-textarea",{attrs:{"no-autogrow":"",rows:"6"}},[e._v("Textarea label")]),a("w-textarea",{staticClass:"mt4",attrs:{"no-autogrow":"",resizable:"",rows:"6"}},[e._v("Textarea label")])],1),a("title-link",{attrs:{h2:""}},[e._v("Outline")]),a("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v("<w-textarea outline>Textarea label</w-textarea>\n")]},proxy:!0}])},[a("w-textarea",{attrs:{outline:""}},[e._v("Textarea label")])],1),a("title-link",{attrs:{h2:""}},[e._v("Shadow")]),a("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-textarea shadow>\n  Textarea label\n</w-textarea>\n\n<w-textarea class="mt4" outline shadow>\n  Textarea label\n</w-textarea>\n')]},proxy:!0}])},[a("w-textarea",{attrs:{shadow:""}},[e._v("Textarea label")]),a("w-textarea",{staticClass:"mt4",attrs:{outline:"",shadow:""}},[e._v("Textarea label")])],1),a("title-link",{attrs:{h2:""}},[e._v("Tile")]),a("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-textarea tile>\n  Textarea label\n</w-textarea>\n\n<w-textarea class="mt4" outline tile>\n  Textarea label\n</w-textarea>\n')]},proxy:!0}])},[a("w-textarea",{attrs:{tile:""}},[e._v("Textarea label")]),a("w-textarea",{staticClass:"mt4",attrs:{outline:"",tile:""}},[e._v("Textarea label")])],1),a("title-link",{attrs:{h2:""}},[e._v("Colors")]),e._m(1),a("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-textarea color="blue">\n  Textarea label\n</w-textarea>\n\n<w-textarea class="mt4" outline color="blue">\n  Textarea label\n</w-textarea>\n\n<w-textarea\n  class="mt4"\n  bg-color="blue-light5"\n  color="blue-dark3">\n  Textarea label\n</w-textarea>\n\n<w-textarea\n  class="mt4"\n  outline\n  bg-color="blue-light5"\n  color="blue-dark3">\n  Textarea label\n</w-textarea>\n')]},proxy:!0}])},[a("w-textarea",{attrs:{color:"blue"}},[e._v("Textarea label")]),a("w-textarea",{staticClass:"mt4",attrs:{outline:"",color:"blue"}},[e._v("Textarea label")]),a("w-textarea",{staticClass:"mt4",attrs:{"bg-color":"blue-light5",color:"blue-dark3"}},[e._v("Textarea label")]),a("w-textarea",{staticClass:"mt4",attrs:{outline:"","bg-color":"blue-light5",color:"blue-dark3"}},[e._v("Textarea label")])],1),a("title-link",{attrs:{h2:""}},[e._v("Label position")]),a("p",[e._v("By default the label is positioned inside, you can also place it on the left or right outside of\nthe textarea.")]),a("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-textarea outline>Label inside</w-textarea>\n\n<w-textarea\n  class="mt4"\n  outline\n  label-position="left">\n  Label left\n</w-textarea>\n\n<w-textarea\n  class="mt4"\n  outline\n  label-position="right">\n  Label right\n</w-textarea>\n')]},proxy:!0}])},[a("w-textarea",{attrs:{outline:""}},[e._v("Label inside")]),a("w-textarea",{staticClass:"mt4",attrs:{outline:"","label-position":"left"}},[e._v("Label left")]),a("w-textarea",{staticClass:"mt4",attrs:{outline:"","label-position":"right"}},[e._v("Label right")])],1),a("title-link",{attrs:{h2:""}},[e._v("Custom label via default slot")]),e._m(2),a("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-textarea label-position="inside" outline>\n  <w-icon class="orange">mdi mdi-arrow-right</w-icon>\n  <span class="purple mx1">Inside</span>\n  <w-icon class="orange">mdi mdi-arrow-left</w-icon>\n</w-textarea>\n\n<w-textarea class="mt4" label-position="left" outline>\n  <span class="green mr1">Left</span>\n  <w-icon class="orange">mdi mdi-arrow-right</w-icon>\n</w-textarea>\n\n<w-textarea class="mt4" label-position="right" outline>\n  <w-icon class="orange">mdi mdi-arrow-left</w-icon>\n  <span class="red ml1">Right</span>\n</w-textarea>\n')]},proxy:!0}])},[a("w-textarea",{attrs:{"label-position":"inside",outline:""}},[a("w-icon",{staticClass:"orange"},[e._v("mdi mdi-arrow-right")]),a("span",{staticClass:"purple mx1"},[e._v("Inside")]),a("w-icon",{staticClass:"orange"},[e._v("mdi mdi-arrow-left")])],1),a("w-textarea",{staticClass:"mt4",attrs:{"label-position":"left",outline:""}},[a("span",{staticClass:"green mr1"},[e._v("Left")]),a("w-icon",{staticClass:"orange"},[e._v("mdi mdi-arrow-right")])],1),a("w-textarea",{staticClass:"mt4",attrs:{"label-position":"right",outline:""}},[a("w-icon",{staticClass:"orange"},[e._v("mdi mdi-arrow-left")]),a("span",{staticClass:"red ml1"},[e._v("Right")])],1)],1),a("title-link",{attrs:{h2:""}},[e._v("Inner icons")]),a("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<div class="title4 mb2">Label outside</div>\n<w-textarea\n  label="Left"\n  label-position="left"\n  outline\n  inner-icon-left="mdi mdi-email">\n</w-textarea>\n<w-textarea\n  class="mt4"\n  label="Right"\n  label-position="right"\n  outline\n  inner-icon-right="mdi mdi-email">\n</w-textarea>\n\n<div class="title4 mt6 mb2">Label inside</div>\n<w-textarea\n  label="Message"\n  label-position="inside"\n  outline\n  inner-icon-left="mdi mdi-email">\n</w-textarea>\n<w-textarea\n  class="mt4"\n  label="Message"\n  label-position="inside"\n  outline\n  inner-icon-right="mdi mdi-email">\n</w-textarea>\n')]},proxy:!0}])},[a("div",{staticClass:"title4 mb2"},[e._v("Label outside")]),a("w-textarea",{attrs:{label:"Message","label-position":"left",outline:"","inner-icon-left":"mdi mdi-email"}}),a("w-textarea",{staticClass:"mt4",attrs:{label:"Message","label-position":"right",outline:"","inner-icon-right":"mdi mdi-email"}}),a("div",{staticClass:"title4 mt6 mb2"},[e._v("Label inside")]),a("w-textarea",{attrs:{label:"Message","label-position":"inside",outline:"","inner-icon-left":"mdi mdi-email"}}),a("w-textarea",{staticClass:"mt4",attrs:{label:"Message","label-position":"inside",outline:"","inner-icon-right":"mdi mdi-email"}})],1),a("title-link",{attrs:{h2:""}},[e._v("Disabled & readonly")]),a("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-textarea\n  class="mb4"\n  label="Disabled & empty"\n  outline\n  disabled>\n</w-textarea>\n\n<w-textarea\n  class="mb4"\n  value="Some content"\n  label="Disabled & filled"\n  outline\n  disabled>\n</w-textarea>\n\n<w-textarea\n  class="mb4"\n  label="Readonly & empty"\n  outline\n  readonly>\n</w-textarea>\n\n<w-textarea\n  value="Some content"\n  label="Readonly & filled"\n  outline\n  readonly>\n</w-textarea>')]},proxy:!0}])},[a("w-textarea",{staticClass:"mb4",attrs:{label:"Disabled & empty",outline:"",disabled:""}}),a("w-textarea",{staticClass:"mb4",attrs:{value:"Some content",label:"Disabled & filled",outline:"",disabled:""}}),a("w-textarea",{staticClass:"mb4",attrs:{label:"Readonly & empty",outline:"",readonly:""}}),a("w-textarea",{attrs:{value:"Some content",label:"Readonly & filled",outline:"",readonly:""}})],1)],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("By default the "),a("span",{staticClass:"code"},[e._v("w-textarea")]),e._v(" component has a label inside the textarea that moves up above\nthe textarea on focus or when the textarea is filled by some content or a placeholder."),a("br"),e._v("\nThe default number of rows is 3, and when adding lines the textarea will adjust its size.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"mb4"},[e._v("Like in most components, you can set a "),a("code",[e._v("color")]),e._v(" for the text and a "),a("code",[e._v("bg-color")]),e._v(" for the\nbackground."),a("br"),e._v('\nBy default, the text has the "'),a("span",{staticClass:"code"},[e._v("primary")]),e._v('" color.')])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("It is convenient to have the label inside the "),a("span",{staticClass:"code"},[e._v("w-textarea")]),e._v(" component to let it handle\nthe field focus event on label click."),a("br"),e._v("\nThe "),a("span",{staticClass:"code"},[e._v("label")]),e._v(" prop accepts any HTML, but because passing complex html via a prop is not fun,\nthere is also a prop for setting the label wish will grant more freedom.\n")])}],i=a("2877"),r={},s=Object(i["a"])(r,l,n,!1,null,null,null);t["default"]=s.exports}}]);
//# sourceMappingURL=textarea-examples-vue.d1dae275.js.map