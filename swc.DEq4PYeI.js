import{n as t}from"./swc.DZR_2Tx9.js";import{n as e}from"./swc.Diz0ivfk.js";let s=class{constructor(t,{target:e,config:s,callback:o,skipInitial:n}){this.t=new Set,this.o=!1,this.i=!1,this.h=t,null!==e&&this.t.add(e??t),this.l=s,this.o=n??this.o,this.callback=o,window.MutationObserver?(this.u=new MutationObserver((t=>{this.handleChanges(t),this.h.requestUpdate()})),t.addController(this)):console.warn("MutationController error: browser does not support MutationObserver.")}handleChanges(t){this.value=this.callback?.(t,this.u)}hostConnected(){for(const t of this.t)this.observe(t)}hostDisconnected(){this.disconnect()}async hostUpdated(){const t=this.u.takeRecords();(t.length||!this.o&&this.i)&&this.handleChanges(t),this.i=!1}observe(t){this.t.add(t),this.u.observe(t,this.l),this.i=!0,this.h.requestUpdate()}disconnect(){this.u.disconnect()}};var o=Object.defineProperty,n=(t,e,s,n)=>{for(var i,r=void 0,a=t.length-1;a>=0;a--)(i=t[a])&&(r=i(e,s,r)||r);return r&&o(e,s,r),r};const i=Symbol("assignedNodes");function r(o,r,a=[]){var h,c;const l=t=>e=>t.matches(e);class d extends(c=o,h=i,c){constructor(...t){super(t),this.slotHasContent=!1,new s(this,{config:{characterData:!0,subtree:!0},callback:t=>{for(const e of t)if("characterData"===e.type)return void this.manageTextObservedSlot()}})}manageTextObservedSlot(){if(!this[i])return;const t=[...this[i]].filter((t=>{const e=t;return e.tagName?!a.some(l(e)):!!e.textContent&&e.textContent.trim()}));this.slotHasContent=t.length>0}update(t){if(!this.hasUpdated){const{childNodes:t}=this,e=[...t].filter((t=>{const e=t;return e.tagName?!a.some(l(e))&&(r?e.getAttribute("slot")===r:!e.hasAttribute("slot")):!!e.textContent&&e.textContent.trim()}));this.slotHasContent=e.length>0}super.update(t)}firstUpdated(t){super.firstUpdated(t),this.updateComplete.then((()=>{this.manageTextObservedSlot()}))}}return n([e({type:Boolean,attribute:!1})],d.prototype,"slotHasContent"),n([t({slot:r,flatten:!0})],d.prototype,h),d}export{r as O,s as t};
//# sourceMappingURL=swc.C77ZB4q4.js.map