(function(t){function n(n){for(var r,o,i=n[0],s=n[1],a=n[2],y=0,h=[];y<i.length;y++)o=i[y],u[o]&&h.push(u[o][0]),u[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(n);while(h.length)h.shift()();return c.push.apply(c,a||[]),e()}function e(){for(var t,n=0;n<c.length;n++){for(var e=c[n],r=!0,i=1;i<e.length;i++){var s=e[i];0!==u[s]&&(r=!1)}r&&(c.splice(n--,1),t=o(o.s=e[0]))}return t}var r={},u={index:0},c=[];function o(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=r,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=n,i=i.slice();for(var a=0;a<i.length;a++)n(i[a]);var l=s;c.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("c31f")},"1e0e":function(t,n,e){"use strict";var r=e("9aa6"),u=e.n(r);u.a},"42b1":function(t,n,e){"use strict";var r=e("880c"),u=e.n(r);u.a},"880c":function(t,n,e){},"9aa6":function(t,n,e){},c31f:function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var r,u,c=e("a026"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"nav"}},[e("router-link",{attrs:{to:"/"}},[t._v("例子")]),e("router-link",{attrs:{to:"/about"}},[t._v("文档")])],1),e("router-view")],1)},i=[],s=(e("42b1"),e("2877")),a={},l=Object(s["a"])(a,o,i,!1,null,null,null),y=l.exports,h=e("8c4f"),p=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("p",[t._v("货币转换测试")]),e("p",[t._v(t._s(t.$uts(34.62)))]),e("p",[t._v(t._s(t.$utsc(34.62)))]),e("p",[t._v(t._s(t.$utst(34.62)))]),e("p",[t._v(t._s(t.$stu(237.41)))]),e("p",[t._v(t._s(t.$textUts("这个金额是$23.5,那个金额是$18.99")))]),e("p",[t._v(t._s(t.$textUtsi("这个金额是$23.5,那个金额是$18.99")))]),e("button",{staticClass:"c-button",on:{click:function(n){return t.cL10nUSD()}}},[t._v("切换切换货币USD")]),e("button",{staticClass:"c-button",on:{click:function(n){return t.cL10nCNY()}}},[t._v("切换切换货币CNY")])])},f=[],v={methods:{cL10nCNY:function(){console.log("点击切换货币CNY");var t="CNY",n=6.85765,e=.14582,r="￥";this.$l10nCurrency.currency={isoCode:t,stuExchangeRate:e,utsExchangeRate:n,symbolDisplay:r}},cL10nUSD:function(){console.log("点击切换货币USD");var t="USD",n=1,e=1,r="$";this.$l10nCurrency.currency={isoCode:t,stuExchangeRate:e,utsExchangeRate:n,symbolDisplay:r}}}},_=v,d=(e("1e0e"),Object(s["a"])(_,p,f,!1,null,"7162499e",null)),m=d.exports,C={},b=Object(s["a"])(C,r,u,!1,null,null,null),g=b.exports;c["a"].use(h["a"]);var $=new h["a"]({mode:"history",base:"/",routes:[{path:"/",name:"demo",component:m},{path:"/doc",name:"doc",component:g}]}),x=(e("a481"),e("6762"),e("2fdb"),e("d225")),O=e("b0b4"),R=e("bd86");function D(t){t.prototype.hasOwnProperty("$l10nCurrency")||Object.defineProperty(t.prototype,"$l10nCurrency",{get:function(){return this._l10nCurrency}}),t.prototype.$uts=function(t){var n=this.$l10nCurrency,e=n._computeTypeEnum.ROUNDING,r=n.currency.utsExchangeRate,u=n.currency.symbolDisplay;return n._uts(t,e,r,u)},t.prototype.$utsc=function(t){var n=this.$l10nCurrency,e=n._computeTypeEnum.CARRY,r=n.currency.utsExchangeRate,u=n.currency.symbolDisplay;return n._uts(t,e,r,u)},t.prototype.$utst=function(t){var n=this.$l10nCurrency,e=n._computeTypeEnum.TRUNCATION,r=n.currency.utsExchangeRate,u=n.currency.symbolDisplay;return n._uts(t,e,r,u)},t.prototype.$stu=function(t){var n=this.$l10nCurrency,e=n._computeTypeEnum.ROUNDING,r=n.currency.stuExchangeRate;return n._stu(t,e,r)},t.prototype.$stuo=function(t){var n=this.$l10nCurrency,e=n._computeTypeEnum.ORIGINAL,r=n.currency.stuExchangeRate;return n._stu(t,e,r)},t.prototype.$textUts=function(t){var n=this.$l10nCurrency,e=n._computeTypeEnum.ROUNDING,r=n.currency.utsExchangeRate,u=n.currency.symbolDisplay;return n._textUts(t,e,r,u)},t.prototype.$textUtsi=function(t){var n=this.$l10nCurrency,e=n._computeTypeEnum.INT,r=n.currency.utsExchangeRate,u=n.currency.symbolDisplay;return n._textUts(t,e,r,u)}}var E,w,N,T={beforeCreate:function(){var t=this.$options;t.l10nCurrency?(this._l10nCurrency=t.l10nCurrency,this._l10nCurrencyWatcher=this._l10nCurrency.watchL10nCurrencyData(),this._l10nCurrency.subscribeDataChanging(this),(void 0===t.l10nCurrency.sync||t.l10nCurrency.sync)&&(this._currencyWatcher=this.$l10nCurrency.watchCurrency())):this.$root&&this.$root.$l10nCurrency?(this._l10nCurrency=this.$root.$l10nCurrency,this._l10nCurrency.subscribeDataChanging(this)):t.parent&&t.parent.$l10nCurrency&&(this._l10nCurrency=t.parent.$l10nCurrency,this._l10nCurrency.subscribeDataChanging(this)),console.log("[vue-l10n-currency] already beforeCreate.")},beforeDestroy:function(){if(this._l10nCurrency){var t=this;this.$nextTick(function(){t._l10nCurrency.unsubscribeDataChanging(t),t._l10nCurrencyWatcher&&(t._l10nCurrencyWatcher(),t._l10nCurrency.destroyVM(),delete t._l10nCurrencyWatcher),t._currencyWatcher&&(t._currencyWatcher(),delete t._currencyWatcher),t._l10nCurrency=null}),console.log("[vue-l10n-currency] already beforeDestroy.")}}};function U(t){U.installed=!0,E=t,D(E),E.mixin(T);var n=E.config.optionMergeStrategies;n.l10nCurrency=function(t,n){return void 0===n?t:n}}var k=(N=w=function(){function t(n){Object(x["a"])(this,t),Object(R["a"])(this,"_computeTypeEnum",{ROUNDING:"rounding",CARRY:"carry",TRUNCATION:"truncation",INT:"int",ORIGINAL:"original"}),Object(R["a"])(this,"_vm",void 0),Object(R["a"])(this,"_root",void 0),Object(R["a"])(this,"_dataListeners",void 0),!E&&"undefined"!==typeof window&&window.Vue&&U(window.Vue);var e=n.isoCode||"USD",r=n.stuExchangeRate||"1",u=n.utsExchangeRate||"1",c=n.symbolDisplay||"$",o={isoCode:e,stuExchangeRate:r,utsExchangeRate:u,symbolDisplay:c};this._vm=null,this._root=n.root||null,this._sync=void 0===n.sync||!!n.sync,this._dataListeners=[],this._initVM({currency:o})}return Object(O["a"])(t,[{key:"_initVM",value:function(t){var n=E.config.silent;E.config.silent=!0,this._vm=new E({data:t}),E.config.silent=n}},{key:"destroyVM",value:function(){this._vm.$destroy()}},{key:"subscribeDataChanging",value:function(t){this._dataListeners.push(t)}},{key:"unsubscribeDataChanging",value:function(t){var n=this._dataListeners;if(n.length){var e=n.indexOf(t);if(e>-1)return n.splice(e,1)}}},{key:"watchL10nCurrencyData",value:function(){var t=this;return this._vm.$watch("$data",function(){var n=t._dataListeners.length;while(n--)E.nextTick(function(){t._dataListeners[n]&&t._dataListeners[n].$forceUpdate()})},{deep:!0})}},{key:"watchCurrency",value:function(){if(!this._sync||!this._root)return null;var t=this._vm;return this._root.$l10nCurrency.vm.$watch("currency",function(n){t.$set(t,"currency",n),t.$forceUpdate()},{immediate:!0})}},{key:"_formatAmount",value:function(t,n){var e;return e=n===this._computeTypeEnum.ROUNDING?t.toFixed(2):n===this._computeTypeEnum.CARRY?Math.ceil(100*t)/100:n===this._computeTypeEnum.TRUNCATION?Math.floor(100*t)/100:n===this._computeTypeEnum.INT?t.toFixed():t,e}},{key:"_uts",value:function(t,n,e,r){console.log("[vue-l10n-currency] _uts.");var u=t*e,c=this._formatAmount(u,n);return r+c}},{key:"_stu",value:function(t,n,e){console.log("[vue-l10n-currency] _stu.");var r=t*e,u=this._formatAmount(r,n);return u}},{key:"_textUts",value:function(t,n,e,r){console.log("[vue-l10n-currency] _textUts.");var u=t,c=this;if("string"===typeof t&&""!==t&&t.includes("$")){var o=/(\$\d*(\.\d*|\d*))/g,i=t.replace(o,function(t){var u=t.slice(1),o=u*e,i=c._formatAmount(o,n);return r+i});u=i}return u}},{key:"vm",get:function(){return this._vm}},{key:"currency",get:function(){return this._vm.currency},set:function(t){this._vm.$set(this._vm,"currency",t)}}]),t}(),Object(R["a"])(w,"install",void 0),Object(R["a"])(w,"version",void 0),N);k.install=U,k.version="1.0.1";var j=k;c["a"].use(j);var I=new j({});c["a"].config.productionTip=!1,new c["a"]({l10nCurrency:I,router:$,render:function(t){return t(y)}}).$mount("#app")}});
//# sourceMappingURL=index.7877843f.js.map