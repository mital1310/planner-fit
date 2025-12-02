(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=globalThis,se=V.ShadowRoot&&(V.ShadyCSS===void 0||V.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ve=Symbol(),de=new WeakMap;let Me=class{constructor(e,t,a){if(this._$cssResult$=!0,a!==ve)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(se&&e===void 0){const a=t!==void 0&&t.length===1;a&&(e=de.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&de.set(t,e))}return e}toString(){return this.cssText}};const C=n=>new Me(typeof n=="string"?n:n+"",void 0,ve),Pe=(n,e)=>{if(se)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const a=document.createElement("style"),i=V.litNonce;i!==void 0&&a.setAttribute("nonce",i),a.textContent=t.cssText,n.appendChild(a)}},le=se?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const a of e.cssRules)t+=a.cssText;return C(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Te,defineProperty:ze,getOwnPropertyDescriptor:Ne,getOwnPropertyNames:Ie,getOwnPropertySymbols:Oe,getPrototypeOf:Fe}=Object,_=globalThis,ce=_.trustedTypes,Le=ce?ce.emptyScript:"",ne=_.reactiveElementPolyfillSupport,B=(n,e)=>n,Q={toAttribute(n,e){switch(e){case Boolean:n=n?Le:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},re=(n,e)=>!Te(n,e),pe={attribute:!0,type:String,converter:Q,reflect:!1,useDefault:!1,hasChanged:re};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);let F=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=pe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const a=Symbol(),i=this.getPropertyDescriptor(e,a,t);i!==void 0&&ze(this.prototype,e,i)}}static getPropertyDescriptor(e,t,a){const{get:i,set:s}=Ne(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:i,set(r){const l=i==null?void 0:i.call(this);s==null||s.call(this,r),this.requestUpdate(e,l,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??pe}static _$Ei(){if(this.hasOwnProperty(B("elementProperties")))return;const e=Fe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(B("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(B("properties"))){const t=this.properties,a=[...Ie(t),...Oe(t)];for(const i of a)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[a,i]of t)this.elementProperties.set(a,i)}this._$Eh=new Map;for(const[t,a]of this.elementProperties){const i=this._$Eu(t,a);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const i of a)t.unshift(le(i))}else e!==void 0&&t.push(le(e));return t}static _$Eu(e,t){const a=t.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Pe(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var a;return(a=t.hostConnected)==null?void 0:a.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var a;return(a=t.hostDisconnected)==null?void 0:a.call(t)})}attributeChangedCallback(e,t,a){this._$AK(e,a)}_$ET(e,t){var s;const a=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,a);if(i!==void 0&&a.reflect===!0){const r=(((s=a.converter)==null?void 0:s.toAttribute)!==void 0?a.converter:Q).toAttribute(t,a.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){var s,r;const a=this.constructor,i=a._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const l=a.getPropertyOptions(i),o=typeof l.converter=="function"?{fromAttribute:l.converter}:((s=l.converter)==null?void 0:s.fromAttribute)!==void 0?l.converter:Q;this._$Em=i;const p=o.fromAttribute(t,l.type);this[i]=p??((r=this._$Ej)==null?void 0:r.get(i))??p,this._$Em=null}}requestUpdate(e,t,a){var i;if(e!==void 0){const s=this.constructor,r=this[e];if(a??(a=s.getPropertyOptions(e)),!((a.hasChanged??re)(r,t)||a.useDefault&&a.reflect&&r===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(s._$Eu(e,a))))return;this.C(e,t,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:a,reflect:i,wrapped:s},r){a&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,r??t??this[e]),s!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||a||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var a;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,r]of i){const{wrapped:l}=r,o=this[s];l!==!0||this._$AL.has(s)||o===void 0||this.C(s,void 0,r,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(a=this._$EO)==null||a.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(a=>{var i;return(i=a.hostUpdated)==null?void 0:i.call(a)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};F.elementStyles=[],F.shadowRootOptions={mode:"open"},F[B("elementProperties")]=new Map,F[B("finalized")]=new Map,ne==null||ne({ReactiveElement:F}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,J=U.trustedTypes,he=J?J.createPolicy("lit-html",{createHTML:n=>n}):void 0,we="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,$e="?"+S,je=`<${$e}>`,z=document,H=()=>z.createComment(""),R=n=>n===null||typeof n!="object"&&typeof n!="function",oe=Array.isArray,We=n=>oe(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",te=`[ 	
\f\r]`,W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ue=/-->/g,ge=/>/g,A=RegExp(`>|${te}(?:([^\\s"'>=/]+)(${te}*=${te}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fe=/'/g,me=/"/g,ke=/^(?:script|style|textarea|title)$/i,Be=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),d=Be(1),L=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),be=new WeakMap,M=z.createTreeWalker(z,129);function Ee(n,e){if(!oe(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return he!==void 0?he.createHTML(e):e}const Ue=(n,e)=>{const t=n.length-1,a=[];let i,s=e===2?"<svg>":e===3?"<math>":"",r=W;for(let l=0;l<t;l++){const o=n[l];let p,u,h=-1,E=0;for(;E<o.length&&(r.lastIndex=E,u=r.exec(o),u!==null);)E=r.lastIndex,r===W?u[1]==="!--"?r=ue:u[1]!==void 0?r=ge:u[2]!==void 0?(ke.test(u[2])&&(i=RegExp("</"+u[2],"g")),r=A):u[3]!==void 0&&(r=A):r===A?u[0]===">"?(r=i??W,h=-1):u[1]===void 0?h=-2:(h=r.lastIndex-u[2].length,p=u[1],r=u[3]===void 0?A:u[3]==='"'?me:fe):r===me||r===fe?r=A:r===ue||r===ge?r=W:(r=A,i=void 0);const D=r===A&&n[l+1].startsWith("/>")?" ":"";s+=r===W?o+je:h>=0?(a.push(p),o.slice(0,h)+we+o.slice(h)+S+D):o+S+(h===-2?l:D)}return[Ee(n,s+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),a]};class G{constructor({strings:e,_$litType$:t},a){let i;this.parts=[];let s=0,r=0;const l=e.length-1,o=this.parts,[p,u]=Ue(e,t);if(this.el=G.createElement(p,a),M.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=M.nextNode())!==null&&o.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(we)){const E=u[r++],D=i.getAttribute(h).split(S),q=/([.?@])?(.*)/.exec(E);o.push({type:1,index:s,name:q[2],strings:D,ctor:q[1]==="."?Re:q[1]==="?"?Ge:q[1]==="@"?Ye:ee}),i.removeAttribute(h)}else h.startsWith(S)&&(o.push({type:6,index:s}),i.removeAttribute(h));if(ke.test(i.tagName)){const h=i.textContent.split(S),E=h.length-1;if(E>0){i.textContent=J?J.emptyScript:"";for(let D=0;D<E;D++)i.append(h[D],H()),M.nextNode(),o.push({type:2,index:++s});i.append(h[E],H())}}}else if(i.nodeType===8)if(i.data===$e)o.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(S,h+1))!==-1;)o.push({type:7,index:s}),h+=S.length-1}s++}}static createElement(e,t){const a=z.createElement("template");return a.innerHTML=e,a}}function j(n,e,t=n,a){var r,l;if(e===L)return e;let i=a!==void 0?(r=t._$Co)==null?void 0:r[a]:t._$Cl;const s=R(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),s===void 0?i=void 0:(i=new s(n),i._$AT(n,t,a)),a!==void 0?(t._$Co??(t._$Co=[]))[a]=i:t._$Cl=i),i!==void 0&&(e=j(n,i._$AS(n,e.values),i,a)),e}class He{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:a}=this._$AD,i=((e==null?void 0:e.creationScope)??z).importNode(t,!0);M.currentNode=i;let s=M.nextNode(),r=0,l=0,o=a[0];for(;o!==void 0;){if(r===o.index){let p;o.type===2?p=new Y(s,s.nextSibling,this,e):o.type===1?p=new o.ctor(s,o.name,o.strings,this,e):o.type===6&&(p=new Ke(s,this,e)),this._$AV.push(p),o=a[++l]}r!==(o==null?void 0:o.index)&&(s=M.nextNode(),r++)}return M.currentNode=z,i}p(e){let t=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}}class Y{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,a,i){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=j(this,e,t),R(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==L&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):We(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&R(this._$AH)?this._$AA.nextSibling.data=e:this.T(z.createTextNode(e)),this._$AH=e}$(e){var s;const{values:t,_$litType$:a}=e,i=typeof a=="number"?this._$AC(e):(a.el===void 0&&(a.el=G.createElement(Ee(a.h,a.h[0]),this.options)),a);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(t);else{const r=new He(i,this),l=r.u(this.options);r.p(t),this.T(l),this._$AH=r}}_$AC(e){let t=be.get(e.strings);return t===void 0&&be.set(e.strings,t=new G(e)),t}k(e){oe(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let a,i=0;for(const s of e)i===t.length?t.push(a=new Y(this.O(H()),this.O(H()),this,this.options)):a=t[i],a._$AI(s),i++;i<t.length&&(this._$AR(a&&a._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var a;for((a=this._$AP)==null?void 0:a.call(this,!1,!0,t);e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,a,i,s){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=g}_$AI(e,t=this,a,i){const s=this.strings;let r=!1;if(s===void 0)e=j(this,e,t,0),r=!R(e)||e!==this._$AH&&e!==L,r&&(this._$AH=e);else{const l=e;let o,p;for(e=s[0],o=0;o<s.length-1;o++)p=j(this,l[a+o],t,o),p===L&&(p=this._$AH[o]),r||(r=!R(p)||p!==this._$AH[o]),p===g?e=g:e!==g&&(e+=(p??"")+s[o+1]),this._$AH[o]=p}r&&!i&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Re extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}}class Ge extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class Ye extends ee{constructor(e,t,a,i,s){super(e,t,a,i,s),this.type=5}_$AI(e,t=this){if((e=j(this,e,t,0)??g)===L)return;const a=this._$AH,i=e===g&&a!==g||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,s=e!==g&&(a===g||i);i&&this.element.removeEventListener(this.name,this,a),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ke{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){j(this,e)}}const ie=U.litHtmlPolyfillSupport;ie==null||ie(G,Y),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.3.1");const qe=(n,e,t)=>{const a=(t==null?void 0:t.renderBefore)??e;let i=a._$litPart$;if(i===void 0){const s=(t==null?void 0:t.renderBefore)??null;a._$litPart$=i=new Y(e.insertBefore(H(),s),s,void 0,t??{})}return i._$AI(n),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis;class v extends F{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return L}}var ye;v._$litElement$=!0,v.finalized=!0,(ye=T.litElementHydrateSupport)==null||ye.call(T,{LitElement:v});const ae=T.litElementPolyfillSupport;ae==null||ae({LitElement:v});(T.litElementVersions??(T.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=n=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(n,e)}):customElements.define(n,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve={attribute:!0,type:String,converter:Q,reflect:!1,hasChanged:re},Qe=(n=Ve,e,t)=>{const{kind:a,metadata:i}=t;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),a==="setter"&&((n=Object.create(n)).wrapped=!0),s.set(t.name,n),a==="accessor"){const{name:r}=t;return{set(l){const o=e.get.call(this);e.set.call(this,l),this.requestUpdate(r,o,n)},init(l){return l!==void 0&&this.C(r,void 0,n,l),l}}}if(a==="setter"){const{name:r}=t;return function(l){const o=this[r];e.call(this,l),this.requestUpdate(r,o,n)}}throw Error("Unsupported decorator location: "+a)};function De(n){return(e,t)=>typeof t=="object"?Qe(n,e,t):((a,i,s)=>{const r=i.hasOwnProperty(s);return i.constructor.createProperty(s,a),r?Object.getOwnPropertyDescriptor(i,s):void 0})(n,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function c(n){return De({...n,state:!0,attribute:!1})}const Se=[{id:"Mon",label:"Monday",exercises:[{id:1,order:1,name:"Bench Press",sets:4,reps:10,weight:"135 lbs",muscleGroup:"Chest"},{id:2,order:2,name:"Push-ups",sets:3,reps:15,weight:"",muscleGroup:"Chest"}]},{id:"Tue",label:"Tuesday",exercises:[]},{id:"Wed",label:"Wednesday",exercises:[]},{id:"Thu",label:"Thursday",exercises:[]},{id:"Fri",label:"Friday",exercises:[]},{id:"Sat",label:"Saturday",exercises:[]},{id:"Sun",label:"Sunday",exercises:[]}],Je=["Chest","Back","Legs","Shoulders","Arms","Core","Cardio"],Xe=[{id:1,dateLabel:"Wednesday, November 19, 2025",mood:"Great",text:"Today was an amazing workout day! I pushed through my limits and felt incredibly energized afterwards. My confidence is growing with each session."},{id:2,dateLabel:"Tuesday, November 18, 2025",mood:"Good",text:"Solid workout today. Had a bit of trouble with motivation in the morning but once I got started, everything flowed well."}],P={days:[...Se],setDays(n){this.days=n},getDays(){return this.days},getExercisesForDay(n){const e=this.days.find(t=>t.id===n);return(e==null?void 0:e.exercises)||[]}},O=`:host {
  display: block;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%);
  background-attachment: fixed;
  color: #020617;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

.page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 16px 40px;
}

/* -------------------------------------------------
 * Global header (brand + tabs)
 * ------------------------------------------------- */

header {
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

/* Green CTA chip in blue header (Calorie Tracker) */
.header-cta-chip {
  margin-left: auto;
  border-radius: 999px;
  border: none;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: #f9fafb;
  padding: 8px 18px;
  font-size: 12px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 14px 30px rgba(22, 163, 74, 0.6);
  white-space: nowrap;
}

.header-cta-chip:hover {
  filter: brightness(1.05);
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

/* Tabs ------------------------------------------------ */

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

/* -------------------------------------------------
 * Blue banner card used on pages
 * ------------------------------------------------- */

.card-gradient {
  border-radius: 28px;
  padding: 20px 24px;
  color: #fff;
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%);
  box-shadow: 0 20px 60px rgba(30, 64, 175, 0.25),
    0 8px 20px rgba(0, 0, 0, 0.08);
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
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(-10%, -10%) rotate(180deg);
  }
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

/* Generic white cards / sections ---------------------- */

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

/* Primary actions ------------------------------------- */

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

.save-btn,
.add-submit-btn {
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

.add-submit-btn {
  margin-top: 18px;
}

.save-btn:hover,
.add-submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(79, 70, 229, 0.4);
}

.save-btn:active,
.add-submit-btn:active {
  transform: translateY(0);
}

.add-submit-btn span:first-child {
  margin-right: 6px;
}

/* Summary chips --------------------------------------- */

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

/* Inputs / textarea ----------------------------------- */

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
  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1),
    0 4px 12px rgba(79, 70, 229, 0.12);
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
  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1),
    0 4px 12px rgba(79, 70, 229, 0.12);
}

/* Selects --------------------------------------------- */

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
  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1),
    0 4px 12px rgba(79, 70, 229, 0.12);
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

/* Planner day row ------------------------------------- */

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

/* Exercise list rows ---------------------------------- */

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

/* Planner add-card / diary etc ----------------------- */

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

/* Diary mood grid / cards ---------------------------- */

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
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15),
    0 4px 12px rgba(79, 70, 229, 0.15);
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

/* Exercise Log cards ---------------------------------- */

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

/* =====================================================
 * Calorie Tracker
 * ===================================================== */

/* Week selector */

.cal-week-card {
  margin-top: 18px;
  border-radius: 28px;
  background: #ffffff;
  border: 1px solid rgba(226, 232, 240, 0.9);
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.18),
    0 0 0 1px rgba(248, 250, 252, 0.9) inset;
  padding: 18px 20px 16px;
}

.cal-week-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.cal-week-title {
  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
}

.cal-jump-today-btn {
  border-radius: 999px;
  border: 1px solid rgba(22, 163, 74, 0.7);
  background: rgba(16, 185, 129, 0.06);
  color: #047857;
  font-size: 12px;
  font-weight: 500;
  padding: 6px 12px;
  cursor: pointer;
}

.cal-jump-today-btn:hover {
  background: rgba(16, 185, 129, 0.12);
}

.cal-week-nav-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.cal-week-arrow {
  border-radius: 999px;
  border: none;
  background: #e5e7eb;
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
}

.cal-week-arrow:hover {
  background: #d1d5db;
}

.cal-week-current {
  flex: 1;
  text-align: center;
}

.cal-week-current-day {
  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
}

.cal-week-current-sub {
  margin-top: 2px;
  font-size: 12px;
  color: #6b7280;
}

.cal-week-current-sub span {
  margin-left: 6px;
  color: #16a34a;
  font-weight: 600;
}

.cal-week-days {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 8px;
  margin-bottom: 10px;
}

@media (max-width: 800px) {
  .cal-week-days {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    row-gap: 8px;
  }
}

.cal-week-day-card {
  border-radius: 16px;
  border: 1px solid rgba(226, 232, 240, 0.9);
  background: #f9fafb;
  padding: 8px 6px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  cursor: pointer;
  font-size: 11px;
}

.cal-week-day-name {
  font-weight: 600;
  color: #111827;
}

.cal-week-day-calories {
  color: #6b7280;
}

.cal-week-day-card.is-selected {
  background: #16a34a;
  border-color: #16a34a;
  color: #f9fafb;
}

.cal-week-day-card.is-selected .cal-week-day-name,
.cal-week-day-card.is-selected .cal-week-day-calories {
  color: #f9fafb;
}

.cal-week-day-card.is-today:not(.is-selected) {
  border-color: #22c55e;
  box-shadow: 0 0 0 1px rgba(34, 197, 94, 0.5);
}

.cal-week-footer {
  margin-top: 6px;
  font-size: 12px;
  color: #6b7280;
  display: flex;
  justify-content: space-between;
}

.cal-week-total-value {
  font-weight: 600;
  color: #0f172a;
}

/* Summary / progress */

.cal-summary-inner {
  margin-top: 12px;
}

.cal-summary-card {
  position: relative;
}

.cal-summary-sub {
  font-size: 11px;
  color: #6b7280;
  margin-top: 2px;
}

.cal-goal-edit {
  margin-top: 6px;
  font-size: 11px;
  color: #6b7280;
}

.cal-progress-section {
  max-width: 1200px;
  margin: 14px auto 0;
  padding: 0 4px;
}

.cal-progress-label {
  font-size: 12px;
  color: #4b5563;
  margin-bottom: 4px;
}

.cal-progress-percent {
  margin-left: 4px;
  font-weight: 600;
  color: #111827;
}

/* main grids */

.cal-main-grid {
  margin-top: 16px;
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.4fr);
  gap: 16px;
}

@media (max-width: 960px) {
  .cal-main-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

.cal-meals-grid {
  margin-top: 16px;
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 12px;
}

/* Add Food card */

.cal-add-card {
  border-radius: 24px;
  background: #ffffff;
  border: 1px solid rgba(226, 232, 240, 0.9);
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.16),
    0 0 0 1px rgba(248, 250, 252, 0.9) inset;
  padding: 16px 18px 18px;
}

.add-card-title {
  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
}

.add-meal-tabs {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 6px;
}

.add-meal-tab {
  border-radius: 999px;
  border: 1px solid rgba(209, 213, 219, 0.9);
  background: #f9fafb;
  padding: 6px 8px;
  font-size: 12px;
  color: #4b5563;
  font-weight: 500;
  cursor: pointer;
}

.add-meal-tab.is-active {
  background: #16a34a;
  border-color: #16a34a;
  color: #f9fafb;
}

.quick-add-link {
  margin-top: 10px;
  background: none;
  border: none;
  padding: 0;
  color: #7c3aed;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
}

.quick-add-panel {
  margin-top: 8px;
  padding: 8px;
  border-radius: 12px;
  background: #f9fafb;
  border: 1px dashed rgba(196, 181, 253, 0.8);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.quick-add-chip {
  border-radius: 12px;
  border: none;
  background: #ffffff;
  padding: 6px 8px;
  font-size: 11px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  cursor: pointer;
  box-shadow: 0 3px 10px rgba(15, 23, 42, 0.1);
}

.quick-add-chip:hover {
  background: #f5f3ff;
}

.quick-add-name {
  font-weight: 600;
  color: #111827;
}

.quick-add-meta {
  color: #6b7280;
}

.cal-add-btn {
  margin-top: 4px;
}

/* Breakdown card */

.cal-breakdown-card {
  border-radius: 24px;
  background: #ffffff;
  border: 1px solid rgba(226, 232, 240, 0.9);
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.16),
    0 0 0 1px rgba(248, 250, 252, 0.9) inset;
  padding: 16px 18px 18px;
}

.breakdown-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.breakdown-title {
  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
}

.breakdown-empty {
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  padding: 32px 12px;
  border-radius: 16px;
  border: 1px dashed rgba(148, 163, 184, 0.7);
  background: #f9fafb;
}

.breakdown-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.1fr);
  gap: 16px;
}

@media (max-width: 900px) {
  .breakdown-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

.breakdown-section-title {
  font-size: 12px;
  font-weight: 600;
  color: #4b5563;
  margin-bottom: 8px;
}

.dist-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.dist-row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 8px;
  align-items: center;
  font-size: 11px;
}

.dist-label {
  color: #4b5563;
}

.dist-bar-track {
  height: 8px;
  border-radius: 999px;
  background: #e5e7eb;
  overflow: hidden;
}

.dist-bar-fill {
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #4f46e5, #22c55e);
}

.dist-breakfast {
  background: linear-gradient(90deg, #facc15, #22c55e);
}

.dist-lunch {
  background: linear-gradient(90deg, #0ea5e9, #38bdf8);
}

.dist-dinner {
  background: linear-gradient(90deg, #a855f7, #6366f1);
}

.dist-snacks {
  background: linear-gradient(90deg, #fb7185, #f97316);
}

.dist-percent {
  color: #4b5563;
}

/* mini bar chart */

.cal-bars {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
  height: 140px;
  padding: 6px 4px 0;
}

.cal-bar {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.cal-bar-fill {
  width: 70%;
  border-radius: 999px 999px 4px 4px;
  background: #4f46e5;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
}

.cal-bar-value {
  font-size: 10px;
  color: #f9fafb;
  padding-bottom: 4px;
}

.cal-bar-label {
  font-size: 11px;
  color: #4b5563;
}

.cal-breakfast {
  background: linear-gradient(180deg, #facc15, #f97316);
}

.cal-lunch {
  background: linear-gradient(180deg, #0ea5e9, #22c55e);
}

.cal-dinner {
  background: linear-gradient(180deg, #a855f7, #4f46e5);
}

.cal-snacks {
  background: linear-gradient(180deg, #fb7185, #ef4444);
}

/* Meal cards */

.cal-meal-card {
  border-radius: 24px;
  background: #ffffff;
  border: 1px solid rgba(226, 232, 240, 0.9);
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.14),
    0 0 0 1px rgba(248, 250, 252, 0.9) inset;
  padding: 12px 16px 14px;
}

.cal-meal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.cal-meal-heading {
  display: flex;
  align-items: center;
  gap: 8px;
}

.cal-meal-icon {
  width: 24px;
  height: 24px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.cal-meal-title {
  font-size: 13px;
  font-weight: 600;
  color: #111827;
}

.cal-meal-total {
  font-size: 12px;
  font-weight: 600;
  color: #111827;
}

.cal-meal-empty {
  font-size: 12px;
  color: #6b7280;
  padding: 8px;
}

.cal-meal-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.cal-meal-row {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  padding: 6px 8px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(226, 232, 240, 0.9);
}

.cal-meal-row-main {
  flex: 1;
}

.cal-meal-food-name {
  font-size: 13px;
  font-weight: 600;
  color: #111827;
}

.cal-meal-food-meta {
  margin-top: 2px;
  font-size: 11px;
  color: #4b5563;
}

.cal-meal-food-sub {
  margin-left: 6px;
  color: #9ca3af;
}

.cal-meal-row-meta {
  display: flex;
  align-items: center;
  gap: 6px;
}

.cal-meal-row-kcal {
  font-size: 12px;
  font-weight: 600;
  color: #111827;
}

/* color tints per meal */

.meal-breakfast {
  background: #fffbeb;
  border-color: rgba(253, 224, 71, 0.7);
}

.meal-breakfast .cal-meal-icon {
  background: #fbbf24;
}

.meal-lunch {
  background: #ecfdf5;
  border-color: rgba(45, 212, 191, 0.7);
}

.meal-lunch .cal-meal-icon {
  background: #22c55e;
}

.meal-dinner {
  background: #f5f3ff;
  border-color: rgba(196, 181, 253, 0.7);
}

.meal-dinner .cal-meal-icon {
  background: #a855f7;
}

.meal-snacks {
  background: #fef2f2;
  border-color: rgba(252, 165, 165, 0.7);
}

.meal-snacks .cal-meal-icon {
  background: #fb7185;
}

/* =====================================================
 * BMI Calculator block
 * ===================================================== */

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

/* -------------------------------------------------
 * Responsive tweaks
 * ------------------------------------------------- */

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

/* Global misc ---------------------------------------- */

html {
  scroll-behavior: smooth;
}

::selection {
  background: rgba(79, 70, 229, 0.2);
  color: #1e293b;
}
`;var Ze=Object.defineProperty,en=Object.getOwnPropertyDescriptor,$=(n,e,t,a)=>{for(var i=a>1?void 0:a?en(e,t):e,s=n.length-1,r;s>=0;s--)(r=n[s])&&(i=(a?r(e,t,i):r(i))||i);return a&&i&&Ze(e,t,i),i};let b=class extends v{constructor(){super(...arguments),this.selectedDayId="Mon",this.days=[...Se],this.showExerciseForm=!1,this.newExerciseName="",this.newExerciseSets="3",this.newExerciseReps="10",this.newExerciseWeight="",this.newExerciseMuscleGroup="Chest",this.showWeeklySummary=!0}connectedCallback(){super.connectedCallback(),P.setDays(this.days)}updated(n){super.updated(n),n.has("days")&&P.setDays(this.days)}get plannerDays(){return this.days}get selectedDay(){return this.days.find(n=>n.id===this.selectedDayId)??this.days[0]}get totalExercises(){return this.days.reduce((n,e)=>n+e.exercises.length,0)}get activeDays(){return this.days.filter(n=>n.exercises.length>0).length}setDay(n){this.selectedDayId=n}openExerciseForm(){this.showExerciseForm=!0}toggleWeeklySummary(){this.showWeeklySummary=!this.showWeeklySummary}cancelExerciseForm(){this.showExerciseForm=!1,this.newExerciseName="",this.newExerciseSets="3",this.newExerciseReps="10",this.newExerciseWeight="",this.newExerciseMuscleGroup="Chest"}onExerciseNameInput(n){this.newExerciseName=n.target.value}onExerciseSetsInput(n){this.newExerciseSets=n.target.value}onExerciseRepsInput(n){this.newExerciseReps=n.target.value}onExerciseWeightInput(n){this.newExerciseWeight=n.target.value}onExerciseMuscleGroupInput(n){this.newExerciseMuscleGroup=n.target.value}saveExercise(n){n.preventDefault();const e=this.newExerciseName.trim();if(!e)return;const t=Number(this.newExerciseSets)||0,a=Number(this.newExerciseReps)||0,i=this.selectedDayId,s=this.days.find(p=>p.id===i),r=((s==null?void 0:s.exercises.length)??0)+1,l={id:Date.now(),order:r,name:e,sets:t,reps:a,weight:this.newExerciseWeight.trim()||"",muscleGroup:this.newExerciseMuscleGroup.trim()||"General"},o=this.days.map(p=>p.id===i?{...p,exercises:[...p.exercises,l]}:p);this.days=o,P.setDays(this.days),this.cancelExerciseForm()}deleteExercise(n,e){this.days=this.days.map(t=>{if(t.id!==n)return t;const i=t.exercises.filter(s=>s.id!==e).map((s,r)=>({...s,order:r+1}));return{...t,exercises:i}})}renderSummaryCard(n,e,t){return d`
      <div class="summary-card">
        <div class="summary-icon">${t}</div>
        <div>
          <div class="summary-label">${n}</div>
          <div class="summary-value">${e}</div>
        </div>
      </div>
    `}render(){const n=this.selectedDay;return d`
      <section class="card-gradient">
        <div style="font-size: 15px; font-weight: 600;">Weekly Workout Plan</div>
        <div style="margin-top:4px;font-size:11px;color:#e0e7ff;">
          Build your perfect training schedule.
        </div>
      </section>

      <section class="card-white">
        <div class="section-title">Select Day</div>
        <div class="day-row">
          ${this.days.map(e=>d`
              <button
                class=${`day-pill ${e.id===this.selectedDayId?"active":""}`}
                @click=${()=>this.setDay(e.id)}
              >
                <div>${e.id}</div>
                ${e.exercises.length>0?d`<div style="font-size: 9px; margin-top: 2px; opacity: 0.9;">
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

          ${this.showExerciseForm?d`
                <button class="add-cancel-chip" @click=${this.cancelExerciseForm}>
                  <span>✕</span>
                  <span>Cancel</span>
                </button>
              `:d`
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

        ${n.exercises.length===0?d`
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
            `:d`
              ${n.exercises.map(e=>d`
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

      ${this.showExerciseForm?d`
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
                          ${Je.map(e=>d`<option value=${e}>${e}</option>`)}
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

        ${this.showWeeklySummary?d`
              <div class="summary-row">
                ${this.renderSummaryCard("Total Exercises",this.totalExercises,"🎯")}
                ${this.renderSummaryCard("Active Days",this.activeDays,"🧬")}
                ${this.renderSummaryCard("Today",n.exercises.length,"🔥")}
              </div>
            `:null}
      </section>
    `}};b.styles=C(O);$([c()],b.prototype,"selectedDayId",2);$([c()],b.prototype,"days",2);$([c()],b.prototype,"showExerciseForm",2);$([c()],b.prototype,"newExerciseName",2);$([c()],b.prototype,"newExerciseSets",2);$([c()],b.prototype,"newExerciseReps",2);$([c()],b.prototype,"newExerciseWeight",2);$([c()],b.prototype,"newExerciseMuscleGroup",2);$([c()],b.prototype,"showWeeklySummary",2);b=$([I("planner-page")],b);var nn=Object.defineProperty,tn=Object.getOwnPropertyDescriptor,k=(n,e,t,a)=>{for(var i=a>1?void 0:a?tn(e,t):e,s=n.length-1,r;s>=0;s--)(r=n[s])&&(i=(a?r(e,t,i):r(i))||i);return a&&i&&nn(e,t,i),i};function _e(){return new Date().toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"})}function xe(){const n=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],e=new Date().getDay();return n[e]}function an(n){if(!n)return _e();const[e,t,a]=n.split("-").map(Number);return new Date(e,t-1,a).toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"})}const sn=[{id:1,dateLabel:"Wednesday, November 19, 2025",durationMinutes:45,completionPercent:67,notes:"Great workout! Felt strong on bench press.",exercises:[{id:1,name:"Bench Press",category:"Chest",reps:10,weight:"135 lbs",completionStatus:"complete",difficulty:"Moderate"},{id:2,name:"Push-ups",category:"Chest",reps:15,weight:"",completionStatus:"partial",difficulty:"Easy"},{id:3,name:"Dumbbell Flyes",category:"Chest",reps:12,weight:"30 lbs",completionStatus:"incomplete",difficulty:"Hard"}]},{id:2,dateLabel:"Monday, November 17, 2025",durationMinutes:60,completionPercent:100,notes:"Leg day was tough but rewarding.",exercises:[{id:1,name:"Squats",category:"Legs",reps:12,weight:"225 lbs",completionStatus:"complete",difficulty:"Hard"},{id:2,name:"Leg Press",category:"Legs",reps:15,weight:"270 lbs",completionStatus:"complete",difficulty:"Moderate"}]}];let x=class extends v{constructor(){super(...arguments),this.logEntries=sn,this.showNewEntry=!1,this.editingEntryId=null,this.newNotes="",this.todayExercises=[],this.exerciseCompletions={},this.exerciseDifficulties={},this.workoutDuration="",this.entryDate=""}getPlannerExercises(){const n=xe();let e=P.getExercisesForDay(n);if(e.length===0){const t=document.querySelector("planner-page");if(t){const a=t.plannerDays||t.days||[];if(a.length>0){const i=a.find(s=>s.id===n);e=(i==null?void 0:i.exercises)||[],P.setDays(a)}}}return e}openNewEntry(){let n=this.getPlannerExercises();if(n.length===0){const t=document.querySelector("planner-page");if(t){const a=t.plannerDays||t.days||[];if(a.length>0){P.setDays(a);const i=xe();n=P.getExercisesForDay(i)}}}const e=new Date;this.entryDate=[e.getFullYear(),String(e.getMonth()+1).padStart(2,"0"),String(e.getDate()).padStart(2,"0")].join("-"),this.todayExercises=n,n.forEach(t=>{this.exerciseCompletions[t.id]="incomplete",this.exerciseDifficulties[t.id]="Moderate"}),this.showNewEntry=!0}calculateCompletionPercent(n){if(n.exercises.length===0)return 0;let e=0;return n.exercises.forEach(t=>{t.completionStatus==="complete"?e+=100:t.completionStatus==="partial"?e+=50:e+=0}),Math.round(e/n.exercises.length)}get filteredEntries(){return this.logEntries}get totalEntries(){return this.filteredEntries.length}get completedToday(){const n=_e();return this.filteredEntries.filter(e=>e.dateLabel===n&&e.completionPercent===100).length}get thisWeek(){return this.filteredEntries.length}cancelNewEntry(){this.showNewEntry=!1,this.editingEntryId=null,this.newNotes="",this.todayExercises=[],this.exerciseCompletions={},this.exerciseDifficulties={},this.workoutDuration="",this.entryDate=""}onNotesInput(n){this.newNotes=n.target.value}onDurationInput(n){this.workoutDuration=n.target.value}onExerciseCompletionChange(n,e){const t=e.target;this.exerciseCompletions[n]=t.value,this.requestUpdate()}onExerciseDifficultyChange(n,e){const t=e.target;this.exerciseDifficulties[n]=t.value,this.requestUpdate()}editEntry(n){this.editingEntryId=n.id,this.showNewEntry=!0,this.newNotes=n.notes,this.workoutDuration=n.durationMinutes.toString();const e=new Date(n.dateLabel);isNaN(e.getTime())?this.entryDate=new Date().toISOString().split("T")[0]:this.entryDate=[e.getFullYear(),String(e.getMonth()+1).padStart(2,"0"),String(e.getDate()).padStart(2,"0")].join("-"),this.todayExercises=n.exercises.map(t=>({id:t.id,order:1,name:t.name,sets:1,reps:t.reps,weight:t.weight||"",muscleGroup:t.category})),n.exercises.forEach(t=>{this.exerciseCompletions[t.id]=t.completionStatus,this.exerciseDifficulties[t.id]=t.difficulty})}deleteEntry(n){confirm("Are you sure you want to delete this entry?")&&(this.logEntries=this.logEntries.filter(e=>e.id!==n))}saveEntry(n){n.preventDefault();const e=this.todayExercises.map(s=>({id:s.id,name:s.name,category:s.muscleGroup,reps:s.reps,weight:s.weight||"",completionStatus:this.exerciseCompletions[s.id]||"incomplete",difficulty:this.exerciseDifficulties[s.id]||"Moderate"})),t=parseInt(this.workoutDuration)||0,a=this.calculateCompletionPercent({id:0,dateLabel:"",durationMinutes:t,completionPercent:0,notes:"",exercises:e}),i=an(this.entryDate);if(this.editingEntryId){const s=this.logEntries.find(r=>r.id===this.editingEntryId);if(s){const r={...s,durationMinutes:t,completionPercent:a,dateLabel:i,notes:this.newNotes.trim(),exercises:e};this.logEntries=this.logEntries.map(l=>l.id===this.editingEntryId?r:l)}}else{const s={id:Date.now(),dateLabel:i,durationMinutes:t,completionPercent:a,notes:this.newNotes.trim(),exercises:e};this.logEntries=[s,...this.logEntries]}this.cancelNewEntry()}renderSummaryCard(n,e,t){return d`
      <div class="summary-card">
        <div class="summary-icon">${t}</div>
        <div>
          <div class="summary-label">${n}</div>
          <div class="summary-value">${e}</div>
        </div>
      </div>
    `}renderProgressBar(n){return d`
      <div style="width: 100%; height: 8px; background: #e5e7eb; border-radius: 999px; overflow: hidden; margin-top: 4px;">
        <div
          style="height: 100%; background: linear-gradient(90deg, #22c55e, #16a34a); width: ${n}%; transition: width 0.3s ease;"
        ></div>
      </div>
    `}renderLogEntry(n){const e=n.completionPercent===100;return d`
      <section class="log-card">
        <div class="log-card-header">
          <div class="log-header-left">
            <div class="log-date-icon">📅</div>
            <div>
              <div class="log-date-title">${n.dateLabel}</div>
              ${n.durationMinutes?d`<div class="log-date-sub">
                    ${n.durationMinutes} minutes
                  </div>`:d`<div class="log-date-sub">No duration recorded</div>`}
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <div class="log-badge ${e?"":"partial"}">
              ${e?d`100% Complete`:d`${n.completionPercent}% Complete`}
            </div>
            <button
              style="border-radius: 999px; border: 1px solid #e5e7eb; background: #f9fafb; padding: 6px 10px; font-size: 11px; color: #4b5563; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;"
              @click=${()=>this.editEntry(n)}
              title="Edit Entry"
            >
              ✏️ Edit
            </button>
            <button
              style="border-radius: 999px; border: 1px solid #fee2e2; background: #fef2f2; padding: 6px 10px; font-size: 11px; color: #dc2626; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;"
              @click=${()=>this.deleteEntry(n.id)}
              title="Delete Entry"
            >
              🗑️ Delete
            </button>
          </div>
        </div>

        <div class="log-body">
          ${n.exercises.map(t=>{const a=t.completionStatus==="complete"?100:t.completionStatus==="partial"?50:0,i=t.completionStatus==="complete"?"#16a34a":t.completionStatus==="partial"?"#eab308":"#ef4444",s=t.difficulty==="Easy"?"#22c55e":t.difficulty==="Moderate"?"#eab308":t.difficulty==="Hard"?"#f97316":"#ef4444";return d`
              <div
                style="border-radius: 16px; padding: 10px 12px; margin-bottom: 8px; background: #ffffff; border: 1px solid #e5e7eb;"
              >
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
                  <div style="flex: 1;">
                    <div style="font-size: 12px; font-weight: 600; color: #111827;">
                      ${t.name}
                    </div>
                    <div style="font-size: 11px; color: #6b7280; margin-top: 2px;">
                      ${t.category} • ${t.reps} reps${t.weight?` • ${t.weight}`:""}
                    </div>
                  </div>
                  <div style="display: flex; gap: 6px; align-items: center;">
                    <div
                      style="font-size: 10px; padding: 4px 8px; border-radius: 999px; background: ${i}20; color: ${i}; font-weight: 500;"
                    >
                      ${t.completionStatus}
                    </div>
                    <div
                      style="font-size: 10px; padding: 4px 8px; border-radius: 999px; background: ${s}20; color: ${s}; font-weight: 500;"
                    >
                      ${t.difficulty}
                    </div>
                  </div>
                </div>
                ${this.renderProgressBar(a)}
              </div>
            `})}
          ${n.notes?d`<div class="log-notes">${n.notes}</div>`:null}
        </div>
      </section>
    `}render(){return d`
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

        ${this.showNewEntry?d`
              <button
                class="banner-actions-btn cancel"
                type="button"
                @click=${this.cancelNewEntry}
              >
                Cancel
              </button>
            `:d`
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

      <section class="card-white">
        <div class="summary-row">
          ${this.renderSummaryCard("Total Entries",this.totalEntries,"📅")}
          ${this.renderSummaryCard("Completed Today",this.completedToday,"✅")}
          ${this.renderSummaryCard("This Week",this.thisWeek,"📈")}
        </div>
      </section>

      ${this.showNewEntry?d`
            <section class="new-entry-card">
              <div class="new-entry-inner">
                <div class="new-entry-header">
                  <div>
                    <div class="new-entry-title">
                      ${this.editingEntryId?"✏️ Edit Log Entry":"+ New Log Entry"}
                    </div>
                    <div class="new-entry-sub" style="margin-top: 6px;">
                      <input 
                        type="date"
                        style="
                          border: 1px solid #e2e8f0; 
                          background: #f8fafc; 
                          border-radius: 8px; 
                          padding: 6px 10px; 
                          font-family: inherit; 
                          font-size: 12px; 
                          color: #475569;
                          outline: none;
                          cursor: pointer;
                        "
                        .value=${this.entryDate}
                        @input=${n=>this.entryDate=n.target.value}
                      />
                    </div>
                  </div>
                </div>

                <form @submit=${this.saveEntry}>
                  ${this.todayExercises.length>0?d`
                        <div style="margin-top: 16px;">
                          <div class="section-title" style="margin-bottom: 12px;">
                            Planned Exercises for Today
                          </div>
                          ${this.todayExercises.map(n=>d`
                              <div
                                style="border-radius: 18px; padding: 12px; margin-bottom: 10px; background: #f9fafb; border: 1px solid #e5e7eb;"
                              >
                                <div style="margin-bottom: 8px;">
                                  <div style="font-size: 12px; font-weight: 600; color: #111827;">
                                    ${n.name}
                                  </div>
                                  <div style="font-size: 11px; color: #6b7280; margin-top: 2px;">
                                    ${n.muscleGroup} • ${n.sets} sets × ${n.reps} reps${n.weight?` • ${n.weight}`:""}
                                  </div>
                                </div>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                  <div>
                                    <label class="field-label" style="font-size: 10px; margin-bottom: 4px;">
                                      Completion
                                    </label>
                                    <select
                                      class="select-input"
                                      style="width: 100%; border-radius: 12px; padding: 6px 10px; font-size: 11px; border: 1px solid #d1d5db; background: #ffffff;"
                                      .value=${this.exerciseCompletions[n.id]||"incomplete"}
                                      @change=${e=>this.onExerciseCompletionChange(n.id,e)}
                                    >
                                      <option value="incomplete">Incomplete</option>
                                      <option value="partial">Partial</option>
                                      <option value="complete">Complete</option>
                                    </select>
                                  </div>
                                  <div>
                                    <label class="field-label" style="font-size: 10px; margin-bottom: 4px;">
                                      Difficulty
                                    </label>
                                    <select
                                      class="select-input"
                                      style="width: 100%; border-radius: 12px; padding: 6px 10px; font-size: 11px; border: 1px solid #d1d5db; background: #ffffff;"
                                      .value=${this.exerciseDifficulties[n.id]||"Moderate"}
                                      @change=${e=>this.onExerciseDifficultyChange(n.id,e)}
                                    >
                                      <option value="Easy">Easy</option>
                                      <option value="Moderate">Moderate</option>
                                      <option value="Hard">Hard</option>
                                      <option value="Very Hard">Very Hard</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            `)}
                        </div>
                      `:d`
                        <div
                          style="text-align: center; padding: 24px; color: #6b7280; font-size: 12px;"
                        >
                          No exercises planned for today. Add exercises in the Planner tab first.
                        </div>
                      `}

                  <div style="margin-top: 16px;">
                    <label class="field-label">Workout Duration (minutes)</label>
                    <input
                      type="number"
                      class="input-number"
                      style="width: 100%; border-radius: 18px; padding: 8px 12px; font-size: 12px;"
                      min="0"
                      .value=${this.workoutDuration}
                      @input=${this.onDurationInput}
                      placeholder="e.g., 45"
                    />
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

                  <button type="submit" class="save-btn">Save Entry</button>
                </form>
              </div>
            </section>
          `:null}

      ${this.filteredEntries.length>0?this.filteredEntries.map(n=>this.renderLogEntry(n)):null}
    `}};x.styles=C(O);k([c()],x.prototype,"logEntries",2);k([c()],x.prototype,"showNewEntry",2);k([c()],x.prototype,"editingEntryId",2);k([c()],x.prototype,"newNotes",2);k([c()],x.prototype,"todayExercises",2);k([c()],x.prototype,"exerciseCompletions",2);k([c()],x.prototype,"exerciseDifficulties",2);k([c()],x.prototype,"workoutDuration",2);k([c()],x.prototype,"entryDate",2);x=k([I("exercise-log-page")],x);var rn=Object.defineProperty,on=Object.getOwnPropertyDescriptor,K=(n,e,t,a)=>{for(var i=a>1?void 0:a?on(e,t):e,s=n.length-1,r;s>=0;s--)(r=n[s])&&(i=(a?r(e,t,i):r(i))||i);return a&&i&&rn(e,t,i),i};let N=class extends v{constructor(){super(...arguments),this.diaryEntries=[...Xe],this.newMood="Good",this.newDiaryText="",this.showNewEntryForm=!1}get totalEntries(){return this.diaryEntries.length}get greatDays(){return this.diaryEntries.filter(n=>n.mood==="Great").length}get thisWeek(){return this.diaryEntries.length}setMood(n){this.newMood=n}onDiaryInput(n){this.newDiaryText=n.target.value}startNewEntry(){this.showNewEntryForm=!0,this.newMood="Good",this.newDiaryText=""}cancelNewEntry(){this.showNewEntryForm=!1,this.newMood="Good",this.newDiaryText=""}saveDiary(n){if(n.preventDefault(),!this.newDiaryText.trim())return;const e=new Date().toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"}),t={id:Date.now(),dateLabel:e,mood:this.newMood,text:this.newDiaryText.trim()};this.diaryEntries=[t,...this.diaryEntries],this.cancelNewEntry()}render(){const n=new Date().toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"});return d`
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

      ${this.showNewEntryForm?d`
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
    `}renderStatChip(n,e,t){return d`
      <div class="stat-chip">
        <div class="stat-icon">${t}</div>
        <div>
          <div class="stat-title">${n}</div>
          <div class="stat-value">${e}</div>
        </div>
      </div>
    `}renderMoodButton(n,e){const t=this.newMood===n;return d`
      <button
        type="button"
        class=${`mood-btn ${t?"active":""}`}
        @click=${()=>this.setMood(n)}
      >
        <div class="mood-emoji">${e}</div>
        <div>${n}</div>
      </button>
    `}renderDiaryEntry(n){const e=n.mood==="Great"?"😄":n.mood==="Good"?"🙂":n.mood==="Okay"?"😐":"😵‍💫";return d`
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
    `}};N.styles=C(O);K([c()],N.prototype,"diaryEntries",2);K([c()],N.prototype,"newMood",2);K([c()],N.prototype,"newDiaryText",2);K([c()],N.prototype,"showNewEntryForm",2);N=K([I("diary-page")],N);var dn=Object.defineProperty,ln=Object.getOwnPropertyDescriptor,w=(n,e,t,a)=>{for(var i=a>1?void 0:a?ln(e,t):e,s=n.length-1,r;s>=0;s--)(r=n[s])&&(i=(a?r(e,t,i):r(i))||i);return a&&i&&dn(e,t,i),i};let m=class extends v{constructor(){super(...arguments),this.unit="imperial",this.weightLbs="",this.heightFeet="",this.heightInches="",this.weightKg="",this.heightCm="",this.bmiValue=null,this.bmiCategory=null,this.bmiMessage=null,this.healthyRange=null}setUnit(n){this.unit=n,this.bmiValue=null,this.bmiCategory=null,this.bmiMessage=null,this.healthyRange=null}onSubmit(n){if(n.preventDefault(),this.unit==="imperial"){const e=parseFloat(this.weightLbs),t=parseFloat(this.heightFeet),a=parseFloat(this.heightInches||"0"),i=t*12+a;if(!e||!i)return;const s=703*e/(i*i),{category:r,message:l}=this.categorizeBmi(s),o=18.5*i*i/703,p=24.9*i*i/703;this.bmiValue=parseFloat(s.toFixed(1)),this.bmiCategory=r,this.bmiMessage=l,this.healthyRange=`${Math.round(o)} – ${Math.round(p)} lbs (BMI 18.5–24.9)`}else{const e=parseFloat(this.weightKg),t=parseFloat(this.heightCm);if(!e||!t)return;const a=t/100,i=e/(a*a),{category:s,message:r}=this.categorizeBmi(i),l=18.5*a*a,o=24.9*a*a;this.bmiValue=parseFloat(i.toFixed(1)),this.bmiCategory=s,this.bmiMessage=r,this.healthyRange=`${Math.round(l)} – ${Math.round(o)} kg (BMI 18.5–24.9)`}}categorizeBmi(n){return n<18.5?{category:"Underweight",message:"You are below the recommended range for your height."}:n<25?{category:"Healthy range",message:"Nice! Your BMI is in the generally recommended range."}:n<30?{category:"Overweight",message:"Slightly above the recommended range. Small, steady changes can help."}:{category:"Obese",message:"Above the recommended range. Consider discussing goals with a healthcare professional."}}get resultTagClass(){return this.bmiValue==null?"bmi-result-tag bmi-result-tag--info":this.bmiValue<18.5||this.bmiValue>=30?"bmi-result-tag bmi-result-tag--warning":this.bmiValue>=25?"bmi-result-tag bmi-result-tag--info":"bmi-result-tag bmi-result-tag--normal"}render(){const n=this.bmiValue!=null?this.bmiValue.toFixed(1):"--";return d`
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

          ${this.unit==="imperial"?d`
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
              `:d`
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
      ${this.bmiValue!=null?d`
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

              ${this.healthyRange?d`
                    <div class="bmi-tip">
                      For your height, a typical “healthy” BMI range (18.5–24.9)
                      corresponds to roughly
                      <strong>${this.healthyRange}</strong>.
                    </div>
                  `:null}
            </section>
          `:null}
    `}};m.styles=C(O);w([c()],m.prototype,"unit",2);w([c()],m.prototype,"weightLbs",2);w([c()],m.prototype,"heightFeet",2);w([c()],m.prototype,"heightInches",2);w([c()],m.prototype,"weightKg",2);w([c()],m.prototype,"heightCm",2);w([c()],m.prototype,"bmiValue",2);w([c()],m.prototype,"bmiCategory",2);w([c()],m.prototype,"bmiMessage",2);w([c()],m.prototype,"healthyRange",2);m=w([I("bmi-calculator-page")],m);var cn=Object.defineProperty,pn=Object.getOwnPropertyDescriptor,y=(n,e,t,a)=>{for(var i=a>1?void 0:a?pn(e,t):e,s=n.length-1,r;s>=0;s--)(r=n[s])&&(i=(a?r(e,t,i):r(i))||i);return a&&i&&cn(e,t,i),i};let f=class extends v{constructor(){super(...arguments),this.weekStart=this.getStartOfWeek(new Date),this.selectedDateKey=this.toDateKey(new Date),this.dailyGoal=2e3,this.formMeal="breakfast",this.formFoodName="",this.formAmount="1",this.formUnit="",this.formCaloriesPerServing="",this.showQuickAdd=!1,this.mealsByDate={},this.lastId=1}getStartOfWeek(n){const e=new Date(n),t=e.getDay(),a=e.getDate()-t;return e.setDate(a),e.setHours(0,0,0,0),e}toDateKey(n){return n.toISOString().slice(0,10)}fromDateKey(n){return new Date(n+"T00:00:00")}formatDayHeader(n){return this.fromDateKey(n).toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric"})}formatWeekDayShort(n){return n.toLocaleDateString(void 0,{weekday:"short"})}isToday(n){return n===this.toDateKey(new Date)}getWeekDates(){const n=[];for(let e=0;e<7;e++){const t=new Date(this.weekStart);t.setDate(t.getDate()+e),n.push(t)}return n}getDayMeals(n){return this.mealsByDate[n]||(this.mealsByDate={...this.mealsByDate,[n]:{breakfast:[],lunch:[],dinner:[],snacks:[]}}),this.mealsByDate[n]}getDayTotal(n){const e=this.getDayMeals(n);return["breakfast","lunch","dinner","snacks"].flatMap(t=>e[t]||[]).reduce((t,a)=>t+a.totalCalories,0)}getWeekTotal(){return this.getWeekDates().map(n=>this.getDayTotal(this.toDateKey(n))).reduce((n,e)=>n+e,0)}getMealTotal(n,e){return(this.getDayMeals(n)[e]||[]).reduce((a,i)=>a+i.totalCalories,0)}getDistribution(n){const e=this.getDayTotal(n)||0,t=a=>e===0?0:Math.round(a/e*100);return{breakfast:t(this.getMealTotal(n,"breakfast")),lunch:t(this.getMealTotal(n,"lunch")),dinner:t(this.getMealTotal(n,"dinner")),snacks:t(this.getMealTotal(n,"snacks"))}}handlePrevWeek(){const n=new Date(this.weekStart);n.setDate(n.getDate()-7),this.weekStart=this.getStartOfWeek(n)}handleNextWeek(){const n=new Date(this.weekStart);n.setDate(n.getDate()+7),this.weekStart=this.getStartOfWeek(n)}handleSelectDay(n){this.selectedDateKey=this.toDateKey(n)}handleJumpToToday(){const n=new Date;this.weekStart=this.getStartOfWeek(n),this.selectedDateKey=this.toDateKey(n)}handleGoalInput(n){const e=Number(n.target.value||0);this.dailyGoal=isNaN(e)||e<=0?0:e}handleFormMealChange(n){this.formMeal=n}handleInputChange(n,e){const t=e.target.value;switch(n){case"name":this.formFoodName=t;break;case"amount":this.formAmount=t;break;case"unit":this.formUnit=t;break;case"calories":this.formCaloriesPerServing=t;break}}handleQuickAdd(n){this.formFoodName=n.name,this.formAmount=String(n.amount),this.formUnit=n.unit,this.formCaloriesPerServing=String(n.caloriesPerServing)}handleAddFood(n){n.preventDefault();const e=this.formFoodName.trim();if(!e)return;const t=Number(this.formAmount)||0,a=Number(this.formCaloriesPerServing)||0,i=t*a,s={id:this.lastId++,meal:this.formMeal,name:e,amount:t,unit:this.formUnit.trim(),caloriesPerServing:a,totalCalories:i},r=this.selectedDateKey,l=this.getDayMeals(r),o=[...l[this.formMeal]||[],s];this.mealsByDate={...this.mealsByDate,[r]:{...l,[this.formMeal]:o}},this.formFoodName="",this.formAmount="1",this.formUnit="",this.formCaloriesPerServing=""}handleDeleteFood(n,e,t){const a=this.getDayMeals(n),i=(a[e]||[]).filter(s=>s.id!==t);this.mealsByDate={...this.mealsByDate,[n]:{...a,[e]:i}}}renderBanner(){return d`
      <section class="card-gradient">
        <div class="banner-left">
          <div class="banner-icon">🔥</div>
          <div>
            <div class="card-gradient-main-title">Calorie Tracker</div>
            <div class="card-gradient-sub">
              Track your daily nutrition and stay on target with your goals.
            </div>
          </div>
        </div>

        <button class="header-cta-chip" @click=${this.handleJumpToToday}>
          Jump to Today
        </button>
      </section>
    `}renderWeekSelector(){const n=this.getWeekDates(),e=this.getWeekTotal(),t=this.fromDateKey(this.selectedDateKey);return d`
      <section class="cal-week-card">
        <div class="cal-week-header">
          <div class="cal-week-title">Select Day</div>
          <button class="cal-jump-today-btn" @click=${this.handleJumpToToday}>
            Jump to Today
          </button>
        </div>

        <div class="cal-week-nav-row">
          <button class="cal-week-arrow" @click=${this.handlePrevWeek} aria-label="Previous week">
            ‹
          </button>

          <div class="cal-week-current">
            <div class="cal-week-current-day">
              ${t.toLocaleDateString(void 0,{weekday:"long"})}
            </div>
            <div class="cal-week-current-sub">
              ${t.toLocaleDateString(void 0,{month:"long",day:"numeric"})}
              <span>${this.isToday(this.selectedDateKey)?"Today":""}</span>
            </div>
          </div>

          <button class="cal-week-arrow" @click=${this.handleNextWeek} aria-label="Next week">
            ›
          </button>
        </div>

        <div class="cal-week-days">
          ${n.map(a=>{const i=this.toDateKey(a),s=i===this.selectedDateKey,r=this.isToday(i),l=this.getDayTotal(i),p=Object.entries({"cal-week-day-card":!0,"is-selected":s,"is-today":r}).filter(([,u])=>u).map(([u])=>u).join(" ");return d`
              <button
                class=${p}
                @click=${()=>this.handleSelectDay(a)}
                type="button"
              >
                <div class="cal-week-day-name">${this.formatWeekDayShort(a)}</div>
                <div class="cal-week-day-calories">
                  ${l>0?`${l} cal`:"-"}
                </div>
              </button>
            `})}
        </div>

        <div class="cal-week-footer">
          <div>Week Total</div>
          <div class="cal-week-total-value">${e} calories</div>
        </div>
      </section>
    `}renderSummaryAndProgress(){const n=this.selectedDateKey,e=this.getDayTotal(n),t=Math.max(this.dailyGoal-e,0),a=this.dailyGoal>0?Math.min(100,Math.round(e/this.dailyGoal*100)):0;return d`
      <section class="card-white">
        <div class="section-title">
          ${this.fromDateKey(n).toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric"})}
        </div>
        <div class="section-sub">
          Overview of your calories for the selected day.
        </div>

        <div class="summary-row cal-summary-inner">
          <!-- Total -->
          <div class="summary-card cal-summary-card">
            <div class="summary-icon">📈</div>
            <div>
              <div class="summary-label">Total Calories</div>
              <div class="summary-value">${e}</div>
              <div class="cal-summary-sub">consumed today</div>
            </div>
          </div>

          <!-- Goal -->
          <div class="summary-card cal-summary-card">
            <div class="summary-icon">🎯</div>
            <div>
              <div class="summary-label">Daily Goal</div>
              <div class="summary-value">
                ${this.dailyGoal}
              </div>
              <div class="cal-goal-edit">
                Goal:
                <input
                  class="input-number"
                  type="number"
                  min="0"
                  style="max-width: 120px; display: inline-block; margin-left: 6px;"
                  .value=${String(this.dailyGoal)}
                  @input=${this.handleGoalInput}
                />
                kcal
              </div>
            </div>
          </div>

          <!-- Remaining -->
          <div class="summary-card cal-summary-card">
            <div class="summary-icon">💚</div>
            <div>
              <div class="summary-label">Remaining</div>
              <div class="summary-value">${t}</div>
              <div class="cal-summary-sub">calories left</div>
            </div>
          </div>
        </div>

        <div class="cal-progress-section">
          <div class="cal-progress-label">
            ${this.fromDateKey(n).toLocaleDateString(void 0,{weekday:"long"})}'s Progress
            <span class="cal-progress-percent">${a}%</span>
          </div>

          <div class="dist-bar-track">
            <div
              class="dist-bar-fill"
              style=${`width: ${a}%;`}
            ></div>
          </div>
        </div>
      </section>
    `}renderAddFoodCard(){const n=[{name:"Greek Yogurt & Berries",amount:1,unit:"bowl",caloriesPerServing:180},{name:"Grilled Chicken Salad",amount:1,unit:"bowl",caloriesPerServing:350},{name:"Veggie Stir Fry",amount:1,unit:"plate",caloriesPerServing:420},{name:"Apple & Peanut Butter",amount:1,unit:"serving",caloriesPerServing:200}];return d`
      <section class="cal-add-card">
        <div class="add-card-title">Add Food</div>

        <div class="add-meal-tabs">
          ${["breakfast","lunch","dinner","snacks"].map(e=>{const t=this.formMeal===e;return d`
              <button
                type="button"
                class="add-meal-tab ${t?"is-active":""}"
                @click=${()=>this.handleFormMealChange(e)}
              >
                ${e==="breakfast"?"Breakfast":e==="lunch"?"Lunch":e==="dinner"?"Dinner":"Snacks"}
              </button>
            `})}
        </div>

        <button
          type="button"
          class="quick-add-link"
          @click=${()=>this.showQuickAdd=!this.showQuickAdd}
        >
          ${this.showQuickAdd?"Hide":"Quick Add Common Foods"}
        </button>

        ${this.showQuickAdd?d`
              <div class="quick-add-panel">
                ${n.map(e=>d`
                    <button
                      type="button"
                      class="quick-add-chip"
                      @click=${()=>this.handleQuickAdd(e)}
                    >
                      <div class="quick-add-name">${e.name}</div>
                      <div class="quick-add-meta">
                        ${e.amount} ${e.unit} · ${e.caloriesPerServing} cal / serving
                      </div>
                    </button>
                  `)}
              </div>
            `:null}

        <form @submit=${this.handleAddFood} style="margin-top: 10px;">
          <label class="field-label">Food Name</label>
          <input
            class="input-text"
            type="text"
            placeholder="e.g., Oatmeal"
            .value=${this.formFoodName}
            @input=${e=>this.handleInputChange("name",e)}
          />

          <div class="add-form-grid add-form-grid--row">
            <div>
              <label class="field-label">Amount</label>
              <input
                class="input-number"
                type="number"
                min="0"
                step="0.5"
                placeholder="1"
                .value=${this.formAmount}
                @input=${e=>this.handleInputChange("amount",e)}
              />
            </div>

            <div>
              <label class="field-label">Unit</label>
              <input
                class="input-text"
                type="text"
                placeholder="e.g., cup"
                .value=${this.formUnit}
                @input=${e=>this.handleInputChange("unit",e)}
              />
            </div>
          </div>

          <label class="field-label">Calories (per serving)</label>
          <input
            class="input-number"
            type="number"
            min="0"
            step="1"
            placeholder="e.g., 150"
            .value=${this.formCaloriesPerServing}
            @input=${e=>this.handleInputChange("calories",e)}
          />

          <button type="submit" class="add-submit-btn cal-add-btn">
            <span>＋</span>
            <span>Add Food</span>
          </button>
        </form>
      </section>
    `}renderBreakdownCard(){const n=this.selectedDateKey,e=this.getDayTotal(n),t=this.getDistribution(n),a=e>0,i=(r,l,o)=>d`
      <div class="dist-row">
        <div class="dist-label">${r}</div>
        <div class="dist-bar-track">
          <div
            class="dist-bar-fill ${o}"
            style=${`width: ${l}%;`}
          ></div>
        </div>
        <div class="dist-percent">${l}%</div>
      </div>
    `,s={breakfast:this.getMealTotal(n,"breakfast"),lunch:this.getMealTotal(n,"lunch"),dinner:this.getMealTotal(n,"dinner"),snacks:this.getMealTotal(n,"snacks")};return d`
      <section class="cal-breakdown-card">
        <div class="breakdown-header">
          <div class="breakdown-title">Calorie Breakdown</div>
        </div>

        ${a?d`
              <div class="breakdown-grid">
                <div>
                  <div class="breakdown-section-title">Distribution by Meal</div>
                  <div class="dist-list">
                    ${i("Breakfast",t.breakfast,"dist-breakfast")}
                    ${i("Lunch",t.lunch,"dist-lunch")}
                    ${i("Dinner",t.dinner,"dist-dinner")}
                    ${i("Snacks",t.snacks,"dist-snacks")}
                  </div>
                </div>

                <div>
                  <div class="breakdown-section-title">Calories by Meal</div>
                  <div class="cal-bars">
                    ${["breakfast","lunch","dinner","snacks"].map(r=>{const l=s[r],p=20+120*(e===0?0:l/e*100)/100,u=r==="breakfast"?"Breakfast":r==="lunch"?"Lunch":r==="dinner"?"Dinner":"Snacks";return d`
                          <div class="cal-bar">
                            <div
                              class="cal-bar-fill ${r==="breakfast"?"cal-breakfast":r==="lunch"?"cal-lunch":r==="dinner"?"cal-dinner":"cal-snacks"}"
                              style=${`height: ${p}px;`}
                            >
                              <div class="cal-bar-value">
                                ${l>0?l:""}
                              </div>
                            </div>
                            <div class="cal-bar-label">${u}</div>
                          </div>
                        `})}
                  </div>
                </div>
              </div>
            `:d`<div class="breakdown-empty">Add foods to see distribution.</div>`}
      </section>
    `}renderMealCard(n){const e=this.selectedDateKey,a=this.getDayMeals(e)[n]||[],i=this.getMealTotal(e,n);return d`
      <section class="cal-meal-card ${n==="breakfast"?"meal-breakfast":n==="lunch"?"meal-lunch":n==="dinner"?"meal-dinner":"meal-snacks"}">
        <div class="cal-meal-header">
          <div class="cal-meal-heading">
            <div class="cal-meal-icon">${n==="breakfast"?"☀️":n==="lunch"?"🍲":n==="dinner"?"🌙":"🍪"}</div>
            <div class="cal-meal-title">${n==="breakfast"?"Breakfast":n==="lunch"?"Lunch":n==="dinner"?"Dinner":"Snacks"}</div>
          </div>
          <div class="cal-meal-total">${i} cal</div>
        </div>

        ${a.length===0?d`<div class="cal-meal-empty">No items added yet</div>`:d`
              <div class="cal-meal-list">
                ${a.map(o=>d`
                    <div class="cal-meal-row">
                      <div class="cal-meal-row-main">
                        <div class="cal-meal-food-name">${o.name}</div>
                        <div class="cal-meal-food-meta">
                          ${o.amount} ${o.unit||""}
                          <span class="cal-meal-food-sub">
                            · ${o.caloriesPerServing} cal / serving
                          </span>
                        </div>
                      </div>
                      <div class="cal-meal-row-meta">
                        <div class="cal-meal-row-kcal">${o.totalCalories} cal</div>
                        <button
                          type="button"
                          class="exercise-delete"
                          @click=${()=>this.handleDeleteFood(this.selectedDateKey,n,o.id)}
                          aria-label="Remove food"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  `)}
              </div>
            `}
      </section>
    `}render(){return d`
      <div class="page">
        ${this.renderBanner()}
        ${this.renderWeekSelector()}
        ${this.renderSummaryAndProgress()}

        <div class="cal-main-grid">
          ${this.renderAddFoodCard()} ${this.renderBreakdownCard()}
        </div>

        <div class="cal-meals-grid">
          ${this.renderMealCard("breakfast")}
          ${this.renderMealCard("lunch")}
          ${this.renderMealCard("dinner")}
          ${this.renderMealCard("snacks")}
        </div>
      </div>
    `}};f.styles=C(O);y([c()],f.prototype,"weekStart",2);y([c()],f.prototype,"selectedDateKey",2);y([c()],f.prototype,"dailyGoal",2);y([c()],f.prototype,"formMeal",2);y([c()],f.prototype,"formFoodName",2);y([c()],f.prototype,"formAmount",2);y([c()],f.prototype,"formUnit",2);y([c()],f.prototype,"formCaloriesPerServing",2);y([c()],f.prototype,"showQuickAdd",2);y([c()],f.prototype,"mealsByDate",2);y([c()],f.prototype,"lastId",2);f=y([I("calorie-tracker-page")],f);var hn=Object.defineProperty,un=Object.getOwnPropertyDescriptor,Ce=(n,e,t,a)=>{for(var i=a>1?void 0:a?un(e,t):e,s=n.length-1,r;s>=0;s--)(r=n[s])&&(i=(a?r(e,t,i):r(i))||i);return a&&i&&hn(e,t,i),i};let X=class extends v{constructor(){super(...arguments),this.activeTab="planner"}setTab(n){this.activeTab=n}renderTab(n,e){const t=this.activeTab===n;return d`
      <button
        class=${`tab ${t?"active":""}`}
        @click=${()=>this.setTab(n)}
      >
        ${e}
      </button>
    `}render(){return d`
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
              ${this.renderTab("calories","Calorie Tracker")}
              ${this.renderTab("diary","Diary")}
              ${this.renderTab("bmi","BMI Calculator")}
            </div>
          </div>
        </div>
      </header>

      <div class="page">
        ${this.activeTab==="planner"?d`<planner-page></planner-page>`:this.activeTab==="log"?d`<exercise-log-page></exercise-log-page>`:this.activeTab==="calories"?d`<calorie-tracker-page></calorie-tracker-page>`:this.activeTab==="diary"?d`<diary-page></diary-page>`:d`<bmi-calculator-page></bmi-calculator-page>`}
      </div>
    `}};X.styles=C(O);Ce([c()],X.prototype,"activeTab",2);X=Ce([I("planner-fit-app")],X);var gn=Object.defineProperty,fn=Object.getOwnPropertyDescriptor,Ae=(n,e,t,a)=>{for(var i=a>1?void 0:a?fn(e,t):e,s=n.length-1,r;s>=0;s--)(r=n[s])&&(i=(a?r(e,t,i):r(i))||i);return a&&i&&gn(e,t,i),i};let Z=class extends v{constructor(){super(...arguments),this.name="Lit App"}render(){return d`<h1>Hello, ${this.name}</h1>`}};Z.styles=[C(O)];Ae([De()],Z.prototype,"name",2);Z=Ae([I("lit-app")],Z);
