import { S as SpectrumElement, n, d as defineElement } from './define-element-ByMWMcVd.js';
import { F as FocusVisiblePolyfillMixin } from './focus-visible-D29Av9Xb.js';
import { R as RovingTabindexController } from './RovingTabindex-Dx9AbyW7.js';
import './sp-clear-button-D33ifaO4.js';
import { i } from './lit-element-BL-po2DW.js';
import { S as SizedMixin } from './sizedMixin-C1lD98vT.js';
import { x, T } from './lit-html-COgVUehj.js';
import { n as n$1 } from './query-assigned-nodes-DAYI4epk.js';

const t$1=i`
    :host{--spectrum-avatar-opacity-disabled:.3;--spectrum-tag-animation-duration:var(--spectrum-animation-duration-100);--spectrum-tag-border-width:var(--spectrum-border-width-100);--spectrum-tag-focus-ring-thickness:var(--spectrum-focus-indicator-thickness);--spectrum-tag-focus-ring-gap:var(--spectrum-focus-indicator-gap);--spectrum-tag-focus-ring-color:var(--spectrum-focus-indicator-color);--spectrum-tag-label-line-height:var(--spectrum-line-height-100);--spectrum-tag-label-font-weight:var(--spectrum-regular-font-weight);--spectrum-tag-content-color-selected:var(--spectrum-gray-50);--spectrum-tag-background-color-selected:var(--spectrum-neutral-background-color-selected-default);--spectrum-tag-background-color-selected-hover:var(--spectrum-neutral-background-color-selected-hover);--spectrum-tag-background-color-selected-active:var(--spectrum-neutral-background-color-selected-down);--spectrum-tag-background-color-selected-focus:var(--spectrum-neutral-background-color-selected-key-focus);--spectrum-tag-border-color-invalid:var(--spectrum-negative-color-900);--spectrum-tag-border-color-invalid-hover:var(--spectrum-negative-color-1000);--spectrum-tag-border-color-invalid-active:var(--spectrum-negative-color-1100);--spectrum-tag-border-color-invalid-focus:var(--spectrum-negative-color-1000);--spectrum-tag-content-color-invalid:var(--spectrum-negative-content-color-default);--spectrum-tag-content-color-invalid-hover:var(--spectrum-negative-content-color-hover);--spectrum-tag-content-color-invalid-active:var(--spectrum-negative-content-color-down);--spectrum-tag-content-color-invalid-focus:var(--spectrum-negative-content-color-key-focus);--spectrum-tag-border-color-invalid-selected:var(--spectrum-negative-background-color-default);--spectrum-tag-border-color-invalid-selected-hover:var(--spectrum-negative-background-color-hover);--spectrum-tag-border-color-invalid-selected-focus:var(--spectrum-negative-background-color-down);--spectrum-tag-border-color-invalid-selected-active:var(--spectrum-negative-background-color-key-focus);--spectrum-tag-background-color-invalid-selected:var(--spectrum-negative-background-color-default);--spectrum-tag-background-color-invalid-selected-hover:var(--spectrum-negative-background-color-hover);--spectrum-tag-background-color-invalid-selected-active:var(--spectrum-negative-background-color-down);--spectrum-tag-background-color-invalid-selected-focus:var(--spectrum-negative-background-color-key-focus);--spectrum-tag-content-color-invalid-selected:var(--spectrum-white);--spectrum-tag-border-color-emphasized:var(--spectrum-accent-background-color-default);--spectrum-tag-border-color-emphasized-hover:var(--spectrum-accent-background-color-hover);--spectrum-tag-border-color-emphasized-active:var(--spectrum-accent-background-color-down);--spectrum-tag-border-color-emphasized-focus:var(--spectrum-accent-background-color-key-focus);--spectrum-tag-background-color-emphasized:var(--spectrum-accent-background-color-default);--spectrum-tag-background-color-emphasized-hover:var(--spectrum-accent-background-color-hover);--spectrum-tag-background-color-emphasized-active:var(--spectrum-accent-background-color-down);--spectrum-tag-background-color-emphasized-focus:var(--spectrum-accent-background-color-key-focus);--spectrum-tag-content-color-emphasized:var(--spectrum-white);--spectrum-tag-content-color-disabled:var(--spectrum-disabled-content-color);--spectrum-tag-icon-spacing-inline-end:var(--spectrum-text-to-visual-100);--spectrum-tag-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-tag-icon-spacing-block-start:var(--spectrum-component-top-to-workflow-icon-100);--spectrum-tag-icon-spacing-block-end:var(--spectrum-component-top-to-workflow-icon-100);--spectrum-tag-avatar-spacing-block-start:var(--spectrum-tag-top-to-avatar-medium);--spectrum-tag-avatar-spacing-block-end:var(--spectrum-tag-top-to-avatar-medium);--spectrum-tag-avatar-spacing-inline-end:var(--spectrum-text-to-visual-100);--spectrum-tag-label-spacing-block:var(--spectrum-component-top-to-text-100);--spectrum-tag-clear-button-spacing-inline-start:var(--spectrum-text-to-visual-100);--spectrum-tag-height:var(--spectrum-component-height-100);--spectrum-tag-font-size:var(--spectrum-font-size-100);--spectrum-tag-clear-button-spacing-block:var(--spectrum-tag-top-to-cross-icon-medium)}:host([size=s]){--spectrum-tag-height:var(--spectrum-component-height-75);--spectrum-tag-font-size:var(--spectrum-font-size-75);--spectrum-tag-icon-size:var(--spectrum-workflow-icon-size-75);--spectrum-tag-clear-button-spacing-inline-start:var(--spectrum-text-to-visual-75);--spectrum-tag-clear-button-spacing-block:var(--spectrum-tag-top-to-cross-icon-small);--spectrum-tag-icon-spacing-block-start:var(--spectrum-component-top-to-workflow-icon-75);--spectrum-tag-icon-spacing-block-end:var(--spectrum-component-top-to-workflow-icon-75);--spectrum-tag-icon-spacing-inline-end:var(--spectrum-text-to-visual-75);--spectrum-tag-avatar-spacing-block-start:var(--spectrum-tag-top-to-avatar-small);--spectrum-tag-avatar-spacing-block-end:var(--spectrum-tag-top-to-avatar-small);--spectrum-tag-avatar-spacing-inline-end:var(--spectrum-text-to-visual-75);--spectrum-tag-label-spacing-block:var(--spectrum-component-top-to-text-75);--spectrum-tag-corner-radius:var(--spectrum-tag-size-small-corner-radius);--spectrum-tag-spacing-inline-start:var(--spectrum-tag-size-small-spacing-inline-start);--spectrum-tag-label-spacing-inline-end:var(--spectrum-tag-size-small-label-spacing-inline-end);--spectrum-tag-clear-button-spacing-inline-end:var(--spectrum-tag-size-small-clear-button-spacing-inline-end)}:host{--spectrum-tag-height:var(--spectrum-component-height-100);--spectrum-tag-font-size:var(--spectrum-font-size-100);--spectrum-tag-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-tag-clear-button-spacing-inline-start:var(--spectrum-text-to-visual-100);--spectrum-tag-clear-button-spacing-block:var(--spectrum-tag-top-to-cross-icon-medium);--spectrum-tag-icon-spacing-block-start:var(--spectrum-component-top-to-workflow-icon-100);--spectrum-tag-icon-spacing-block-end:var(--spectrum-component-top-to-workflow-icon-100);--spectrum-tag-icon-spacing-inline-end:var(--spectrum-text-to-visual-100);--spectrum-tag-avatar-spacing-block-start:var(--spectrum-tag-top-to-avatar-medium);--spectrum-tag-avatar-spacing-block-end:var(--spectrum-tag-top-to-avatar-medium);--spectrum-tag-avatar-spacing-inline-end:var(--spectrum-text-to-visual-100);--spectrum-tag-label-spacing-block:var(--spectrum-component-top-to-text-100);--spectrum-tag-corner-radius:var(--spectrum-tag-size-medium-corner-radius);--spectrum-tag-spacing-inline-start:var(--spectrum-tag-size-medium-spacing-inline-start);--spectrum-tag-label-spacing-inline-end:var(--spectrum-tag-size-medium-label-spacing-inline-end);--spectrum-tag-clear-button-spacing-inline-end:var(--spectrum-tag-size-medium-clear-button-spacing-inline-end)}:host([size=l]){--spectrum-tag-height:var(--spectrum-component-height-200);--spectrum-tag-font-size:var(--spectrum-font-size-200);--spectrum-tag-icon-size:var(--spectrum-workflow-icon-size-200);--spectrum-tag-clear-button-spacing-inline-start:var(--spectrum-text-to-visual-200);--spectrum-tag-clear-button-spacing-block:var(--spectrum-tag-top-to-cross-icon-large);--spectrum-tag-icon-spacing-block-start:var(--spectrum-component-top-to-workflow-icon-200);--spectrum-tag-icon-spacing-block-end:var(--spectrum-component-top-to-workflow-icon-200);--spectrum-tag-icon-spacing-inline-end:var(--spectrum-text-to-visual-200);--spectrum-tag-avatar-spacing-block-start:var(--spectrum-tag-top-to-avatar-large);--spectrum-tag-avatar-spacing-block-end:var(--spectrum-tag-top-to-avatar-large);--spectrum-tag-avatar-spacing-inline-end:var(--spectrum-text-to-visual-200);--spectrum-tag-label-spacing-block:var(--spectrum-component-top-to-text-200);--spectrum-tag-corner-radius:var(--spectrum-tag-size-large-corner-radius);--spectrum-tag-spacing-inline-start:var(--spectrum-tag-size-large-spacing-inline-start);--spectrum-tag-label-spacing-inline-end:var(--spectrum-tag-size-large-label-spacing-inline-end);--spectrum-tag-clear-button-spacing-inline-end:var(--spectrum-tag-size-large-clear-button-spacing-inline-end)}:host{border-color:var(--highcontrast-tag-border-color,var(--mod-tag-border-color,var(--spectrum-tag-border-color)));background-color:var(--highcontrast-tag-background-color,var(--mod-tag-background-color,var(--spectrum-tag-background-color)));color:var(--highcontrast-tag-content-color,var(--mod-tag-content-color,var(--spectrum-tag-content-color)));border-radius:var(--mod-tag-corner-radius,var(--spectrum-tag-corner-radius));border-width:var(--mod-tag-border-width,var(--spectrum-tag-border-width));block-size:var(--mod-tag-height,var(--spectrum-tag-height));box-sizing:border-box;vertical-align:bottom;-webkit-user-select:none;user-select:none;transition:border-color var(--mod-tag-animation-duration,var(--spectrum-tag-animation-duration))ease-in-out,color var(--mod-tag-animation-duration,var(--spectrum-tag-animation-duration))ease-in-out,box-shadow var(--mod-tag-animation-duration,var(--spectrum-tag-animation-duration))ease-in-out,background-color var(--mod-tag-animation-duration,var(--spectrum-tag-animation-duration))ease-in-out;border-style:solid;outline:none;align-items:center;max-inline-size:100%;padding-inline-start:calc(var(--mod-tag-spacing-inline-start,var(--spectrum-tag-spacing-inline-start)) - var(--mod-tag-border-width,var(--spectrum-tag-border-width)));padding-inline-end:0;display:inline-flex;position:relative}::slotted([slot=icon]){block-size:var(--mod-tag-icon-size,var(--spectrum-tag-icon-size));inline-size:var(--mod-tag-icon-size,var(--spectrum-tag-icon-size));margin-block-start:calc(var(--mod-tag-icon-spacing-block-start,var(--spectrum-tag-icon-spacing-block-start)) - var(--mod-tag-border-width,var(--spectrum-tag-border-width)));margin-block-end:calc(var(--mod-tag-icon-spacing-block-end,var(--spectrum-tag-icon-spacing-block-end)) - var(--mod-tag-border-width,var(--spectrum-tag-border-width)));margin-inline-end:var(--mod-tag-icon-spacing-inline-end,var(--spectrum-tag-icon-spacing-inline-end))}::slotted([slot=avatar]){margin-block-start:calc(var(--mod-tag-avatar-spacing-block-start,var(--spectrum-tag-avatar-spacing-block-start)) - var(--mod-tag-border-width,var(--spectrum-tag-border-width)));margin-block-end:calc(var(--mod-tag-avatar-spacing-block-end,var(--spectrum-tag-avatar-spacing-block-end)) - var(--mod-tag-border-width,var(--spectrum-tag-border-width)));margin-inline-end:var(--mod-tag-avatar-spacing-inline-end,var(--spectrum-tag-avatar-spacing-inline-end))}.clear-button{box-sizing:border-box;color:currentColor;--mod-clear-button-width:fit-content;--spectrum-clearbutton-fill-size:fit-content;--spectrum-clearbutton-fill-background-color:transparent;margin-inline-start:calc(var(--mod-tag-clear-button-spacing-inline-start,var(--spectrum-tag-clear-button-spacing-inline-start)) + var(--mod-tag-label-spacing-inline-end,var(--spectrum-tag-label-spacing-inline-end))*-1);margin-inline-end:calc(var(--mod-tag-clear-button-spacing-inline-end,var(--spectrum-tag-clear-button-spacing-inline-end)) - var(--mod-tag-border-width,var(--spectrum-tag-border-width)));padding-block-start:calc(var(--mod-tag-clear-button-spacing-block,var(--spectrum-tag-clear-button-spacing-block)) - var(--mod-tag-border-width,var(--spectrum-tag-border-width)));padding-block-end:calc(var(--mod-tag-clear-button-spacing-block,var(--spectrum-tag-clear-button-spacing-block)) - var(--mod-tag-border-width,var(--spectrum-tag-border-width)))}.clear-button .spectrum-ClearButton-fill{background-color:var(--mod-clearbutton-fill-background-color,var(--spectrum-clearbutton-fill-background-color));inline-size:var(--mod-clearbutton-fill-size,var(--spectrum-clearbutton-fill-size));block-size:var(--mod-clearbutton-fill-size,var(--spectrum-clearbutton-fill-size))}.label{box-sizing:border-box;line-height:var(--mod-tag-label-line-height,var(--spectrum-tag-label-line-height));font-weight:var(--mod-tag-label-font-weight,var(--spectrum-tag-label-font-weight));font-size:var(--mod-tag-font-size,var(--spectrum-tag-font-size));cursor:default;white-space:nowrap;text-overflow:ellipsis;flex:auto;block-size:100%;margin-inline-end:calc(var(--mod-tag-label-spacing-inline-end,var(--spectrum-tag-label-spacing-inline-end)) - var(--mod-tag-border-width,var(--spectrum-tag-border-width)));padding-block-start:calc(var(--mod-tag-label-spacing-block,var(--spectrum-tag-label-spacing-block)) - var(--mod-tag-border-width,var(--spectrum-tag-border-width)));overflow:hidden}:host(:is(:active,[active])){border-color:var(--highcontrast-tag-border-color-active,var(--mod-tag-border-color-active,var(--spectrum-tag-border-color-active)));background-color:var(--highcontrast-tag-background-color-active,var(--mod-tag-background-color-active,var(--spectrum-tag-background-color-active)));color:var(--highcontrast-tag-content-color-active,var(--mod-tag-content-color-active,var(--spectrum-tag-content-color-active)))}:host([focused]),:host(:focus-visible){border-color:var(--highcontrast-tag-border-color-focus,var(--mod-tag-border-color-focus,var(--spectrum-tag-border-color-focus)));background-color:var(--highcontrast-tag-background-color-focus,var(--mod-tag-background-color-focus,var(--spectrum-tag-background-color-focus)));color:var(--highcontrast-tag-content-color-focus,var(--mod-tag-content-color-focus,var(--spectrum-tag-content-color-focus)))}:host([focused]):after,:host(:focus-visible):after{content:"";border-color:var(--highcontrast-tag-focus-ring-color,var(--mod-tag-focus-ring-color,var(--spectrum-tag-focus-ring-color)));border-radius:calc(var(--mod-tag-corner-radius,var(--spectrum-tag-corner-radius)) + var(--mod-tag-focus-ring-gap,var(--spectrum-tag-focus-ring-gap)) + var(--mod-tag-border-width,var(--spectrum-tag-border-width)));border-width:var(--mod-tag-focus-ring-thickness,var(--spectrum-tag-focus-ring-thickness));pointer-events:none;border-style:solid;display:inline-block;position:absolute;inset-block-start:calc(var(--mod-tag-focus-ring-gap,var(--spectrum-tag-focus-ring-gap))*-1 - var(--mod-tag-border-width,var(--spectrum-tag-border-width)) - var(--mod-tag-focus-ring-thickness,var(--spectrum-tag-focus-ring-thickness)));inset-block-end:calc(var(--mod-tag-focus-ring-gap,var(--spectrum-tag-focus-ring-gap))*-1 - var(--mod-tag-border-width,var(--spectrum-tag-border-width)) - var(--mod-tag-focus-ring-thickness,var(--spectrum-tag-focus-ring-thickness)));inset-inline-start:calc(var(--mod-tag-focus-ring-gap,var(--spectrum-tag-focus-ring-gap))*-1 - var(--mod-tag-border-width,var(--spectrum-tag-border-width)) - var(--mod-tag-focus-ring-thickness,var(--spectrum-tag-focus-ring-thickness)));inset-inline-end:calc(var(--mod-tag-focus-ring-gap,var(--spectrum-tag-focus-ring-gap))*-1 - var(--mod-tag-border-width,var(--spectrum-tag-border-width)) - var(--mod-tag-focus-ring-thickness,var(--spectrum-tag-focus-ring-thickness)))}:host([selected]){border-color:var(--highcontrast-tag-border-color-selected,var(--mod-tag-border-color-selected,var(--spectrum-tag-border-color-selected)));background-color:var(--highcontrast-tag-background-color-selected,var(--mod-tag-background-color-selected,var(--spectrum-tag-background-color-selected)));color:var(--highcontrast-tag-content-color-selected,var(--mod-tag-content-color-selected,var(--spectrum-tag-content-color-selected)))}:host([selected]:is(:active,[active])){border-color:var(--highcontrast-tag-border-color-selected-active,var(--mod-tag-border-color-selected-active,var(--spectrum-tag-border-color-selected-active)));background-color:var(--highcontrast-tag-background-color-selected-active,var(--mod-tag-background-color-selected-active,var(--spectrum-tag-background-color-selected-active)))}:host([selected][focused]),:host([selected]:focus-visible){border-color:var(--highcontrast-tag-border-color-selected-focus,var(--mod-tag-border-color-selected-focus,var(--spectrum-tag-border-color-selected-focus)));background-color:var(--highcontrast-tag-background-color-selected-focus,var(--mod-tag-background-color-selected-focus,var(--spectrum-tag-background-color-selected-focus)))}:host([invalid]){border-color:var(--highcontrast-tag-border-color-invalid,var(--mod-tag-border-color-invalid,var(--spectrum-tag-border-color-invalid)));color:var(--highcontrast-tag-content-color-invalid,var(--mod-tag-content-color-invalid,var(--spectrum-tag-content-color-invalid)))}:host([invalid]:is(:active,[active])){border-color:var(--highcontrast-tag-border-color-invalid-active,var(--mod-tag-border-color-invalid-active,var(--spectrum-tag-border-color-invalid-active)));color:var(--highcontrast-tag-content-color-invalid-active,var(--mod-tag-content-color-invalid-active,var(--spectrum-tag-content-color-invalid-active)))}:host([invalid][focused]),:host([invalid]:focus-visible){border-color:var(--highcontrast-tag-border-color-invalid-focus,var(--mod-tag-border-color-invalid-focus,var(--spectrum-tag-border-color-invalid-focus)));color:var(--highcontrast-tag-content-color-invalid-focus,var(--mod-tag-content-color-invalid-focus,var(--spectrum-tag-content-color-invalid-focus)))}:host([invalid][selected]){border-color:var(--highcontrast-tag-border-color-invalid-selected,var(--mod-tag-border-color-invalid-selected,var(--spectrum-tag-border-color-invalid-selected)));background-color:var(--highcontrast-tag-background-color-invalid-selected,var(--mod-tag-background-color-invalid-selected,var(--spectrum-tag-background-color-invalid-selected)));color:var(--highcontrast-tag-content-color-invalid-selected,var(--mod-tag-content-color-invalid-selected,var(--spectrum-tag-content-color-invalid-selected)))}:host([invalid][selected]:is(:active,[active])){border-color:var(--highcontrast-tag-border-color-invalid-selected-active,var(--mod-tag-border-color-invalid-selected-active,var(--spectrum-tag-border-color-invalid-selected-active)));background-color:var(--highcontrast-tag-background-color-invalid-selected-active,var(--mod-tag-background-color-invalid-selected-active,var(--spectrum-tag-background-color-invalid-selected-active)))}:host([invalid][selected][focused]),:host([invalid][selected]:focus-visible){border-color:var(--highcontrast-tag-border-color-invalid-selected-focus,var(--mod-tag-border-color-invalid-selected-focus,var(--spectrum-tag-border-color-invalid-selected-focus)));background-color:var(--highcontrast-tag-background-color-invalid-selected-focus,var(--mod-tag-background-color-invalid-selected-focus,var(--spectrum-tag-background-color-invalid-selected-focus)))}:host([emphasized]){border-color:var(--highcontrast-tag-border-color-emphasized,var(--mod-tag-border-color-emphasized,var(--spectrum-tag-border-color-emphasized)));background-color:var(--highcontrast-tag-background-color-emphasized,var(--mod-tag-background-color-emphasized,var(--spectrum-tag-background-color-emphasized)));color:var(--highcontrast-tag-content-color-emphasized,var(--mod-tag-content-color-emphasized,var(--spectrum-tag-content-color-emphasized)))}@media (hover:hover){:host(:hover){border-color:var(--highcontrast-tag-border-color-hover,var(--mod-tag-border-color-hover,var(--spectrum-tag-border-color-hover)));background-color:var(--highcontrast-tag-background-color-hover,var(--mod-tag-background-color-hover,var(--spectrum-tag-background-color-hover)));color:var(--highcontrast-tag-content-color-hover,var(--mod-tag-content-color-hover,var(--spectrum-tag-content-color-hover)))}:host([selected]:hover){border-color:var(--highcontrast-tag-border-color-selected-hover,var(--mod-tag-border-color-selected-hover,var(--spectrum-tag-border-color-selected-hover)));background-color:var(--highcontrast-tag-background-color-selected-hover,var(--mod-tag-background-color-selected-hover,var(--spectrum-tag-background-color-selected-hover)));color:var(--highcontrast-tag-content-color-selected,var(--mod-tag-content-color-selected,var(--spectrum-tag-content-color-selected)))}:host([invalid]:hover){border-color:var(--highcontrast-tag-border-color-invalid-hover,var(--mod-tag-border-color-invalid-hover,var(--spectrum-tag-border-color-invalid-hover)));color:var(--highcontrast-tag-content-color-invalid-hover,var(--mod-tag-content-color-invalid-hover,var(--spectrum-tag-content-color-invalid-hover)))}:host([invalid][selected]:hover){border-color:var(--highcontrast-tag-border-color-invalid-selected-hover,var(--mod-tag-border-color-invalid-selected-hover,var(--spectrum-tag-border-color-invalid-selected-hover)));background-color:var(--highcontrast-tag-background-color-invalid-selected-hover,var(--mod-tag-background-color-invalid-selected-hover,var(--spectrum-tag-background-color-invalid-selected-hover)));color:var(--highcontrast-tag-content-color-invalid-selected,var(--mod-tag-content-color-invalid-selected,var(--spectrum-tag-content-color-invalid-selected)))}:host([emphasized]:hover){border-color:var(--highcontrast-tag-border-color-emphasized-hover,var(--mod-tag-border-color-emphasized-hover,var(--spectrum-tag-border-color-emphasized-hover)));background-color:var(--highcontrast-tag-background-color-emphasized-hover,var(--mod-tag-background-color-emphasized-hover,var(--spectrum-tag-background-color-emphasized-hover)));color:var(--highcontrast-tag-content-color-emphasized,var(--mod-tag-content-color-emphasized,var(--spectrum-tag-content-color-emphasized)))}}:host([emphasized]:is(:active,[active])){border-color:var(--highcontrast-tag-border-color-emphasized-active,var(--mod-tag-border-color-emphasized-active,var(--spectrum-tag-border-color-emphasized-active)));background-color:var(--highcontrast-tag-background-color-emphasized-active,var(--mod-tag-background-color-emphasized-active,var(--spectrum-tag-background-color-emphasized-active)))}:host([emphasized][focused]),:host([emphasized]:focus-visible){border-color:var(--highcontrast-tag-border-color-emphasized-focus,var(--mod-tag-border-color-emphasized-focus,var(--spectrum-tag-border-color-emphasized-focus)));background-color:var(--highcontrast-tag-background-color-emphasized-focus,var(--mod-tag-background-color-emphasized-focus,var(--spectrum-tag-background-color-emphasized-focus)))}:host([disabled]){border-color:var(--highcontrast-tag-border-color-disabled,var(--mod-tag-border-color-disabled,var(--spectrum-tag-border-color-disabled)));background-color:var(--highcontrast-tag-background-color-disabled,var(--mod-tag-background-color-disabled,var(--spectrum-tag-background-color-disabled)));color:var(--highcontrast-tag-content-color-disabled,var(--mod-tag-content-color-disabled,var(--spectrum-tag-content-color-disabled)));pointer-events:none}:host([disabled]) ::slotted([slot=avatar]){opacity:var(--mod-avatar-opacity-disabled,var(--spectrum-avatar-opacity-disabled))}@media (forced-colors:active){:host{forced-color-adjust:none;--highcontrast-tag-border-color:ButtonText;--highcontrast-tag-border-color-hover:ButtonText;--highcontrast-tag-border-color-active:ButtonText;--highcontrast-tag-border-color-focus:Highlight;--highcontrast-tag-background-color:ButtonFace;--highcontrast-tag-background-color-hover:ButtonFace;--highcontrast-tag-background-color-active:ButtonFace;--highcontrast-tag-background-color-focus:ButtonFace;--highcontrast-tag-content-color:ButtonText;--highcontrast-tag-content-color-hover:ButtonText;--highcontrast-tag-content-color-active:ButtonText;--highcontrast-tag-content-color-focus:ButtonText;--highcontrast-tag-focus-ring-color:Highlight}:host([selected]){--highcontrast-tag-border-color-selected:Highlight;--highcontrast-tag-border-color-selected-hover:Highlight;--highcontrast-tag-border-color-selected-active:Highlight;--highcontrast-tag-border-color-selected-focus:Highlight;--highcontrast-tag-background-color-selected:Highlight;--highcontrast-tag-background-color-selected-hover:Highlight;--highcontrast-tag-background-color-selected-active:Highlight;--highcontrast-tag-background-color-selected-focus:Highlight;--highcontrast-tag-content-color-selected:HighlightText}:host([disabled]){--highcontrast-tag-border-color-disabled:GrayText;--highcontrast-tag-background-color-disabled:ButtonFace;--highcontrast-tag-content-color-disabled:GrayText}:host([invalid]){--highcontrast-tag-border-color-invalid:Highlight;--highcontrast-tag-border-color-invalid-hover:Highlight;--highcontrast-tag-border-color-invalid-active:Highlight;--highcontrast-tag-border-color-invalid-focus:Highlight;--highcontrast-tag-content-color-invalid:CanvasText;--highcontrast-tag-content-color-invalid-hover:CanvasText;--highcontrast-tag-content-color-invalid-active:CanvasText;--highcontrast-tag-content-color-invalid-focus:CanvasText}:host([invalid][selected]){--highcontrast-tag-border-color-invalid-selected:Highlight;--highcontrast-tag-border-color-invalid-selected-hover:Highlight;--highcontrast-tag-border-color-invalid-selected-focus:Highlight;--highcontrast-tag-border-color-invalid-selected-active:Highlight;--highcontrast-tag-background-color-invalid-selected:Highlight;--highcontrast-tag-background-color-invalid-selected-hover:Highlight;--highcontrast-tag-background-color-invalid-selected-active:Highlight;--highcontrast-tag-background-color-invalid-selected-focus:Highlight;--highcontrast-tag-content-color-invalid-selected:HighlightText}:host([emphasized]){--highcontrast-tag-border-color-emphasized:Highlight;--highcontrast-tag-border-color-emphasized-hover:Highlight;--highcontrast-tag-border-color-emphasized-active:Highlight;--highcontrast-tag-border-color-emphasized-focus:Highlight;--highcontrast-tag-background-color-emphasized:ButtonFace;--highcontrast-tag-background-color-emphasized-hover:ButtonFace;--highcontrast-tag-background-color-emphasized-active:ButtonFace;--highcontrast-tag-background-color-emphasized-focus:ButtonFace;--highcontrast-tag-content-color-emphasized:CanvasText}}:host{--spectrum-tag-border-color:var(--system-spectrum-tag-border-color);--spectrum-tag-border-color-hover:var(--system-spectrum-tag-border-color-hover);--spectrum-tag-border-color-active:var(--system-spectrum-tag-border-color-active);--spectrum-tag-border-color-focus:var(--system-spectrum-tag-border-color-focus);--spectrum-tag-size-small-corner-radius:var(--system-spectrum-tag-size-small-corner-radius);--spectrum-tag-size-medium-corner-radius:var(--system-spectrum-tag-size-medium-corner-radius);--spectrum-tag-size-large-corner-radius:var(--system-spectrum-tag-size-large-corner-radius);--spectrum-tag-background-color:var(--system-spectrum-tag-background-color);--spectrum-tag-background-color-hover:var(--system-spectrum-tag-background-color-hover);--spectrum-tag-background-color-active:var(--system-spectrum-tag-background-color-active);--spectrum-tag-background-color-focus:var(--system-spectrum-tag-background-color-focus);--spectrum-tag-content-color:var(--system-spectrum-tag-content-color);--spectrum-tag-content-color-hover:var(--system-spectrum-tag-content-color-hover);--spectrum-tag-content-color-active:var(--system-spectrum-tag-content-color-active);--spectrum-tag-content-color-focus:var(--system-spectrum-tag-content-color-focus);--spectrum-tag-border-color-selected:var(--system-spectrum-tag-border-color-selected);--spectrum-tag-border-color-selected-hover:var(--system-spectrum-tag-border-color-selected-hover);--spectrum-tag-border-color-selected-active:var(--system-spectrum-tag-border-color-selected-active);--spectrum-tag-border-color-selected-focus:var(--system-spectrum-tag-border-color-selected-focus);--spectrum-tag-border-color-disabled:var(--system-spectrum-tag-border-color-disabled);--spectrum-tag-background-color-disabled:var(--system-spectrum-tag-background-color-disabled);--spectrum-tag-size-small-spacing-inline-start:var(--system-spectrum-tag-size-small-spacing-inline-start);--spectrum-tag-size-small-label-spacing-inline-end:var(--system-spectrum-tag-size-small-label-spacing-inline-end);--spectrum-tag-size-small-clear-button-spacing-inline-end:var(--system-spectrum-tag-size-small-clear-button-spacing-inline-end);--spectrum-tag-size-medium-spacing-inline-start:var(--system-spectrum-tag-size-medium-spacing-inline-start);--spectrum-tag-size-medium-label-spacing-inline-end:var(--system-spectrum-tag-size-medium-label-spacing-inline-end);--spectrum-tag-size-medium-clear-button-spacing-inline-end:var(--system-spectrum-tag-size-medium-clear-button-spacing-inline-end);--spectrum-tag-size-large-spacing-inline-start:var(--system-spectrum-tag-size-large-spacing-inline-start);--spectrum-tag-size-large-label-spacing-inline-end:var(--system-spectrum-tag-size-large-label-spacing-inline-end);--spectrum-tag-size-large-clear-button-spacing-inline-end:var(--system-spectrum-tag-size-large-clear-button-spacing-inline-end)}:host([invalid]) .clear-button{--spectrum-clearbutton-medium-icon-color:var(--spectrum-tag-icon-color-error-key-focus,var(--spectrum-red-600));--spectrum-clearbutton-medium-icon-color-hover:var(--spectrum-clearbutton-medium-icon-color);--spectrum-clearbutton-medium-icon-color-down:var(--spectrum-tag-deletable-icon-color-error-down,var(--spectrum-red-700))}:host([invalid]):hover .clear-button,:host([invalid]:is(:active,[active])) .clear-button{--spectrum-clearbutton-medium-icon-color:var(--spectrum-tag-icon-color-error-hover,var(--spectrum-red-600));--spectrum-clearbutton-medium-icon-color-hover:var(--spectrum-clearbutton-medium-icon-color);--spectrum-clearbutton-medium-icon-color-down:var(--spectrum-tag-deletable-icon-color-error-down,var(--spectrum-red-700))}:host([size=xs]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-50)}:host([size=s]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-75)}:host([size=m]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-100)}:host([size=l]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-200)}:host([size=xl]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-300)}:host([size=xxl]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-400)}
`;

var u=Object.defineProperty;var r=(l,i,e,s)=>{for(var t=void 0,a=l.length-1,o;a>=0;a--)(o=l[a])&&(t=(o(i,e,t))||t);return t&&u(i,e,t),t};class Tag extends SizedMixin(SpectrumElement,{validSizes:["s","m","l"],noDefaultSize:!0}){constructor(){super();this.deletable=!1;this.disabled=!1;this.readonly=!1;this.handleFocusin=()=>{this.addEventListener("focusout",this.handleFocusout),this.addEventListener("keydown",this.handleKeydown);};this.handleFocusout=()=>{this.removeEventListener("keydown",this.handleKeydown),this.removeEventListener("focusout",this.handleFocusout);};this.handleKeydown=e=>{if(!this.deletable||this.disabled)return;const{code:s}=e;switch(s){case"Backspace":case"Space":case"Delete":this.delete();default:return}};this.addEventListener("focusin",this.handleFocusin);}static get styles(){return [t$1]}delete(){this.readonly||!this.dispatchEvent(new Event("delete",{bubbles:!0,cancelable:!0,composed:!0}))||this.remove();}render(){return x`
            <slot name="avatar"></slot>
            <slot name="icon"></slot>
            <span class="label"><slot></slot></span>
            ${this.deletable?x`
                      <sp-clear-button
                          class="clear-button"
                          ?disabled=${this.disabled}
                          label="Remove"
                          size="s"
                          tabindex="-1"
                          @click=${this.delete}
                      ></sp-clear-button>
                  `:T}
        `}firstUpdated(e){super.firstUpdated(e),this.hasAttribute("role")||this.setAttribute("role","listitem"),this.deletable&&this.setAttribute("tabindex","0");}updated(e){super.updated(e),e.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"));}}r([n({type:Boolean,reflect:!0})],Tag.prototype,"deletable"),r([n({type:Boolean,reflect:!0})],Tag.prototype,"disabled"),r([n({type:Boolean,reflect:!0})],Tag.prototype,"readonly");

defineElement("sp-tag",Tag);

const t=i`
    :host{--spectrum-tag-group-item-margin-block:var(--spectrum-spacing-75);--spectrum-tag-group-item-margin-inline:var(--spectrum-spacing-75);flex-wrap:wrap;margin:0;padding:0;list-style:none;display:inline-flex}::slotted(*){margin-block:var(--mod-tag-group-item-margin-block,var(--spectrum-tag-group-item-margin-block));margin-inline:var(--mod-tag-group-item-margin-inline,var(--spectrum-tag-group-item-margin-inline))}:host{--mod-clear-button-width:fit-content;margin:0;padding:0;list-style:none;display:inline-flex}
`;

var g=Object.defineProperty;var h=(r,n,e,t)=>{for(var s=void 0,o=r.length-1,i;o>=0;o--)(i=r[o])&&(s=(i(n,e,s))||s);return s&&g(n,e,s),s};class Tags extends FocusVisiblePolyfillMixin(SpectrumElement){constructor(){super();this.rovingTabindexController=new RovingTabindexController(this,{focusInIndex:e=>e.findIndex(t=>!t.disabled&&t.deletable),elements:()=>this.tags,isFocusableElement:e=>!e.disabled&&e.deletable});this.handleFocusin=()=>{this.addEventListener("focusout",this.handleFocusout),this.addEventListener("keydown",this.handleKeydown);};this.handleKeydown=e=>{const{code:t}=e;if(t!=="PageUp"&&t!=="PageDown")return;const s=(d,c)=>d[(d.length+c)%d.length],o=[...this.getRootNode().querySelectorAll("sp-tags")];if(o.length<2)return;e.preventDefault();const i=o.indexOf(this),u=t==="PageUp"?-1:1;let l=i+u,a=s(o,l);for(;!a.tags.length;)l+=u,a=s(o,l);a.focus();};this.handleFocusout=()=>{this.removeEventListener("keydown",this.handleKeydown),this.removeEventListener("focusout",this.handleFocusout);};this.addEventListener("focusin",this.handleFocusin);}static get styles(){return [t]}get tags(){return this.defaultNodes.filter(e=>e instanceof Tag)}focus(){this.rovingTabindexController.focus();}handleSlotchange(){this.rovingTabindexController.clearElementCache();}render(){return x`
            <slot @slotchange=${this.handleSlotchange}></slot>
        `}firstUpdated(){this.hasAttribute("role")||this.setAttribute("role","list"),this.hasAttribute("aria-label")||this.setAttribute("aria-label","Tags");}}h([n$1()],Tags.prototype,"defaultNodes");

defineElement("sp-tags",Tags);