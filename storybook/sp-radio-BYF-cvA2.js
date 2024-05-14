import { F as FocusVisiblePolyfillMixin } from './focus-visible-D29Av9Xb.js';
import { i } from './lit-element-BL-po2DW.js';
import { S as SizedMixin } from './sizedMixin-C1lD98vT.js';
import { x } from './lit-html-COgVUehj.js';
import { n, S as SpectrumElement, d as defineElement } from './define-element-ByMWMcVd.js';

const r=i`
    :host{--spectrum-radio-neutral-content-color:var(--spectrum-neutral-content-color-default);--spectrum-radio-neutral-content-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-radio-neutral-content-color-down:var(--spectrum-neutral-content-color-down);--spectrum-radio-neutral-content-color-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-radio-focus-indicator-thickness:var(--spectrum-focus-indicator-thickness);--spectrum-radio-focus-indicator-gap:var(--spectrum-focus-indicator-gap);--spectrum-radio-focus-indicator-color:var(--spectrum-focus-indicator-color);--spectrum-radio-disabled-content-color:var(--spectrum-disabled-content-color);--spectrum-radio-disabled-border-color:var(--spectrum-disabled-content-color);--spectrum-radio-emphasized-accent-color:var(--spectrum-accent-color-900);--spectrum-radio-emphasized-accent-color-hover:var(--spectrum-accent-color-1000);--spectrum-radio-emphasized-accent-color-down:var(--spectrum-accent-color-1100);--spectrum-radio-emphasized-accent-color-focus:var(--spectrum-accent-color-1000);--spectrum-radio-border-width:var(--spectrum-border-width-200);--spectrum-radio-button-background-color:var(--spectrum-gray-75);--spectrum-radio-button-checked-border-color-default:var(--spectrum-neutral-background-color-selected-default);--spectrum-radio-button-checked-border-color-hover:var(--spectrum-neutral-background-color-selected-hover);--spectrum-radio-button-checked-border-color-down:var(--spectrum-neutral-background-color-selected-down);--spectrum-radio-button-checked-border-color-focus:var(--spectrum-neutral-background-color-selected-focus);--spectrum-radio-text-to-control:var(--spectrum-text-to-control-100);--spectrum-radio-label-top-to-text:var(--spectrum-component-top-to-text-100);--spectrum-radio-label-bottom-to-text:var(--spectrum-component-bottom-to-text-100);--spectrum-radio-font-size:var(--spectrum-font-size-100);--spectrum-radio-line-height:var(--spectrum-line-height-100);--spectrum-radio-animation-duration:var(--spectrum-animation-duration-100);--spectrum-radio-height:var(--spectrum-component-height-100);--spectrum-radio-button-control-size:var(--spectrum-radio-button-control-size-medium);--spectrum-radio-button-top-to-control:var(--spectrum-radio-button-top-to-control-medium)}:host(:lang(ja)),:host(:lang(ko)),:host(:lang(zh)){--spectrum-radio-line-height-cjk:var(--spectrum-cjk-line-height-100)}:host([size=s]){--spectrum-radio-height:var(--spectrum-component-height-75);--spectrum-radio-button-control-size:var(--spectrum-radio-button-control-size-small);--spectrum-radio-text-to-control:var(--spectrum-text-to-control-75);--spectrum-radio-label-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-radio-label-bottom-to-text:var(--spectrum-component-bottom-to-text-75);--spectrum-radio-button-top-to-control:var(--spectrum-radio-button-top-to-control-small);--spectrum-radio-font-size:var(--spectrum-font-size-75)}:host{--spectrum-radio-height:var(--spectrum-component-height-100);--spectrum-radio-button-control-size:var(--spectrum-radio-button-control-size-medium);--spectrum-radio-text-to-control:var(--spectrum-text-to-control-100);--spectrum-radio-label-top-to-text:var(--spectrum-component-top-to-text-100);--spectrum-radio-label-bottom-to-text:var(--spectrum-component-bottom-to-text-100);--spectrum-radio-button-top-to-control:var(--spectrum-radio-button-top-to-control-medium);--spectrum-radio-font-size:var(--spectrum-font-size-100)}:host([size=l]){--spectrum-radio-height:var(--spectrum-component-height-200);--spectrum-radio-button-control-size:var(--spectrum-radio-button-control-size-large);--spectrum-radio-text-to-control:var(--spectrum-text-to-control-200);--spectrum-radio-label-top-to-text:var(--spectrum-component-top-to-text-200);--spectrum-radio-label-bottom-to-text:var(--spectrum-component-bottom-to-text-200);--spectrum-radio-button-top-to-control:var(--spectrum-radio-button-top-to-control-large);--spectrum-radio-font-size:var(--spectrum-font-size-200)}:host([size=xl]){--spectrum-radio-height:var(--spectrum-component-height-300);--spectrum-radio-button-control-size:var(--spectrum-radio-button-control-size-extra-large);--spectrum-radio-text-to-control:var(--spectrum-text-to-control-300);--spectrum-radio-label-top-to-text:var(--spectrum-component-top-to-text-300);--spectrum-radio-label-bottom-to-text:var(--spectrum-component-bottom-to-text-300);--spectrum-radio-button-top-to-control:var(--spectrum-radio-button-top-to-control-extra-large);--spectrum-radio-font-size:var(--spectrum-font-size-300)}@media (forced-colors:active){:host{--highcontrast-radio-neutral-content-color:CanvasText;--highcontrast-radio-neutral-content-color-hover:CanvasText;--highcontrast-radio-neutral-content-color-down:CanvasText;--highcontrast-radio-neutral-content-color-focus:CanvasText;--highcontrast-radio-button-border-color-default:ButtonText;--highcontrast-radio-button-border-color-hover:Highlight;--highcontrast-radio-button-border-color-down:ButtonText;--highcontrast-radio-button-border-color-focus:Highlight;--highcontrast-radio-emphasized-accent-color:ButtonText;--highcontrast-radio-emphasized-accent-color-hover:Highlight;--highcontrast-radio-emphasized-accent-color-down:ButtonText;--highcontrast-radio-emphasized-accent-color-focus:Highlight;--highcontrast-radio-button-checked-border-color-default:Highlight;--highcontrast-radio-button-checked-border-color-hover:Highlight;--highcontrast-radio-button-checked-border-color-down:Highlight;--highcontrast-radio-button-checked-border-color-focus:Highlight;--highcontrast-radio-disabled-content-color:GrayText;--highcontrast-radio-disabled-border-color:GrayText;--highcontrast-radio-focus-indicator-color:CanvasText}#button:after{forced-color-adjust:none}}:host{vertical-align:top;min-block-size:var(--mod-radio-height,var(--spectrum-radio-height));align-items:flex-start;max-inline-size:100%;display:inline-flex;position:relative}:host(:active) #button:before{border-color:var(--highcontrast-radio-button-border-color-down,var(--mod-radio-button-border-color-down,var(--spectrum-radio-button-border-color-down)))}:host(:active[checked]) #input+#button:before{border-color:var(--highcontrast-radio-button-checked-border-color-down,var(--mod-radio-button-checked-border-color-down,var(--spectrum-radio-button-checked-border-color-down)))}:host(:active) #label{color:var(--highcontrast-radio-neutral-content-color-down,var(--mod-radio-neutral-content-color-down,var(--spectrum-radio-neutral-content-color-down)))}:host(:focus-visible) #button:before{border-color:var(--highcontrast-radio-button-border-color-focus,var(--mod-radio-button-border-color-focus,var(--spectrum-radio-button-border-color-focus)))}:host(:focus-visible) #button:after{border-style:solid;border-color:var(--highcontrast-radio-focus-indicator-color,var(--mod-radio-focus-indicator-color,var(--spectrum-radio-focus-indicator-color)));border-width:var(--mod-radio-focus-indicator-thickness,var(--spectrum-radio-focus-indicator-thickness));inline-size:calc(var(--spectrum-radio-button-control-size) + var(--spectrum-radio-focus-indicator-gap)*2);block-size:calc(var(--spectrum-radio-button-control-size) + var(--spectrum-radio-focus-indicator-gap)*2)}:host(:focus-visible[checked]) #input+#button:before{border-color:var(--highcontrast-radio-button-checked-border-color-focus,var(--mod-radio-button-checked-border-color-focus,var(--spectrum-radio-button-checked-border-color-focus)))}:host(:focus-visible) #label{color:var(--highcontrast-radio-neutral-content-color-focus,var(--mod-radio-neutral-content-color-focus,var(--spectrum-radio-neutral-content-color-focus)))}:host([readonly]) #input:read-only{cursor:auto}:host([readonly]) #button{clip:rect(1px,1px,1px,1px);clip-path:inset(50%);position:fixed;inset-block-end:100%;inset-inline-end:100%}:host([readonly][checked][disabled]) #input~#label,:host([readonly][disabled]) #input~#label,:host([readonly]) #label{color:inherit;margin-inline-start:auto}:host([emphasized][checked]) #input+#button:before{border-color:var(--highcontrast-radio-emphasized-accent-color,var(--mod-radio-emphasized-accent-color,var(--spectrum-radio-emphasized-accent-color)))}@media (hover:hover){:host(:hover) #button:before{border-color:var(--highcontrast-radio-button-border-color-hover,var(--mod-radio-button-border-color-hover,var(--spectrum-radio-button-border-color-hover)))}:host([checked]:hover) #input+#button:before{border-color:var(--highcontrast-radio-button-checked-border-color-hover,var(--mod-radio-button-checked-border-color-hover,var(--spectrum-radio-button-checked-border-color-hover)))}:host(:hover) #label{color:var(--highcontrast-radio-neutral-content-color-hover,var(--mod-radio-neutral-content-color-hover,var(--spectrum-radio-neutral-content-color-hover)))}:host([emphasized][checked]:hover) #input+#button:before{border-color:var(--highcontrast-radio-emphasized-accent-color-hover,var(--mod-radio-emphasized-accent-color-hover,var(--spectrum-radio-emphasized-accent-color-hover)))}}:host([emphasized]:active[checked]) #input+#button:before{border-color:var(--highcontrast-radio-emphasized-accent-color-down,var(--mod-radio-emphasized-accent-color-down,var(--spectrum-radio-emphasized-accent-color-down)))}:host([emphasized]:focus-visible[checked]) #input+#button:before{border-color:var(--highcontrast-radio-emphasized-accent-color-focus,var(--mod-radio-emphasized-accent-color-focus,var(--spectrum-radio-emphasized-accent-color-focus)))}:host([checked][disabled]) #input+#button:before,:host([disabled]) #input+#button:before{border-color:var(--highcontrast-radio-disabled-border-color,var(--mod-radio-disabled-border-color,var(--spectrum-radio-disabled-border-color)))}:host([checked][disabled]) #input~#label,:host([disabled]) #input~#label{color:var(--highcontrast-radio-disabled-content-color,var(--mod-radio-disabled-content-color,var(--spectrum-radio-disabled-content-color)))}#input{font-family:inherit;font-size:100%;line-height:var(--mod-radio-line-height,var(--spectrum-radio-line-height));box-sizing:border-box;opacity:0;z-index:1;cursor:pointer;block-size:100%;inline-size:100%;margin:0;padding:0;position:absolute;overflow:visible}:host([disabled]) #input{cursor:default}:host([checked]) #input+#button:before{border-width:calc(var(--spectrum-radio-button-control-size)/2 - var(--spectrum-radio-button-selection-indicator)/2);border-color:var(--highcontrast-radio-button-checked-border-color-default,var(--mod-radio-button-checked-border-color-default,var(--spectrum-radio-button-checked-border-color-default)))}#input:focus-visible+#button:after{border-width:var(--mod-radio-focus-indicator-thickness,var(--spectrum-radio-focus-indicator-thickness));border-color:var(--highcontrast-radio-focus-indicator-color,var(--mod-radio-focus-indicator-color,var(--spectrum-radio-focus-indicator-color)));inline-size:calc(var(--spectrum-radio-button-control-size) + var(--spectrum-radio-focus-indicator-gap)*2);block-size:calc(var(--spectrum-radio-button-control-size) + var(--spectrum-radio-focus-indicator-gap)*2);border-style:solid}#label{text-align:start;font-size:var(--mod-radio-font-size,var(--spectrum-radio-font-size));color:var(--highcontrast-radio-neutral-content-color,var(--mod-radio-neutral-content-color,var(--spectrum-radio-neutral-content-color)));line-height:var(--mod-radio-line-height,var(--spectrum-radio-line-height));transition:color var(--mod-radio-animation-duration,var(--spectrum-radio-animation-duration))ease-in-out;margin-block-start:var(--spectrum-radio-label-top-to-text);margin-block-end:var(--spectrum-radio-label-bottom-to-text);margin-inline-start:var(--mod-radio-text-to-control,var(--spectrum-radio-text-to-control))}#label:lang(ja),#label:lang(ko),#label:lang(zh){line-height:var(--mod-radio-line-height-cjk,var(--spectrum-radio-line-height-cjk))}#button{box-sizing:border-box;inline-size:var(--mod-radio-button-control-size,var(--spectrum-radio-button-control-size));block-size:var(--mod-radio-button-control-size,var(--spectrum-radio-button-control-size));flex-grow:0;flex-shrink:0;margin-block-start:var(--mod-radio-button-top-to-control,var(--spectrum-radio-button-top-to-control));position:relative}#button:before{z-index:0;content:"";box-sizing:border-box;inline-size:var(--mod-radio-button-control-size,var(--spectrum-radio-button-control-size));block-size:var(--mod-radio-button-control-size,var(--spectrum-radio-button-control-size));background-color:var(--highcontrast-radio-button-background-color,var(--mod-radio-button-background-color,var(--spectrum-radio-button-background-color)));border-width:var(--mod-radio-border-width,var(--spectrum-radio-border-width));border-color:var(--highcontrast-radio-button-border-color-default,var(--mod-radio-button-border-color-default,var(--spectrum-radio-button-border-color-default)));transition:border var(--mod-radio-animation-duration,var(--spectrum-radio-animation-duration))ease-in-out,box-shadow var(--mod-radio-animation-duration,var(--spectrum-radio-animation-duration))ease-in-out;border-style:solid;border-radius:50%;display:block;position:absolute}#button:after{content:"";transition:opacity var(--mod-radio-animation-duration,var(--spectrum-radio-animation-duration))ease-out,margin var(--mod-radio-animation-duration,var(--spectrum-radio-animation-duration))ease-out;border-radius:50%;display:block;position:absolute;inset-block-start:50%;inset-inline-start:50%;transform:translate(-50%)translateY(-50%)}#button:dir(rtl):after,:host([dir=rtl]) #button:after{transform:translate(50%)translateY(-50%)}:host{--spectrum-radio-button-border-color-default:var(--system-spectrum-radio-button-border-color-default);--spectrum-radio-button-border-color-hover:var(--system-spectrum-radio-button-border-color-hover);--spectrum-radio-button-border-color-down:var(--system-spectrum-radio-button-border-color-down);--spectrum-radio-button-border-color-focus:var(--system-spectrum-radio-button-border-color-focus)}:host([emphasized]){--spectrum-radio-button-checked-border-color-default:var(--system-spectrum-radio-emphasized-button-checked-border-color-default);--spectrum-radio-button-checked-border-color-hover:var(--system-spectrum-radio-emphasized-button-checked-border-color-hover);--spectrum-radio-button-checked-border-color-down:var(--system-spectrum-radio-emphasized-button-checked-border-color-down);--spectrum-radio-button-checked-border-color-focus:var(--system-spectrum-radio-emphasized-button-checked-border-color-focus)}:host(:focus){outline:none}:host([disabled]){pointer-events:none}:host([dir=rtl]) #button:after{transform:translate(50%)translateY(-50%)}
`;

var u=Object.defineProperty;var t=(l,s,e,a)=>{for(var i=void 0,d=l.length-1,o;d>=0;d--)(o=l[d])&&(i=(o(s,e,i))||i);return i&&u(s,e,i),i};class Radio extends SizedMixin(FocusVisiblePolyfillMixin(SpectrumElement),{noDefaultSize:!0}){constructor(){super(...arguments);this.autofocus=!1;this.value="";this.checked=!1;this.disabled=!1;this.emphasized=!1;this.invalid=!1;this.readonly=!1;}static get styles(){return [r]}click(){this.disabled||this.activate();}manageAutoFocus(){this.autofocus&&(this.dispatchEvent(new KeyboardEvent("keydown",{code:"Tab"})),this.focus());}activate(){this.checked||(this.checked=!0,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})));}handleKeyup(e){e.code==="Space"&&this.activate();}render(){return x`
            <div id="input"></div>
            <span id="button"></span>
            <span id="label" role="presentation"><slot></slot></span>
        `}firstUpdated(e){super.firstUpdated(e),this.setAttribute("role","radio"),this.hasAttribute("tabindex")||(this.tabIndex=0),this.manageAutoFocus(),this.addEventListener("click",this.activate),this.addEventListener("keyup",this.handleKeyup);}updated(e){super.updated(e),e.has("invalid")&&(this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")),e.has("checked")&&(this.checked?this.setAttribute("aria-checked","true"):this.setAttribute("aria-checked","false")),e.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"));}}t([n({type:Boolean})],Radio.prototype,"autofocus"),t([n({type:String,reflect:!0})],Radio.prototype,"value"),t([n({type:Boolean,reflect:!0})],Radio.prototype,"checked"),t([n({type:Boolean,reflect:!0})],Radio.prototype,"disabled"),t([n({type:Boolean,reflect:!0})],Radio.prototype,"emphasized"),t([n({type:Boolean,reflect:!0})],Radio.prototype,"invalid"),t([n({type:Boolean,reflect:!0})],Radio.prototype,"readonly");

defineElement("sp-radio",Radio);

export { Radio as R };