(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=globalThis,se=V.ShadowRoot&&(V.ShadyCSS===void 0||V.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ye=Symbol(),oe=new WeakMap;let Ce=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==ye)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(se&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=oe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&oe.set(t,e))}return e}toString(){return this.cssText}};const N=n=>new Ce(typeof n=="string"?n:n+"",void 0,ye),Pe=(n,e)=>{if(se)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=V.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,n.appendChild(s)}},le=se?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return N(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Me,defineProperty:Ne,getOwnPropertyDescriptor:Ie,getOwnPropertyNames:ze,getOwnPropertySymbols:Te,getPrototypeOf:Oe}=Object,A=globalThis,de=A.trustedTypes,Le=de?de.emptyScript:"",Q=A.reactiveElementPolyfillSupport,W=(n,e)=>n,q={toAttribute(n,e){switch(e){case Boolean:n=n?Le:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},re=(n,e)=>!Me(n,e),ce={attribute:!0,type:String,converter:q,reflect:!1,useDefault:!1,hasChanged:re};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),A.litPropertyMetadata??(A.litPropertyMetadata=new WeakMap);let I=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ce){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Ne(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:r}=Ie(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:i,set(a){const d=i==null?void 0:i.call(this);r==null||r.call(this,a),this.requestUpdate(e,d,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ce}static _$Ei(){if(this.hasOwnProperty(W("elementProperties")))return;const e=Oe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(W("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(W("properties"))){const t=this.properties,s=[...ze(t),...Te(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(le(i))}else e!==void 0&&t.push(le(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Pe(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var r;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const a=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:q).toAttribute(t,s.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){var r,a;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const d=s.getPropertyOptions(i),o=typeof d.converter=="function"?{fromAttribute:d.converter}:((r=d.converter)==null?void 0:r.fromAttribute)!==void 0?d.converter:q;this._$Em=i;const p=o.fromAttribute(t,d.type);this[i]=p??((a=this._$Ej)==null?void 0:a.get(i))??p,this._$Em=null}}requestUpdate(e,t,s){var i;if(e!==void 0){const r=this.constructor,a=this[e];if(s??(s=r.getPropertyOptions(e)),!((s.hasChanged??re)(a,t)||s.useDefault&&s.reflect&&a===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(r._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:r},a){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),r!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,a]of this._$Ep)this[r]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,a]of i){const{wrapped:d}=a,o=this[r];d!==!0||this._$AL.has(r)||o===void 0||this.C(r,void 0,a,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};I.elementStyles=[],I.shadowRootOptions={mode:"open"},I[W("elementProperties")]=new Map,I[W("finalized")]=new Map,Q==null||Q({ReactiveElement:I}),(A.reactiveElementVersions??(A.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=globalThis,K=F.trustedTypes,pe=K?K.createPolicy("lit-html",{createHTML:n=>n}):void 0,ve="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,we="?"+_,Re=`<${we}>`,P=document,U=()=>P.createComment(""),j=n=>n===null||typeof n!="object"&&typeof n!="function",ae=Array.isArray,We=n=>ae(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",ee=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,he=/-->/g,ue=/>/g,k=RegExp(`>|${ee}(?:([^\\s"'>=/]+)(${ee}*=${ee}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ge=/'/g,fe=/"/g,$e=/^(?:script|style|textarea|title)$/i,Fe=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),l=Fe(1),z=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),me=new WeakMap,D=P.createTreeWalker(P,129);function Ee(n,e){if(!ae(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return pe!==void 0?pe.createHTML(e):e}const Ue=(n,e)=>{const t=n.length-1,s=[];let i,r=e===2?"<svg>":e===3?"<math>":"",a=R;for(let d=0;d<t;d++){const o=n[d];let p,g,h=-1,$=0;for(;$<o.length&&(a.lastIndex=$,g=a.exec(o),g!==null);)$=a.lastIndex,a===R?g[1]==="!--"?a=he:g[1]!==void 0?a=ue:g[2]!==void 0?($e.test(g[2])&&(i=RegExp("</"+g[2],"g")),a=k):g[3]!==void 0&&(a=k):a===k?g[0]===">"?(a=i??R,h=-1):g[1]===void 0?h=-2:(h=a.lastIndex-g[2].length,p=g[1],a=g[3]===void 0?k:g[3]==='"'?fe:ge):a===fe||a===ge?a=k:a===he||a===ue?a=R:(a=k,i=void 0);const E=a===k&&n[d+1].startsWith("/>")?" ":"";r+=a===R?o+Re:h>=0?(s.push(p),o.slice(0,h)+ve+o.slice(h)+_+E):o+_+(h===-2?d:E)}return[Ee(n,r+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class H{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let r=0,a=0;const d=e.length-1,o=this.parts,[p,g]=Ue(e,t);if(this.el=H.createElement(p,s),D.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=D.nextNode())!==null&&o.length<d;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(ve)){const $=g[a++],E=i.getAttribute(h).split(_),G=/([.?@])?(.*)/.exec($);o.push({type:1,index:r,name:G[2],strings:E,ctor:G[1]==="."?He:G[1]==="?"?Be:G[1]==="@"?Ye:Z}),i.removeAttribute(h)}else h.startsWith(_)&&(o.push({type:6,index:r}),i.removeAttribute(h));if($e.test(i.tagName)){const h=i.textContent.split(_),$=h.length-1;if($>0){i.textContent=K?K.emptyScript:"";for(let E=0;E<$;E++)i.append(h[E],U()),D.nextNode(),o.push({type:2,index:++r});i.append(h[$],U())}}}else if(i.nodeType===8)if(i.data===we)o.push({type:2,index:r});else{let h=-1;for(;(h=i.data.indexOf(_,h+1))!==-1;)o.push({type:7,index:r}),h+=_.length-1}r++}}static createElement(e,t){const s=P.createElement("template");return s.innerHTML=e,s}}function T(n,e,t=n,s){var a,d;if(e===z)return e;let i=s!==void 0?(a=t._$Co)==null?void 0:a[s]:t._$Cl;const r=j(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((d=i==null?void 0:i._$AO)==null||d.call(i,!1),r===void 0?i=void 0:(i=new r(n),i._$AT(n,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=T(n,i._$AS(n,e.values),i,s)),e}class je{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??P).importNode(t,!0);D.currentNode=i;let r=D.nextNode(),a=0,d=0,o=s[0];for(;o!==void 0;){if(a===o.index){let p;o.type===2?p=new B(r,r.nextSibling,this,e):o.type===1?p=new o.ctor(r,o.name,o.strings,this,e):o.type===6&&(p=new Ge(r,this,e)),this._$AV.push(p),o=s[++d]}a!==(o==null?void 0:o.index)&&(r=D.nextNode(),a++)}return D.currentNode=P,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class B{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=T(this,e,t),j(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==z&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):We(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&j(this._$AH)?this._$AA.nextSibling.data=e:this.T(P.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=H.createElement(Ee(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(t);else{const a=new je(i,this),d=a.u(this.options);a.p(t),this.T(d),this._$AH=a}}_$AC(e){let t=me.get(e.strings);return t===void 0&&me.set(e.strings,t=new H(e)),t}k(e){ae(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const r of e)i===t.length?t.push(s=new B(this.O(U()),this.O(U()),this,this.options)):s=t[i],s._$AI(r),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}_$AI(e,t=this,s,i){const r=this.strings;let a=!1;if(r===void 0)e=T(this,e,t,0),a=!j(e)||e!==this._$AH&&e!==z,a&&(this._$AH=e);else{const d=e;let o,p;for(e=r[0],o=0;o<r.length-1;o++)p=T(this,d[s+o],t,o),p===z&&(p=this._$AH[o]),a||(a=!j(p)||p!==this._$AH[o]),p===u?e=u:e!==u&&(e+=(p??"")+r[o+1]),this._$AH[o]=p}a&&!i&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class He extends Z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}}class Be extends Z{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}}class Ye extends Z{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=T(this,e,t,0)??u)===z)return;const s=this._$AH,i=e===u&&s!==u||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==u&&(s===u||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ge{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){T(this,e)}}const te=F.litHtmlPolyfillSupport;te==null||te(H,B),(F.litHtmlVersions??(F.litHtmlVersions=[])).push("3.3.1");const Ve=(n,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const r=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new B(e.insertBefore(U(),r),r,void 0,t??{})}return i._$AI(n),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis;class y extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ve(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return z}}var xe;y._$litElement$=!0,y.finalized=!0,(xe=C.litElementHydrateSupport)==null||xe.call(C,{LitElement:y});const ne=C.litElementPolyfillSupport;ne==null||ne({LitElement:y});(C.litElementVersions??(C.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=n=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(n,e)}):customElements.define(n,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qe={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:re},Ke=(n=qe,e,t)=>{const{kind:s,metadata:i}=t;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),s==="setter"&&((n=Object.create(n)).wrapped=!0),r.set(t.name,n),s==="accessor"){const{name:a}=t;return{set(d){const o=e.get.call(this);e.set.call(this,d),this.requestUpdate(a,o,n)},init(d){return d!==void 0&&this.C(a,void 0,n,d),d}}}if(s==="setter"){const{name:a}=t;return function(d){const o=this[a];e.call(this,d),this.requestUpdate(a,o,n)}}throw Error("Unsupported decorator location: "+s)};function _e(n){return(e,t)=>typeof t=="object"?Ke(n,e,t):((s,i,r)=>{const a=i.hasOwnProperty(r);return i.constructor.createProperty(r,s),a?Object.getOwnPropertyDescriptor(i,r):void 0})(n,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function c(n){return _e({...n,state:!0,attribute:!1})}const Se=[{id:"Mon",label:"Monday",exercises:[{id:1,order:1,name:"Bench Press",sets:4,reps:10,weight:"135 lbs",muscleGroup:"Chest"},{id:2,order:2,name:"Push-ups",sets:3,reps:15,weight:"",muscleGroup:"Chest"}]},{id:"Tue",label:"Tuesday",exercises:[]},{id:"Wed",label:"Wednesday",exercises:[]},{id:"Thu",label:"Thursday",exercises:[]},{id:"Fri",label:"Friday",exercises:[]},{id:"Sat",label:"Saturday",exercises:[]},{id:"Sun",label:"Sunday",exercises:[]}],Je=["Chest","Back","Legs","Shoulders","Arms","Core","Cardio"],Xe=[{id:1,dateLabel:"Wednesday, November 19, 2025",mood:"Great",text:"Today was an amazing workout day! I pushed through my limits and felt incredibly energized afterwards. My confidence is growing with each session."},{id:2,dateLabel:"Tuesday, November 18, 2025",mood:"Good",text:"Solid workout today. Had a bit of trouble with motivation in the morning but once I got started, everything flowed well."}],S={days:[...Se],setDays(n){this.days=n},getDays(){return this.days},getExercisesForDay(n){const e=this.days.find(t=>t.id===n);return(e==null?void 0:e.exercises)||[]}},L=`:host {
  display: block;
}

:host {
  display: block;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%);
  background-attachment: fixed;
  color: #020617;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*, *::before, *::after {
  box-sizing: inherit;
}

.page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 16px 40px;
}

header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  margin: 0 -16px 12px;
  padding: 12px 16px 14px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(79, 70, 229, 0.3);
  font-size: 20px;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.logo:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(79, 70, 229, 0.4);
}

.brand-text-title {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #1e293b;
}

.brand-text-sub {
  font-size: 12px;
  color: #64748b;
  font-weight: 500;
  letter-spacing: 0.01em;
}

.settings-btn {
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  background: #f8fafc;
  padding: 8px 14px;
  font-size: 12px;
  font-weight: 600;
  color: #475569;
  display: none;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.settings-btn:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
  transform: translateY(-1px);
}

@media (min-width: 640px) {
  .settings-btn {
    display: inline-flex;
  }
}

.tabs-wrap {
  margin-top: 12px;
  overflow-x: auto;
  padding-bottom: 6px;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.tabs-wrap::-webkit-scrollbar {
  display: none;
}

.tabs {
  display: inline-flex;
  gap: 6px;
  padding: 4px;
  border-radius: 16px;
  background: #f1f5f9;
  font-size: 12px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
}

.tab {
  border-radius: 12px;
  padding: 8px 16px;
  cursor: pointer;
  color: #64748b;
  border: none;
  background: transparent;
  font: inherit;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.2s ease;
  position: relative;
}

.tab:hover {
  color: #475569;
  background: rgba(255, 255, 255, 0.5);
}

.tab.active {
  background: #ffffff;
  color: #4f46e5;
  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.25), 0 1px 3px rgba(0, 0, 0, 0.1);
  transform: translateY(-1px);
}

.card-gradient {
  border-radius: 28px;
  padding: 20px 24px;
  color: #fff;
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%);
  box-shadow: 0 20px 60px rgba(30, 64, 175, 0.25), 0 8px 20px rgba(0, 0, 0, 0.08);
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  position: relative;
  overflow: hidden;
}

.card-gradient::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(-10%, -10%) rotate(180deg); }
}

.card-gradient-main-title {
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.03em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.card-gradient-sub {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 6px;
  font-weight: 500;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
}

.card-white,
.section {
  margin-top: 16px;
  border-radius: 24px;
  background: #ffffff;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(226, 232, 240, 0.8);
  transition: all 0.3s ease;
}

.card-white:hover,
.section:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.section-title {
  font-size: 14px;
  font-weight: 700;
  color: #1e293b;
  letter-spacing: -0.01em;
  margin-bottom: 4px;
}

.section-sub {
  font-size: 12px;
  color: #64748b;
  font-weight: 500;
  line-height: 1.5;
}

.new-entry-btn {
  border-radius: 16px;
  border: none;
  background: linear-gradient(135deg, #0d9488 0%, #14b8a6 100%);
  color: #ffffff;
  padding: 10px 20px;
  font-size: 13px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(13, 148, 136, 0.3);
  white-space: nowrap;
  transition: all 0.3s ease;
  letter-spacing: 0.01em;
}

.new-entry-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(13, 148, 136, 0.4);
}

.new-entry-btn:active {
  transform: translateY(0);
}

.new-entry-btn span:first-child {
  font-size: 16px;
}

.banner-actions-btn {
  border-radius: 14px;
  border: none;
  padding: 10px 18px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  letter-spacing: 0.01em;
}

.banner-actions-btn.add {
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  color: #ffffff;
  box-shadow: 0 8px 24px rgba(22, 163, 74, 0.4);
}

.banner-actions-btn.add:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(22, 163, 74, 0.5);
}

.banner-actions-btn.cancel {
  background: #f8fafc;
  color: #475569;
  border: 1.5px solid #e2e8f0;
  font-weight: 600;
}

.banner-actions-btn.cancel:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
  transform: translateY(-1px);
}

.save-btn {
  margin-top: 16px;
  width: 100%;
  border-radius: 16px;
  border: none;
  background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  padding: 12px;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(79, 70, 229, 0.3);
  transition: all 0.3s ease;
  letter-spacing: 0.01em;
}

.save-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(79, 70, 229, 0.4);
}

.save-btn:active {
  transform: translateY(0);
}

.add-submit-btn {
  margin-top: 18px;
  width: 100%;
  border-radius: 16px;
  border: none;
  background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  padding: 12px;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(79, 70, 229, 0.3);
  transition: all 0.3s ease;
  letter-spacing: 0.01em;
}

.add-submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(79, 70, 229, 0.4);
}

.add-submit-btn:active {
  transform: translateY(0);
}

.add-submit-btn span:first-child {
  margin-right: 6px;
}

.stat-chip-row,
.summary-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-top: 12px;
}

@media (min-width: 640px) {
  .stat-chip-row,
  .summary-row {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.stat-chip,
.summary-card {
  border-radius: 20px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border: 1.5px solid #e2e8f0;
  padding: 14px;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
}

.stat-chip:hover,
.summary-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border-color: #cbd5e1;
}

.stat-icon,
.summary-icon {
  width: 40px;
  height: 40px;
  border-radius: 14px;
  background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
  flex-shrink: 0;
}

.stat-title,
.summary-label {
  color: #64748b;
  font-weight: 600;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.stat-value,
.summary-value {
  font-size: 18px;
  font-weight: 800;
  color: #1e293b;
  letter-spacing: -0.02em;
  margin-top: 2px;
}

.field-label {
  display: block;
  margin-top: 16px;
  margin-bottom: 6px;
  color: #475569;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.01em;
  text-transform: uppercase;
}

.input-text,
.input-number {
  width: 100%;
  border-radius: 14px;
  border: 2px solid #e2e8f0;
  background: #f8fafc;
  padding: 10px 16px;
  font-size: 13px;
  color: #1e293b;
  font-family: inherit;
  font-weight: 500;
  transition: all 0.2s ease;
}

.input-text:focus,
.input-number:focus {
  outline: none;
  background: #ffffff;
  border-color: #4f46e5;
  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1), 0 4px 12px rgba(79, 70, 229, 0.12);
  transform: translateY(-1px);
}

textarea.notes-input,
.diary-input {
  width: 100%;
  min-height: 100px;
  border-radius: 16px;
  border: 2px solid #e2e8f0;
  background: #f8fafc;
  padding: 14px 16px;
  font-size: 13px;
  font-family: inherit;
  font-weight: 500;
  resize: vertical;
  color: #1e293b;
  line-height: 1.6;
  transition: all 0.2s ease;
}

textarea.notes-input:focus,
.diary-input:focus {
  outline: none;
  background: #ffffff;
  border-color: #4f46e5;
  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1), 0 4px 12px rgba(79, 70, 229, 0.12);
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
  border-radius: 14px;
  border: 2px solid #e2e8f0;
  background: #f8fafc;
  padding: 10px 40px 10px 16px;
  font-size: 13px;
  color: #1e293b;
  font-family: inherit;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.select-input:focus {
  outline: none;
  background: #ffffff;
  border-color: #4f46e5;
  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1), 0 4px 12px rgba(79, 70, 229, 0.12);
}

.select-dot {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4f46e5;
  pointer-events: none;
}

.select-chevron {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  color: #64748b;
  pointer-events: none;
}

.day-row {
  display: flex;
  gap: 10px;
  margin-top: 16px;
  overflow-x: auto;
  padding-bottom: 6px;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.day-row::-webkit-scrollbar {
  display: none;
}

.day-pill {
  min-width: 70px;
  border-radius: 16px;
  border: 2px solid #e2e8f0;
  background: #ffffff;
  padding: 10px 16px;
  font-size: 12px;
  font-weight: 700;
  color: #475569;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.day-pill:hover {
  border-color: #cbd5e1;
  background: #f8fafc;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.day-pill.active {
  border: none;
  background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
  color: #ffffff;
  box-shadow: 0 8px 24px rgba(79, 70, 229, 0.35);
  transform: translateY(-2px);
}

.day-pill.active div:first-child {
  font-size: 13px;
  font-weight: 800;
}

.day-pill.active div:last-child {
  font-size: 9px;
  opacity: 0.9;
  font-weight: 600;
}

.exercise-row {
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 18px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border: 1.5px solid #e2e8f0;
  padding: 12px 14px;
  margin-top: 8px;
  transition: all 0.2s ease;
}

.exercise-row:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-color: #cbd5e1;
}

.exercise-number {
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 800;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
  flex-shrink: 0;
}

.exercise-main {
  flex: 1;
  min-width: 0;
}

.exercise-name {
  font-size: 14px;
  font-weight: 700;
  color: #1e293b;
  letter-spacing: -0.01em;
}

.exercise-meta {
  font-size: 12px;
  color: #64748b;
  font-weight: 500;
  margin-top: 2px;
}

.exercise-tag {
  font-size: 10px;
  padding: 4px 10px;
  border-radius: 12px;
  background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
  color: #b91c1c;
  font-weight: 700;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.exercise-delete {
  font-size: 16px;
  color: #ef4444;
  cursor: pointer;
  padding: 4px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.exercise-delete:hover {
  background: #fee2e2;
  transform: scale(1.1);
}

.add-card {
  margin-top: 16px;
  border-radius: 24px;
  background: linear-gradient(135deg, #eef2ff 0%, #fef2ff 100%);
  padding: 2px;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2);
}

.add-card-inner {
  border-radius: 22px;
  background: #ffffff;
  padding: 20px 24px 24px;
}

.add-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
}

.add-card-title {
  font-size: 14px;
  font-weight: 800;
  color: #1e293b;
  letter-spacing: -0.01em;
}

.add-card-sub {
  font-size: 12px;
  color: #64748b;
  font-weight: 500;
  margin-top: 4px;
}

.add-cancel-chip,
.cancel-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  padding: 8px 14px;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
  background: #f8fafc;
  color: #475569;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.add-cancel-chip:hover,
.cancel-chip:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
  transform: translateY(-1px);
}

.add-form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-top: 12px;
  font-size: 12px;
}

@media (min-width: 640px) {
  .add-form-grid--row {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.placeholder {
  margin-top: 24px;
  border-radius: 20px;
  border: 2px dashed #cbd5e1;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  padding: 40px 20px;
  text-align: center;
  font-size: 13px;
  color: #64748b;
  font-weight: 500;
}

.new-entry-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.mood-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin-top: 12px;
}

@media (min-width: 640px) {
  .mood-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.mood-btn {
  border-radius: 16px;
  border: 2px solid #e2e8f0;
  background: #f8fafc;
  padding: 12px 8px;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.mood-btn:hover {
  border-color: #cbd5e1;
  background: #f1f5f9;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.mood-btn.active {
  border-color: #4f46e5;
  background: linear-gradient(135deg, #eef2ff 0%, #ede9fe 100%);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15), 0 4px 12px rgba(79, 70, 229, 0.15);
  transform: translateY(-2px);
}

.mood-emoji {
  font-size: 24px;
}

.diary-entry-card {
  margin-top: 12px;
  border-radius: 20px;
  background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
  padding: 16px 18px;
  box-shadow: 0 8px 24px rgba(248, 113, 113, 0.2);
  border: 1px solid rgba(254, 226, 226, 0.8);
  transition: all 0.3s ease;
}

.diary-entry-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(248, 113, 113, 0.3);
}

.diary-entry-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.diary-entry-date {
  font-size: 13px;
  font-weight: 700;
  color: #1e293b;
  letter-spacing: -0.01em;
}

.diary-entry-mood {
  border-radius: 12px;
  background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
  padding: 6px 12px;
  font-size: 11px;
  color: #15803d;
  font-weight: 700;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.diary-entry-text {
  margin-top: 10px;
  font-size: 13px;
  color: #475569;
  line-height: 1.6;
  font-weight: 500;
}

.diary-entry-icon {
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: linear-gradient(135deg, #0d9488 0%, #14b8a6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-right: 8px;
  box-shadow: 0 4px 12px rgba(13, 148, 136, 0.25);
  font-size: 18px;
}

.banner-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.banner-icon {
  width: 40px;
  height: 40px;
  border-radius: 14px;
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0 4px 12px rgba(22, 163, 74, 0.3);
}

.banner-text-title {
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.banner-text-sub {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  margin-top: 4px;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
}

.new-entry-card {
  margin-top: 16px;
  border-radius: 24px;
  background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
  padding: 2px;
  box-shadow: 0 8px 24px rgba(22, 163, 74, 0.25);
}

.new-entry-inner {
  border-radius: 22px;
  background: #ffffff;
  padding: 20px 24px 24px;
}

.new-entry-title {
  font-size: 14px;
  font-weight: 800;
  color: #1e293b;
  letter-spacing: -0.01em;
}

.new-entry-sub {
  font-size: 12px;
  color: #64748b;
  font-weight: 500;
  margin-top: 4px;
}

.log-card {
  margin-top: 16px;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(226, 232, 240, 0.8);
  overflow: hidden;
  transition: all 0.3s ease;
}

.log-card:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.log-card-header {
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-bottom: 1px solid #e2e8f0;
}

.log-header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.log-date-icon {
  width: 40px;
  height: 40px;
  border-radius: 14px;
  background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
}

.log-date-title {
  font-size: 14px;
  font-weight: 700;
  color: #1e293b;
  letter-spacing: -0.01em;
}

.log-date-sub {
  font-size: 12px;
  color: #64748b;
  font-weight: 500;
  margin-top: 2px;
}

.log-badge {
  font-size: 11px;
  padding: 6px 12px;
  border-radius: 12px;
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  color: #ffffff;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(22, 163, 74, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.log-badge.partial {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  box-shadow: 0 2px 8px rgba(217, 119, 6, 0.3);
}

.log-body {
  padding: 16px 20px 20px;
  background: #f8fafc;
}

.log-exercise-row {
  border-radius: 16px;
  padding: 12px 14px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  color: #065f46;
  font-weight: 600;
  border: 1px solid rgba(16, 185, 129, 0.2);
  transition: all 0.2s ease;
}

.log-exercise-row:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
}

.log-exercise-row.incomplete {
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  color: #4b5563;
  border-color: rgba(107, 114, 128, 0.2);
}

.log-check {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2.5px solid #16a34a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  background: #bbf7d0;
  font-weight: 800;
  flex-shrink: 0;
}

.log-check.incomplete {
  border-color: #9ca3af;
  background: #ffffff;
}

.log-notes {
  margin-top: 12px;
  padding: 12px 14px;
  border-radius: 16px;
  background: #ffffff;
  font-size: 12px;
  color: #475569;
  font-style: italic;
  font-weight: 500;
  line-height: 1.6;
  border: 1px solid #e2e8f0;
}

.bmi-layout {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .bmi-unit-toggle {
        display: inline-flex;
        gap: 8px;
        padding: 4px;
        border-radius: 999px;
        background: #f3f4ff;
        margin-bottom: 10px;
      }

      .bmi-unit-btn {
        border-radius: 999px;
        border: none;
        padding: 6px 14px;
        font-size: 11px;
        cursor: pointer;
        background: transparent;
        color: #4b5563;
      }

      .bmi-unit-btn--active {
        background: #ffffff;
        color: #4f46e5;
        box-shadow: 0 2px 8px rgba(148, 163, 184, 0.55);
      }

      .bmi-form-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
      }

      @media (min-width: 640px) {
        .bmi-form-grid--row {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }

      .bmi-label {
        display: block;
        margin-bottom: 4px;
        color: #4b5563;
        font-size: 11px;
        font-weight: 500;
      }

      .bmi-input {
        width: 100%;
        border-radius: 999px;
        border: 1px solid #d1d5db;
        background: #f9fafb;
        padding: 7px 10px;
        font-size: 11px;
        color: #111827;
        font-family: inherit;
      }

      .bmi-input:focus {
        outline: none;
        background: #ffffff;
        border-color: #6366f1;
        box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.35);
      }

      .bmi-input-row {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 8px;
      }

      .bmi-submit {
        margin-top: 12px;
        width: 100%;
        border-radius: 999px;
        border: none;
        background: linear-gradient(90deg, #22c55e, #16a34a);
        color: #ffffff;
        font-size: 12px;
        font-weight: 600;
        padding: 9px;
        cursor: pointer;
        box-shadow: 0 14px 32px rgba(34, 197, 94, 0.45);
      }

      .bmi-result-tag {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 10px;
        border-radius: 999px;
        font-size: 11px;
      }

      .bmi-result-tag--normal {
        background: #dcfce7;
        color: #15803d;
      }

      .bmi-result-tag--warning {
        background: #fee2e2;
        color: #b91c1c;
      }

      .bmi-result-tag--info {
        background: #e0f2fe;
        color: #0369a1;
      }

      .bmi-tip {
        font-size: 11px;
        color: #6b7280;
        margin-top: 6px;
      }

@media (max-width: 640px) {
  .page {
    padding: 12px 12px 32px;
  }
  
  header {
    margin: 0 -12px 8px;
    padding: 10px 12px 12px;
  }
  
  .card-white,
  .section {
    padding: 16px;
  }
  
  .card-gradient {
    padding: 16px 20px;
  }
}

html {
  scroll-behavior: smooth;
}

::selection {
  background: rgba(79, 70, 229, 0.2);
  color: #1e293b;
}
`;var Ze=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,v=(n,e,t,s)=>{for(var i=s>1?void 0:s?Qe(e,t):e,r=n.length-1,a;r>=0;r--)(a=n[r])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&Ze(e,t,i),i};let m=class extends y{constructor(){super(...arguments),this.selectedDayId="Mon",this.days=[...Se],this.showExerciseForm=!1,this.newExerciseName="",this.newExerciseSets="3",this.newExerciseReps="10",this.newExerciseWeight="",this.newExerciseMuscleGroup="Chest",this.showWeeklySummary=!0}connectedCallback(){super.connectedCallback(),S.setDays(this.days)}updated(n){super.updated(n),n.has("days")&&S.setDays(this.days)}get plannerDays(){return this.days}get selectedDay(){return this.days.find(n=>n.id===this.selectedDayId)??this.days[0]}get totalExercises(){return this.days.reduce((n,e)=>n+e.exercises.length,0)}get activeDays(){return this.days.filter(n=>n.exercises.length>0).length}setDay(n){this.selectedDayId=n}openExerciseForm(){this.showExerciseForm=!0}toggleWeeklySummary(){this.showWeeklySummary=!this.showWeeklySummary}cancelExerciseForm(){this.showExerciseForm=!1,this.newExerciseName="",this.newExerciseSets="3",this.newExerciseReps="10",this.newExerciseWeight="",this.newExerciseMuscleGroup="Chest"}onExerciseNameInput(n){this.newExerciseName=n.target.value}onExerciseSetsInput(n){this.newExerciseSets=n.target.value}onExerciseRepsInput(n){this.newExerciseReps=n.target.value}onExerciseWeightInput(n){this.newExerciseWeight=n.target.value}onExerciseMuscleGroupInput(n){this.newExerciseMuscleGroup=n.target.value}saveExercise(n){n.preventDefault();const e=this.newExerciseName.trim();if(!e)return;const t=Number(this.newExerciseSets)||0,s=Number(this.newExerciseReps)||0,i=this.selectedDayId,r=this.days.find(p=>p.id===i),a=((r==null?void 0:r.exercises.length)??0)+1,d={id:Date.now(),order:a,name:e,sets:t,reps:s,weight:this.newExerciseWeight.trim()||"",muscleGroup:this.newExerciseMuscleGroup.trim()||"General"},o=this.days.map(p=>p.id===i?{...p,exercises:[...p.exercises,d]}:p);this.days=o,S.setDays(this.days),this.cancelExerciseForm()}deleteExercise(n,e){this.days=this.days.map(t=>{if(t.id!==n)return t;const i=t.exercises.filter(r=>r.id!==e).map((r,a)=>({...r,order:a+1}));return{...t,exercises:i}})}renderSummaryCard(n,e,t){return l`
      <div class="summary-card">
        <div class="summary-icon">${t}</div>
        <div>
          <div class="summary-label">${n}</div>
          <div class="summary-value">${e}</div>
        </div>
      </div>
    `}render(){const n=this.selectedDay;return l`
      <section class="card-gradient">
        <div style="font-size: 15px; font-weight: 600;">Weekly Workout Plan</div>
        <div style="margin-top:4px;font-size:11px;color:#e0e7ff;">
          Build your perfect training schedule.
        </div>
      </section>

      <section class="card-white">
        <div class="section-title">Select Day</div>
        <div class="day-row">
          ${this.days.map(e=>l`
              <button
                class=${`day-pill ${e.id===this.selectedDayId?"active":""}`}
                @click=${()=>this.setDay(e.id)}
              >
                <div>${e.id}</div>
                ${e.exercises.length>0?l`<div style="font-size: 9px; margin-top: 2px; opacity: 0.9;">
                      ${e.exercises.length} ${e.exercises.length===1?"exercise":"exercises"}
                    </div>`:null}
              </button>
            `)}
        </div>
      </section>

      <section class="section">
        <div
          style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;"
        >
          <div>
            <div class="section-title">${n.label}</div>
            <div class="section-sub">
              ${n.exercises.length} exercises planned
            </div>
          </div>

          ${this.showExerciseForm?l`
                <button class="add-cancel-chip" @click=${this.cancelExerciseForm}>
                  <span>✕</span>
                  <span>Cancel</span>
                </button>
              `:l`
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

        ${n.exercises.length===0?l`
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
            `:l`
              ${n.exercises.map(e=>l`
                  <div class="exercise-row">
                    <div class="exercise-number">${e.order}</div>
                    <div class="exercise-main">
                      <div class="exercise-name">${e.name}</div>
                      <div class="exercise-meta">
                        ${e.sets} sets × ${e.reps} reps${e.weight?` • ${e.weight}`:""}
                      </div>
                    </div>
                    <div class="exercise-tag">${e.muscleGroup}</div>
                    <div
                      class="exercise-delete"
                      title="Delete"
                      @click=${()=>this.deleteExercise(n.id,e.id)}
                    >
                      🗑
                    </div>
                  </div>
                `)}
            `}
      </section>

      ${this.showExerciseForm?l`
            <section class="add-card">
              <div class="add-card-inner">
                <div class="add-card-header">
                  <div>
                    <div class="add-card-title">+ Add New Exercise</div>
                    <div class="add-card-sub">
                      Add to ${n.label}'s workout
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
                          ${Je.map(e=>l`<option value=${e}>${e}</option>`)}
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

                  <div class="add-form-grid">
                    <div>
                      <label class="field-label">Weight</label>
                      <input
                        class="input-text"
                        type="text"
                        placeholder="e.g., 135 lbs"
                        .value=${this.newExerciseWeight}
                        @input=${this.onExerciseWeightInput}
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

        ${this.showWeeklySummary?l`
              <div class="summary-row">
                ${this.renderSummaryCard("Total Exercises",this.totalExercises,"🎯")}
                ${this.renderSummaryCard("Active Days",this.activeDays,"🧬")}
                ${this.renderSummaryCard("Today",n.exercises.length,"🔥")}
              </div>
            `:null}
      </section>
    `}};m.styles=N(L);v([c()],m.prototype,"selectedDayId",2);v([c()],m.prototype,"days",2);v([c()],m.prototype,"showExerciseForm",2);v([c()],m.prototype,"newExerciseName",2);v([c()],m.prototype,"newExerciseSets",2);v([c()],m.prototype,"newExerciseReps",2);v([c()],m.prototype,"newExerciseWeight",2);v([c()],m.prototype,"newExerciseMuscleGroup",2);v([c()],m.prototype,"showWeeklySummary",2);m=v([O("planner-page")],m);var et=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,w=(n,e,t,s)=>{for(var i=s>1?void 0:s?tt(e,t):e,r=n.length-1,a;r>=0;r--)(a=n[r])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&et(e,t,i),i};function Ae(n){return n.toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"})}function ie(){return Ae(new Date)}function nt(n){if(!n)return ie();const e=new Date(n);return Number.isNaN(e.getTime())?ie():Ae(e)}function be(){const n=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],e=new Date().getDay();return n[e]}const it=[{id:1,dateLabel:"Wednesday, November 19, 2025",durationMinutes:45,completionPercent:80,notes:"Felt great today! Increased weight on squats and completed all sets.",exercises:[{id:1,name:"Barbell Back Squat",category:"Legs",reps:3*8,weight:"185 lb",completionStatus:"complete",difficulty:"Hard"},{id:2,name:"Romanian Deadlift",category:"Legs",reps:3*10,weight:"135 lb",completionStatus:"partial",difficulty:"Moderate"},{id:3,name:"Leg Press",category:"Legs",reps:3*12,weight:"220 lb",completionStatus:"complete",difficulty:"Moderate"}]},{id:2,dateLabel:"Monday, November 17, 2025",durationMinutes:30,completionPercent:60,notes:"Short session, but got a good pump on chest. Felt a bit tired.",exercises:[{id:4,name:"Bench Press",category:"Chest",reps:3*8,weight:"135 lb",completionStatus:"partial",difficulty:"Moderate"},{id:5,name:"Incline Dumbbell Press",category:"Chest",reps:3*10,weight:"45 lb",completionStatus:"complete",difficulty:"Moderate"},{id:6,name:"Cable Fly",category:"Chest",reps:3*12,weight:"25 lb",completionStatus:"incomplete",difficulty:"Easy"}]}];let b=class extends y{constructor(){super(...arguments),this.logEntries=it,this.showNewEntry=!1,this.editingEntryId=null,this.newNotes="",this.todayExercises=[],this.exerciseCompletions={},this.exerciseDifficulties={},this.workoutDuration="",this.selectedDateIso=new Date().toISOString().split("T")[0]}getPlannerExercises(){const n=be();let e=S.getExercisesForDay(n);if(e.length===0){const t=document.querySelector("planner-page");if(t){const s=t.plannerDays||t.days||[];if(s.length>0){S.setDays(s);const r=S.getDays().find(a=>a.id===n);r&&r.exercises&&(e=r.exercises)}}}return e}openNewEntry(){let n=this.getPlannerExercises();if(n.length===0){const e=document.querySelector("planner-page");if(e){const t=e.plannerDays||e.days||[];if(t.length>0){S.setDays(t);const s=be();n=S.getExercisesForDay(s)}}}this.todayExercises=n,n.forEach(e=>{this.exerciseCompletions[e.id]="incomplete",this.exerciseDifficulties[e.id]="Moderate"}),this.selectedDateIso=new Date().toISOString().split("T")[0],this.showNewEntry=!0}calculateCompletionPercent(n){if(n.exercises.length===0)return 0;let e=0,t=n.exercises.length*2;for(const s of n.exercises)s.completionStatus==="complete"?e+=2:s.completionStatus==="partial"&&(e+=1);return Math.round(e/t*100)}get totalEntries(){return this.logEntries.length}get completedToday(){const n=ie();return this.logEntries.filter(t=>t.dateLabel===n).length}get thisWeekEntries(){const n=new Date,e=new Date(n);e.setDate(n.getDate()-n.getDay()),e.setHours(0,0,0,0);const t=new Date(e);return t.setDate(e.getDate()+7),this.logEntries.filter(s=>{const i=new Date(s.dateLabel);return i>=e&&i<t}).length}get filteredEntries(){return this.logEntries}cancelNewEntry(){this.showNewEntry=!1,this.editingEntryId=null,this.newNotes="",this.todayExercises=[],this.exerciseCompletions={},this.exerciseDifficulties={},this.workoutDuration="",this.selectedDateIso=new Date().toISOString().split("T")[0]}onNotesInput(n){this.newNotes=n.target.value}onDurationInput(n){this.workoutDuration=n.target.value}onDateChange(n){this.selectedDateIso=n.target.value}onExerciseCompletionChange(n,e){const t=e.target;this.exerciseCompletions[n]=t.value,this.requestUpdate()}onExerciseDifficultyChange(n,e){const t=e.target;this.exerciseDifficulties[n]=t.value,this.requestUpdate()}onExerciseRepsChange(n,e){const t=e.target,s=parseInt(t.value)||0;this.todayExercises=this.todayExercises.map(i=>i.id===n?{...i,reps:s}:i)}onExerciseWeightChange(n,e){const s=e.target.value;this.todayExercises=this.todayExercises.map(i=>i.id===n?{...i,weight:s}:i)}editEntry(n){const e=new Date(n.dateLabel);Number.isNaN(e.getTime())?this.selectedDateIso=new Date().toISOString().split("T")[0]:this.selectedDateIso=e.toISOString().split("T")[0],this.editingEntryId=n.id,this.showNewEntry=!0,this.newNotes=n.notes,this.workoutDuration=n.durationMinutes.toString(),this.todayExercises=n.exercises.map(t=>({id:t.id,order:1,name:t.name,sets:1,reps:t.reps,weight:t.weight||"",muscleGroup:t.category})),n.exercises.forEach(t=>{this.exerciseCompletions[t.id]=t.completionStatus,this.exerciseDifficulties[t.id]=t.difficulty})}deleteEntry(n){confirm("Are you sure you want to delete this entry?")&&(this.logEntries=this.logEntries.filter(e=>e.id!==n))}saveEntry(n){n.preventDefault();const e=this.todayExercises.map(r=>({id:r.id,name:r.name,category:r.muscleGroup,reps:r.reps,weight:r.weight||"",completionStatus:this.exerciseCompletions[r.id]||"incomplete",difficulty:this.exerciseDifficulties[r.id]||"Moderate"})),t=parseInt(this.workoutDuration)||0,s=this.calculateCompletionPercent({id:0,dateLabel:"",durationMinutes:t,completionPercent:0,notes:"",exercises:e}),i=nt(this.selectedDateIso);if(this.editingEntryId){const r=this.logEntries.find(a=>a.id===this.editingEntryId);if(r){const a={...r,dateLabel:i,durationMinutes:t,completionPercent:s,notes:this.newNotes.trim(),exercises:e};this.logEntries=this.logEntries.map(d=>d.id===this.editingEntryId?a:d)}}else{const r={id:Date.now(),dateLabel:i,durationMinutes:t,completionPercent:s,notes:this.newNotes.trim(),exercises:e};this.logEntries=[r,...this.logEntries]}this.cancelNewEntry()}renderSummaryCard(n,e,t){return l`
      <div class="summary-card">
        <div class="summary-icon">${t}</div>
        <div>
          <div class="summary-label">${n}</div>
          <div class="summary-value">${e}</div>
        </div>
      </div>
    `}renderExerciseRow(n){return l`
      <div class="log-exercise-row">
        <div class="log-exercise-main">
          <div class="log-exercise-name">${n.name}</div>
          <div class="log-exercise-meta">
            <span class="log-pill log-pill-category">${n.category}</span>
            <span class="log-pill">${n.reps} reps</span>
            ${n.weight?l`<span class="log-pill log-pill-weight">${n.weight}</span>`:null}
            <span
              class="${["log-pill",n.difficulty==="Easy"?"diff-easy":n.difficulty==="Moderate"?"diff-moderate":n.difficulty==="Hard"?"diff-hard":"diff-very-hard"].join(" ")}"
            >
              ${n.difficulty}
            </span>
          </div>
        </div>
        <div class="log-exercise-status">
          <span
            class="${["status-pill",n.completionStatus==="complete"?"status-complete":n.completionStatus==="partial"?"status-partial":"status-incomplete"].join(" ")}"
          >
            ${n.completionStatus==="complete"?"Completed":n.completionStatus==="partial"?"Partially":"Not done"}
          </span>
        </div>
      </div>
    `}renderLogEntry(n){return l`
      <article class="log-card">
        <header class="log-card-header">
          <div>
            <div class="log-date">${n.dateLabel}</div>
            <div class="log-subtitle">
              <span class="log-pill">${n.durationMinutes} min</span>
              <span class="log-pill log-pill-progress">
                ${n.completionPercent}% complete
              </span>
            </div>
          </div>
          <div class="log-actions">
            <button
              class="icon-btn"
              @click=${()=>this.editEntry(n)}
              aria-label="Edit log entry"
            >
              ✏️
            </button>
            <button
              class="icon-btn icon-btn-danger"
              @click=${()=>this.deleteEntry(n.id)}
              aria-label="Delete log entry"
            >
              🗑
            </button>
          </div>
        </header>

        <section class="log-body">
          ${n.exercises.length>0?l`
                <div class="log-exercises">
                  ${n.exercises.map(e=>this.renderExerciseRow(e))}
                </div>
              `:l`<div class="log-empty">No exercises recorded for this entry.</div>`}
        </section>

        ${n.notes?l`
              <section class="log-notes">
                <div class="log-notes-label">Workout Notes</div>
                <p class="log-notes-text">${n.notes}</p>
              </section>
            `:null}
      </article>
    `}renderNewEntryForm(){const n=this.todayExercises.length>0;return l`
      <section class="new-entry-card">
        <div class="new-entry-inner">
          <div class="new-entry-header">
            <div>
              <div class="new-entry-title">
                ${this.editingEntryId?"✏️ Edit Log Entry":"+ New Log Entry"}
              </div>
              <div class="new-entry-sub">
                <input
                  type="date"
                  class="date-input"
                  .value=${this.selectedDateIso}
                  @change=${this.onDateChange}
                />
              </div>
            </div>
            <button class="cancel-btn" @click=${this.cancelNewEntry}>Cancel</button>
          </div>

          ${n?null:l`
                <div class="no-exercises-banner">
                  <div class="no-exercises-title">No exercises planned for today.</div>
                  <div class="no-exercises-text">
                    Add exercises in the Planner tab first. Once you plan your workout,
                    they will appear here for tracking.
                  </div>
                  <div class="no-exercises-actions">
                    <button
                      class="outline-btn"
                      @click=${()=>{var t;const e=document.querySelector("planner-page");e&&((t=e.navigateToPlanner)==null||t.call(e))}}
                    >
                      Go to Planner
                    </button>
                    <button class="outline-btn" @click=${()=>this.openNewEntry()}>
                      Refresh From Planner
                    </button>
                  </div>
                </div>
              `}

          <form @submit=${this.saveEntry}>
            <div class="form-grid">
              <div class="form-section">
                <h3 class="section-title">Workout Details</h3>

                <div class="field-group-inline">
                  <div class="field">
                    <label class="field-label">Workout Duration (minutes)</label>
                    <input
                      type="number"
                      class="duration-input"
                      min="0"
                      .value=${this.workoutDuration}
                      @input=${this.onDurationInput}
                      placeholder="e.g., 45"
                    />
                  </div>
                </div>

                <div style="margin-top: 12px;">
                  <label class="field-label">Workout Notes</label>
                  <textarea
                    class="notes-input"
                    .value=${this.newNotes}
                    @input=${this.onNotesInput}
                    placeholder="How did your workout go? Any achievements or challenges?"
                  ></textarea>
                </div>
              </div>

              <div class="form-section">
                <h3 class="section-title">Exercises From Planner</h3>

                ${n?l`
                      <div class="exercise-list">
                        ${this.todayExercises.map(e=>l`
                            <div class="exercise-row">
                              <div class="exercise-main">
                                <div class="exercise-name">${e.name}</div>
                                <div class="exercise-meta">
                                  <span class="log-pill">${e.muscleGroup}</span>
                                  <span class="log-pill"
                                    >${e.reps||0} reps planned</span
                                  >
                                </div>
                              </div>

                              <div class="exercise-controls">
                                <div class="field">
                                  <label class="field-label-small">Completion</label>
                                  <select
                                    class="select-input"
                                    .value=${this.exerciseCompletions[e.id]||"incomplete"}
                                    @change=${t=>this.onExerciseCompletionChange(e.id,t)}
                                  >
                                    <option value="incomplete">Not done</option>
                                    <option value="partial">Partially</option>
                                    <option value="complete">Completed</option>
                                  </select>
                                </div>

                                <div class="field">
                                  <label class="field-label-small">Difficulty</label>
                                  <select
                                    class="select-input"
                                    .value=${this.exerciseDifficulties[e.id]||"Moderate"}
                                    @change=${t=>this.onExerciseDifficultyChange(e.id,t)}
                                  >
                                    <option value="Easy">Easy</option>
                                    <option value="Moderate">Moderate</option>
                                    <option value="Hard">Hard</option>
                                    <option value="Very Hard">Very hard</option>
                                  </select>
                                </div>

                                <div class="field small-field">
                                  <label class="field-label-small">Reps</label>
                                  <input
                                    type="number"
                                    class="small-input"
                                    min="0"
                                    .value=${String(e.reps||0)}
                                    @input=${t=>this.onExerciseRepsChange(e.id,t)}
                                  />
                                </div>

                                <div class="field small-field">
                                  <label class="field-label-small">Weight</label>
                                  <input
                                    type="text"
                                    class="small-input"
                                    .value=${e.weight||""}
                                    @input=${t=>this.onExerciseWeightChange(e.id,t)}
                                    placeholder="e.g., 25 lb"
                                  />
                                </div>
                              </div>
                            </div>
                          `)}
                      </div>
                    `:l`
                      <div class="empty-state">
                        <div class="empty-icon">📝</div>
                        <div class="empty-title">No exercises loaded</div>
                        <div class="empty-text">
                          Plan your workout in the Planner tab and then refresh this
                          list.
                        </div>
                      </div>
                    `}
              </div>
            </div>

            <div class="form-footer">
              <button type="submit" class="save-btn">Save Entry</button>
            </div>
          </form>
        </div>
      </section>
    `}render(){return l`
      <main class="page">
        <header class="header">
          <div class="header-inner">
            <div class="header-icon">🏋️‍♂️</div>
            <div>
              <h1 class="header-title">Exercise Log</h1>
              <p class="header-subtitle">Track your completed workouts.</p>
            </div>
            <button class="cancel-chip" @click=${()=>history.back()}>Cancel</button>
          </div>
        </header>

        <section class="summary-section">
          <div class="summary-inner">
            ${this.renderSummaryCard("Total Entries",this.totalEntries,"📅")}
            ${this.renderSummaryCard("Completed Today",this.completedToday,"✅")}
            ${this.renderSummaryCard("This Week",this.thisWeekEntries,"📈")}
          </div>
        </section>

        <section class="content-section">
          <div class="content-inner">
            <div class="new-entry-bar">
              <div>
                <div class="new-entry-label">+ New Log Entry</div>
                <div class="new-entry-hint">
                  Create a new workout log using exercises from your Planner.
                </div>
              </div>
              <button class="primary-chip" @click=${this.openNewEntry}>
                Add Entry
              </button>
            </div>

            ${this.showNewEntry?this.renderNewEntryForm():null}

            ${this.filteredEntries.length>0?l`
                  <div class="log-list">
                    <h2 class="log-list-title">Past Entries</h2>
                    ${this.filteredEntries.map(n=>this.renderLogEntry(n))}
                  </div>
                `:l`
                  <div class="empty-state large">
                    <div class="empty-icon">📘</div>
                    <div class="empty-title">No workout logs yet</div>
                    <div class="empty-text">
                      Once you start completing workouts, your history will appear
                      here.
                    </div>
                  </div>
                `}
          </div>
        </section>
      </main>
    `}};b.styles=N(L);w([c()],b.prototype,"logEntries",2);w([c()],b.prototype,"showNewEntry",2);w([c()],b.prototype,"editingEntryId",2);w([c()],b.prototype,"newNotes",2);w([c()],b.prototype,"todayExercises",2);w([c()],b.prototype,"exerciseCompletions",2);w([c()],b.prototype,"exerciseDifficulties",2);w([c()],b.prototype,"workoutDuration",2);w([c()],b.prototype,"selectedDateIso",2);b=w([O("exercise-log-page")],b);var st=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,Y=(n,e,t,s)=>{for(var i=s>1?void 0:s?rt(e,t):e,r=n.length-1,a;r>=0;r--)(a=n[r])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&st(e,t,i),i};let M=class extends y{constructor(){super(...arguments),this.diaryEntries=[...Xe],this.newMood="Good",this.newDiaryText="",this.showNewEntryForm=!1}get totalEntries(){return this.diaryEntries.length}get greatDays(){return this.diaryEntries.filter(n=>n.mood==="Great").length}get thisWeek(){return this.diaryEntries.length}setMood(n){this.newMood=n}onDiaryInput(n){this.newDiaryText=n.target.value}startNewEntry(){this.showNewEntryForm=!0,this.newMood="Good",this.newDiaryText=""}cancelNewEntry(){this.showNewEntryForm=!1,this.newMood="Good",this.newDiaryText=""}saveDiary(n){if(n.preventDefault(),!this.newDiaryText.trim())return;const e=new Date().toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"}),t={id:Date.now(),dateLabel:e,mood:this.newMood,text:this.newDiaryText.trim()};this.diaryEntries=[t,...this.diaryEntries],this.cancelNewEntry()}render(){const n=new Date().toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"});return l`
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

      <section class="card-white">
        <div class="stat-chip-row">
          ${this.renderStatChip("Total Entries",this.totalEntries,"💗")}
          ${this.renderStatChip("Great Days",this.greatDays,"😊")}
          ${this.renderStatChip("This Week",this.thisWeek,"💜")}
        </div>
      </section>

      ${this.showNewEntryForm?l`
            <section class="section">
              <div class="new-entry-header">
                <div style="display:flex;align-items:center;gap:8px;">
                  <div class="diary-entry-icon">💗</div>
                  <div>
                    <div class="section-title">New Diary Entry</div>
                    <div class="section-sub">${n}</div>
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

      ${this.diaryEntries.map(e=>this.renderDiaryEntry(e))}
    `}renderStatChip(n,e,t){return l`
      <div class="stat-chip">
        <div class="stat-icon">${t}</div>
        <div>
          <div class="stat-title">${n}</div>
          <div class="stat-value">${e}</div>
        </div>
      </div>
    `}renderMoodButton(n,e){const t=this.newMood===n;return l`
      <button
        type="button"
        class=${`mood-btn ${t?"active":""}`}
        @click=${()=>this.setMood(n)}
      >
        <div class="mood-emoji">${e}</div>
        <div>${n}</div>
      </button>
    `}renderDiaryEntry(n){const e=n.mood==="Great"?"😄":n.mood==="Good"?"🙂":n.mood==="Okay"?"😐":"😵‍💫";return l`
      <section class="diary-entry-card">
        <div class="diary-entry-header">
          <div style="display:flex;align-items:center;gap:8px;">
            <div class="diary-entry-icon">💗</div>
            <div class="diary-entry-date">${n.dateLabel}</div>
          </div>
          <div class="diary-entry-mood">${e} ${n.mood}</div>
        </div>
        <div class="diary-entry-text">${n.text}</div>
      </section>
    `}};M.styles=N(L);Y([c()],M.prototype,"diaryEntries",2);Y([c()],M.prototype,"newMood",2);Y([c()],M.prototype,"newDiaryText",2);Y([c()],M.prototype,"showNewEntryForm",2);M=Y([O("diary-page")],M);var at=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,x=(n,e,t,s)=>{for(var i=s>1?void 0:s?ot(e,t):e,r=n.length-1,a;r>=0;r--)(a=n[r])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&at(e,t,i),i};let f=class extends y{constructor(){super(...arguments),this.unit="imperial",this.weightLbs="",this.heightFeet="",this.heightInches="",this.weightKg="",this.heightCm="",this.bmiValue=null,this.bmiCategory=null,this.bmiMessage=null,this.healthyRange=null}setUnit(n){this.unit=n,this.bmiValue=null,this.bmiCategory=null,this.bmiMessage=null,this.healthyRange=null}onSubmit(n){if(n.preventDefault(),this.unit==="imperial"){const e=parseFloat(this.weightLbs),t=parseFloat(this.heightFeet),s=parseFloat(this.heightInches||"0"),i=t*12+s;if(!e||!i)return;const r=703*e/(i*i),{category:a,message:d}=this.categorizeBmi(r),o=18.5*i*i/703,p=24.9*i*i/703;this.bmiValue=parseFloat(r.toFixed(1)),this.bmiCategory=a,this.bmiMessage=d,this.healthyRange=`${Math.round(o)} – ${Math.round(p)} lbs (BMI 18.5–24.9)`}else{const e=parseFloat(this.weightKg),t=parseFloat(this.heightCm);if(!e||!t)return;const s=t/100,i=e/(s*s),{category:r,message:a}=this.categorizeBmi(i),d=18.5*s*s,o=24.9*s*s;this.bmiValue=parseFloat(i.toFixed(1)),this.bmiCategory=r,this.bmiMessage=a,this.healthyRange=`${Math.round(d)} – ${Math.round(o)} kg (BMI 18.5–24.9)`}}categorizeBmi(n){return n<18.5?{category:"Underweight",message:"You are below the recommended range for your height."}:n<25?{category:"Healthy range",message:"Nice! Your BMI is in the generally recommended range."}:n<30?{category:"Overweight",message:"Slightly above the recommended range. Small, steady changes can help."}:{category:"Obese",message:"Above the recommended range. Consider discussing goals with a healthcare professional."}}get resultTagClass(){return this.bmiValue==null?"bmi-result-tag bmi-result-tag--info":this.bmiValue<18.5||this.bmiValue>=30?"bmi-result-tag bmi-result-tag--warning":this.bmiValue>=25?"bmi-result-tag bmi-result-tag--info":"bmi-result-tag bmi-result-tag--normal"}render(){const n=this.bmiValue!=null?this.bmiValue.toFixed(1):"--";return l`
      <!-- Hero / banner -->
      <section class="card-gradient">
        <div class="banner-left">
          <div class="banner-title">BMI Calculator</div>
          <div class="banner-subtitle">
            Quickly estimate your Body Mass Index and see how it fits into the
            recommended range.
          </div>
        </div>
      </section>

      <!-- Top summary row -->
      <section class="section">
        <div class="summary-row">
          <div class="summary-card">
            <div class="summary-icon">📊</div>
            <div>
              <div class="summary-label">Your BMI</div>
              <div class="summary-value">${n}</div>
            </div>
          </div>

          <div class="summary-card">
            <div class="summary-icon">🏷️</div>
            <div>
              <div class="summary-label">Category</div>
              <div class="summary-value">
                ${this.bmiCategory??"—"}
              </div>
            </div>
          </div>

          <div class="summary-card">
            <div class="summary-icon">🎯</div>
            <div>
              <div class="summary-label">Healthy range</div>
              <div class="summary-value">
                ${this.healthyRange??"18.5 – 24.9 BMI"}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Calculator form -->
      <section class="section">
        <div
          style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;"
        >
          <div>
            <div class="section-title">Calculate your BMI</div>
            <div class="section-sub">
              Choose your units and enter your current height and weight.
            </div>
          </div>
        </div>

        <form class="bmi-layout" @submit=${this.onSubmit}>
          <div class="bmi-unit-toggle">
            <button
              type="button"
              class="bmi-unit-btn ${this.unit==="imperial"?"bmi-unit-btn--active":""}"
              @click=${()=>this.setUnit("imperial")}
            >
              US · lbs / ft / in
            </button>
            <button
              type="button"
              class="bmi-unit-btn ${this.unit==="metric"?"bmi-unit-btn--active":""}"
              @click=${()=>this.setUnit("metric")}
            >
              Metric · kg / cm
            </button>
          </div>

          ${this.unit==="imperial"?l`
                <div class="bmi-form-grid bmi-form-grid--row">
                  <div>
                    <label class="bmi-label">Weight (lbs)</label>
                    <input
                      class="bmi-input"
                      type="number"
                      min="1"
                      .value=${this.weightLbs}
                      @input=${e=>this.weightLbs=e.target.value}
                    />
                  </div>

                  <div>
                    <label class="bmi-label">Height</label>
                    <div class="bmi-input-row">
                      <input
                        class="bmi-input"
                        type="number"
                        min="0"
                        placeholder="ft"
                        .value=${this.heightFeet}
                        @input=${e=>this.heightFeet=e.target.value}
                      />
                      <input
                        class="bmi-input"
                        type="number"
                        min="0"
                        placeholder="in"
                        .value=${this.heightInches}
                        @input=${e=>this.heightInches=e.target.value}
                      />
                    </div>
                  </div>
                </div>
              `:l`
                <div class="bmi-form-grid bmi-form-grid--row">
                  <div>
                    <label class="bmi-label">Weight (kg)</label>
                    <input
                      class="bmi-input"
                      type="number"
                      min="1"
                      .value=${this.weightKg}
                      @input=${e=>this.weightKg=e.target.value}
                    />
                  </div>

                  <div>
                    <label class="bmi-label">Height (cm)</label>
                    <input
                      class="bmi-input"
                      type="number"
                      min="1"
                      .value=${this.heightCm}
                      @input=${e=>this.heightCm=e.target.value}
                    />
                  </div>
                </div>
              `}

          <button class="bmi-submit" type="submit">Calculate BMI</button>
        </form>
      </section>

      <!-- Result details -->
      ${this.bmiValue!=null?l`
            <section class="section">
              <div
                style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;"
              >
                <div>
                  <div class="section-title">Your result</div>
                  <div class="section-sub">
                    BMI is just one indicator and doesn’t replace professional
                    medical advice.
                  </div>
                </div>
                <div class=${this.resultTagClass}>
                  <span>⭐</span>
                  <span>${this.bmiCategory}</span>
                </div>
              </div>

              <div style="font-size:12px;color:#374151;">
                Your estimated BMI is
                <strong>${this.bmiValue.toFixed(1)}</strong>. ${this.bmiMessage}
              </div>

              ${this.healthyRange?l`
                    <div class="bmi-tip">
                      For your height, a typical “healthy” BMI range (18.5–24.9)
                      corresponds to roughly
                      <strong>${this.healthyRange}</strong>.
                    </div>
                  `:null}
            </section>
          `:null}
    `}};f.styles=N(L);x([c()],f.prototype,"unit",2);x([c()],f.prototype,"weightLbs",2);x([c()],f.prototype,"heightFeet",2);x([c()],f.prototype,"heightInches",2);x([c()],f.prototype,"weightKg",2);x([c()],f.prototype,"heightCm",2);x([c()],f.prototype,"bmiValue",2);x([c()],f.prototype,"bmiCategory",2);x([c()],f.prototype,"bmiMessage",2);x([c()],f.prototype,"healthyRange",2);f=x([O("bmi-calculator-page")],f);var lt=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,ke=(n,e,t,s)=>{for(var i=s>1?void 0:s?dt(e,t):e,r=n.length-1,a;r>=0;r--)(a=n[r])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&lt(e,t,i),i};let J=class extends y{constructor(){super(...arguments),this.activeTab="planner"}setTab(n){this.activeTab=n}renderTab(n,e){const t=this.activeTab===n;return l`
      <button
        class=${`tab ${t?"active":""}`}
        @click=${()=>this.setTab(n)}
      >
        ${e}
      </button>
    `}render(){return l`
      <header>
        <div class="header-inner">
          <div class="brand">
            <div class="logo">📘</div>
            <div>
              <div class="brand-text-title">Planner Fit</div>
              <div class="brand-text-sub">Plan • log • reflect</div>
            </div>
          </div>
        </div>

        <div class="header-inner">
          <div class="tabs-wrap">
            <div class="tabs">
              ${this.renderTab("planner","Planner")}
              ${this.renderTab("log","Exercise Log")}
              ${this.renderTab("diary","Diary")}
              ${this.renderTab("bmi","BMI Calculator")} <!-- 👈 NEW TAB -->
            </div>
          </div>
        </div>
      </header>

      <div class="page">
        ${this.activeTab==="planner"?l`<planner-page></planner-page>`:this.activeTab==="log"?l`<exercise-log-page></exercise-log-page>`:this.activeTab==="diary"?l`<diary-page></diary-page>`:l`<bmi-calculator-page></bmi-calculator-page>`}
      </div>
    `}};J.styles=N(L);ke([c()],J.prototype,"activeTab",2);J=ke([O("planner-fit-app")],J);var ct=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,De=(n,e,t,s)=>{for(var i=s>1?void 0:s?pt(e,t):e,r=n.length-1,a;r>=0;r--)(a=n[r])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&ct(e,t,i),i};let X=class extends y{constructor(){super(...arguments),this.name="Lit App"}render(){return l`<h1>Hello, ${this.name}</h1>`}};X.styles=[N(L)];De([_e()],X.prototype,"name",2);X=De([O("lit-app")],X);
