import { s, u, f } from './lit-element-BL-po2DW.js';
import './lit-html-COgVUehj.js';

// Generated by genversion.
const version = '0.42.3';

const c=new Set,g=()=>{const s=document.documentElement.dir==="rtl"?document.documentElement.dir:"ltr";c.forEach(o=>{o.setAttribute("dir",s);});},w=new MutationObserver(g);w.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const p=s=>typeof s.startManagingContentDirection!="undefined"||s.tagName==="SP-THEME";function SpectrumMixin(s){class o extends s{get isLTR(){return this.dir==="ltr"}hasVisibleFocusInTree(){const n=((r=document)=>{var l;let t=r.activeElement;for(;t!=null&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;const a=t?[t]:[];for(;t;){const i=t.assignedSlot||t.parentElement||((l=t.getRootNode())==null?void 0:l.host);i&&a.push(i),t=i;}return a})(this.getRootNode())[0];if(!n)return !1;try{return n.matches(":focus-visible")||n.matches(".focus-visible")}catch(r){return n.matches(".focus-visible")}}connectedCallback(){if(!this.hasAttribute("dir")){let e=this.assignedSlot||this.parentNode;for(;e!==document.documentElement&&!p(e);)e=e.assignedSlot||e.parentNode||e.host;if(this.dir=e.dir==="rtl"?e.dir:this.dir||"ltr",e===document.documentElement)c.add(this);else {const{localName:n}=e;n.search("-")>-1&&!customElements.get(n)?customElements.whenDefined(n).then(()=>{e.startManagingContentDirection(this);}):e.startManagingContentDirection(this);}this._dirParent=e;}super.connectedCallback();}disconnectedCallback(){super.disconnectedCallback(),this._dirParent&&(this._dirParent===document.documentElement?c.delete(this):this._dirParent.stopManagingContentDirection(this),this.removeAttribute("dir"));}}return o}class SpectrumElement extends SpectrumMixin(s){}SpectrumElement.VERSION=version;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:f},r=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

function defineElement(e,n){customElements.define(e,n);}

export { SpectrumElement as S, SpectrumMixin as a, defineElement as d, n, version as v };