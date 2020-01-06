import{i as e,p as t,r,t as s,m as i,T as a,b as o,c as n,a as d,d as p}from"./lit-html-6898710b.js";
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var h=133;function l(e,t){for(var{element:{content:r},parts:s}=e,i=document.createTreeWalker(r,h,null,!1),a=u(s),o=s[a],n=-1,d=0,p=[],l=null;i.nextNode();){n++;var c=i.currentNode;for(c.previousSibling===l&&(l=null),t.has(c)&&(p.push(c),null===l&&(l=c)),null!==l&&d++;void 0!==o&&o.index===n;)o.index=null!==l?-1:o.index-d,o=s[a=u(s,a)]}p.forEach(e=>e.parentNode.removeChild(e))}var c=e=>{for(var t=11===e.nodeType?0:1,r=document.createTreeWalker(e,h,null,!1);r.nextNode();)t++;return t},u=(t,r=-1)=>{for(var s=r+1;s<t.length;s++){var i=t[s];if(e(i))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var y=(e,t)=>`${e}--${t}`,S=!0;void 0===window.ShadyCSS?S=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),S=!1);var f=e=>t=>{var r=y(t.type,e),o=s.get(r);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},s.set(r,o));var n=o.stringsArray.get(t.strings);if(void 0!==n)return n;var d=t.strings.join(i);if(void 0===(n=o.keyString.get(d))){var p=t.getTemplateElement();S&&window.ShadyCSS.prepareTemplateDom(p,e),n=new a(t,p),o.keyString.set(d,n)}return o.stringsArray.set(t.strings,n),n},v=["html","svg"],_=new Set,m=(e,t,r)=>{_.add(e);var i=r?r.element:document.createElement("template"),a=t.querySelectorAll("style"),{length:o}=a;if(0!==o){for(var n=document.createElement("style"),d=0;d<o;d++){var p=a[d];p.parentNode.removeChild(p),n.textContent+=p.textContent}(e=>{v.forEach(t=>{var r=s.get(y(t,e));void 0!==r&&r.keyString.forEach(e=>{var{element:{content:t}}=e,r=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{r.add(e)}),l(e,r)})})})(e);var S=i.content;r?function(e,t,r=null){var{element:{content:s},parts:i}=e;if(null!=r)for(var a=document.createTreeWalker(s,h,null,!1),o=u(i),n=0,d=-1;a.nextNode();){for(d++,a.currentNode===r&&(n=c(t),r.parentNode.insertBefore(t,r));-1!==o&&i[o].index===d;){if(n>0){for(;-1!==o;)i[o].index+=n,o=u(i,o);return}o=u(i,o)}}else s.appendChild(t)}(r,n,S.firstChild):S.insertBefore(n,S.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);var f=S.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==f)t.insertBefore(f.cloneNode(!0),t.firstChild);else if(r){S.insertBefore(n,S.firstChild);var m=new Set;m.add(n),l(r,m)}}else window.ShadyCSS.prepareTemplateStyles(i,e)};window.JSCompiler_renameProperty=(e,t)=>e;var w={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},P=(e,t)=>t!==e&&(t==t||e==e),g={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:P},b=Promise.resolve(!0),C=1,A=4,T=8,k=16,U=32,E="finalized";class O extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=b,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();var e=[];return this._classProperties.forEach((t,r)=>{var s=this._attributeNameForProperty(r,t);void 0!==s&&(this._attributeToPropertyMap.set(s,r),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;var e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=g){if(this._ensureClassProperties(),this._classProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){var r="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[r]},set(t){var s=this[e];this[r]=t,this._requestUpdate(e,s)},configurable:!0,enumerable:!0})}}static finalize(){var e=Object.getPrototypeOf(this);if(e.hasOwnProperty(E)||e.finalize(),this[E]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){var t=this.properties,r=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(var s of r)this.createProperty(s,t[s])}}static _attributeNameForProperty(e,t){var r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,r=P){return r(e,t)}static _propertyValueFromAttribute(e,t){var r=t.type,s=t.converter||w,i="function"==typeof s?s:s.fromAttribute;return i?i(e,r):e}static _propertyValueToAttribute(e,t){if(void 0!==t.reflect){var r=t.type,s=t.converter;return(s&&s.toAttribute||w.toAttribute)(e,r)}}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){var r=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,r)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|U,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,r){t!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,t,r=g){var s=this.constructor,i=s._attributeNameForProperty(e,r);if(void 0!==i){var a=s._propertyValueToAttribute(t,r);if(void 0===a)return;this._updateState=this._updateState|T,null==a?this.removeAttribute(i):this.setAttribute(i,a),this._updateState=this._updateState&~T}}_attributeToProperty(e,t){if(!(this._updateState&T)){var r=this.constructor,s=r._attributeToPropertyMap.get(e);if(void 0!==s){var i=r._classProperties.get(s)||g;this._updateState=this._updateState|k,this[s]=r._propertyValueFromAttribute(t,i),this._updateState=this._updateState&~k}}}_requestUpdate(e,t){var r=!0;if(void 0!==e){var s=this.constructor,i=s._classProperties.get(e)||g;s._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&k||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):r=!1}!this._hasRequestedUpdate&&r&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}_enqueueUpdate(){var e=this;return d((function*(){var t,r;e._updateState=e._updateState|A;var s=e._updatePromise;e._updatePromise=new Promise((e,s)=>{t=e,r=s});try{yield s}catch(e){}e._hasConnected||(yield new Promise(t=>e._hasConnectedResolver=t));try{var i=e.performUpdate();null!=i&&(yield i)}catch(e){r(e)}t(!e._hasRequestedUpdate)}))()}get _hasConnected(){return this._updateState&U}get _hasRequestedUpdate(){return this._updateState&A}get hasUpdated(){return this._updateState&C}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();var e=!1,t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&C||(this._updateState=this._updateState|C,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~A}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}O[E]=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var N=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{var{kind:r,elements:s}=t;return{kind:r,elements:s,finisher(t){window.customElements.define(e,t)}}})(e,t),x=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}}:Object.assign({},t,{finisher(r){r.createProperty(t.key,e)}}),R=(e,t,r)=>{t.constructor.createProperty(r,e)};function q(e){return(t,r)=>void 0!==r?R(e,t,r):x(e,t)}function j(e){return(t,r)=>{var s={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==r?z(s,t,r):M(s,t)}}var z=(e,t,r)=>{Object.defineProperty(t,r,e)},M=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}),F="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol();class B{constructor(e,t){if(t!==V)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(F?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}var J=(e,...t)=>{var r=t.reduce((t,r,s)=>t+(e=>{if(e instanceof B)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+e[s+1],e[0]);return new B(r,V)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");var I=e=>e.flat?e.flat(1/0):function e(t,r=[]){for(var s=0,i=t.length;s<i;s++){var a=t[s];Array.isArray(a)?e(a,r):r.push(a)}return r}(e);class D extends O{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){var e=this.styles,t=[];Array.isArray(e)?I(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e)):e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){var e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?F?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);var t=this.render();t instanceof p&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{var t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}D.finalized=!0,D.render=(e,s,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");var a=i.scopeName,d=t.has(s),p=S&&11===s.nodeType&&!!s.host,h=p&&!_.has(a),l=h?document.createDocumentFragment():s;if(r(e,l,Object.assign({templateFactory:f(a)},i)),h){var c=t.get(l);t.delete(l);var u=c.value instanceof o?c.value.template:void 0;m(a,l,u),n(s,s.firstChild),s.appendChild(l),t.set(s,c)}!d&&p&&window.ShadyCSS.styleElement(s.host)};export{D as L,N as a,J as c,q as p,j as q,F as s};
//# sourceMappingURL=lit-element-81619d09.js.map