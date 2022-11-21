System.register(["./8d971471.js"],(function(t){"use strict";var i,e,s,h,a,r,n,c,_;return{setters:[function(t){i=t.c,e=t.b,s=t._,h=t.a,a=t.aI,r=t.aJ,n=t.aK,c=t.aL,_=t.aM}],execute:function(){var l=function(){function t(i){e(this,t),this._map=new Map,this._roundAverageSize=!0,this.totalSize=0,!1===(null==i?void 0:i.roundAverageSize)&&(this._roundAverageSize=!1)}return i(t,[{key:"set",value:function(t,i){var e=this._map.get(t)||0;this._map.set(t,i),this.totalSize+=i-e}},{key:"averageSize",get:function(){if(this._map.size>0){var t=this.totalSize/this._map.size;return this._roundAverageSize?Math.round(t):t}return 0}},{key:"getSize",value:function(t){return this._map.get(t)}},{key:"clear",value:function(){this._map.clear(),this.totalSize=0}}]),t}();t("flow",(function(t){return Object.assign({type:v},t)}));function o(t){return"horizontal"===t?"marginLeft":"marginTop"}function u(t){return"horizontal"===t?"marginRight":"marginBottom"}function g(t,i){var e=[t,i].sort();return e[1]<=0?Math.min.apply(Math,_(e)):e[0]>=0?Math.max.apply(Math,_(e)):e[0]+e[1]}var m=function(){function t(){e(this,t),this._childSizeCache=new l,this._marginSizeCache=new l,this._metricsCache=new Map}return i(t,[{key:"update",value:function(t,i){var e,s,h=this,a=new Set;Object.keys(t).forEach((function(e){var s=Number(e);h._metricsCache.set(s,t[s]),h._childSizeCache.set(s,t[s][n(i)]),a.add(s),a.add(s+1)}));var r,_=c(a);try{for(_.s();!(r=_.n()).done;){var l=r.value,m=(null===(e=this._metricsCache.get(l))||void 0===e?void 0:e[o(i)])||0,v=(null===(s=this._metricsCache.get(l-1))||void 0===s?void 0:s[u(i)])||0;this._marginSizeCache.set(l,g(m,v))}}catch(t){_.e(t)}finally{_.f()}}},{key:"averageChildSize",get:function(){return this._childSizeCache.averageSize}},{key:"totalChildSize",get:function(){return this._childSizeCache.totalSize}},{key:"averageMarginSize",get:function(){return this._marginSizeCache.averageSize}},{key:"totalMarginSize",get:function(){return this._marginSizeCache.totalSize}},{key:"getLeadingMarginValue",value:function(t,i){var e;return(null===(e=this._metricsCache.get(t))||void 0===e?void 0:e[o(i)])||0}},{key:"getChildSize",value:function(t){return this._childSizeCache.getSize(t)}},{key:"getMarginSize",value:function(t){return this._marginSizeCache.getSize(t)}},{key:"clear",value:function(){this._childSizeCache.clear(),this._marginSizeCache.clear(),this._metricsCache.clear()}}]),t}(),v=t("FlowLayout",function(t){s(n,t);var r=h(n);function n(){var t;return e(this,n),(t=r.apply(this,arguments))._itemSize={width:100,height:100},t._physicalItems=new Map,t._newPhysicalItems=new Map,t._metricsCache=new m,t._anchorIdx=null,t._anchorPos=null,t._stable=!0,t._measureChildren=!0,t._estimate=!0,t}return i(n,[{key:"measureChildren",get:function(){return this._measureChildren}},{key:"updateItemSizes",value:function(t){this._metricsCache.update(t,this.direction),this._scheduleReflow()}},{key:"_getPhysicalItem",value:function(t){var i;return null!==(i=this._newPhysicalItems.get(t))&&void 0!==i?i:this._physicalItems.get(t)}},{key:"_getSize",value:function(t){return this._getPhysicalItem(t)&&this._metricsCache.getChildSize(t)}},{key:"_getAverageSize",value:function(){return this._metricsCache.averageChildSize||this._itemSize[this._sizeDim]}},{key:"_getPosition",value:function(t){var i,e=this._getPhysicalItem(t),s=this._metricsCache.averageMarginSize;return 0===t?null!==(i=this._metricsCache.getMarginSize(0))&&void 0!==i?i:s:e?e.pos:s+t*(s+this._getAverageSize())}},{key:"_calculateAnchor",value:function(t,i){return t<=0?0:i>this._scrollSize-this._viewDim1?this._totalItems-1:Math.max(0,Math.min(this._totalItems-1,Math.floor((t+i)/2/this._delta)))}},{key:"_getAnchor",value:function(t,i){if(0===this._physicalItems.size)return this._calculateAnchor(t,i);if(this._first<0)return console.error("_getAnchor: negative _first"),this._calculateAnchor(t,i);if(this._last<0)return console.error("_getAnchor: negative _last"),this._calculateAnchor(t,i);var e=this._getPhysicalItem(this._first),s=this._getPhysicalItem(this._last),h=e.pos;if(s.pos+this._metricsCache.getChildSize(this._last)<t)return this._calculateAnchor(t,i);if(h>i)return this._calculateAnchor(t,i);for(var a=this._firstVisible-1,r=-1/0;r<t;){r=this._getPhysicalItem(++a).pos+this._metricsCache.getChildSize(a)}return a}},{key:"_getActiveItems",value:function(){0===this._viewDim1||0===this._totalItems?this._clearItems():this._getItems()}},{key:"_clearItems",value:function(){this._first=-1,this._last=-1,this._physicalMin=0,this._physicalMax=0;var t=this._newPhysicalItems;this._newPhysicalItems=this._physicalItems,this._newPhysicalItems.clear(),this._physicalItems=t,this._stable=!0}},{key:"_getItems",value:function(){var t,i,e,s,h=this._newPhysicalItems;if(this._stable=!0,this._scrollToIndex>=0&&(this._anchorIdx=Math.min(this._scrollToIndex,this._totalItems-1),this._anchorPos=this._getPosition(this._anchorIdx),this._scrollIfNeeded()),e=this._scrollPosition-this._overhang,(s=this._scrollPosition+this._viewDim1+this._overhang)<0||e>this._scrollSize)this._clearItems();else{null!==this._anchorIdx&&null!==this._anchorPos||(this._anchorIdx=this._getAnchor(e,s),this._anchorPos=this._getPosition(this._anchorIdx));var a=this._getSize(this._anchorIdx);void 0===a&&(this._stable=!1,a=this._getAverageSize());var r=null!==(t=this._metricsCache.getMarginSize(this._anchorIdx))&&void 0!==t?t:this._metricsCache.averageMarginSize,n=null!==(i=this._metricsCache.getMarginSize(this._anchorIdx+1))&&void 0!==i?i:this._metricsCache.averageMarginSize;0===this._anchorIdx&&(this._anchorPos=r),this._anchorIdx===this._totalItems-1&&(this._anchorPos=this._scrollSize-n-a);var c=0;for(this._anchorPos+a+n<e&&(c=e-(this._anchorPos+a+n)),this._anchorPos-r>s&&(c=s-(this._anchorPos-r)),c&&(this._scrollPosition-=c,e-=c,s-=c,this._scrollError+=c),h.set(this._anchorIdx,{pos:this._anchorPos,size:a}),this._first=this._last=this._anchorIdx,this._physicalMin=this._anchorPos-r,this._physicalMax=this._anchorPos+a+n;this._physicalMin>e&&this._first>0;){var _=this._getSize(--this._first);void 0===_&&(this._stable=!1,_=this._getAverageSize());var l=this._metricsCache.getMarginSize(this._first);void 0===l&&(this._stable=!1,l=this._metricsCache.averageMarginSize),this._physicalMin-=_;var o=this._physicalMin;if(h.set(this._first,{pos:o,size:_}),this._physicalMin-=l,!1===this._stable&&!1===this._estimate)break}for(;this._physicalMax<s&&this._last<this._totalItems-1;){var u=this._getSize(++this._last);void 0===u&&(this._stable=!1,u=this._getAverageSize());var g=this._metricsCache.getMarginSize(this._last);void 0===g&&(this._stable=!1,g=this._metricsCache.averageMarginSize);var m=this._physicalMax;if(h.set(this._last,{pos:m,size:u}),this._physicalMax+=u+g,!this._stable&&!this._estimate)break}var v=this._calculateError();v&&(this._physicalMin-=v,this._physicalMax-=v,this._anchorPos-=v,this._scrollPosition-=v,h.forEach((function(t){return t.pos-=v})),this._scrollError+=v),this._stable&&(this._newPhysicalItems=this._physicalItems,this._newPhysicalItems.clear(),this._physicalItems=h)}}},{key:"_calculateError",value:function(){return 0===this._first?this._physicalMin:this._physicalMin<=0?this._physicalMin-this._first*this._delta:this._last===this._totalItems-1?this._physicalMax-this._scrollSize:this._physicalMax>=this._scrollSize?this._physicalMax-this._scrollSize+(this._totalItems-1-this._last)*this._delta:0}},{key:"_reflow",value:function(){var t=this._first,i=this._last,e=this._scrollSize;this._updateScrollSize(),this._getActiveItems(),this._scrollSize!==e&&this._emitScrollSize(),this._updateVisibleIndices(),this._emitRange(),-1===this._first&&-1===this._last?this._resetReflowState():this._first!==t||this._last!==i?(this._emitChildPositions(),this._emitScrollError()):(this._emitChildPositions(),this._emitScrollError(),this._resetReflowState())}},{key:"_resetReflowState",value:function(){this._anchorIdx=null,this._anchorPos=null,this._stable=!0}},{key:"_updateScrollSize",value:function(){var t=this._metricsCache.averageMarginSize;this._scrollSize=Math.max(1,this._totalItems*(t+this._getAverageSize())+t)}},{key:"_delta",get:function(){var t=this._metricsCache.averageMarginSize;return this._getAverageSize()+t}},{key:"_getItemPosition",value:function(t){var i,e;return a(i={},this._positionDim,this._getPosition(t)),a(i,this._secondaryPositionDim,0),a(i,"horizontal"===this.direction?"xOffset":"yOffset",-(null!==(e=this._metricsCache.getLeadingMarginValue(t,this.direction))&&void 0!==e?e:this._metricsCache.averageMarginSize)),i}},{key:"_getItemSize",value:function(t){var i,e;return a(i={},this._sizeDim,(this._getSize(t)||this._getAverageSize())+(null!==(e=this._metricsCache.getMarginSize(t+1))&&void 0!==e?e:this._metricsCache.averageMarginSize)),a(i,this._secondarySizeDim,this._itemSize[this._secondarySizeDim]),i}},{key:"_viewDim2Changed",value:function(){this._scheduleReflow()}}]),n}(r))}}}));