(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{742:function(s,t,n){"use strict";n.r(t);var i={data:function(){return{num1:1,num2:1,num3:1,num4:1,num5:1,num6:0,num7:1}},methods:{changed:function(s){console.log("当绑定值变化时触发: ",s,typeof s)},plusFn:function(s){console.log("点击增加按钮时触发: ",s,typeof s)},minusFn:function(s){console.log("点击减少按钮时触发: ",s,typeof s)},blurFn:function(s){console.log("输入框失去焦点时触发: ",s,typeof s)},focusFn:function(s){console.log("输入框获得焦点时触发: ",s,typeof s)}}},l=n(0),e=Object(l.a)(i,(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",[n("div",{staticClass:"bx-list"},[n("div",{staticClass:"bx-list-item"},[n("div",{staticClass:"bx-list-item-title"},[s._v("\n        基础用法\n      ")]),n("div",{staticClass:"bx-list-item-extra"},[n("bxs-stepper",{attrs:{min:1,max:10},on:{change:s.changed,plus:s.plusFn,minus:s.minusFn,blur:s.blurFn,focus:s.focusFn},model:{value:s.num5,callback:function(t){s.num5=t},expression:"num5"}})],1)]),n("div",{staticClass:"bx-list-item"},[n("div",{staticClass:"bx-list-item-title"},[s._v("\n        步数\n      ")]),n("div",{staticClass:"bx-list-item-extra"},[n("bxs-stepper",{attrs:{step:5},on:{change:s.changed,plus:s.plusFn,minus:s.minusFn,blur:s.blurFn,focus:s.focusFn},model:{value:s.num6,callback:function(t){s.num6=t},expression:"num6"}})],1)]),n("div",{staticClass:"bx-list-item"},[n("div",{staticClass:"bx-list-item-title"},[s._v("\n        精度\n      ")]),n("div",{staticClass:"bx-list-item-extra"},[n("bxs-stepper",{attrs:{precision:2},on:{change:s.changed,plus:s.plusFn,minus:s.minusFn,blur:s.blurFn,focus:s.focusFn}})],1)]),n("div",{staticClass:"bx-list-item"},[n("div",{staticClass:"bx-list-item-title"},[s._v("\n        全部禁用\n      ")]),n("div",{staticClass:"bx-list-item-extra"},[n("bxs-stepper",{attrs:{disabled:!0},on:{change:s.changed,plus:s.plusFn,minus:s.minusFn,blur:s.blurFn,focus:s.focusFn},model:{value:s.num3,callback:function(t){s.num3=t},expression:"num3"}})],1)]),n("div",{staticClass:"bx-list-item"},[n("div",{staticClass:"bx-list-item-title"},[s._v("\n        禁用输入框\n      ")]),n("div",{staticClass:"bx-list-item-extra"},[n("bxs-stepper",{attrs:{"disable-input":!0},on:{change:s.changed,plus:s.plusFn,minus:s.minusFn,blur:s.blurFn,focus:s.focusFn},model:{value:s.num4,callback:function(t){s.num4=t},expression:"num4"}})],1)]),n("div",{staticClass:"bx-list-item"},[n("div",{staticClass:"bx-list-item-title"},[s._v("\n        自定义大小\n      ")]),n("div",{staticClass:"bx-list-item-extra"},[n("bxs-stepper",{staticStyle:{width:"240px",height:"80px"},on:{change:s.changed,plus:s.plusFn,minus:s.minusFn,blur:s.blurFn,focus:s.focusFn},model:{value:s.num2,callback:function(t){s.num2=t},expression:"num2"}})],1)])])])}),[],!1,null,null,null);e.options.__file="index.vue";t.default=e.exports}}]);