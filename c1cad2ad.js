class s{constructor(s,{target:t,config:e,callback:i,skipInitial:h}){this.t=new Set,this.o=!1,this.i=!1,this.h=s,null!==t&&this.t.add(null!=t?t:s),this.l=e,this.o=null!=h?h:this.o,this.callback=i,window.ResizeObserver?(this.u=new ResizeObserver((s=>{this.handleChanges(s),this.h.requestUpdate()})),s.addController(this)):console.warn("ResizeController error: browser does not support ResizeObserver.")}handleChanges(s){var t;this.value=null===(t=this.callback)||void 0===t?void 0:t.call(this,s,this.u)}hostConnected(){for(const s of this.t)this.observe(s)}hostDisconnected(){this.disconnect()}async hostUpdated(){!this.o&&this.i&&this.handleChanges([]),this.i=!1}observe(s){this.t.add(s),this.u.observe(s,this.l),this.i=!0,this.h.requestUpdate()}unobserve(s){this.t.delete(s),this.u.unobserve(s)}disconnect(){this.u.disconnect()}}export{s};
//# sourceMappingURL=c1cad2ad.js.map