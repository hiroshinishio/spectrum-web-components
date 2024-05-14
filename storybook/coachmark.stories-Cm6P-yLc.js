import { i } from './lit-element-BL-po2DW.js';
import { r as r$2 } from './spectrum-icon-chevron.css-C5c2rYXA.js';
import './sp-icon-chevron200-zmef3DkS.js';
import './sp-asset-K2JiVNhV.js';
import './sp-button-BmJ8gt0Z.js';
import './sp-button-group-Bhumsiq0.js';
import './sp-quick-actions-Ds-WLOJJ.js';
import { P as Popover } from './Popover-D7EtKebK.js';
import { x, T } from './lit-html-COgVUehj.js';
import { o as o$1 } from './if-defined-DDJGFaN4.js';
import { n } from './when-DEJm_QN9.js';
import { n as n$1, d as defineElement } from './define-element-ByMWMcVd.js';
import './sp-coach-indicator-EZkGob2t.js';
import './sp-action-menu-9K8ac_dv.js';
import './sp-overlay-rmG6aBFp.js';
import './Chevron200-DFmczfFD.js';
import './custom-tag-B5IH9PTE.js';
import './IconBase-C1z7UsT5.js';
import './ButtonBase-CjmqgWAT.js';
import './like-anchor-3x3vwb8N.js';
import './focusable-CUJIQEAB.js';
import './focus-visible-D29Av9Xb.js';
import './observe-slot-text-DLXbbJr-.js';
import './mutation-controller-D2lT1xZk.js';
import './query-assigned-nodes-DAYI4epk.js';
import './base-u8Z1Hrsd.js';
import './query-DQF6X5qW.js';
import './sizedMixin-C1lD98vT.js';
import './sp-action-button-DQC3w3vC.js';
import './sp-icon-corner-triangle300-DVd-V7my.js';
import './CornerTriangle300-B7hvHiLM.js';
import './observe-slot-presence-Ceiwt-jV.js';
import './sp-icon-more-YNuQo1Yc.js';
import './More-C2yzfCOG.js';
import './custom-tag-Diwq7nXX.js';
import './slottable-request-event-DXuuyGoq.js';
import './Picker-C2X8FAZ-.js';
import './sp-icon-chevron100-CvWYkNtC.js';
import './Chevron100-2ZEB0c-t.js';
import './sp-icon-alert-ClrE4xtp.js';
import './sp-menu-Bi5ZsR-Z.js';
import './MatchMedia-pSNe9kbs.js';
import './DependencyManger-Dpkh1Bse.js';
import './class-map-DdRvesrq.js';
import './directive-Bn5c4u4M.js';
import './style-map-DtKTc8KS.js';
import './state-DGkVCdxP.js';
import './Overlay-Bunm4wxf.js';
import './ElementResolution-B9KteuX8.js';
import './random-id-BST1Puzz.js';
import './AbstractOverlay-BmdjRMJl.js';
import './first-focusable-in-BK_DAWOm.js';
import './focusable-selectors-CUZEb4r9.js';
import './VirtualTrigger-Cyjxfq5s.js';
import './strategies-LVmDxAdp.js';
import './condition-attribute-with-id-Cnyhr7Mp.js';
import './platform-DpSwcmux.js';
import './query-assigned-elements-C9WOp2R6.js';

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function*o(o,t){const f="function"==typeof t;if(void 0!==o){let i=-1;for(const n of o)i>-1&&(yield f?t(i):t),i++,yield n;}}

const r$1=i`
    :host{--spectrum-coachmark-min-width:var(--spectrum-coach-mark-minimum-width);--spectrum-coachmark-width:var(--spectrum-coach-mark-width);--spectrum-coachmark-max-width:var(--spectrum-coach-mark-maximum-width);--spectrum-coachmark-media-height:var(--spectrum-coach-mark-media-height);--spectrum-coachmark-media-min-height:var(--spectrum-coach-mark-media-minimum-height);--spectrum-coachmark-border-size:var(--mod-popover-border-width);--spectrum-coachmark-border-radius:var(--mod-popover-corner-radius);--spectrum-coachmark-padding:var(--spectrum-coach-mark-edge-to-content);--spectrum-coachmark-heading-to-action-button:var(--spectrum-spacing-300);--spectrum-coachmark-header-to-body:var(--spectrum-spacing-200);--spectrum-coachmark-body-to-footer:var(--spectrum-spacing-300);--spectrum-coachmark-title-color:var(--spectrum-heading-color);--spectrum-coachmark-title-font-family:var(--spectrum-sans-serif-font);--spectrum-coachmark-title-font-style:var(--spectrum-heading-serif-font-style);--spectrum-coachmark-title-text-font-weight:var(--spectrum-heading-sans-serif-font-weight);--spectrum-coachmark-title-font-size:var(--spectrum-coach-mark-title-size);--spectrum-coachmark-title-text-line-height:var(--spectrum-heading-line-height);--spectrum-coachmark-content-font-color:var(--spectrum-body-color);--spectrum-coachmark-content-font-weight:var(--spectrum-body-sans-serif-font-weight);--spectrum-coachmark-content-font-family:var(--spectrum-sans-serif-font);--spectrum-coachmark-content-font-style:var(--spectrum-body-sans-serif-font-style);--spectrum-coachmark-content-line-height:var(--spectrum-body-line-height);--spectrum-coachmark-content-font-size:var(--spectrum-coach-mark-body-size);--spectrum-coachmark-step-color:var(--spectrum-coach-mark-pagination-color);--spectrum-coachmark-step-font-weight:var(--spectrum-body-medium-font-weight);--spectrum-coachmark-step-font-family:var(--spectrum-sans-serif-font);--spectrum-coachmark-step-font-style:var(--spectrum-body-sans-serif-font-style);--spectrum-coachmark-step-line-height:var(--spectrum-body-line-height);--spectrum-coachmark-step-font-size:var(--spectrum-coach-mark-pagination-body-size);--spectrum-coachmark-step-to-bottom:var(--spectrum-coach-mark-pagination-text-to-bottom-edge);--mod-buttongroup-justify-content:flex-end;--mod-popover-border-width:var(--spectrum-border-width-100);--mod-popover-corner-radius:var(--spectrum-corner-radius-100);--mod-popover-content-area-spacing-vertical:0;--mod-button-edge-to-visual-only:9px;min-inline-size:var(--mod-coachmark-min-width,var(--spectrum-coachmark-min-width));max-inline-size:var(--mod-coachmark-max-width,var(--spectrum-coachmark-max-width));inline-size:var(--mod-coachmark-width,var(--spectrum-coachmark-width));position:relative}.buttongroup{display:var(--spectrum-coachmark-buttongroup-display)}.buttongroup-mobile{--mod-buttongroup-spacing-horizontal:var(--spectrum-spacing-100);display:var(--spectrum-coachmark-buttongroup-mobile-display)}.menu{display:var(--spectrum-coachmark-menu-display)}.spectrum-CoachMark-menu--mobile{display:var(--spectrum-coachmark-menu-mobile-display)}.image-wrapper{block-size:var(--mod-coachmark-media-height,var(--spectrum-coachmark-media-height));min-block-size:var(--mod-coachmark-media-min-height,var(--spectrum-coachmark-media-min-height));inline-size:calc(var(--mod-coachmark-width,var(--spectrum-coachmark-width)) - var(--mod-coachmark-border-size,var(--spectrum-coachmark-border-size))*2);object-fit:cover;object-position:center;border-start-start-radius:inherit;border-start-end-radius:inherit}.image{object-fit:cover;border-start-start-radius:calc(var(--mod-coachmark-border-radius,var(--spectrum-coachmark-border-radius)) - var(--mod-coachmark-border-size,var(--spectrum-coachmark-border-size)));border-start-end-radius:calc(var(--mod-coachmark-border-radius,var(--spectrum-coachmark-border-radius)) - var(--mod-coachmark-border-size,var(--spectrum-coachmark-border-size)));block-size:100%;inline-size:100%;display:block}.content,.footer,.header{padding-block:0;padding-inline:var(--mod-coachmark-padding,var(--spectrum-coachmark-padding))}.header{justify-content:space-between;align-items:center;margin-block-end:var(--mod-coachmark-header-to-body,var(--spectrum-coachmark-header-to-body));padding-block-start:var(--mod-coachmark-padding,var(--spectrum-coachmark-padding));display:flex}.action-menu{white-space:nowrap;z-index:1;margin-inline-start:var(--mod-coachmark-heading-to-action-button,var(--spectrum-coachmark-heading-to-action-button))}.content{color:var(--mod-coachmark-content-font-color,var(--spectrum-coachmark-content-font-color));font-size:var(--mod-coachmark-content-font-size,var(--spectrum-coachmark-content-font-size));font-weight:var(--mod-coachmark-content-font-weight,var(--spectrum-coachmark-content-font-weight));font-family:var(--mod-coachmark-content-font-family,var(--spectrum-coachmark-content-font-family));font-style:var(--mod-coachmark-content-font-style,var(--spectrum-coachmark-content-font-style));line-height:var(--mod-coachmark-content-line-height,var(--spectrum-coachmark-content-line-height));margin-block-end:var(--mod-coachmark-body-to-footer,var(--spectrum-coachmark-body-to-footer))}.footer{align-items:end;margin-block-start:0;padding-block-end:var(--mod-coachmark-padding,var(--spectrum-coachmark-padding));display:grid}.footer .spectrum-ButtonGroup{grid-column-start:2}.title{color:var(--mod-coachmark-title-color,var(--spectrum-coachmark-title-color));font-size:var(--mod-coachmark-title-font-size,var(--spectrum-coachmark-title-font-size));font-weight:var(--mod-coachmark-title-text-font-weight,var(--spectrum-coachmark-title-text-font-weight));font-family:var(--mod-coachmark-title-font-family,var(--spectrum-coachmark-title-font-family));font-style:var(--mod-coachmark-title-font-style,var(--spectrum-coachmark-title-font-style));line-height:var(--mod-coachmark-title-text-line-height,var(--spectrum-coachmark-title-text-line-height));margin-block-end:0}.step{color:var(--mod-coachmark-step-color,var(--spectrum-coachmark-step-color));font-size:var(--mod-coachmark-step-font-size,var(--spectrum-coachmark-step-font-size));font-weight:var(--mod-coachmark-step-text-font-weight,var(--spectrum-coachmark-step-text-font-weight));font-style:var(--mod-coachmark-step-font-style,var(--spectrum-coachmark-step-font-style));line-height:var(--mod-coachmark-step-text-line-height,var(--spectrum-coachmark-step-text-line-height));white-space:nowrap;justify-self:start;margin-block-end:calc(var(--mod-coachmark-step-to-bottom,var(--spectrum-coachmark-step-to-bottom)) - var(--mod-coachmark-padding,var(--spectrum-coachmark-padding)))}:host{--spectrum-coachmark-dimension-size-175:14px;--spectrum-coachmark-dimension-size-200:16px;--spectrum-coachmark-dimension-size-100:8px;--spectrum-coachmark-dimension-size-50:4px;--spectrum-coachmark-content-font-family:var(--spectrum-font-family)}.keyboard-shortcut{background-color:var(--spectrum-gray-200);border:var(--spectrum-text-underline-gap)solid var(--spectrum-gray-200);border-radius:var(--spectrum-spacing-75);color:var(--spectrum-gray-800);min-width:var(--spectrum-badge-min-width);padding-block:var(--spectrum-coachmark-dimension-size-50);padding-inline:var(--spectrum-coachmark-dimension-size-100);flex-flow:row;justify-content:center;align-items:center;display:inline-flex}.keys{align-items:center;gap:var(--spectrum-coachmark-dimension-size-175)var(--spectrum-coachmark-dimension-size-50);font-family:var(--mod-body-sans-serif-font-family,var(--spectrum-body-sans-serif-font-family));flex-flow:wrap;display:flex}.flex-container{align-items:center;gap:var(--spectrum-coachmark-dimension-size-175)var(--spectrum-coachmark-dimension-size-200);flex-wrap:wrap;display:flex}.static-item{flex:0;align-self:flex-start}
`;

var MediaType=(t=>(t.IMAGE="image",t.VIDEO="video",t))(MediaType||{});

var v=Object.defineProperty;var r=(c,l,n,e)=>{for(var i=void 0,o=c.length-1,a;o>=0;o--)(a=c[o])&&(i=(a(l,n,i))||i);return i&&v(l,n,i),i};class Coachmark extends Popover{constructor(){super(...arguments);this.placement="right";this.modifierKeys=[];this.hasAsset=!1;this.renderSecondaryButton=()=>x`
            <sp-button
                treatment="outline"
                variant="secondary"
                @click=${this.handleSecondaryCTA}
            >
                ${this.secondaryCTA}
            </sp-button>
        `;this.renderPrimaryButton=()=>x`
            <sp-button
                size="s"
                treatment="outline"
                variant="primary"
                @click=${this.handlePrimaryCTA}
            >
                ${this.primaryCTA}
            </sp-button>
        `;this.renderSecondaryButtonMobile=()=>x`
            <sp-button
                variant="secondary"
                treatment="outline"
                icon-only
                aria-label="previous"
                @click=${this.handleSecondaryCTA}
            >
                <sp-icon-chevron200
                    size="s"
                    class="spectrum-UIIcon-ChevronLeft75"
                    slot="icon"
                ></sp-icon-chevron200>
            </sp-button>
        `;this.renderPrimaryButtonMobile=()=>x`
            <sp-button
                size="s"
                treatment="outline"
                variant="primary"
                @click=${this.handlePrimaryCTA}
            >
                ${this.primaryCTA}
            </sp-button>
        `;this.renderSteps=()=>x`
            <div class="step" role="status">
                <span aria-live="polite">
                    <slot name="step-count">
                        ${this.currentStep} of ${this.totalSteps}
                    </slot>
                </span>
            </div>
        `;this.renderActionMenu=()=>x`
            <div class="action-menu">
                <slot name="actions"></slot>
            </div>
        `;}static get styles(){return [...super.styles,r$1,r$2]}renderMedia(){var e;return this.mediaType===MediaType.IMAGE?x`
            <sp-asset id="cover-photo">
                <div class="image-wrapper">
                    <img
                        class="image"
                        loading="lazy"
                        slot="cover-photo"
                        src="${o$1(this.source)}"
                        alt="${o$1((e=this==null?void 0:this.content)==null?void 0:e.imageAlt)}"
                    />
                </div>
            </sp-asset>
        `:x`
                <slot name="asset"></slot>
            `}renderModifier(n,e="modifier"){return x`
            <span type="${e}" class="keyboard-shortcut">${n}</span>
        `}renderJoiner(){return x`
            <span class="plus">&plus;</span>
        `}renderHeader(){var o$1,a,d,m;const n=this.modifierKeys&&((o$1=this.modifierKeys)==null?void 0:o$1.length)>0,e=!!this.shortcutKey,i=!!((a=this.content)!=null&&a.title);return !i&&!n&&!e?x`
                <div class="title"><slot name="title"></slot></div>
            `:x`
            ${i?x`
                      <div class="title">${(d=this.content)==null?void 0:d.title}</div>
                  `:T}
            ${n||e?x`
                      <kbd class="keys spectrum-Body spectrum-Body--sizeS">
                          ${n?o((m=this.modifierKeys)==null?void 0:m.map(h=>this.renderModifier(h)),this.renderJoiner()):T}
                          ${e&&n?this.renderJoiner():T}
                          ${e?this.renderModifier(this.shortcutKey,"shortcut"):T}
                      </kbd>
                  `:T}
        `}renderContent(){var e,i;return !((e=this.content)!=null&&e.description)?x`
                <slot name="content"></slot>
            `:x`
            <div>${(i=this.content)==null?void 0:i.description}</div>
        `}handlePrimaryCTA(){this.dispatchEvent(new Event("primary",{bubbles:!0,composed:!0}));}handleSecondaryCTA(){this.dispatchEvent(new Event("secondary",{bubbles:!0,composed:!0}));}renderButtons(){return x`
            <sp-button-group class="spectrum-ButtonGroup buttongroup">
                ${n(this.secondaryCTA,this.renderSecondaryButton)}
                ${n(this.primaryCTA,this.renderPrimaryButton)}
            </sp-button-group>
            <sp-button-group
                class="spectrum-ButtonGroup buttongroup-mobile"
                size="s"
            >
                ${n(this.secondaryCTA,this.renderSecondaryButtonMobile)}
                ${n(this.primaryCTA,this.renderPrimaryButtonMobile)}
            </sp-button-group>
        `}render(){return x`
            ${this.renderMedia()}
            <div class="header">
                <div class="flex-container">${this.renderHeader()}</div>
                <div class="static-item">
                    ${n(this.secondaryCTA&&this.primaryCTA,this.renderActionMenu)}
                </div>
            </div>

            <div class="content">${this.renderContent()}</div>
            <div class="footer">
                ${n(this.totalSteps&&this.totalSteps>1,this.renderSteps)}
                ${this.renderButtons()}
            </div>
        `}}r([n$1({type:Object})],Coachmark.prototype,"item"),r([n$1({type:String})],Coachmark.prototype,"placement"),r([n$1({type:Object,attribute:!1})],Coachmark.prototype,"content"),r([n$1({attribute:"shortcut-key"})],Coachmark.prototype,"shortcutKey"),r([n$1({type:Array})],Coachmark.prototype,"modifierKeys"),r([n$1({attribute:"src"})],Coachmark.prototype,"source"),r([n$1({attribute:"media-type"})],Coachmark.prototype,"mediaType"),r([n$1({type:Boolean,attribute:"has-asset",reflect:!0})],Coachmark.prototype,"hasAsset"),r([n$1()],Coachmark.prototype,"asset"),r([n$1({type:Number,attribute:"current-step"})],Coachmark.prototype,"currentStep"),r([n$1({type:Number,attribute:"total-steps"})],Coachmark.prototype,"totalSteps"),r([n$1({type:String,attribute:"primary-cta"})],Coachmark.prototype,"primaryCTA"),r([n$1({type:String,attribute:"secondary-cta"})],Coachmark.prototype,"secondaryCTA");

defineElement("sp-coachmark",Coachmark);

const cave = "data:image/jpeg;base64,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";

var coachmark_stories = {
  title: "Coachmark",
  component: "sp-coachmark",
  argTypes: {
    onPrimary: { action: "primary" },
    onSecondary: { action: "secondary" }
  }
};
const Default = () => {
  return x`
        <sp-coachmark open>
            <div id="heading" slot="title">Coachmark with Text Only</div>
            <div slot="content">
                This is a Coachmark with nothing but text in it. Kind of lonely
                in here.
            </div>
        </sp-coachmark>
    `;
};
const InTour = (props, args = {}) => {
  const {
    open = true,
    heading = "Coachmark in Tour",
    content = "This is a Coachmark with nothing but text in it.",
    currentStep = 2,
    totalSteps = 8
  } = props;
  return x`
        <sp-coachmark
            ?open=${open}
            primary-cta="Next"
            secondary-cta="Previous"
            current-step=${currentStep}
            total-steps=${totalSteps}
            .content=${{
    title: heading,
    description: content
  }}
            @primary=${(event) => {
    var _a;
    event.target.dispatchEvent(
      new Event("close", { bubbles: true, composed: true })
    );
    (_a = args.onPrimary) == null ? void 0 : _a.call(args, event);
  }}
            @secondary=${(event) => {
    var _a;
    event.target.dispatchEvent(
      new Event("close", { bubbles: true, composed: true })
    );
    (_a = args.onSecondary) == null ? void 0 : _a.call(args, event);
  }}
        >
            <div slot="step-count">${currentStep} of ${totalSteps}</div>
            <sp-action-menu
                placement="bottom-end"
                quiet
                slot="actions"
                label="More Actions"
            >
                <sp-menu-item>Skip tour</sp-menu-item>
                <sp-menu-item>Restart tour</sp-menu-item>
            </sp-action-menu>
        </sp-coachmark>
    `;
};
const single = () => {
  return x`
        <sp-coachmark open primary-cta="Ok">
            <div slot="title">A single coachmark</div>
            <div slot="content">
                This is a Coachmark with nothing but text in it. Kind of lonely
                in here.
            </div>
        </sp-coachmark>
    `;
};
const TriggerOnClick = (props) => {
  const { open = true, currentStep = 1, totalSteps = 4 } = props;
  return x`
        <sp-coach-indicator id="trigger"></sp-coach-indicator>
        <sp-overlay
            trigger="trigger@click"
            placement="right"
            .receivesFocus=${"false"}
            ?open=${open}
        >
            <sp-coachmark
                ?open=${open}
                current-step=${currentStep}
                total-steps=${totalSteps}
                primary-cta="次"
                secondary-cta="前の"
            >
                <div slot="title">クリック時のコーチマーク</div>
                <div slot="content">
                    これはテキストだけが入ったコーチマークです。ここはなんだか寂しいですね。
                </div>
                <div slot="step-count">4 分の 1</div>
                <sp-action-menu
                    placement="bottom-end"
                    quiet
                    slot="actions"
                    label="More Actions"
                >
                    <sp-menu-item>ツアーをスキップ</sp-menu-item>
                    <sp-menu-item>ツアー再開</sp-menu-item>
                </sp-action-menu>
            </sp-coachmark>
        </sp-overlay>
    `;
};
const TriggerOnHover = (props) => {
  const { open = true, currentStep = 2, totalSteps = 8 } = props;
  return x`
        <sp-coach-indicator id="trigger"></sp-coach-indicator>
        <sp-overlay
            trigger="trigger@hover"
            placement="right"
            .receivesFocus=${"false"}
            ?open=${open}
        >
            <sp-coachmark
                ?open=${open}
                current-step=${currentStep}
                total-steps=${totalSteps}
                primary-cta="Next"
                secondary-cta="Previous"
            >
                <div slot="title">Coachmark on hover</div>
                <div slot="content">
                    This is a Coachmark with nothing but text in it. Kind of
                    lonely in here.
                </div>
                <div slot="step-count">${currentStep} of ${totalSteps}</div>
                <sp-action-menu
                    placement="bottom-end"
                    quiet
                    slot="actions"
                    label="More Actions"
                >
                    <sp-menu-item>Skip tour</sp-menu-item>
                    <sp-menu-item>Restart tour</sp-menu-item>
                </sp-action-menu>
            </sp-coachmark>
        </sp-overlay>
    `;
};
const withImage = (props) => {
  const { open = true, currentStep = 2, totalSteps = 8 } = props;
  return x`
        <sp-coachmark
            ?open=${open}
            src=${cave}
            media-type="image"
            primary-cta="Next"
            secondary-cta="Previous"
            current-step=${currentStep}
            total-steps=${totalSteps}
        >
            <div slot="title">Coachmark with Media</div>
            <div slot="content">
                This is a Coachmark with nothing but text in it. Kind of lonely
                in here.
            </div>
            <div slot="step-count">${currentStep} of ${totalSteps}</div>
            <sp-action-menu
                placement="bottom-end"
                quiet
                slot="actions"
                label="More Actions"
            >
                <sp-menu-item>Skip tour</sp-menu-item>
                <sp-menu-item>Restart tour</sp-menu-item>
            </sp-action-menu>
        </sp-coachmark>
    `;
};
const withGif = (props) => {
  const { open = true, currentStep = 2, totalSteps = 8 } = props;
  return x`
        <sp-coachmark
            ?open=${open}
            src=${gif}
            media-type="image"
            primary-cta="Next"
            secondary-cta="Previous"
            current-step=${currentStep}
            total-steps=${totalSteps}
        >
            <div slot="title">Coachmark with GIF</div>
            <div slot="content">
                This is a Coachmark with nothing but text in it. Kind of lonely
                in here.
            </div>
            <div slot="step-count">${currentStep} of ${totalSteps}</div>
            <sp-action-menu
                placement="bottom-end"
                quiet
                slot="actions"
                label="More Actions"
            >
                <sp-menu-item>Skip tour</sp-menu-item>
                <sp-menu-item>Restart tour</sp-menu-item>
            </sp-action-menu>
        </sp-coachmark>
    `;
};
withGif.swc_vrt = {
  skip: true
};
const withKeys = (props) => {
  const {
    modifierKeys = ["\u21E7 Shift", "\u2318"],
    heading = "Coachmark with Keys",
    content = "This is a Coachmark with nothing but text in it.",
    currentStep = 2,
    totalSteps = 8
  } = props;
  return x`
        <sp-coachmark
            open
            .modifierKeys=${modifierKeys}
            .content=${{
    title: heading,
    description: content
  }}
            primary-cta="Next"
            secondary-cta="Previous"
            current-step=${currentStep}
            total-steps=${totalSteps}
        >
            <div slot="step-count">${currentStep} of ${totalSteps}</div>
            <sp-action-menu
                placement="bottom-end"
                quiet
                slot="actions"
                label="More Actions"
            >
                <sp-menu-item>Skip tour</sp-menu-item>
                <sp-menu-item>Restart tour</sp-menu-item>
            </sp-action-menu>
        </sp-coachmark>
    `;
};
const withShortCut = (props) => {
  const { currentStep = 2, totalSteps = 8 } = props;
  return x`
        <sp-coachmark
            open
            primary-cta="Next"
            secondary-cta="Previous"
            current-step=${currentStep}
            total-steps=${totalSteps}
            shortcut-key="Z"
            .content=${{
    title: "Coachmark Shortcut",
    description: "This is a Coachmark with nothing but text in it. Kind of lonely in here"
  }}
        >
            <div slot="step-count">${currentStep} of ${totalSteps}</div>
            <sp-action-menu
                placement="bottom-end"
                quiet
                slot="actions"
                label="More Actions"
            >
                <sp-menu-item>Skip tour</sp-menu-item>
                <sp-menu-item>Restart tour</sp-menu-item>
            </sp-action-menu>
        </sp-coachmark>
    `;
};
const __namedExportsOrder = ['Default', 'InTour', 'single', 'TriggerOnClick', 'TriggerOnHover', 'withImage', 'withGif', 'withKeys', 'withShortCut'];

export { Default, InTour, TriggerOnClick, TriggerOnHover, __namedExportsOrder, coachmark_stories as default, single, withGif, withImage, withKeys, withShortCut };