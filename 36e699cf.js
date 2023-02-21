import{D as e,I as t}from"./f55ccf53.js";import"./fe7541c2.js";import"./d09658b4.js";import{e as s}from"./f2f664f9.js";import{F as o,i}from"./f4a2163c.js";import{o as r,s as n,y as a,e as l}from"./95f60e39.js";import"./1e267a98.js";import"./d230bd74.js";import"./f43d2d85.js";import"./5c39e58f.js";import"./be36498e.js";import"./2722a9f7.js";import"./29f0a507.js";var c,d,h=window,p=h.ShadowRoot&&(void 0===h.ShadyCSS||h.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,m=Symbol(),u=new WeakMap,g=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==m)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(p&&void 0===e){const s=void 0!==t&&1===t.length;s&&(e=u.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&u.set(t,e))}return e}toString(){return this.cssText}},v=(e,...t)=>{const s=1===e.length?e[0]:t.reduce(((t,s,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[o+1]),e[0]);return new g(s,e,m)},f=p?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return(e=>new g("string"==typeof e?e:e+"",void 0,m))(t)})(e):e,b=window,y=b.trustedTypes,$=y?y.emptyScript:"",k=b.reactiveElementPolyfillSupport,w={toAttribute(e,t){switch(t){case Boolean:e=e?$:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch(e){s=null}}return s}},x=(e,t)=>t!==e&&(t==t||e==e),_={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:x},A=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,s)=>{const o=this._$Ep(s,t);void 0!==o&&(this._$Ev.set(o,s),e.push(o))})),e}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const s="symbol"==typeof e?Symbol():"__"+e,o=this.getPropertyDescriptor(e,s,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(o){const i=this[e];this[t]=o,this.requestUpdate(e,i,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||_}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of t)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const e of s)t.unshift(f(e))}else void 0!==e&&t.push(f(e));return t}static _$Ep(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,s;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(s=e.hostConnected)||void 0===s||s.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{p?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const s=document.createElement("style"),o=h.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=t.cssText,e.appendChild(s)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t,s=_){var o;const i=this.constructor._$Ep(e,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==(null===(o=s.converter)||void 0===o?void 0:o.toAttribute)?s.converter:w).toAttribute(t,s.type);this._$El=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$El=null}}_$AK(e,t){var s;const o=this.constructor,i=o._$Ev.get(e);if(void 0!==i&&this._$El!==i){const e=o.getPropertyOptions(i),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(s=e.converter)||void 0===s?void 0:s.fromAttribute)?e.converter:w;this._$El=i,this[i]=r.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,s){let o=!0;void 0!==e&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||x)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===s.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,s))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(s)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};A.finalized=!0,A.elementProperties=new Map,A.elementStyles=[],A.shadowRootOptions={mode:"open"},null==k||k({ReactiveElement:A}),(null!==(c=b.reactiveElementVersions)&&void 0!==c?c:b.reactiveElementVersions=[]).push("1.5.0");var S,E=window,C=E.trustedTypes,T=C?C.createPolicy("lit-html",{createHTML:e=>e}):void 0,M=`lit$${(Math.random()+"").slice(9)}$`,j="?"+M,z=`<${j}>`,P=document,O=(e="")=>P.createComment(e),U=e=>null===e||"object"!=typeof e&&"function"!=typeof e,N=Array.isArray,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,L=/>/g,D=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),I=/'/g,B=/"/g,q=/^(?:script|style|textarea|title)$/i,W=(S=1,(e,...t)=>({_$litType$:S,strings:e,values:t})),F=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),J=new WeakMap,K=P.createTreeWalker(P,129,null,!1),Z=class{constructor({strings:e,_$litType$:t},s){let o;this.parts=[];let i=0,r=0;const n=e.length-1,a=this.parts,[l,c]=((e,t)=>{const s=e.length-1,o=[];let i,r=2===t?"<svg>":"",n=H;for(let t=0;t<s;t++){const s=e[t];let a,l,c=-1,d=0;for(;d<s.length&&(n.lastIndex=d,l=n.exec(s),null!==l);)d=n.lastIndex,n===H?"!--"===l[1]?n=R:void 0!==l[1]?n=L:void 0!==l[2]?(q.test(l[2])&&(i=RegExp("</"+l[2],"g")),n=D):void 0!==l[3]&&(n=D):n===D?">"===l[0]?(n=null!=i?i:H,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?D:'"'===l[3]?B:I):n===B||n===I?n=D:n===R||n===L?n=H:(n=D,i=void 0);const h=n===D&&e[t+1].startsWith("/>")?" ":"";r+=n===H?s+z:c>=0?(o.push(a),s.slice(0,c)+"$lit$"+s.slice(c)+M+h):s+M+(-2===c?(o.push(void 0),t):h)}const a=r+(e[s]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==T?T.createHTML(a):a,o]})(e,t);if(this.el=Z.createElement(l,s),K.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(o=K.nextNode())&&a.length<n;){if(1===o.nodeType){if(o.hasAttributes()){const e=[];for(const t of o.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(M)){const s=c[r++];if(e.push(t),void 0!==s){const e=o.getAttribute(s.toLowerCase()+"$lit$").split(M),t=/([.?@])?(.*)/.exec(s);a.push({type:1,index:i,name:t[2],strings:e,ctor:"."===t[1]?Y:"?"===t[1]?te:"@"===t[1]?se:X})}else a.push({type:6,index:i})}for(const t of e)o.removeAttribute(t)}if(q.test(o.tagName)){const e=o.textContent.split(M),t=e.length-1;if(t>0){o.textContent=C?C.emptyScript:"";for(let s=0;s<t;s++)o.append(e[s],O()),K.nextNode(),a.push({type:2,index:++i});o.append(e[t],O())}}}else if(8===o.nodeType)if(o.data===j)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=o.data.indexOf(M,e+1));)a.push({type:7,index:i}),e+=M.length-1}i++}}static createElement(e,t){const s=P.createElement("template");return s.innerHTML=e,s}};function G(e,t,s=e,o){var i,r,n,a;if(t===F)return t;let l=void 0!==o?null===(i=s._$Co)||void 0===i?void 0:i[o]:s._$Cl;const c=U(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,s,o)),void 0!==o?(null!==(n=(a=s)._$Co)&&void 0!==n?n:a._$Co=[])[o]=l:s._$Cl=l),void 0!==l&&(t=G(e,l._$AS(e,t.values),l,o)),t}var Q=class{constructor(e,t,s,o){var i;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=o,this._$Cm=null===(i=null==o?void 0:o.isConnected)||void 0===i||i}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),U(e)?e===V||null==e||""===e?(this._$AH!==V&&this._$AR(),this._$AH=V):e!==this._$AH&&e!==F&&this.g(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>N(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==V&&U(this._$AH)?this._$AA.nextSibling.data=e:this.T(P.createTextNode(e)),this._$AH=e}$(e){var t;const{values:s,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=Z.createElement(o.h,this.options)),o);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===i)this._$AH.p(s);else{const e=new class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:s},parts:o}=this._$AD,i=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:P).importNode(s,!0);K.currentNode=i;let r=K.nextNode(),n=0,a=0,l=o[0];for(;void 0!==l;){if(n===l.index){let t;2===l.type?t=new Q(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new oe(r,this,e)),this.u.push(t),l=o[++a]}n!==(null==l?void 0:l.index)&&(r=K.nextNode(),n++)}return i}p(e){let t=0;for(const s of this.u)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}(i,this),t=e.v(this.options);e.p(s),this.T(t),this._$AH=e}}_$AC(e){let t=J.get(e.strings);return void 0===t&&J.set(e.strings,t=new Z(e)),t}k(e){N(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,o=0;for(const i of e)o===t.length?t.push(s=new Q(this.O(O()),this.O(O()),this,this.options)):s=t[o],s._$AI(i),o++;o<t.length&&(this._$AR(s&&s._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cm=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}},X=class{constructor(e,t,s,o,i){this.type=1,this._$AH=V,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=V}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,o){const i=this.strings;let r=!1;if(void 0===i)e=G(this,e,t,0),r=!U(e)||e!==this._$AH&&e!==F,r&&(this._$AH=e);else{const o=e;let n,a;for(e=i[0],n=0;n<i.length-1;n++)a=G(this,o[s+n],t,n),a===F&&(a=this._$AH[n]),r||(r=!U(a)||a!==this._$AH[n]),a===V?e=V:e!==V&&(e+=(null!=a?a:"")+i[n+1]),this._$AH[n]=a}r&&!o&&this.j(e)}j(e){e===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}},Y=class extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===V?void 0:e}},ee=C?C.emptyScript:"",te=class extends X{constructor(){super(...arguments),this.type=4}j(e){e&&e!==V?this.element.setAttribute(this.name,ee):this.element.removeAttribute(this.name)}},se=class extends X{constructor(e,t,s,o,i){super(e,t,s,o,i),this.type=5}_$AI(e,t=this){var s;if((e=null!==(s=G(this,e,t,0))&&void 0!==s?s:V)===F)return;const o=this._$AH,i=e===V&&o!==V||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==V&&(o===V||i);i&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==s?s:this.element,e):this._$AH.handleEvent(e)}},oe=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}},ie=E.litHtmlPolyfillSupport;null==ie||ie(Z,Q),(null!==(d=E.litHtmlVersions)&&void 0!==d?d:E.litHtmlVersions=[]).push("2.5.0");var re,ne,ae=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const s=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=s.firstChild),s}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,s)=>{var o,i;const r=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:t;let n=r._$litPart$;if(void 0===n){const e=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:null;r._$litPart$=n=new Q(t.insertBefore(O(),e),e,void 0,null!=s?s:{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return F}};ae.finalized=!0,ae._$litElement$=!0,null===(re=globalThis.litElementHydrateSupport)||void 0===re||re.call(globalThis,{LitElement:ae});var le=globalThis.litElementPolyfillSupport;null==le||le({LitElement:ae}),(null!==(ne=globalThis.litElementVersions)&&void 0!==ne?ne:globalThis.litElementVersions=[]).push("3.2.0");var ce=Object.create,de=Object.defineProperty,he=Object.getOwnPropertyDescriptor,pe=Object.getOwnPropertyNames,me=Object.getPrototypeOf,ue=Object.prototype.hasOwnProperty,ge=(e,t)=>function(){return t||(0,e[pe(e)[0]])((t={exports:{}}).exports,t),t.exports},ve=(e,t,s)=>(s=null!=e?ce(me(e)):{},((e,t,s,o)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of pe(t))ue.call(e,i)||i===s||de(e,i,{get:()=>t[i],enumerable:!(o=he(t,i))||o.enumerable});return e})(!t&&e&&e.__esModule?s:de(s,"default",{value:e,enumerable:!0}),e)),fe=(e,t,s,o)=>{for(var i,r=o>1?void 0:o?he(t,s):t,n=e.length-1;n>=0;n--)(i=e[n])&&(r=(o?i(t,s,r):i(r))||r);return o&&r&&de(t,s,r),r};var be=v`:host{display:inline-flex}`,ye=class extends n{constructor(){super(...arguments),this.size="36px"}static get styles(){return[be]}render(){return a`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 30 26" width="${this.size}" xml:space="preserve"><path fill="#FA0F00" d="M19 0h11v26zM11.1 0H0v26zM15 9.6L22.1 26h-4.6l-2.1-5.2h-5.2z"/></svg>`}};function $e(e){const t=[`${e}`];return t.raw=[`${e}`],W(t)}fe([l({type:String})],ye.prototype,"size",2),ye=fe([s("docs-spectrum-logo")],ye);var ke=v`.markup{border-radius:6px;max-width:100%;overflow:hidden;overflow-x:auto}div+.markup{border-radius:0 0 6px 6px}:host{--code-example-border-radius:var(--spectrum-alias-border-radius-regular);border:1px solid var(--spectrum-global-color-gray-100);border-radius:var(--code-example-border-radius);display:flex;flex-direction:column;margin:1rem 0 2rem;position:relative;width:100%}.demo-example{background:var(--spectrum-global-color-gray-100);border-radius:var(--code-example-border-radius) var(--code-example-border-radius) 0 0;flex:1;max-width:100%;overflow:auto;padding:var(--spectrum-global-dimension-size-400) var(--spectrum-global-dimension-size-500)}.demo-example .flex{display:flex}@media (max-width:768px){.demo-example{padding:var(--spectrum-global-dimension-size-200) var(--spectrum-global-dimension-size-200)}}.markup{background:var(--spectrum-global-color-gray-75);border-radius:0 0 6px 6px;border-top:1px solid var(--spectrum-global-color-gray-100);display:grid;grid-template-columns:100%;grid-template-rows:minmax(60px,100%);line-height:1.3em;overflow:auto;padding:.75rem 1.5rem;position:relative}pre{padding-bottom:calc(.75rem + var(--spectrum-global-dimension-size-400))}pre,.copy-holder{grid-area:1/1/1/1}.copy-holder{display:grid;grid-template-columns:100%;grid-template-rows:100%;height:100%;left:0;pointer-events:none;position:sticky;top:0;width:100%}pre{font-family:var(
        --spectrum-code-xs-text-font-family,var(--spectrum-alias-code-text-font-family)
    );font-style:var(
        --spectrum-code-xs-text-font-style,var(--spectrum-global-font-style-regular)
    );font-weight:var(
        --spectrum-code-xs-text-font-weight,var(--spectrum-alias-code-text-font-weight-regular)
    );letter-spacing:var(
        --spectrum-code-xs-text-letter-spacing,var(--spectrum-global-font-letter-spacing-none)
    );line-height:var(
        --spectrum-code-xs-text-line-height,var(--spectrum-alias-code-text-line-height)
    );margin-bottom:0;margin-top:0}.copy{margin:0 -1em -.25em 0;place-self:end;pointer-events:all}`,we=v`code[class*=language-],pre[class*=language-]{word-wrap:normal;background:none;color:#000;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;font-size:1em;-webkit-hyphens:none;hyphens:none;line-height:1.5;tab-size:4;text-align:left;text-shadow:0 1px #fff;white-space:pre;word-break:normal;word-spacing:normal}code[class*=language-] ::selection,code[class*=language-]::selection,pre[class*=language-] ::selection,pre[class*=language-]::selection{background:#b3d4fc;text-shadow:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{margin:.5em 0;overflow:auto;padding:1em}:not(pre)>code[class*=language-],pre[class*=language-]{background:#f5f2f0}:not(pre)>code[class*=language-]{border-radius:.3em;padding:.1em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#999}.token.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#905}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#690}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{background:hsla(0,0%,100%,.5);color:#9a6e3a}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.class-name,.token.function{color:#dd4a68}.token.important,.token.regex,.token.variable{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#567f01}.token.punctuation{color:#737373}.language-css .token.function{color:inherit}`,xe=v`code[class*=language-],pre[class*=language-]{word-wrap:normal;background:none;color:#f8f8f2;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;font-size:1em;-webkit-hyphens:none;hyphens:none;line-height:1.5;tab-size:4;text-align:left;text-shadow:0 1px rgba(0,0,0,.3);white-space:pre;word-break:normal;word-spacing:normal}pre[class*=language-]{border-radius:.3em;margin:.5em 0;overflow:auto;padding:1em}:not(pre)>code[class*=language-],pre[class*=language-]{background:#272822}:not(pre)>code[class*=language-]{border-radius:.3em;padding:.1em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#8292a2}.token.punctuation{color:#f8f8f2}.token.namespace{opacity:.7}.token.constant,.token.deleted,.token.property,.token.symbol,.token.tag{color:#f92672}.token.boolean,.token.number{color:#ae81ff}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#a6e22e}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url,.token.variable{color:#f8f8f2}.token.atrule,.token.attr-value,.token.class-name,.token.function{color:#e6db74}.token.keyword{color:#66d9ef}.token.important,.token.regex{color:#fd971f}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}`;function _e(e){if("clipboard"in navigator)return navigator.clipboard.writeText(e.textContent||"");const t=getSelection();if(null==t)return Promise.reject(new Error);t.removeAllRanges();const s=document.createRange();return s.selectNodeContents(e),t.addRange(s),document.execCommand("copy"),t.removeAllRanges(),Promise.resolve()}function Ae(e){if("clipboard"in navigator)return navigator.clipboard.writeText(e);const t=document.body;if(!t)return Promise.reject(new Error);const s=function(e){const t=document.createElement("pre");return t.style.width="1px",t.style.height="1px",t.style.position="fixed",t.style.top="5px",t.textContent=e,t}(e);return t.appendChild(s),_e(s),t.removeChild(s),Promise.resolve()}var Se=class extends(o(n)){constructor(){super(...arguments),this.codeTheme="light",this.preprocessed=!1,this.noDemo=!1,this.prismjsLoaded=!1,this.shouldManageTabOrderForScrolling=()=>{[this.markup,this.demo].map((e=>{if(!e)return;const{offsetWidth:t,scrollWidth:s}=e;t<s?e.tabIndex=0:e.removeAttribute("tabindex")}))}}static get styles(){return[ke]}get codeSlot(){return[...this.children||[]].find((e=>"code"===e.slot))||this}get highlightedHTML(){return this.codeSlot.innerHTML||""}get liveHTML(){return this.codeSlot.textContent||""}get language(){return this.classList.contains("language-javascript")?"javascript":"markup"}get showDemo(){return!this.noDemo&&(this.classList.contains("language-html")||this.classList.contains("language-html-live"))}get highlightedCode(){const e=$e(this.preprocessed?this.highlightedHTML:window.Prism.highlight(this.liveHTML,window.Prism.languages[this.language],this.language));return a`<pre><code>${e}</code></pre>`}get renderedCode(){if(this.classList.contains("language-html-live")){const e=this.querySelector('[slot="demo"]')||document.createElement("div");e.slot="demo",e.innerHTML=this.liveHTML,this.append(e)}return $e(this.liveHTML)}shouldUpdate(){return!(!this.preprocessed&&!this.prismjsLoaded)||(this.preprocessed||import("./606cd3a5.js").then((()=>{this.prismjsLoaded=!0,this.requestUpdate()})),!1)}render(){const{highlightedCode:e,renderedCode:t}=this;return a`${this.showDemo?a`<div class="demo-example"><slot name="demo">${t}</slot></div>`:void 0} <bdo class="markup" dir="ltr">${e}<div class="copy-holder"><sp-action-button class="copy" @click="${this.copyToClipboard}" quiet><sp-icon-copy slot="icon"></sp-icon-copy>Copy to Clipboard</sp-action-button></div></bdo><style>${"light"===this.codeTheme?we.toString():xe.toString()}</style>`}copyToClipboard(){_e(this)}updated(){setTimeout(this.shouldManageTabOrderForScrolling)}trackTheme(){const e=new CustomEvent("sp-track-theme",{bubbles:!0,composed:!0,detail:{callback:e=>{this.codeTheme=e.startsWith("light")?"light":"dark"}},cancelable:!0});this.dispatchEvent(e)}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.shouldManageTabOrderForScrolling),this.trackTheme()}disconnectedCallback(){window.removeEventListener("resize",this.shouldManageTabOrderForScrolling),this.trackTheme(),super.disconnectedCallback()}};fe([i("#markup")],Se.prototype,"markup",2),fe([i(".demo-example")],Se.prototype,"demo",2),fe([l()],Se.prototype,"codeTheme",2),fe([l({type:Boolean})],Se.prototype,"preprocessed",2),fe([l({type:Boolean,attribute:"no-demo"})],Se.prototype,"noDemo",2),Se=fe([s("code-example")],Se);var Ee=v`:host{display:block}#app{display:flex;flex-direction:column;height:100%;width:100%}docs-side-nav:not(:defined){display:none}@media screen and (min-width:961px){docs-side-nav:not(:defined){background-color:var(--spectrum-global-color-gray-75);display:flex;flex-direction:column;height:100vh;left:0;max-height:100vh;max-width:var(--spectrum-global-dimension-size-2400);padding:0 24px 24px;position:sticky;top:0}docs-side-nav:not(:defined) ::slotted([slot=logo]){margin:0 -24px}docs-side-nav:not(:defined) ::slotted([slot=side-nav]){flex:1;flex-grow:1;margin-top:56px;width:216px}}#body{background-color:var(--spectrum-global-color-gray-50);color:var(--spectrum-global-color-gray-800);display:grid;flex:1 1 auto;grid-template-columns:auto calc(100% - var(--spectrum-global-dimension-size-2400) - var(--spectrum-global-dimension-size-300) - var(--spectrum-global-dimension-size-300))}@media screen and (max-width:960px){#body{grid-template-columns:100%;height:50%}}#page{box-sizing:border-box;margin-left:auto;margin-right:auto;max-width:1080px;padding:var(--spectrum-global-dimension-size-500) var(--spectrum-global-dimension-size-700);width:100%}.manage-theme{display:grid;grid-template-columns:auto auto;justify-content:flex-end}.theme-control{display:flex;flex-direction:column}@media screen and (max-width:960px){#page{padding:var(--spectrum-global-dimension-size-100) var(--spectrum-global-dimension-size-300)}.manage-theme{margin-left:0;margin-right:0}}@media screen and (min-width:525px){.manage-theme{display:flex;flex-direction:row;flex-wrap:wrap}}header{--spectrum-actionbutton-height:var(--spectrum-global-dimension-size-500);--spectrum-actionbutton-min-width:var(
        --spectrum-global-dimension-size-500
    );--spectrum-alias-workflow-icon-size:22px;align-items:center;background-color:var(--spectrum-global-color-gray-50);border-bottom:1px solid var(--spectrum-global-color-gray-200);display:flex;flex-direction:row;left:0;min-height:var(--spectrum-global-dimension-size-600);padding-left:8px;position:sticky;right:0;top:0;z-index:1}header svg{stroke:transparent;height:100%}:host([dir=ltr]) .theme-control{margin-left:var(--spectrum-global-dimension-size-400)}:host([dir=rtl]) .theme-control{margin-right:var(--spectrum-global-dimension-size-400)}sp-field-label:not(:defined){height:calc(var(
                --spectrum-fieldlabel-m-text-line-height,
                var(--spectrum-alias-component-text-line-height)
            ) + var(
                --spectrum-fieldlabel-m-padding-top,
                var(--spectrum-global-dimension-size-50)
            ) + var(
                --spectrum-fieldlabel-m-padding-bottom,
                var(--spectrum-global-dimension-size-65)
            ));min-width:70px}sp-picker:not(:defined){height:var(
        --spectrum-picker-m-height,var(--spectrum-alias-item-height-m)
    );min-width:70px}sp-picker:not(:defined) sp-menu-item{display:none}@media screen and (min-width:961px){header{display:none}}.alerts{bottom:0;display:flex;flex-direction:column;position:fixed;text-align:center;width:100vw}.alerts sp-toast{margin:0 auto var(--spectrum-global-dimension-size-300)}#logo{border-radius:4px;color:var(--spectrum-global-color-gray-800);display:flex;flex-direction:row;margin-bottom:-11px;outline:none;padding:var(--spectrum-global-dimension-size-350) var(--spectrum-global-dimension-size-300);text-decoration:none;width:var(--spectrum-global-dimension-size-2400)}#logo docs-spectrum-logo{display:block;flex-shrink:0;height:31px;margin-bottom:12px;margin-right:var(--spectrum-global-dimension-size-200);width:36px}#logo .title{align-items:center;font-family:var(
        --spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
    );font-size:18px;font-style:normal;font-weight:700;letter-spacing:0;line-height:1.3;margin:-3px 0 0}#logo span{white-space:nowrap}`,Ce=matchMedia(e).matches?"dark":"light",Te=matchMedia(t).matches?"large":"medium",Me=window.localStorage&&localStorage.getItem("swc-docs:theme:color")||Ce,je=window.localStorage&&localStorage.getItem("swc-docs:theme:scale")||Te,ze=window.localStorage&&localStorage.getItem("swc-docs:theme:theme")||"spectrum",Pe=window.localStorage&&localStorage.getItem("swc-docs:theme:dir")||"ltr",Oe=matchMedia("screen and (max-width: 960px)"),Ue=(e,t)=>{switch(`${e}-${t}`){case"darkest-spectrum":import("./0e09fdbe.js");break;case"dark-spectrum":import("./cb1203c1.js");break;case"light-spectrum":import("./596fb519.js");break;case"lightest-spectrum":import("./3f0f15f1.js");break;case"medium-spectrum":import("./e34da8b1.js");break;case"large-spectrum":import("./d70ed374.js");break;case"darkest-express":import("./7728a33b.js");break;case"dark-express":import("./fa88214a.js");break;case"light-express":import("./5d9ea239.js");break;case"lightest-express":import("./bb187999.js");break;case"medium-express":import("./ab0dc985.js");break;case"large-express":import("./bb458580.js")}},Ne=class extends n{constructor(){super(...arguments),this.alerts=new Map,this.color=Me,this.dir=Pe,this.open=!1,this.isNarrow=Oe.matches,this.scale=je,this.theme=ze,this._themeTrackers=new Map,this.handleMatchMediaChange=e=>{this.isNarrow=e.matches},this._sidenavRendered=!1}static get styles(){return[Ee]}async startManagingContentDirection(e){(await this.themeRoot).startManagingContentDirection(e)}async stopManagingContentDirection(e){(await this.themeRoot).stopManagingContentDirection(e)}toggleNav(){this.open=!this.open}updateColor(e){this.color=e.target.value,this._themeTrackers.forEach((e=>e(this.color)))}updateScale(e){this.scale=e.target.value}updateTheme(e){this.theme=e.target.value}updateDirection(e){const t=e.target.value;this.dir="rtl"===t?t:"ltr",document.documentElement.dir=this.dir}handleTrackTheme(e){const t=e.composedPath()[0];if(this._themeTrackers.has(t))this._themeTrackers.delete(t);else{this._themeTrackers.set(t,e.detail.callback);const s=this._themeTrackers.get(t);s&&s(this.color)}}copyText(e){Ae(e.detail.text),this.addAlert(e)}addAlert(e){const t=e.composedPath()[0];if(!this.alerts.has(t)){const e=()=>{this.alerts.delete(t),t.focus(),this.requestUpdate()};this.alerts.set(t,{count:0,message:"",element:(t,s)=>a`<sp-toast .timeout="${t}" variant="info" @close="${e}" open>${s} ${t>1?`(${t} alerts)`:""}</sp-toast>`})}const s=this.alerts.get(t);this.alerts.set(t,{element:s.element,count:s.count+1,message:e.detail.message}),this.requestUpdate()}focus(){this.shadowRoot.querySelector("docs-side-nav").focus()}get sideNav(){const e=!this.isNarrow||this.open,t=a`<slot name="logo" slot="logo"><a id="logo" href="index.html"><docs-spectrum-logo></docs-spectrum-logo><h1 class="title">Spectrum<br><span>Web Components</span></h1></a></slot><slot name="side-nav"></slot>`;return this._sidenavRendered=this._sidenavRendered||e,this._sidenavRendered&&import("./fb14926b.js"),a`<docs-side-nav id="side-nav" ?inert="${this.isNarrow&&!this.open}" ?open="${this.open}" @close="${this.toggleNav}">${this._sidenavRendered?t:V}</docs-side-nav>`}get manageTheme(){return a`<div class="manage-theme"><div class="theme-control"><sp-field-label for="theme-theme">Theme</sp-field-label><sp-picker id="theme-theme" quiet value="${this.theme}" @change="${this.updateTheme}" placement="bottom-end"><sp-menu-item value="spectrum">Spectrum</sp-menu-item><sp-menu-item value="express">Spectrum Express</sp-menu-item></sp-picker></div><div class="theme-control"><sp-field-label for="theme-color">Color Theme</sp-field-label><sp-picker id="theme-color" quiet value="${this.color}" @change="${this.updateColor}" placement="bottom-end"><sp-menu-item value="lightest">Lightest</sp-menu-item><sp-menu-item value="light">Light</sp-menu-item><sp-menu-item value="dark">Dark</sp-menu-item><sp-menu-item value="darkest">Darkest</sp-menu-item></sp-picker></div><div class="theme-control"><sp-field-label for="theme-scale">Scale</sp-field-label><sp-picker id="theme-scale" label="Scale" quiet value="${this.scale}" @change="${this.updateScale}" placement="bottom-end"><sp-menu-item value="medium">Medium</sp-menu-item><sp-menu-item value="large">Large</sp-menu-item></sp-picker></div><div class="theme-control"><sp-field-label for="theme-direction">Direction</sp-field-label><sp-picker id="theme-direction" label="Direction" quiet value="${this.dir}" @change="${this.updateDirection}" placement="bottom-end"><sp-menu-item value="ltr">LTR</sp-menu-item><sp-menu-item value="rtl">RTL</sp-menu-item></sp-picker></div></div>`}render(){return a`<sp-theme .color="${this.color}" .scale="${this.scale}" .theme="${this.theme}" dir="${this.dir}" id="app" @sp-track-theme="${this.handleTrackTheme}">${this.isNarrow?a`<header><sp-action-button quiet label="Open Navigation" @click="${this.toggleNav}"><sp-icon-show-menu slot="icon"></sp-icon-show-menu></sp-action-button></header>`:a``}<div id="body">${this.sideNav}<div id="page" ?inert="${this.isNarrow&&this.open}" @alert="${this.addAlert}" @copy-text="${this.copyText}">${this.manageTheme}<slot></slot></div></div>${this.alerts.size?a`<div class="alerts" role="region">${[...this.alerts.values()].map((e=>e.element(e.count,e.message)))}</div>`:a``}</sp-theme>`}firstUpdated(){Me===Ce&&je===Te&&"spectrum"===ze||(Ue(Me,ze),Ue(je,ze)),Oe.addEventListener("change",this.handleMatchMediaChange)}updated(e){let t=!1;if(e.has("color")){window.localStorage&&localStorage.setItem("swc-docs:theme:color",this.color),e.get("color")&&(t=!0);[...this.querySelectorAll("code-example")].forEach((e=>{e.codeTheme="dark"===this.color||"darkest"===this.color?"dark":"light"})),document.querySelector("html").style.colorScheme="dark"===this.color||"darkest"===this.color?"dark":"light"}e.has("scale")&&(window.localStorage&&localStorage.setItem("swc-docs:theme:scale",this.scale),e.get("scale")&&(t=!0)),e.has("theme")&&(window.localStorage&&localStorage.setItem("swc-docs:theme:theme",this.theme),e.get("theme")&&(t=!0)),e.has("dir")&&window.localStorage&&localStorage.setItem("swc-docs:theme:dir",this.dir),e.has("open")&&this.open&&this.focus(),t&&(Ue(this.color,this.theme),Ue(this.scale,this.theme))}};fe([l({attribute:!1})],Ne.prototype,"alerts",2),fe([l({attribute:!1})],Ne.prototype,"color",2),fe([l({reflect:!0})],Ne.prototype,"dir",2),fe([l({type:Boolean})],Ne.prototype,"open",2),fe([l({type:Boolean,attribute:!1})],Ne.prototype,"isNarrow",2),fe([l({attribute:!1})],Ne.prototype,"scale",2),fe([l({attribute:!1})],Ne.prototype,"theme",2),fe([function(e){return r({descriptor:t=>({async get(){var t;return await this.updateComplete,null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e)},enumerable:!0,configurable:!0})})}("sp-theme")],Ne.prototype,"themeRoot",2),customElements.define("docs-page",Ne),window.spAlert=(e,t)=>{e.dispatchEvent(new CustomEvent("alert",{composed:!0,bubbles:!0,detail:{message:t}}))};export{ge as _,fe as a,ve as b,v as i};
//# sourceMappingURL=36e699cf.js.map