(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{629:function(o,e,i){var t=i(630);"string"==typeof t&&(t=[[o.i,t,""]]);var n={hmr:!0,transform:void 0},a=i(3)(t,n);t.locals&&(o.exports=t.locals),t.locals||o.hot.accept(630,(function(){var e=i(630);"string"==typeof e&&(e=[[o.i,e,""]]),a(e)})),o.hot.dispose((function(){a()}))},630:function(o,e,i){(o.exports=i(2)(!1)).push([o.i,'.claerfix:after,.claerfix:before{content:"";display:table}.claerfix:after{clear:both}.demo-icon{padding:15px;font-size:14px;background-color:#fff}.demo-icon .demo-icon-title span{font-size:12px;font-weight:400}.demo-icon .demo-icon-list{margin-top:20px}.demo-icon .demo-icon-list .demo-icon-item{float:left;width:33%;min-height:80px;margin-top:15px;text-align:center}.demo-icon .demo-icon-list .demo-icon-item .bx-icon{display:inline-block;font-size:18px}.demo-icon .demo-icon-list .demo-icon-item .bx-icon-name{margin-top:10px;padding:0 2px;word-wrap:break-word;word-break:break-all}',""])},687:function(o,e,i){"use strict";var t=i(629);i.n(t).a},725:function(o,e,i){"use strict";i.r(e);var t={data:function(){return{icons:["contact","scan","edit","notify","calendar","menu","image-plain","image-solid","warning-solid","warning-plain","delete","help","search","refresh","reduce","reduce-plain","reduce-solid","more","next","close","close-solid","close-plain","circle","circle-dot","check","check-solid","check-plain","arrow-left","arrow-up","arrow-right","arrow-down","add","add-plain","star","star-solid","clock"]}},methods:{copyToClipboard:function(o){var e='<bxs-icon name="'+o+'"></bxs-icon>';if(window.clipboardData&&window.clipboardData.setData)this.$toast("复制 "+o+" 成功"),window.clipboardData.setData("Text",e);else if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var i=document.createElement("textarea");i.textContent=e,i.style.position="fixed",document.body.appendChild(i),i.select();try{document.execCommand("copy")}catch(e){this.$toast("复制 "+o+" 失败")}finally{document.body.removeChild(i),this.$toast("复制 "+o+" 成功")}}}}},n=(i(687),i(0)),a=Object(n.a)(t,(function(){var o=this,e=o.$createElement,i=o._self._c||e;return i("div",{staticClass:"demo-icon"},[o._m(0),i("ul",{staticClass:"demo-icon-list claerfix"},o._l(o.icons,(function(e,t){return i("li",{key:t,staticClass:"demo-icon-item",on:{click:function(i){o.copyToClipboard(e)}}},[i("bxs-icon",{attrs:{name:e}}),i("div",{staticClass:"bx-icon-name"},[o._v("\n        "+o._s(e)+"\n      ")])],1)})))])}),[function(){var o=this.$createElement,e=this._self._c||o;return e("h3",{staticClass:"demo-icon-title"},[this._v("\n    内置图标列表"),e("span",[this._v("（bx-icon bx-icon-xxx）")])])}],!1,null,null,null);a.options.__file="index.vue";e.default=a.exports}}]);