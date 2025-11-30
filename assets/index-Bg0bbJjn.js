(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=globalThis,ne=Y.ShadowRoot&&(Y.ShadyCSS===void 0||Y.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,be=Symbol(),re=new WeakMap;let Se=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==be)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ne&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=re.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&re.set(t,e))}return e}toString(){return this.cssText}};const M=n=>new Se(typeof n=="string"?n:n+"",void 0,be),ke=(n,e)=>{if(ne)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=Y.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,n.appendChild(s)}},oe=ne?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return M(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:De,defineProperty:Ce,getOwnPropertyDescriptor:Pe,getOwnPropertyNames:ze,getOwnPropertySymbols:Ne,getPrototypeOf:Me}=Object,E=globalThis,ae=E.trustedTypes,Te=ae?ae.emptyScript:"",Z=E.reactiveElementPolyfillSupport,O=(n,e)=>n,q={toAttribute(n,e){switch(e){case Boolean:n=n?Te:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},ie=(n,e)=>!De(n,e),de={attribute:!0,type:String,converter:q,reflect:!1,useDefault:!1,hasChanged:ie};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),E.litPropertyMetadata??(E.litPropertyMetadata=new WeakMap);let P=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=de){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Ce(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:r}=Pe(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:i,set(o){const l=i==null?void 0:i.call(this);r==null||r.call(this,o),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??de}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const e=Me(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const t=this.properties,s=[...ze(t),...Ne(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(oe(i))}else e!==void 0&&t.push(oe(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ke(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var r;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const o=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:q).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){var r,o;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const l=s.getPropertyOptions(i),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((r=l.converter)==null?void 0:r.fromAttribute)!==void 0?l.converter:q;this._$Em=i;const c=a.fromAttribute(t,l.type);this[i]=c??((o=this._$Ej)==null?void 0:o.get(i))??c,this._$Em=null}}requestUpdate(e,t,s){var i;if(e!==void 0){const r=this.constructor,o=this[e];if(s??(s=r.getPropertyOptions(e)),!((s.hasChanged??ie)(o,t)||s.useDefault&&s.reflect&&o===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(r._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??t??this[e]),r!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,o]of i){const{wrapped:l}=o,a=this[r];l!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,o,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[O("elementProperties")]=new Map,P[O("finalized")]=new Map,Z==null||Z({ReactiveElement:P}),(E.reactiveElementVersions??(E.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,V=I.trustedTypes,le=V?V.createPolicy("lit-html",{createHTML:n=>n}):void 0,me="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,ye="?"+$,Oe=`<${ye}>`,D=document,L=()=>D.createComment(""),U=n=>n===null||typeof n!="object"&&typeof n!="function",se=Array.isArray,Ie=n=>se(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Q=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ce=/-->/g,pe=/>/g,_=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),he=/'/g,fe=/"/g,ve=/^(?:script|style|textarea|title)$/i,Le=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),d=Le(1),z=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),ue=new WeakMap,A=D.createTreeWalker(D,129);function we(n,e){if(!se(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return le!==void 0?le.createHTML(e):e}const Ue=(n,e)=>{const t=n.length-1,s=[];let i,r=e===2?"<svg>":e===3?"<math>":"",o=T;for(let l=0;l<t;l++){const a=n[l];let c,u,p=-1,m=0;for(;m<a.length&&(o.lastIndex=m,u=o.exec(a),u!==null);)m=o.lastIndex,o===T?u[1]==="!--"?o=ce:u[1]!==void 0?o=pe:u[2]!==void 0?(ve.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=_):u[3]!==void 0&&(o=_):o===_?u[0]===">"?(o=i??T,p=-1):u[1]===void 0?p=-2:(p=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?_:u[3]==='"'?fe:he):o===fe||o===he?o=_:o===ce||o===pe?o=T:(o=_,i=void 0);const w=o===_&&n[l+1].startsWith("/>")?" ":"";r+=o===T?a+Oe:p>=0?(s.push(c),a.slice(0,p)+me+a.slice(p)+$+w):a+$+(p===-2?l:w)}return[we(n,r+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class H{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let r=0,o=0;const l=e.length-1,a=this.parts,[c,u]=Ue(e,t);if(this.el=H.createElement(c,s),A.currentNode=this.el.content,t===2||t===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=A.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const p of i.getAttributeNames())if(p.endsWith(me)){const m=u[o++],w=i.getAttribute(p).split($),G=/([.?@])?(.*)/.exec(m);a.push({type:1,index:r,name:G[2],strings:w,ctor:G[1]==="."?je:G[1]==="?"?Re:G[1]==="@"?We:X}),i.removeAttribute(p)}else p.startsWith($)&&(a.push({type:6,index:r}),i.removeAttribute(p));if(ve.test(i.tagName)){const p=i.textContent.split($),m=p.length-1;if(m>0){i.textContent=V?V.emptyScript:"";for(let w=0;w<m;w++)i.append(p[w],L()),A.nextNode(),a.push({type:2,index:++r});i.append(p[m],L())}}}else if(i.nodeType===8)if(i.data===ye)a.push({type:2,index:r});else{let p=-1;for(;(p=i.data.indexOf($,p+1))!==-1;)a.push({type:7,index:r}),p+=$.length-1}r++}}static createElement(e,t){const s=D.createElement("template");return s.innerHTML=e,s}}function N(n,e,t=n,s){var o,l;if(e===z)return e;let i=s!==void 0?(o=t._$Co)==null?void 0:o[s]:t._$Cl;const r=U(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),r===void 0?i=void 0:(i=new r(n),i._$AT(n,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=N(n,i._$AS(n,e.values),i,s)),e}class He{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??D).importNode(t,!0);A.currentNode=i;let r=A.nextNode(),o=0,l=0,a=s[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new j(r,r.nextSibling,this,e):a.type===1?c=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(c=new Fe(r,this,e)),this._$AV.push(c),a=s[++l]}o!==(a==null?void 0:a.index)&&(r=A.nextNode(),o++)}return A.currentNode=D,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class j{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=N(this,e,t),U(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==z&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ie(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==f&&U(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=H.createElement(we(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(t);else{const o=new He(i,this),l=o.u(this.options);o.p(t),this.T(l),this._$AH=o}}_$AC(e){let t=ue.get(e.strings);return t===void 0&&ue.set(e.strings,t=new H(e)),t}k(e){se(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const r of e)i===t.length?t.push(s=new j(this.O(L()),this.O(L()),this,this.options)):s=t[i],s._$AI(r),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=f}_$AI(e,t=this,s,i){const r=this.strings;let o=!1;if(r===void 0)e=N(this,e,t,0),o=!U(e)||e!==this._$AH&&e!==z,o&&(this._$AH=e);else{const l=e;let a,c;for(e=r[0],a=0;a<r.length-1;a++)c=N(this,l[s+a],t,a),c===z&&(c=this._$AH[a]),o||(o=!U(c)||c!==this._$AH[a]),c===f?e=f:e!==f&&(e+=(c??"")+r[a+1]),this._$AH[a]=c}o&&!i&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class je extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}}class Re extends X{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}}class We extends X{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=N(this,e,t,0)??f)===z)return;const s=this._$AH,i=e===f&&s!==f||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==f&&(s===f||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Fe{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){N(this,e)}}const ee=I.litHtmlPolyfillSupport;ee==null||ee(H,j),(I.litHtmlVersions??(I.litHtmlVersions=[])).push("3.3.1");const Ge=(n,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const r=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new j(e.insertBefore(L(),r),r,void 0,t??{})}return i._$AI(n),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=globalThis;class y extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ge(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return z}}var xe;y._$litElement$=!0,y.finalized=!0,(xe=k.litElementHydrateSupport)==null||xe.call(k,{LitElement:y});const te=k.litElementPolyfillSupport;te==null||te({LitElement:y});(k.litElementVersions??(k.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=n=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(n,e)}):customElements.define(n,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:ie},Ye=(n=Be,e,t)=>{const{kind:s,metadata:i}=t;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),s==="setter"&&((n=Object.create(n)).wrapped=!0),r.set(t.name,n),s==="accessor"){const{name:o}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,a,n)},init(l){return l!==void 0&&this.C(o,void 0,n,l),l}}}if(s==="setter"){const{name:o}=t;return function(l){const a=this[o];e.call(this,l),this.requestUpdate(o,a,n)}}throw Error("Unsupported decorator location: "+s)};function $e(n){return(e,t)=>typeof t=="object"?Ye(n,e,t):((s,i,r)=>{const o=i.hasOwnProperty(r);return i.constructor.createProperty(r,s),o?Object.getOwnPropertyDescriptor(i,r):void 0})(n,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function h(n){return $e({...n,state:!0,attribute:!1})}const Ee=[{id:"Mon",label:"Monday",exercises:[{id:1,order:1,name:"Bench Press",sets:4,reps:10,weight:"135 lbs",muscleGroup:"Chest"},{id:2,order:2,name:"Push-ups",sets:3,reps:15,weight:"",muscleGroup:"Chest"}]},{id:"Tue",label:"Tuesday",exercises:[]},{id:"Wed",label:"Wednesday",exercises:[]},{id:"Thu",label:"Thursday",exercises:[]},{id:"Fri",label:"Friday",exercises:[]},{id:"Sat",label:"Saturday",exercises:[]},{id:"Sun",label:"Sunday",exercises:[]}],qe=["Chest","Back","Legs","Shoulders","Arms","Core","Cardio"],Ve=[{id:1,dateLabel:"Wednesday, November 19, 2025",mood:"Great",text:"Today was an amazing workout day! I pushed through my limits and felt incredibly energized afterwards. My confidence is growing with each session."},{id:2,dateLabel:"Tuesday, November 18, 2025",mood:"Good",text:"Solid workout today. Had a bit of trouble with motivation in the morning but once I got started, everything flowed well."}],S={days:[...Ee],setDays(n){this.days=n},getDays(){return this.days},getExercisesForDay(n){const e=this.days.find(t=>t.id===n);return(e==null?void 0:e.exercises)||[]}},W=`:host {
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
`;var Ke=Object.defineProperty,Je=Object.getOwnPropertyDescriptor,b=(n,e,t,s)=>{for(var i=s>1?void 0:s?Je(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Ke(e,t,i),i};let g=class extends y{constructor(){super(...arguments),this.selectedDayId="Mon",this.days=[...Ee],this.showExerciseForm=!1,this.newExerciseName="",this.newExerciseSets="3",this.newExerciseReps="10",this.newExerciseWeight="",this.newExerciseMuscleGroup="Chest",this.showWeeklySummary=!0}connectedCallback(){super.connectedCallback(),S.setDays(this.days)}updated(n){super.updated(n),n.has("days")&&S.setDays(this.days)}get plannerDays(){return this.days}get selectedDay(){return this.days.find(n=>n.id===this.selectedDayId)??this.days[0]}get totalExercises(){return this.days.reduce((n,e)=>n+e.exercises.length,0)}get activeDays(){return this.days.filter(n=>n.exercises.length>0).length}setDay(n){this.selectedDayId=n}openExerciseForm(){this.showExerciseForm=!0}toggleWeeklySummary(){this.showWeeklySummary=!this.showWeeklySummary}cancelExerciseForm(){this.showExerciseForm=!1,this.newExerciseName="",this.newExerciseSets="3",this.newExerciseReps="10",this.newExerciseWeight="",this.newExerciseMuscleGroup="Chest"}onExerciseNameInput(n){this.newExerciseName=n.target.value}onExerciseSetsInput(n){this.newExerciseSets=n.target.value}onExerciseRepsInput(n){this.newExerciseReps=n.target.value}onExerciseWeightInput(n){this.newExerciseWeight=n.target.value}onExerciseMuscleGroupInput(n){this.newExerciseMuscleGroup=n.target.value}saveExercise(n){n.preventDefault();const e=this.newExerciseName.trim();if(!e)return;const t=Number(this.newExerciseSets)||0,s=Number(this.newExerciseReps)||0,i=this.selectedDayId,r=this.days.find(c=>c.id===i),o=((r==null?void 0:r.exercises.length)??0)+1,l={id:Date.now(),order:o,name:e,sets:t,reps:s,weight:this.newExerciseWeight.trim()||"",muscleGroup:this.newExerciseMuscleGroup.trim()||"General"},a=this.days.map(c=>c.id===i?{...c,exercises:[...c.exercises,l]}:c);this.days=a,S.setDays(this.days),this.cancelExerciseForm()}deleteExercise(n,e){this.days=this.days.map(t=>{if(t.id!==n)return t;const i=t.exercises.filter(r=>r.id!==e).map((r,o)=>({...r,order:o+1}));return{...t,exercises:i}})}renderSummaryCard(n,e,t){return d`
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
                          ${qe.map(e=>d`<option value=${e}>${e}</option>`)}
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
    `}};g.styles=M(W);b([h()],g.prototype,"selectedDayId",2);b([h()],g.prototype,"days",2);b([h()],g.prototype,"showExerciseForm",2);b([h()],g.prototype,"newExerciseName",2);b([h()],g.prototype,"newExerciseSets",2);b([h()],g.prototype,"newExerciseReps",2);b([h()],g.prototype,"newExerciseWeight",2);b([h()],g.prototype,"newExerciseMuscleGroup",2);b([h()],g.prototype,"showWeeklySummary",2);g=b([R("planner-page")],g);var Xe=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,v=(n,e,t,s)=>{for(var i=s>1?void 0:s?Ze(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Xe(e,t,i),i};function B(){return new Date().toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"})}function ge(){const n=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],e=new Date().getDay();return n[e]}const Qe=[{id:1,dateLabel:"Wednesday, November 19, 2025",durationMinutes:45,completionPercent:67,notes:"Great workout! Felt strong on bench press.",exercises:[{id:1,name:"Bench Press",category:"Chest",reps:10,weight:"135 lbs",completionStatus:"complete",difficulty:"Moderate"},{id:2,name:"Push-ups",category:"Chest",reps:15,weight:"",completionStatus:"partial",difficulty:"Easy"},{id:3,name:"Dumbbell Flyes",category:"Chest",reps:12,weight:"30 lbs",completionStatus:"incomplete",difficulty:"Hard"}]},{id:2,dateLabel:"Monday, November 17, 2025",durationMinutes:60,completionPercent:100,notes:"Leg day was tough but rewarding.",exercises:[{id:1,name:"Squats",category:"Legs",reps:12,weight:"225 lbs",completionStatus:"complete",difficulty:"Hard"},{id:2,name:"Leg Press",category:"Legs",reps:15,weight:"270 lbs",completionStatus:"complete",difficulty:"Moderate"}]}];let x=class extends y{constructor(){super(...arguments),this.logEntries=Qe,this.showNewEntry=!1,this.editingEntryId=null,this.newNotes="",this.todayExercises=[],this.exerciseCompletions={},this.exerciseDifficulties={},this.workoutDuration=""}getPlannerExercises(){const n=ge();let e=S.getExercisesForDay(n);if(e.length===0){const t=document.querySelector("planner-page");if(t){const s=t.plannerDays||t.days||[];if(s.length>0){const i=s.find(r=>r.id===n);e=(i==null?void 0:i.exercises)||[],S.setDays(s)}}}return e}openNewEntry(){let n=this.getPlannerExercises();if(n.length===0){const e=document.querySelector("planner-page");if(e){const t=e.plannerDays||e.days||[];if(t.length>0){S.setDays(t);const s=ge();n=S.getExercisesForDay(s)}}}this.todayExercises=n,n.forEach(e=>{this.exerciseCompletions[e.id]="incomplete",this.exerciseDifficulties[e.id]="Moderate"}),this.showNewEntry=!0}calculateCompletionPercent(n){if(n.exercises.length===0)return 0;let e=0;return n.exercises.forEach(t=>{t.completionStatus==="complete"?e+=100:t.completionStatus==="partial"?e+=50:e+=0}),Math.round(e/n.exercises.length)}get filteredEntries(){return this.logEntries}get totalEntries(){return this.filteredEntries.length}get completedToday(){const n=B();return this.filteredEntries.filter(e=>e.dateLabel===n&&e.completionPercent===100).length}get thisWeek(){return this.filteredEntries.length}cancelNewEntry(){this.showNewEntry=!1,this.editingEntryId=null,this.newNotes="",this.todayExercises=[],this.exerciseCompletions={},this.exerciseDifficulties={},this.workoutDuration=""}onNotesInput(n){this.newNotes=n.target.value}onDurationInput(n){this.workoutDuration=n.target.value}onExerciseCompletionChange(n,e){const t=e.target;this.exerciseCompletions[n]=t.value,this.requestUpdate()}onExerciseDifficultyChange(n,e){const t=e.target;this.exerciseDifficulties[n]=t.value,this.requestUpdate()}editEntry(n){this.editingEntryId=n.id,this.showNewEntry=!0,this.newNotes=n.notes,this.workoutDuration=n.durationMinutes.toString(),this.todayExercises=n.exercises.map(e=>({id:e.id,order:1,name:e.name,sets:1,reps:e.reps,weight:e.weight||"",muscleGroup:e.category})),n.exercises.forEach(e=>{this.exerciseCompletions[e.id]=e.completionStatus,this.exerciseDifficulties[e.id]=e.difficulty})}deleteEntry(n){confirm("Are you sure you want to delete this entry?")&&(this.logEntries=this.logEntries.filter(e=>e.id!==n))}saveEntry(n){n.preventDefault();const e=this.todayExercises.map(i=>({id:i.id,name:i.name,category:i.muscleGroup,reps:i.reps,weight:i.weight||"",completionStatus:this.exerciseCompletions[i.id]||"incomplete",difficulty:this.exerciseDifficulties[i.id]||"Moderate"})),t=parseInt(this.workoutDuration)||0,s=this.calculateCompletionPercent({id:0,dateLabel:"",durationMinutes:t,completionPercent:0,notes:"",exercises:e});if(this.editingEntryId){const i=this.logEntries.find(r=>r.id===this.editingEntryId);if(i){const r={...i,durationMinutes:t,completionPercent:s,notes:this.newNotes.trim(),exercises:e};this.logEntries=this.logEntries.map(o=>o.id===this.editingEntryId?r:o)}}else{const i={id:Date.now(),dateLabel:B(),durationMinutes:t,completionPercent:s,notes:this.newNotes.trim(),exercises:e};this.logEntries=[i,...this.logEntries]}this.cancelNewEntry()}renderSummaryCard(n,e,t){return d`
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
          ${n.exercises.map(t=>{const s=t.completionStatus==="complete"?100:t.completionStatus==="partial"?50:0,i=t.completionStatus==="complete"?"#16a34a":t.completionStatus==="partial"?"#eab308":"#ef4444",r=t.difficulty==="Easy"?"#22c55e":t.difficulty==="Moderate"?"#eab308":t.difficulty==="Hard"?"#f97316":"#ef4444";return d`
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
                      style="font-size: 10px; padding: 4px 8px; border-radius: 999px; background: ${r}20; color: ${r}; font-weight: 500;"
                    >
                      ${t.difficulty}
                    </div>
                  </div>
                </div>
                ${this.renderProgressBar(s)}
              </div>
            `})}
          ${n.notes?d`<div class="log-notes">${n.notes}</div>`:null}
        </div>
      </section>
    `}render(){var n;return d`
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

      <!-- Summary -->
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
                    <div class="new-entry-sub">
                      ${this.editingEntryId&&((n=this.logEntries.find(e=>e.id===this.editingEntryId))==null?void 0:n.dateLabel)||B()}
                    </div>
                  </div>
                </div>

                <form @submit=${this.saveEntry}>
                  ${this.todayExercises.length>0?d`
                        <div style="margin-top: 16px;">
                          <div class="section-title" style="margin-bottom: 12px;">
                            Planned Exercises for Today
                          </div>
                          ${this.todayExercises.map(e=>d`
                              <div
                                style="border-radius: 18px; padding: 12px; margin-bottom: 10px; background: #f9fafb; border: 1px solid #e5e7eb;"
                              >
                                <div style="margin-bottom: 8px;">
                                  <div style="font-size: 12px; font-weight: 600; color: #111827;">
                                    ${e.name}
                                  </div>
                                  <div style="font-size: 11px; color: #6b7280; margin-top: 2px;">
                                    ${e.muscleGroup} • ${e.sets} sets × ${e.reps} reps${e.weight?` • ${e.weight}`:""}
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
                                      .value=${this.exerciseCompletions[e.id]||"incomplete"}
                                      @change=${t=>this.onExerciseCompletionChange(e.id,t)}
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
                                      .value=${this.exerciseDifficulties[e.id]||"Moderate"}
                                      @change=${t=>this.onExerciseDifficultyChange(e.id,t)}
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

      ${this.filteredEntries.length>0?this.filteredEntries.map(e=>this.renderLogEntry(e)):null}
    `}};x.styles=M(W);v([h()],x.prototype,"logEntries",2);v([h()],x.prototype,"showNewEntry",2);v([h()],x.prototype,"editingEntryId",2);v([h()],x.prototype,"newNotes",2);v([h()],x.prototype,"todayExercises",2);v([h()],x.prototype,"exerciseCompletions",2);v([h()],x.prototype,"exerciseDifficulties",2);v([h()],x.prototype,"workoutDuration",2);x=v([R("exercise-log-page")],x);var et=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,F=(n,e,t,s)=>{for(var i=s>1?void 0:s?tt(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&et(e,t,i),i};let C=class extends y{constructor(){super(...arguments),this.diaryEntries=[...Ve],this.newMood="Good",this.newDiaryText="",this.showNewEntryForm=!1}get totalEntries(){return this.diaryEntries.length}get greatDays(){return this.diaryEntries.filter(n=>n.mood==="Great").length}get thisWeek(){return this.diaryEntries.length}setMood(n){this.newMood=n}onDiaryInput(n){this.newDiaryText=n.target.value}startNewEntry(){this.showNewEntryForm=!0,this.newMood="Good",this.newDiaryText=""}cancelNewEntry(){this.showNewEntryForm=!1,this.newMood="Good",this.newDiaryText=""}saveDiary(n){if(n.preventDefault(),!this.newDiaryText.trim())return;const e=new Date().toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"}),t={id:Date.now(),dateLabel:e,mood:this.newMood,text:this.newDiaryText.trim()};this.diaryEntries=[t,...this.diaryEntries],this.cancelNewEntry()}render(){const n=new Date().toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"});return d`
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
    `}};C.styles=M(W);F([h()],C.prototype,"diaryEntries",2);F([h()],C.prototype,"newMood",2);F([h()],C.prototype,"newDiaryText",2);F([h()],C.prototype,"showNewEntryForm",2);C=F([R("diary-page")],C);var nt=Object.defineProperty,it=Object.getOwnPropertyDescriptor,_e=(n,e,t,s)=>{for(var i=s>1?void 0:s?it(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&nt(e,t,i),i};let K=class extends y{constructor(){super(...arguments),this.activeTab="planner"}setTab(n){this.activeTab=n}renderTab(n,e){const t=this.activeTab===n;return d`
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
              ${this.renderTab("diary","Diary")}
            </div>
          </div>
        </div>
      </header>

      <div class="page">
        ${this.activeTab==="planner"?d`<planner-page></planner-page>`:this.activeTab==="log"?d`<exercise-log-page></exercise-log-page>`:d`<diary-page></diary-page>`}
      </div>
    `}};K.styles=M(W);_e([h()],K.prototype,"activeTab",2);K=_e([R("planner-fit-app")],K);var st=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,Ae=(n,e,t,s)=>{for(var i=s>1?void 0:s?rt(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&st(e,t,i),i};let J=class extends y{constructor(){super(...arguments),this.name="Lit App"}render(){return d`<h1>Hello, ${this.name}</h1>`}};J.styles=[M(W)];Ae([$e()],J.prototype,"name",2);J=Ae([R("lit-app")],J);
