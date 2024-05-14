import './sp-action-button-DQC3w3vC.js';
import { O as ObserveSlotPresence } from './observe-slot-presence-Ceiwt-jV.js';
import { O as ObserveSlotText } from './observe-slot-text-DLXbbJr-.js';
import './sp-icon-more-YNuQo1Yc.js';
import { i } from './lit-element-BL-po2DW.js';
import { S as SlottableRequestEvent } from './slottable-request-event-DXuuyGoq.js';
import { a as PickerBase, D as DESCRIPTION_ID } from './Picker-C2X8FAZ-.js';
import { x } from './lit-html-COgVUehj.js';
import { o as o$1 } from './if-defined-DDJGFaN4.js';
import { n, d as defineElement } from './define-element-ByMWMcVd.js';
import { r } from './state-DGkVCdxP.js';

const o=i`
    :host{display:inline-flex}:host([quiet]){min-width:0}:host>sp-menu{display:none}::slotted([slot=icon]),.icon{flex-shrink:0}#popover{max-width:none}:host([dir=ltr]) ::slotted([slot=icon]),:host([dir=ltr]) .icon{margin-left:calc(-1*(var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted)))}:host([dir=rtl]) ::slotted([slot=icon]),:host([dir=rtl]) .icon{margin-right:calc(-1*(var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted)))}:host([dir]) slot[icon-only]::slotted([slot=icon]),:host([dir]) slot[icon-only] .icon{margin-inline:calc(( var(--custom-actionbutton-edge-to-text,var(--spectrum-actionbutton-edge-to-text)) - var(--custom-actionbutton-edge-to-visual-only,var(--spectrum-actionbutton-edge-to-visual-only)))*-1)}sp-overlay:not(:defined){display:none}
`;

var u=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var l=(n,i,e,o)=>{for(var t=o>1?void 0:o?h(i,e):i,r=n.length-1,a;r>=0;r--)(a=n[r])&&(t=(o?a(i,e,t):a(t))||t);return o&&t&&u(i,e,t),t};class ActionMenu extends ObserveSlotPresence(ObserveSlotText(PickerBase,"label"),'[slot="label-only"]'){constructor(){super(...arguments);this.selects=void 0;this.static=void 0;this.listRole="menu";this.itemRole="menuitem";this.handleSlottableRequest=e=>{this.dispatchEvent(new SlottableRequestEvent(e.name,e.data));};}static get styles(){return [o]}get hasLabel(){return this.slotHasContent}get labelOnly(){return this.slotContentIsPresent}get buttonContent(){return [x`
                ${this.labelOnly?x``:x`
                          <slot
                              name="icon"
                              slot="icon"
                              ?icon-only=${!this.hasLabel}
                              ?hidden=${this.labelOnly}
                          >
                              <sp-icon-more class="icon"></sp-icon-more>
                          </slot>
                      `}
                <slot name="label" ?hidden=${!this.hasLabel}></slot>
                <slot name="label-only"></slot>
                <slot
                    name="tooltip"
                    @slotchange=${this.handleTooltipSlotchange}
                ></slot>
            `]}render(){return this.tooltipEl&&(this.tooltipEl.disabled=this.open),x`
            <sp-action-button
                aria-describedby=${DESCRIPTION_ID}
                ?quiet=${this.quiet}
                ?selected=${this.open}
                static=${o$1(this.static)}
                aria-haspopup="true"
                aria-controls=${o$1(this.open?"menu":void 0)}
                aria-expanded=${this.open?"true":"false"}
                aria-label=${o$1(this.label||void 0)}
                id="button"
                class="button"
                size=${this.size}
                @blur=${this.handleButtonBlur}
                @click=${this.handleActivate}
                @pointerdown=${this.handleButtonPointerdown}
                @focus=${this.handleButtonFocus}
                @keydown=${{handleEvent:this.handleEnterKeydown,capture:!0}}
                ?disabled=${this.disabled}
            >
                ${this.buttonContent}
            </sp-action-button>
            ${this.renderMenu} ${this.renderDescriptionSlot}
        `}update(e){e.has("invalid")&&(this.invalid=!1),super.update(e);}}l([n({type:String})],ActionMenu.prototype,"selects",2),l([n({type:String,reflect:!0})],ActionMenu.prototype,"static",2),l([r()],ActionMenu.prototype,"labelOnly",1);

defineElement("sp-action-menu",ActionMenu);