(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{613:function(t,e,s){var o=s(614);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0},n=s(3)(o,i);o.locals&&(t.exports=o.locals),o.locals||t.hot.accept(614,(function(){var e=s(614);"string"==typeof e&&(e=[[t.i,e,""]]),n(e)})),t.hot.dispose((function(){n()}))},614:function(t,e,s){(t.exports=s(2)(!1)).push([t.i,".demo-sheets{font-size:30px}.ui-sheets-normal{padding:15px;font-size:14px;line-height:1.5;color:#333}.ui-sheets-footer{position:relative}.ui-sheets-footer .bx-tab{background:transparent}.ui-sheets-header{position:relative}.ui-sheets-header .ui-sheets-tab{margin-right:50px}.ui-sheets-header .ui-sheets-tab:after{height:0}.ui-sheets-header .ui-sheets-close{position:absolute;right:0;top:0;bottom:0;padding:0 15px;font-size:0;line-height:1}.ui-sheets-header .ui-sheets-close .bx-icon{display:inline-block;margin-top:13px;font-size:18px;color:#ccc}.theme-broker .ui-sheets-footer .bx-tab{background:transparent}",""])},675:function(t,e,s){"use strict";var o=s(613);s.n(o).a},716:function(t,e,s){"use strict";s.r(e);var o={data:function(){return{show_1:!1,show_2:!1,show_3:!1,show_4:!1,show_5:!1,show_6:!1,show_7:!1,show_8:!1,show_9:!1,show_10:!1,show_11:!1,instance5TabContentIdx:0,instance5Scroll:null,height7:650,height11:"large"}},methods:{toggle:function(t){var e="show_"+t;this[e]=!this[e]},domReady:function(t){var e=t.layer.clientHeight,s=t.content.clientHeight,o=t.scroll.clientHeight,i=t.header.clientHeight,n=t.footer.clientHeight,l=document.createElement("div"),a="";a+="<br /><div>半屏浮层调用后获取：</div>",a+="<div>layerHeight: "+e+"</div>",a+="<div>contentHeight: "+s+"</div>",a+="<div>scrollHeight: "+o+"</div>",a+="<div>headerHeight: "+i+"</div>",a+="<div>footerHeight: "+n+"</div>",l.innerHTML=a,t.scroll.querySelector(".ui-sheets-normal").append(l)},instance5OnTabContentChanged:function(t){var e=this;this.instance5TabContentIdx=t,this.instance5Scroll&&this.$nextTick((function(){return e.instance5Scroll.refresh()}))},bscroll:function(t){console.log(t)},transitionHook:function(t,e){console.log(t,e)}}},i=(s(675),s(0)),n=Object(i.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"demo-sheets"},[s("bxs-cell-group",[s("bxs-cell",{attrs:{title:"内容很少时，最小高度 44%","is-link":""},on:{click:function(e){t.toggle(1)}}}),s("bxs-cell",{attrs:{title:"内容很多时，最大高度 77%","is-link":""},on:{click:function(e){t.toggle(2)}}}),s("bxs-cell",{attrs:{title:"内容高度在 44-77% 间将自适应","is-link":""},on:{click:function(e){t.toggle(3)}}}),s("bxs-cell",{attrs:{title:"通过 height 指定高度时，不受 44-77% 限制","is-link":""},on:{click:function(e){t.toggle(7)}}}),s("bxs-cell",{attrs:{title:"height 还可以指定枚举值或百分比","is-link":""},on:{click:function(e){t.toggle(11)}}}),s("bxs-cell",{attrs:{title:"去掉顶部标题栏","is-link":""},on:{click:function(e){t.toggle(4)}}}),s("bxs-cell",{attrs:{title:"扩展底部内容","is-link":""},on:{click:function(e){t.toggle(6)}}}),s("bxs-cell",{attrs:{title:"使用better-scroll滚动","is-link":""},on:{click:function(e){t.toggle(8)}}}),s("bxs-cell",{attrs:{title:"自定义顶部标题栏 + 动态内容","is-link":""},on:{click:function(e){t.toggle(5)}}}),s("bxs-cell",{attrs:{title:"暴露关键dom","is-link":""},on:{click:function(e){t.toggle(9)}}}),s("bxs-cell",{attrs:{title:"暴露transition所有js钩子","is-link":""},on:{click:function(e){t.toggle(10)}}})],1),s("bxs-bottom-sheets",{attrs:{title:"最小高度浮层"},model:{value:t.show_1,callback:function(e){t.show_1=e},expression:"show_1"}},[s("div",{staticClass:"ui-sheets-normal"},[s("p",[t._v("这是一个最小高度的半屏浮层")]),s("p",[t._v("浮层的最小高度为屏幕的44%")])])]),s("bxs-bottom-sheets",{attrs:{title:"最大高度浮层"},on:{domReady:t.domReady},model:{value:t.show_2,callback:function(e){t.show_2=e},expression:"show_2"}},[s("div",{staticClass:"ui-sheets-normal"},[s("p",[t._v("\n        这是一个最大高度的半屏浮层\n      ")]),s("p",[t._v("浮层的最大高度为屏幕的77%")]),s("br"),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")])])]),s("bxs-bottom-sheets",{attrs:{title:"自适应高度浮层"},model:{value:t.show_3,callback:function(e){t.show_3=e},expression:"show_3"}},[s("div",{staticClass:"ui-sheets-normal"},[s("p",[t._v("这是一个普通的半屏浮层")]),s("p",[t._v("浮层大于屏幕的44%，小于屏幕的77%时，自适应")]),s("br"),s("p",[t._v("这是一个自适应的半屏浮层")]),s("p",[t._v("这是一个自适应的半屏浮层")]),s("p",[t._v("这是一个自适应的半屏浮层")]),s("p",[t._v("这是一个自适应的半屏浮层")]),s("p",[t._v("这是一个自适应的半屏浮层")]),s("p",[t._v("这是一个自适应的半屏浮层")]),s("p",[t._v("这是一个自适应的半屏浮层")]),s("p",[t._v("这是一个自适应的半屏浮层")]),s("p",[t._v("这是一个自适应的半屏浮层")]),s("p",[t._v("这是一个自适应的半屏浮层")])])]),s("bxs-bottom-sheets",{attrs:{"hide-header":!0},model:{value:t.show_4,callback:function(e){t.show_4=e},expression:"show_4"}},[s("div",{staticClass:"ui-sheets-normal"},[s("p",[t._v("这是一个去掉顶部默认标题栏浮层")]),s("p",[t._v("也可用组件「popup」替代")])])]),s("bxs-bottom-sheets",{attrs:{"use-b-scroll":!0},on:{bscroll:function(e){t.instance5Scroll=e}},model:{value:t.show_5,callback:function(e){t.show_5=e},expression:"show_5"}},[s("div",{staticClass:"ui-sheets-header bx-hairline--bottom",attrs:{slot:"header"},slot:"header"},[s("bxs-tab",{staticClass:"ui-sheets-tab",attrs:{index:t.instance5TabContentIdx},on:{change:t.instance5OnTabContentChanged}},[s("bxs-tab-item",[t._v("自定义标题")]),s("bxs-tab-item",[t._v("本 Tab 特长有 20 条")])],1),s("div",{staticClass:"ui-sheets-close",on:{click:function(e){t.toggle(5)}}},[s("bxs-icon",{attrs:{name:"close"}})],1)],1),s("div",{staticClass:"ui-sheets-normal"},[s("p",[t._v("浮层内容根据 Tab 切换")]),0===t.instance5TabContentIdx?s("p",[t._v("\n        这个 Tab 下内容很短很短\n      ")]):t._e(),1===t.instance5TabContentIdx?s("div",t._l(20,(function(e){return s("p",{key:"content"+e},[t._v("\n          "+t._s(e)+". 这个 Tab 下有超长内容\n        ")])}))):t._e()])]),s("bxs-bottom-sheets",{attrs:{title:"扩展底部内容"},model:{value:t.show_6,callback:function(e){t.show_6=e},expression:"show_6"}},[s("div",{staticClass:"ui-sheets-normal"},[s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("浮层的最大高度为屏幕的77%")]),s("br"),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")]),s("p",[t._v("这是一个最大高度的半屏浮层")])]),s("div",{staticClass:"ui-sheets-footer bx-hairline--top",attrs:{slot:"footer"},slot:"footer"},[s("bxs-tab",[s("bxs-tab-item",[t._v("这是")]),s("bxs-tab-item",[t._v("底部")]),s("bxs-tab-item",[t._v("内容")])],1)],1)]),s("bxs-bottom-sheets",{attrs:{title:"固定高度(数值)浮层",height:t.height7},model:{value:t.show_7,callback:function(e){t.show_7=e},expression:"show_7"}},[s("div",{staticClass:"ui-sheets-normal"},[s("p",[t._v("这是一个固定高度为 "+t._s(t.height7)+"px 的半屏浮层")]),s("p",[t._v("指定数值比屏幕高度还大时，将得到全屏浮层")])])]),s("bxs-bottom-sheets",{attrs:{title:"使用BScroll滚动","use-b-scroll":"","prevent-scroll-through":""},on:{bscroll:t.bscroll},model:{value:t.show_8,callback:function(e){t.show_8=e},expression:"show_8"}},[s("div",{staticClass:"ui-sheets-normal"},[s("p",[t._v("这是一个开启better-scroll的半屏浮层")]),s("br"),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")])])]),s("bxs-bottom-sheets",{attrs:{title:"暴露关键dom元素"},on:{domReady:t.domReady},model:{value:t.show_9,callback:function(e){t.show_9=e},expression:"show_9"}},[s("div",{staticClass:"ui-sheets-normal"},[s("p",[t._v("这是一个暴露关键dom元素的半屏浮层")]),s("br"),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")])])]),s("bxs-bottom-sheets",{attrs:{title:"暴露transition所有js钩子"},on:{appear:function(e){t.transitionHook("appear",e)},"before-enter":function(e){t.transitionHook("before-enter",e)},enter:function(e){t.transitionHook("enter",e)},"after-enter":function(e){t.transitionHook("after-enter",e)},leave:function(e){t.transitionHook("leave",e)},"after-leave":function(e){t.transitionHook("after-leave",e)}},model:{value:t.show_10,callback:function(e){t.show_10=e},expression:"show_10"}},[s("div",{staticClass:"ui-sheets-normal"},[s("p",[t._v("这是一个调用transition所有js钩子的半屏浮层")]),s("p",[t._v("调用方式与vue transition内置组件提供的js钩子一样")]),s("br"),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")]),s("p",[t._v("这是一个半屏浮层")])])]),s("bxs-bottom-sheets",{attrs:{title:"固定高度(枚举或百分比)浮层",height:t.height11},model:{value:t.show_11,callback:function(e){t.show_11=e},expression:"show_11"}},[s("div",{staticClass:"ui-sheets-normal"},[s("p",[t._v("这是一个指定高度为 '"+t._s(t.height11)+"' 的浮层")]),s("br"),s("p",[t._v("指定百分比也是一样的。")]),s("p",[t._v("枚举值对应关系：")]),s("p",[t._v("small: 44%")]),s("p",[t._v("middle: 77%")]),s("p",[t._v("large: 90%")]),s("p",[t._v("full: 100%")])])])],1)}),[],!1,null,null,null);n.options.__file="index.vue";e.default=n.exports}}]);