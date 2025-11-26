(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=globalThis,te=F.ShadowRoot&&(F.ShadyCSS===void 0||F.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ie=Symbol(),ne=new WeakMap;let ge=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==ie)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(te&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=ne.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&ne.set(t,e))}return e}toString(){return this.cssText}};const Ee=s=>new ge(typeof s=="string"?s:s+"",void 0,ie),N=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((r,i,n)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[n+1],s[0]);return new ge(t,s,ie)},Ae=(s,e)=>{if(te)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),i=F.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=t.cssText,s.appendChild(r)}},oe=te?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Ee(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Se,defineProperty:ke,getOwnPropertyDescriptor:Pe,getOwnPropertyNames:ze,getOwnPropertySymbols:Ce,getPrototypeOf:Ne}=Object,w=globalThis,ae=w.trustedTypes,Te=ae?ae.emptyScript:"",K=w.reactiveElementPolyfillSupport,O=(s,e)=>s,W={toAttribute(s,e){switch(e){case Boolean:s=s?Te:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},se=(s,e)=>!Se(s,e),de={attribute:!0,type:String,converter:W,reflect:!1,useDefault:!1,hasChanged:se};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),w.litPropertyMetadata??(w.litPropertyMetadata=new WeakMap);let k=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=de){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);i!==void 0&&ke(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:n}=Pe(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:i,set(o){const d=i==null?void 0:i.call(this);n==null||n.call(this,o),this.requestUpdate(e,d,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??de}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const e=Ne(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const t=this.properties,r=[...ze(t),...Ce(t)];for(const i of r)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,i]of t)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const i=this._$Eu(t,r);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift(oe(i))}else e!==void 0&&t.push(oe(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ae(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){var n;const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const o=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:W).toAttribute(t,r.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){var n,o;const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const d=r.getPropertyOptions(i),a=typeof d.converter=="function"?{fromAttribute:d.converter}:((n=d.converter)==null?void 0:n.fromAttribute)!==void 0?d.converter:W;this._$Em=i;const p=a.fromAttribute(t,d.type);this[i]=p??((o=this._$Ej)==null?void 0:o.get(i))??p,this._$Em=null}}requestUpdate(e,t,r){var i;if(e!==void 0){const n=this.constructor,o=this[e];if(r??(r=n.getPropertyOptions(e)),!((r.hasChanged??se)(o,t)||r.useDefault&&r.reflect&&o===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(n._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:i,wrapped:n},o){r&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??t??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i){const{wrapped:d}=o,a=this[n];d!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,o,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[O("elementProperties")]=new Map,k[O("finalized")]=new Map,K==null||K({ReactiveElement:k}),(w.reactiveElementVersions??(w.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,B=M.trustedTypes,ce=B?B.createPolicy("lit-html",{createHTML:s=>s}):void 0,be="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,me="?"+v,De=`<${me}>`,A=document,j=()=>A.createComment(""),L=s=>s===null||typeof s!="object"&&typeof s!="function",re=Array.isArray,Oe=s=>re(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",J=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,le=/-->/g,pe=/>/g,$=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),he=/'/g,ue=/"/g,ye=/^(?:script|style|textarea|title)$/i,Me=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),c=Me(1),P=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),fe=new WeakMap,_=A.createTreeWalker(A,129);function ve(s,e){if(!re(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return ce!==void 0?ce.createHTML(e):e}const je=(s,e)=>{const t=s.length-1,r=[];let i,n=e===2?"<svg>":e===3?"<math>":"",o=D;for(let d=0;d<t;d++){const a=s[d];let p,u,l=-1,b=0;for(;b<a.length&&(o.lastIndex=b,u=o.exec(a),u!==null);)b=o.lastIndex,o===D?u[1]==="!--"?o=le:u[1]!==void 0?o=pe:u[2]!==void 0?(ye.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=$):u[3]!==void 0&&(o=$):o===$?u[0]===">"?(o=i??D,l=-1):u[1]===void 0?l=-2:(l=o.lastIndex-u[2].length,p=u[1],o=u[3]===void 0?$:u[3]==='"'?ue:he):o===ue||o===he?o=$:o===le||o===pe?o=D:(o=$,i=void 0);const y=o===$&&s[d+1].startsWith("/>")?" ":"";n+=o===D?a+De:l>=0?(r.push(p),a.slice(0,l)+be+a.slice(l)+v+y):a+v+(l===-2?d:y)}return[ve(s,n+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class U{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let n=0,o=0;const d=e.length-1,a=this.parts,[p,u]=je(e,t);if(this.el=U.createElement(p,r),_.currentNode=this.el.content,t===2||t===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=_.nextNode())!==null&&a.length<d;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(be)){const b=u[o++],y=i.getAttribute(l).split(v),H=/([.?@])?(.*)/.exec(b);a.push({type:1,index:n,name:H[2],strings:y,ctor:H[1]==="."?Ue:H[1]==="?"?Ie:H[1]==="@"?Re:V}),i.removeAttribute(l)}else l.startsWith(v)&&(a.push({type:6,index:n}),i.removeAttribute(l));if(ye.test(i.tagName)){const l=i.textContent.split(v),b=l.length-1;if(b>0){i.textContent=B?B.emptyScript:"";for(let y=0;y<b;y++)i.append(l[y],j()),_.nextNode(),a.push({type:2,index:++n});i.append(l[b],j())}}}else if(i.nodeType===8)if(i.data===me)a.push({type:2,index:n});else{let l=-1;for(;(l=i.data.indexOf(v,l+1))!==-1;)a.push({type:7,index:n}),l+=v.length-1}n++}}static createElement(e,t){const r=A.createElement("template");return r.innerHTML=e,r}}function z(s,e,t=s,r){var o,d;if(e===P)return e;let i=r!==void 0?(o=t._$Co)==null?void 0:o[r]:t._$Cl;const n=L(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((d=i==null?void 0:i._$AO)==null||d.call(i,!1),n===void 0?i=void 0:(i=new n(s),i._$AT(s,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=i:t._$Cl=i),i!==void 0&&(e=z(s,i._$AS(s,e.values),i,r)),e}class Le{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=((e==null?void 0:e.creationScope)??A).importNode(t,!0);_.currentNode=i;let n=_.nextNode(),o=0,d=0,a=r[0];for(;a!==void 0;){if(o===a.index){let p;a.type===2?p=new I(n,n.nextSibling,this,e):a.type===1?p=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(p=new He(n,this,e)),this._$AV.push(p),a=r[++d]}o!==(a==null?void 0:a.index)&&(n=_.nextNode(),o++)}return _.currentNode=A,i}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class I{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=z(this,e,t),L(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==P&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Oe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&L(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=U.createElement(ve(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(t);else{const o=new Le(i,this),d=o.u(this.options);o.p(t),this.T(d),this._$AH=o}}_$AC(e){let t=fe.get(e.strings);return t===void 0&&fe.set(e.strings,t=new U(e)),t}k(e){re(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const n of e)i===t.length?t.push(r=new I(this.O(j()),this.O(j()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class V{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,n){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=h}_$AI(e,t=this,r,i){const n=this.strings;let o=!1;if(n===void 0)e=z(this,e,t,0),o=!L(e)||e!==this._$AH&&e!==P,o&&(this._$AH=e);else{const d=e;let a,p;for(e=n[0],a=0;a<n.length-1;a++)p=z(this,d[r+a],t,a),p===P&&(p=this._$AH[a]),o||(o=!L(p)||p!==this._$AH[a]),p===h?e=h:e!==h&&(e+=(p??"")+n[a+1]),this._$AH[a]=p}o&&!i&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ue extends V{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}}class Ie extends V{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}}class Re extends V{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){if((e=z(this,e,t,0)??h)===P)return;const r=this._$AH,i=e===h&&r!==h||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==h&&(r===h||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class He{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){z(this,e)}}const Z=M.litHtmlPolyfillSupport;Z==null||Z(U,I),(M.litHtmlVersions??(M.litHtmlVersions=[])).push("3.3.1");const Fe=(s,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let i=r._$litPart$;if(i===void 0){const n=(t==null?void 0:t.renderBefore)??null;r._$litPart$=i=new I(e.insertBefore(j(),n),n,void 0,t??{})}return i._$AI(s),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=globalThis;class g extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Fe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return P}}var xe;g._$litElement$=!0,g.finalized=!0,(xe=E.litElementHydrateSupport)==null||xe.call(E,{LitElement:g});const Q=E.litElementPolyfillSupport;Q==null||Q({LitElement:g});(E.litElementVersions??(E.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const We={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:se},Be=(s=We,e,t)=>{const{kind:r,metadata:i}=t;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),r==="setter"&&((s=Object.create(s)).wrapped=!0),n.set(t.name,s),r==="accessor"){const{name:o}=t;return{set(d){const a=e.get.call(this);e.set.call(this,d),this.requestUpdate(o,a,s)},init(d){return d!==void 0&&this.C(o,void 0,s,d),d}}}if(r==="setter"){const{name:o}=t;return function(d){const a=this[o];e.call(this,d),this.requestUpdate(o,a,s)}}throw Error("Unsupported decorator location: "+r)};function we(s){return(e,t)=>typeof t=="object"?Be(s,e,t):((r,i,n)=>{const o=i.hasOwnProperty(n);return i.constructor.createProperty(n,r),o?Object.getOwnPropertyDescriptor(i,n):void 0})(s,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function f(s){return we({...s,state:!0,attribute:!1})}const Ge=[{id:"Mon",label:"Monday",exercises:[{id:1,order:1,name:"Bench Press",sets:4,reps:10,muscleGroup:"Chest"},{id:2,order:2,name:"Push-ups",sets:3,reps:15,muscleGroup:"Chest"}]},{id:"Tue",label:"Tuesday",exercises:[]},{id:"Wed",label:"Wednesday",exercises:[]},{id:"Thu",label:"Thursday",exercises:[]},{id:"Fri",label:"Friday",exercises:[]},{id:"Sat",label:"Saturday",exercises:[]},{id:"Sun",label:"Sunday",exercises:[]}],qe=["Chest","Back","Legs","Shoulders","Arms","Core","Cardio"],Ve=[{id:1,dateLabel:"Wednesday, November 19, 2025",mood:"Great",text:"Today was an amazing workout day! I pushed through my limits and felt incredibly energized afterwards. My confidence is growing with each session."},{id:2,dateLabel:"Tuesday, November 18, 2025",mood:"Good",text:"Solid workout today. Had a bit of trouble with motivation in the morning but once I got started, everything flowed well."}];var Ye=Object.defineProperty,Ke=Object.getOwnPropertyDescriptor,m=(s,e,t,r)=>{for(var i=r>1?void 0:r?Ke(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&Ye(e,t,i),i};let x=class extends g{constructor(){super(...arguments),this.selectedDayId="Mon",this.days=[...Ge],this.showExerciseForm=!1,this.newExerciseName="",this.newExerciseSets="3",this.newExerciseReps="10",this.newExerciseMuscleGroup="Chest",this.showWeeklySummary=!0}get selectedDay(){return this.days.find(s=>s.id===this.selectedDayId)??this.days[0]}get totalExercises(){return this.days.reduce((s,e)=>s+e.exercises.length,0)}get activeDays(){return this.days.filter(s=>s.exercises.length>0).length}setDay(s){this.selectedDayId=s}openExerciseForm(){this.showExerciseForm=!0}toggleWeeklySummary(){this.showWeeklySummary=!this.showWeeklySummary}cancelExerciseForm(){this.showExerciseForm=!1,this.newExerciseName="",this.newExerciseSets="3",this.newExerciseReps="10",this.newExerciseMuscleGroup="Chest"}onExerciseNameInput(s){this.newExerciseName=s.target.value}onExerciseSetsInput(s){this.newExerciseSets=s.target.value}onExerciseRepsInput(s){this.newExerciseReps=s.target.value}onExerciseMuscleGroupInput(s){this.newExerciseMuscleGroup=s.target.value}saveExercise(s){s.preventDefault();const e=this.newExerciseName.trim();if(!e)return;const t=Number(this.newExerciseSets)||0,r=Number(this.newExerciseReps)||0,i=this.selectedDayId,n=this.days.find(a=>a.id===i),o=((n==null?void 0:n.exercises.length)??0)+1,d={id:Date.now(),order:o,name:e,sets:t,reps:r,muscleGroup:this.newExerciseMuscleGroup.trim()||"General"};this.days=this.days.map(a=>a.id===i?{...a,exercises:[...a.exercises,d]}:a),this.cancelExerciseForm()}deleteExercise(s,e){this.days=this.days.map(t=>{if(t.id!==s)return t;const i=t.exercises.filter(n=>n.id!==e).map((n,o)=>({...n,order:o+1}));return{...t,exercises:i}})}renderSummaryCard(s,e,t){return c`
      <div class="summary-card">
        <div class="summary-icon">${t}</div>
        <div>
          <div class="summary-label">${s}</div>
          <div class="summary-value">${e}</div>
        </div>
      </div>
    `}render(){const s=this.selectedDay;return c`
      <section class="card-gradient">
        <div style="font-size: 15px; font-weight: 600;">Weekly Workout Plan</div>
        <div style="margin-top:4px;font-size:11px;color:#e0e7ff;">
          Build your perfect training schedule.
        </div>
      </section>

      <section class="card-white">
        <div class="section-title">Select Day</div>
        <div class="day-row">
          ${this.days.map(e=>c`
              <button
                class=${`day-pill ${e.id===this.selectedDayId?"active":""}`}
                @click=${()=>this.setDay(e.id)}
              >
                ${e.id}
              </button>
            `)}
        </div>
      </section>

      <section class="section">
        <div
          style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;"
        >
          <div>
            <div class="section-title">${s.label}</div>
            <div class="section-sub">
              ${s.exercises.length} exercises planned
            </div>
          </div>

          ${this.showExerciseForm?c`
                <button class="add-cancel-chip" @click=${this.cancelExerciseForm}>
                  <span>✕</span>
                  <span>Cancel</span>
                </button>
              `:c`
                <button
                  style="
                    border-radius:999px;
                    border:none;
                    padding:7px 12px;
                    font-size:11px;
                    color:#fff;
                    background:linear-gradient(90deg,#6366f1,#a855f7);
                    box-shadow:0 10px 24px rgba(79,70,229,0.4);
                    cursor:pointer;
                  "
                  @click=${this.openExerciseForm}
                >
                  + Add Exercise
                </button>
              `}
        </div>

        ${s.exercises.length===0?c`
              <div class="placeholder">
                <div
                  style="
                    width:48px;height:48px;border-radius:999px;
                    margin:0 auto 10px;
                    background:#e5e7eb;
                    display:flex;align-items:center;justify-content:center;
                    color:#4f46e5;
                  "
                >
                  🧬
                </div>
                <div>No exercises planned for this day</div>
                <div style="margin-top:4px;">Click "Add Exercise" to get started</div>
              </div>
            `:c`
              ${s.exercises.map(e=>c`
                  <div class="exercise-row">
                    <div class="exercise-number">${e.order}</div>
                    <div class="exercise-main">
                      <div class="exercise-name">${e.name}</div>
                      <div class="exercise-meta">
                        ${e.sets} sets × ${e.reps} reps
                      </div>
                    </div>
                    <div class="exercise-tag">${e.muscleGroup}</div>
                    <div
                      class="exercise-delete"
                      title="Delete"
                      @click=${()=>this.deleteExercise(s.id,e.id)}
                    >
                      🗑
                    </div>
                  </div>
                `)}
            `}
      </section>

      ${this.showExerciseForm?c`
            <section class="add-card">
              <div class="add-card-inner">
                <div class="add-card-header">
                  <div>
                    <div class="add-card-title">+ Add New Exercise</div>
                    <div class="add-card-sub">
                      Add to ${s.label}'s workout
                    </div>
                  </div>
                  <button class="add-cancel-chip" @click=${this.cancelExerciseForm}>
                    <span>✕</span>
                    <span>Cancel</span>
                  </button>
                </div>

                <form @submit=${this.saveExercise}>
                  <div class="add-form-grid">
                    <div>
                      <label class="field-label">Exercise Name</label>
                      <input
                        class="input-text"
                        type="text"
                        placeholder="e.g., Bench Press"
                        .value=${this.newExerciseName}
                        @input=${this.onExerciseNameInput}
                      />
                    </div>
                  </div>

                  <div class="add-form-grid">
                    <div>
                      <label class="field-label">Category</label>
                      <div class="select-wrapper">
                        <span class="select-dot"></span>
                        <select
                          class="select-input"
                          .value=${this.newExerciseMuscleGroup}
                          @change=${this.onExerciseMuscleGroupInput}
                        >
                          ${qe.map(e=>c`<option value=${e}>${e}</option>`)}
                        </select>
                        <span class="select-chevron">⌄</span>
                      </div>
                    </div>
                  </div>

                  <div class="add-form-grid add-form-grid--row">
                    <div>
                      <label class="field-label">Sets</label>
                      <input
                        class="input-number"
                        type="number"
                        min="1"
                        .value=${this.newExerciseSets}
                        @input=${this.onExerciseSetsInput}
                      />
                    </div>
                    <div>
                      <label class="field-label">Reps</label>
                      <input
                        class="input-number"
                        type="number"
                        min="1"
                        .value=${this.newExerciseReps}
                        @input=${this.onExerciseRepsInput}
                      />
                    </div>
                  </div>

                  <button type="submit" class="add-submit-btn">
                    <span>+</span>
                    <span>Add Exercise</span>
                  </button>
                </form>
              </div>
            </section>
          `:null}

      <section class="section">
        <div
          style="
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:8px;
            cursor:pointer;
          "
          @click=${this.toggleWeeklySummary}
        >
          <div style="display:flex;align-items:center;gap:8px;">
            <div class="summary-icon">🎯</div>
            <div>
              <div class="section-title">Weekly Summary</div>
            </div>
          </div>
          <div style="font-size:11px;color:#6b7280;">
            ${this.showWeeklySummary?"⌃":"⌄"}
          </div>
        </div>

        ${this.showWeeklySummary?c`
              <div class="summary-row">
                ${this.renderSummaryCard("Total Exercises",this.totalExercises,"🎯")}
                ${this.renderSummaryCard("Active Days",this.activeDays,"🧬")}
                ${this.renderSummaryCard("Today",s.exercises.length,"🔥")}
              </div>
            `:null}
      </section>
    `}};x.styles=N`
    :host {
      display: block;
      box-sizing: border-box;
    }

    *, *::before, *::after {
      box-sizing: inherit;
    }

    .card-gradient {
      border-radius: 24px;
      padding: 14px 16px;
      color: #fff;
      background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
      box-shadow: 0 16px 40px rgba(79, 70, 229, 0.35);
      margin-top: 8px;
    }

    .card-white,
    .section {
      margin-top: 10px;
      border-radius: 24px;
      background: #ffffff;
      padding: 16px;
      box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
    }

    .section-title {
      font-size: 12px;
      font-weight: 600;
      color: #0f172a;
    }

    .section-sub {
      font-size: 11px;
      color: #6b7280;
    }

    .day-row {
      display: flex;
      gap: 8px;
      margin-top: 12px;
      overflow-x: auto;
      padding-bottom: 3px;
    }

    .day-pill {
      min-width: 52px;
      border-radius: 999px;
      border: 1px solid #e5e7eb;
      background: #ffffff;
      padding: 6px 12px;
      font-size: 11px;
      color: #4b5563;
      cursor: pointer;
      text-align: center;
      white-space: nowrap;
    }

    .day-pill.active {
      border: none;
      background: linear-gradient(90deg, #6366f1, #a855f7);
      color: #ffffff;
      box-shadow: 0 10px 18px rgba(79, 70, 229, 0.4);
    }

    .exercise-row {
      display: flex;
      align-items: center;
      gap: 10px;
      border-radius: 20px;
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      padding: 8px 10px;
      margin-top: 6px;
    }

    .exercise-number {
      width: 30px;
      height: 30px;
      border-radius: 12px;
      background: linear-gradient(135deg, #6366f1, #a855f7);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 600;
    }

    .exercise-main {
      flex: 1;
      min-width: 0;
    }

    .exercise-name {
      font-size: 12px;
      font-weight: 600;
      color: #0f172a;
    }

    .exercise-meta {
      font-size: 11px;
      color: #6b7280;
    }

    .exercise-tag {
      font-size: 10px;
      padding: 3px 8px;
      border-radius: 999px;
      background: #fee2e2;
      color: #b91c1c;
      white-space: nowrap;
    }

    .exercise-delete {
      font-size: 14px;
      color: #ef4444;
      cursor: pointer;
    }

    .summary-row {
      display: grid;
      grid-template-columns: 1fr;
      gap: 8px;
      margin-top: 10px;
    }

    @media (min-width: 640px) {
      .summary-row {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }

    .summary-card {
      border-radius: 18px;
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      padding: 10px 10px;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
    }

    .summary-icon {
      width: 30px;
      height: 30px;
      border-radius: 999px;
      background: #e0e7ff;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .summary-label {
      color: #6b7280;
    }

    .summary-value {
      font-size: 13px;
      font-weight: 600;
      color: #111827;
    }

    /* add exercise card */

    .add-card {
      margin-top: 10px;
      border-radius: 24px;
      background: linear-gradient(135deg, #eef2ff, #fef2ff);
      padding: 1px;
      box-shadow: 0 16px 40px rgba(129, 140, 248, 0.25);
    }

    .add-card-inner {
      border-radius: 23px;
      background: #ffffff;
      padding: 16px 18px 18px;
    }

    .add-card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      margin-bottom: 10px;
    }

    .add-card-title {
      font-size: 12px;
      font-weight: 600;
      color: #0f172a;
    }

    .add-card-sub {
      font-size: 11px;
      color: #6b7280;
    }

    .add-cancel-chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 11px;
      padding: 6px 10px;
      border-radius: 999px;
      border: 1px solid #e5e7eb;
      background: #f9fafb;
      color: #4b5563;
      cursor: pointer;
      white-space: nowrap;
    }

    .add-form-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
      margin-top: 8px;
      font-size: 11px;
    }

    @media (min-width: 640px) {
      .add-form-grid--row {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    .field-label {
      display: block;
      margin-bottom: 4px;
      color: #4b5563;
      font-size: 11px;
      font-weight: 500;
    }

    .input-text,
    .input-number {
      width: 100%;
      border-radius: 999px;
      border: 1px solid #d1d5db;
      background: #f9fafb;
      padding: 7px 10px;
      font-size: 11px;
      color: #111827;
      font-family: inherit;
    }

    .input-text:focus,
    .input-number:focus,
    .select-input:focus {
      outline: none;
      background: #ffffff;
      border-color: #6366f1;
      box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.4);
    }

    .select-wrapper {
      position: relative;
      width: 100%;
    }

    .select-input {
      width: 100%;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      border-radius: 999px;
      border: 1px solid #fecaca;
      background: #fef2f2;
      padding: 7px 30px 7px 30px;
      font-size: 11px;
      color: #b91c1c;
      font-family: inherit;
      cursor: pointer;
    }

    .select-dot {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      width: 10px;
      height: 10px;
      border-radius: 999px;
      background: #fb7185;
    }

    .select-chevron {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 10px;
      color: #6b7280;
      pointer-events: none;
    }

    .add-submit-btn {
      margin-top: 14px;
      width: 100%;
      border-radius: 999px;
      border: none;
      background: linear-gradient(90deg, #6366f1, #a855f7);
      color: #ffffff;
      font-size: 12px;
      font-weight: 600;
      padding: 9px;
      cursor: pointer;
      box-shadow: 0 14px 32px rgba(79, 70, 229, 0.45);
    }

    .add-submit-btn span:first-child {
      margin-right: 4px;
    }

    .placeholder {
      margin-top: 18px;
      border-radius: 20px;
      border: 1px dashed #e5e7eb;
      background: #f9fafb;
      padding: 28px 16px;
      text-align: center;
      font-size: 12px;
      color: #6b7280;
    }
  `;m([f()],x.prototype,"selectedDayId",2);m([f()],x.prototype,"days",2);m([f()],x.prototype,"showExerciseForm",2);m([f()],x.prototype,"newExerciseName",2);m([f()],x.prototype,"newExerciseSets",2);m([f()],x.prototype,"newExerciseReps",2);m([f()],x.prototype,"newExerciseMuscleGroup",2);m([f()],x.prototype,"showWeeklySummary",2);x=m([T("planner-page")],x);var Je=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,Y=(s,e,t,r)=>{for(var i=r>1?void 0:r?Ze(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&Je(e,t,i),i};function X(){return new Date().toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"})}const Qe=[{id:1,dateLabel:"Wednesday, November 19, 2025",durationMinutes:45,completionPercent:67,notes:'"Great workout! Felt strong on bench press."',exercises:[{id:1,name:"Bench Press",completed:!0},{id:2,name:"Push-ups",completed:!0},{id:3,name:"Dumbbell Flyes",completed:!1}]},{id:2,dateLabel:"Monday, November 17, 2025",durationMinutes:60,completionPercent:100,notes:'"Leg day was tough but rewarding."',exercises:[{id:1,name:"Squats",completed:!0},{id:2,name:"Leg Press",completed:!0}]}];let C=class extends g{constructor(){super(...arguments),this.logEntries=Qe,this.showNewEntry=!1,this.newNotes=""}get totalEntries(){return this.logEntries.length}get completedToday(){const s=X();return this.logEntries.filter(e=>e.dateLabel===s&&e.completionPercent===100).length}get thisWeek(){return this.logEntries.length}openNewEntry(){this.showNewEntry=!0}cancelNewEntry(){this.showNewEntry=!1,this.newNotes=""}onNotesInput(s){this.newNotes=s.target.value}saveEntry(s){s.preventDefault();const e=this.newNotes.trim();if(!e)return;const t={id:Date.now(),dateLabel:X(),durationMinutes:0,completionPercent:0,notes:e,exercises:[]};this.logEntries=[t,...this.logEntries],this.newNotes="",this.showNewEntry=!1}renderSummaryCard(s,e,t){return c`
      <div class="summary-card">
        <div class="summary-icon">${t}</div>
        <div>
          <div class="summary-label">${s}</div>
          <div class="summary-value">${e}</div>
        </div>
      </div>
    `}renderLogEntry(s){const e=s.completionPercent===100;return c`
      <section class="log-card">
        <div class="log-card-header">
          <div class="log-header-left">
            <div class="log-date-icon">📅</div>
            <div>
              <div class="log-date-title">${s.dateLabel}</div>
              ${s.durationMinutes?c`<div class="log-date-sub">
                    ${s.durationMinutes} minutes
                  </div>`:c`<div class="log-date-sub">Notes only</div>`}
            </div>
          </div>
          <div class="log-badge ${e?"":"partial"}">
            ${e?c`100% Complete`:c`${s.completionPercent}% Complete`}
          </div>
        </div>

        <div class="log-body">
          ${s.exercises.map(t=>{const r=t.completed?"":"incomplete";return c`
              <div class="log-exercise-row ${r}">
                <div class="log-check ${r}">
                  ${t.completed?c`✓`:null}
                </div>
                <div>${t.name}</div>
              </div>
            `})}
          <div class="log-notes">${s.notes}</div>
        </div>
      </section>
    `}render(){return c`
      <!-- Banner with Add / Cancel -->
      <section class="card-gradient">
        <div class="banner-left">
          <div class="banner-icon">📗</div>
          <div>
            <div class="banner-text-title">Exercise Log</div>
            <div class="banner-text-sub">
              Track your completed workouts.
            </div>
          </div>
        </div>

        ${this.showNewEntry?c`
              <button
                class="banner-actions-btn cancel"
                type="button"
                @click=${this.cancelNewEntry}
              >
                Cancel
              </button>
            `:c`
              <button
                class="banner-actions-btn add"
                type="button"
                @click=${this.openNewEntry}
              >
                <span>+</span>
                <span>Add Entry</span>
              </button>
            `}
      </section>

      <!-- Summary -->
      <section class="card-white">
        <div class="summary-row">
          ${this.renderSummaryCard("Total Entries",this.totalEntries,"📅")}
          ${this.renderSummaryCard("Completed Today",this.completedToday,"✅")}
          ${this.renderSummaryCard("This Week",this.thisWeek,"📈")}
        </div>
      </section>

      <!-- New Entry Form -->
      ${this.showNewEntry?c`
            <section class="new-entry-card">
              <div class="new-entry-inner">
                <div class="new-entry-header">
                  <div>
                    <div class="new-entry-title">+ New Log Entry</div>
                    <div class="new-entry-sub">${X()}</div>
                  </div>
                </div>

                <form @submit=${this.saveEntry}>
                  <label class="field-label">Workout Notes</label>
                  <textarea
                    class="notes-input"
                    .value=${this.newNotes}
                    @input=${this.onNotesInput}
                    placeholder="How did your workout go? Any achievements or challenges?"
                  ></textarea>

                  <button type="submit" class="save-btn">Save Entry</button>
                </form>
              </div>
            </section>
          `:null}

      <!-- Existing log entries -->
      ${this.logEntries.map(s=>this.renderLogEntry(s))}
    `}};C.styles=N`
    :host {
      display: block;
      box-sizing: border-box;
    }
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    /* top banner */

    .card-gradient {
      border-radius: 24px;
      padding: 14px 16px;
      color: #fff;
      background: linear-gradient(90deg, #22c55e, #16a34a);
      box-shadow: 0 16px 40px rgba(22, 163, 74, 0.35);
      margin-top: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    .banner-text-title {
      font-size: 15px;
      font-weight: 600;
    }
    .banner-text-sub {
      font-size: 11px;
      color: #e5f9ed;
    }

    .banner-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .banner-icon {
      width: 32px;
      height: 32px;
      border-radius: 999px;
      background: #16a34a;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
    }

    .banner-actions-btn {
      border-radius: 999px;
      border: none;
      padding: 7px 14px;
      font-size: 11px;
      cursor: pointer;
      white-space: nowrap;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .banner-actions-btn.add {
      background: #16a34a;
      color: #f0fdf4;
      box-shadow: 0 10px 24px rgba(22, 163, 74, 0.5);
    }

    .banner-actions-btn.cancel {
      background: #f3f4f6;
      color: #4b5563;
      border: 1px solid #e5e7eb;
    }

    /* summary cards */

    .card-white {
      margin-top: 10px;
      border-radius: 24px;
      background: #ffffff;
      padding: 16px;
      box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
    }

    .summary-row {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
      margin-top: 4px;
    }

    @media (min-width: 640px) {
      .summary-row {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }

    .summary-card {
      border-radius: 22px;
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      padding: 10px 12px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 11px;
    }

    .summary-icon {
      width: 32px;
      height: 32px;
      border-radius: 999px;
      background: #dcfce7;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
    }

    .summary-label {
      color: #6b7280;
    }
    .summary-value {
      font-size: 13px;
      font-weight: 600;
      color: #111827;
    }

    /* new entry card */

    .new-entry-card {
      margin-top: 10px;
      border-radius: 24px;
      background: #bbf7d0;
      padding: 2px;
      box-shadow: 0 16px 40px rgba(22, 163, 74, 0.25);
    }

    .new-entry-inner {
      border-radius: 22px;
      background: #ffffff;
      padding: 14px 16px 16px;
    }

    .new-entry-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }

    .new-entry-title {
      font-size: 12px;
      font-weight: 600;
      color: #0f172a;
    }

    .new-entry-sub {
      font-size: 11px;
      color: #6b7280;
    }

    .field-label {
      display: block;
      margin-top: 12px;
      margin-bottom: 4px;
      color: #4b5563;
      font-size: 11px;
      font-weight: 500;
    }

    textarea.notes-input {
      width: 100%;
      min-height: 80px;
      border-radius: 18px;
      border: 1px solid #d1d5db;
      background: #f9fafb;
      padding: 8px 10px;
      font-size: 12px;
      font-family: inherit;
      resize: vertical;
      color: #111827;
    }

    textarea.notes-input:focus {
      outline: none;
      border-color: #16a34a;
      background: #ffffff;
      box-shadow: 0 0 0 1px rgba(22, 163, 74, 0.35);
    }

    .save-btn {
      margin-top: 12px;
      width: 100%;
      border-radius: 999px;
      border: none;
      background: #16a34a;
      color: #f0fdf4;
      font-size: 12px;
      font-weight: 600;
      padding: 9px;
      cursor: pointer;
      box-shadow: 0 12px 28px rgba(22, 163, 74, 0.6);
    }

    /* log entry cards */

    .log-card {
      margin-top: 12px;
      border-radius: 24px;
      background: #ffffff;
      box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
      overflow: hidden;
    }

    .log-card-header {
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }

    .log-header-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .log-date-icon {
      width: 32px;
      height: 32px;
      border-radius: 999px;
      background: #4f46e5;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 18px;
    }

    .log-date-title {
      font-size: 12px;
      font-weight: 600;
      color: #111827;
    }

    .log-date-sub {
      font-size: 11px;
      color: #6b7280;
    }

    .log-badge {
      font-size: 10px;
      padding: 4px 10px;
      border-radius: 999px;
      background: #16a34a;
      color: #f0fdf4;
      font-weight: 500;
      white-space: nowrap;
    }

    .log-badge.partial {
      background: #e5e7eb;
      color: #4b5563;
    }

    .log-body {
      padding: 12px 16px 14px;
      background: #f9fafb;
    }

    .log-exercise-row {
      border-radius: 16px;
      padding: 8px 10px;
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      background: #ecfdf5;
      color: #065f46;
    }

    .log-exercise-row.incomplete {
      background: #f3f4f6;
      color: #4b5563;
    }

    .log-check {
      width: 16px;
      height: 16px;
      border-radius: 999px;
      border: 2px solid #16a34a;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      background: #bbf7d0;
    }

    .log-check.incomplete {
      border-color: #d1d5db;
      background: #ffffff;
    }

    .log-notes {
      margin-top: 8px;
      padding: 8px 10px;
      border-radius: 16px;
      background: #ffffff;
      font-size: 11px;
      color: #4b5563;
      font-style: italic;
    }
  `;Y([f()],C.prototype,"logEntries",2);Y([f()],C.prototype,"showNewEntry",2);Y([f()],C.prototype,"newNotes",2);C=Y([T("exercise-log-page")],C);var Xe=Object.defineProperty,et=Object.getOwnPropertyDescriptor,R=(s,e,t,r)=>{for(var i=r>1?void 0:r?et(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&Xe(e,t,i),i};let S=class extends g{constructor(){super(...arguments),this.diaryEntries=[...Ve],this.newMood="Good",this.newDiaryText="",this.showNewEntryForm=!1}get totalEntries(){return this.diaryEntries.length}get greatDays(){return this.diaryEntries.filter(s=>s.mood==="Great").length}get thisWeek(){return this.diaryEntries.length}setMood(s){this.newMood=s}onDiaryInput(s){this.newDiaryText=s.target.value}startNewEntry(){this.showNewEntryForm=!0,this.newMood="Good",this.newDiaryText=""}cancelNewEntry(){this.showNewEntryForm=!1,this.newMood="Good",this.newDiaryText=""}saveDiary(s){if(s.preventDefault(),!this.newDiaryText.trim())return;const e=new Date().toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"}),t={id:Date.now(),dateLabel:e,mood:this.newMood,text:this.newDiaryText.trim()};this.diaryEntries=[t,...this.diaryEntries],this.cancelNewEntry()}render(){const s=new Date().toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"});return c`
      <!-- Header -->
      <section class="card-gradient">
        <div>
          <div class="card-gradient-main-title">Diary</div>
          <div class="card-gradient-sub">Reflect on your fitness journey.</div>
        </div>
        <button class="new-entry-btn" @click=${this.startNewEntry}>
          <span>＋</span>
          <span>New Entry</span>
        </button>
      </section>

      <!-- Stats -->
      <section class="card-white">
        <div class="stat-chip-row">
          ${this.renderStatChip("Total Entries",this.totalEntries,"💗")}
          ${this.renderStatChip("Great Days",this.greatDays,"😊")}
          ${this.renderStatChip("This Week",this.thisWeek,"💜")}
        </div>
      </section>

      <!-- New entry card -->
      ${this.showNewEntryForm?c`
            <section class="section">
              <div class="new-entry-header">
                <div style="display:flex;align-items:center;gap:8px;">
                  <div class="diary-entry-icon">💗</div>
                  <div>
                    <div class="section-title">New Diary Entry</div>
                    <div class="section-sub">${s}</div>
                  </div>
                </div>
                <button class="cancel-chip" @click=${this.cancelNewEntry}>
                  ✕ Cancel
                </button>
              </div>

              <div style="margin-top:14px;">
                <div class="section-title" style="font-size:12px;">
                  How are you feeling?
                </div>
                <div class="mood-grid">
                  ${this.renderMoodButton("Great","😄")}
                  ${this.renderMoodButton("Good","🙂")}
                  ${this.renderMoodButton("Okay","😐")}
                  ${this.renderMoodButton("Tough","😵‍💫")}
                </div>
              </div>

              <div style="margin-top:14px;">
                <div class="section-title" style="font-size:12px;">
                  Your Thoughts &amp; Feelings
                </div>
                <textarea
                  class="diary-input"
                  .value=${this.newDiaryText}
                  @input=${this.onDiaryInput}
                  placeholder="How did you feel during and after your workout? What’s on your mind?"
                ></textarea>
              </div>

              <button class="save-btn" @click=${this.saveDiary}>
                Save Entry
              </button>
            </section>
          `:null}

      <!-- Existing entries -->
      ${this.diaryEntries.map(e=>this.renderDiaryEntry(e))}
    `}renderStatChip(s,e,t){return c`
      <div class="stat-chip">
        <div class="stat-icon">${t}</div>
        <div>
          <div class="stat-title">${s}</div>
          <div class="stat-value">${e}</div>
        </div>
      </div>
    `}renderMoodButton(s,e){const t=this.newMood===s;return c`
      <button
        type="button"
        class=${`mood-btn ${t?"active":""}`}
        @click=${()=>this.setMood(s)}
      >
        <div class="mood-emoji">${e}</div>
        <div>${s}</div>
      </button>
    `}renderDiaryEntry(s){const e=s.mood==="Great"?"😄":s.mood==="Good"?"🙂":s.mood==="Okay"?"😐":"😵‍💫";return c`
      <section class="diary-entry-card">
        <div class="diary-entry-header">
          <div style="display:flex;align-items:center;gap:8px;">
            <div class="diary-entry-icon">💗</div>
            <div class="diary-entry-date">${s.dateLabel}</div>
          </div>
          <div class="diary-entry-mood">${e} ${s.mood}</div>
        </div>
        <div class="diary-entry-text">${s.text}</div>
      </section>
    `}};S.styles=N`
    :host {
      display: block;
      color: #020617;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text',
        'Segoe UI', sans-serif;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    .card-gradient {
      border-radius: 24px;
      padding: 18px 18px;
      color: #fff;
      background: linear-gradient(90deg, #fb7185, #ec4899, #a855f7);
      box-shadow: 0 16px 40px rgba(236, 72, 153, 0.4);
      margin-top: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    .card-gradient-main-title {
      font-size: 18px;
      font-weight: 700;
    }

    .card-gradient-sub {
      font-size: 11px;
      color: #fee2e2;
      margin-top: 4px;
    }

    .new-entry-btn {
      border-radius: 999px;
      border: none;
      background: #ec4899;
      background-image: linear-gradient(90deg, #f97316, #ec4899);
      color: #ffffff;
      padding: 8px 18px;
      font-size: 12px;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
      box-shadow: 0 10px 24px rgba(248, 113, 113, 0.6);
      white-space: nowrap;
    }

    .new-entry-btn span:first-child {
      font-size: 14px;
    }

    .card-white {
      margin-top: 12px;
      border-radius: 24px;
      background: #ffffff;
      padding: 16px;
      box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
    }

    .stat-chip-row {
      display: grid;
      grid-template-columns: 1fr;
      gap: 8px;
    }

    @media (min-width: 640px) {
      .stat-chip-row {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }

    .stat-chip {
      border-radius: 18px;
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      padding: 10px;
      font-size: 11px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .stat-icon {
      width: 26px;
      height: 26px;
      border-radius: 999px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fee2e2;
    }

    .stat-title {
      color: #6b7280;
    }

    .stat-value {
      font-size: 13px;
      font-weight: 600;
      color: #111827;
    }

    .section {
      margin-top: 12px;
      border-radius: 24px;
      background: #ffffff;
      padding: 16px;
      box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
    }

    .section-title {
      font-size: 12px;
      font-weight: 600;
      color: #0f172a;
    }

    .section-sub {
      font-size: 11px;
      color: #6b7280;
    }

    .new-entry-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }

    .cancel-chip {
      border-radius: 999px;
      border: 1px solid #e5e7eb;
      background: #f9fafb;
      padding: 6px 14px;
      font-size: 11px;
      color: #4b5563;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      cursor: pointer;
      white-space: nowrap;
    }

    .mood-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 8px;
      margin-top: 10px;
    }

    @media (min-width: 640px) {
      .mood-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
    }

    .mood-btn {
      border-radius: 18px;
      border: 1px solid #e5e7eb;
      background: #f9fafb;
      padding: 8px 6px;
      font-size: 11px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      cursor: pointer;
      transition: background 0.15s ease, border-color 0.15s ease,
        box-shadow 0.15s ease;
    }

    .mood-btn.active {
      border-color: #3b82f6;
      background: #eff6ff;
      box-shadow: 0 0 0 1px #3b82f6;
    }

    .mood-emoji {
      font-size: 18px;
    }

    .diary-input {
      margin-top: 10px;
      width: 100%;
      min-height: 120px;
      border-radius: 18px;
      border: 1px solid #e5e7eb;
      background: #f9fafb;
      padding: 12px 14px;
      font-size: 12px;
      font-family: inherit;
      resize: vertical;
      color: #111827;
    }

    .diary-input:focus {
      outline: none;
      border-color: #fb7185;
      background: #ffffff;
      box-shadow: 0 0 0 1px rgba(248, 113, 113, 0.4);
    }

    .save-btn {
      margin-top: 12px;
      width: 100%;
      border-radius: 999px;
      border: none;
      background: linear-gradient(90deg, #fb7185, #ec4899);
      color: #ffffff;
      font-size: 12px;
      font-weight: 600;
      padding: 9px;
      cursor: pointer;
      box-shadow: 0 12px 28px rgba(236, 72, 153, 0.4);
    }

    .diary-entry-card {
      margin-top: 10px;
      border-radius: 22px;
      background: #fee2e2;
      padding: 12px 14px;
      box-shadow: 0 10px 30px rgba(248, 113, 113, 0.2);
    }

    .diary-entry-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }

    .diary-entry-date {
      font-size: 12px;
      font-weight: 600;
      color: #111827;
    }

    .diary-entry-mood {
      border-radius: 999px;
      background: #dcfce7;
      padding: 4px 10px;
      font-size: 11px;
      color: #15803d;
      font-weight: 500;
      white-space: nowrap;
    }

    .diary-entry-text {
      margin-top: 8px;
      font-size: 12px;
      color: #374151;
    }

    .diary-entry-icon {
      width: 30px;
      height: 30px;
      border-radius: 999px;
      background: #fb7185;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      margin-right: 6px;
    }
  `;R([f()],S.prototype,"diaryEntries",2);R([f()],S.prototype,"newMood",2);R([f()],S.prototype,"newDiaryText",2);R([f()],S.prototype,"showNewEntryForm",2);S=R([T("diary-page")],S);var tt=Object.getOwnPropertyDescriptor,it=(s,e,t,r)=>{for(var i=r>1?void 0:r?tt(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=o(i)||i);return i};let ee=class extends g{render(){return c`
      <section class="section">
        <div class="title">Calorie Tracker</div>
        <div class="sub">
          This is a placeholder for now. Later you can add daily calories, macros,
          or connect to another tool here.
        </div>
      </section>
    `}};ee.styles=N`
    :host {
      display: block;
    }

    .section {
      margin-top: 10px;
      border-radius: 24px;
      background: #ffffff;
      padding: 16px;
      box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
    }

    .title {
      font-size: 14px;
      font-weight: 600;
      color: #0f172a;
    }

    .sub {
      margin-top: 4px;
      font-size: 11px;
      color: #6b7280;
    }
  `;ee=it([T("calorie-tracker-page")],ee);var st=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,$e=(s,e,t,r)=>{for(var i=r>1?void 0:r?rt(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&st(e,t,i),i};let G=class extends g{constructor(){super(...arguments),this.activeTab="planner"}setTab(s){this.activeTab=s}renderTab(s,e){const t=this.activeTab===s;return c`
      <button
        class=${`tab ${t?"active":""}`}
        @click=${()=>this.setTab(s)}
      >
        ${e}
      </button>
    `}render(){return c`
      <header>
        <div class="header-inner">
          <div class="brand">
            <div class="logo">📘</div>
            <div>
              <div class="brand-text-title">Planner Fit</div>
              <div class="brand-text-sub">Plan • log • reflect</div>
            </div>
          </div>
          <button class="settings-btn">
            <span>Settings</span>
            <span>⚙️</span>
          </button>
        </div>

        <div class="header-inner">
          <div class="tabs-wrap">
            <div class="tabs">
              ${this.renderTab("planner","Planner")}
              ${this.renderTab("log","Exercise Log")}
              ${this.renderTab("diary","Diary")}
              ${this.renderTab("calories","Calorie Tracker")}
            </div>
          </div>
        </div>
      </header>

      <div class="page">
        ${this.activeTab==="planner"?c`<planner-page></planner-page>`:this.activeTab==="log"?c`<exercise-log-page></exercise-log-page>`:this.activeTab==="diary"?c`<diary-page></diary-page>`:c`<calorie-tracker-page></calorie-tracker-page>`}
      </div>
    `}};G.styles=N`
    :host {
      display: block;
      min-height: 100vh;
      background: linear-gradient(to bottom, #eef2ff, #f7f9ff, #ffffff);
      color: #020617;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text',
        'Segoe UI', sans-serif;
      box-sizing: border-box;
    }

    *, *::before, *::after {
      box-sizing: inherit;
    }

    .page {
      max-width: 1100px;
      margin: 0 auto;
      padding: 12px 12px 32px;
    }

    header {
      position: sticky;
      top: 0;
      z-index: 10;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid #e5e7eb;
      margin: 0 -12px 8px;
      padding: 8px 12px 10px;
    }

    .header-inner {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .logo {
      width: 36px;
      height: 36px;
      border-radius: 16px;
      background: linear-gradient(135deg, #6366f1, #a855f7);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 20px rgba(88, 80, 236, 0.35);
      font-size: 18px;
    }

    .brand-text-title {
      font-size: 14px;
      font-weight: 600;
    }

    .brand-text-sub {
      font-size: 11px;
      color: #6b7280;
    }

    .settings-btn {
      border-radius: 999px;
      border: 1px solid #e5e7eb;
      background: #f9fafb;
      padding: 6px 10px;
      font-size: 11px;
      color: #4b5563;
      display: none;
      align-items: center;
      gap: 2px;
      cursor: pointer;
    }

    @media (min-width: 640px) {
      .settings-btn {
        display: inline-flex;
      }
    }

    .tabs-wrap {
      margin-top: 8px;
      overflow-x: auto;
      padding-bottom: 4px;
    }

    .tabs {
      display: inline-flex;
      gap: 4px;
      padding: 3px;
      border-radius: 999px;
      background: #e5e7eb;
      font-size: 11px;
    }

    .tab {
      border-radius: 999px;
      padding: 6px 12px;
      cursor: pointer;
      color: #6b7280;
      border: none;
      background: transparent;
      font: inherit;
      white-space: nowrap;
    }

    .tab.active {
      background: #ffffff;
      color: #4f46e5;
      box-shadow: 0 2px 8px rgba(148, 163, 184, 0.5);
    }
  `;$e([f()],G.prototype,"activeTab",2);G=$e([T("planner-fit-app")],G);var nt=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,_e=(s,e,t,r)=>{for(var i=r>1?void 0:r?ot(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(e,t,i):o(i))||i);return r&&i&&nt(e,t,i),i};let q=class extends g{constructor(){super(...arguments),this.name="Lit App"}render(){return c`<h1>Hello, ${this.name}</h1>`}};q.styles=[N`
            :host {
                display: block;
            }
        `];_e([we()],q.prototype,"name",2);q=_e([T("lit-app")],q);
