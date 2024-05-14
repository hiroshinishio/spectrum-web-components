import { s } from './lit-element-BL-po2DW.js';
import { x } from './lit-html-COgVUehj.js';
import { n as n$1, a as SpectrumMixin } from './define-element-ByMWMcVd.js';
import { r } from './state-DGkVCdxP.js';
import { c } from './repeat-D5JakrYV.js';
import { n } from './when-DEJm_QN9.js';
import './sp-picker-MyfGeuIK.js';
import './sp-button-BmJ8gt0Z.js';
import './directive-Bn5c4u4M.js';
import './directive-helpers-icdnqxxc.js';
import './Picker-C2X8FAZ-.js';
import './spectrum-icon-chevron.css-C5c2rYXA.js';
import './focusable-CUJIQEAB.js';
import './focus-visible-D29Av9Xb.js';
import './sp-icon-chevron100-CvWYkNtC.js';
import './Chevron100-2ZEB0c-t.js';
import './custom-tag-B5IH9PTE.js';
import './IconBase-C1z7UsT5.js';
import './sp-icon-alert-ClrE4xtp.js';
import './custom-tag-Diwq7nXX.js';
import './sp-menu-Bi5ZsR-Z.js';
import './sizedMixin-C1lD98vT.js';
import './query-DQF6X5qW.js';
import './base-u8Z1Hrsd.js';
import './MatchMedia-pSNe9kbs.js';
import './DependencyManger-Dpkh1Bse.js';
import './class-map-DdRvesrq.js';
import './style-map-DtKTc8KS.js';
import './if-defined-DDJGFaN4.js';
import './ButtonBase-CjmqgWAT.js';
import './like-anchor-3x3vwb8N.js';
import './observe-slot-text-DLXbbJr-.js';
import './mutation-controller-D2lT1xZk.js';
import './query-assigned-nodes-DAYI4epk.js';

var __defProp = Object.defineProperty;
var __decorateClass = (decorators, target, key, kind) => {
  var result = void 0 ;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (decorator(target, key, result) ) || result;
  if (result) __defProp(target, key, result);
  return result;
};
const XElement = SpectrumMixin(s);
class MyContainer extends XElement {
  constructor() {
    super(...arguments);
    this._counter = 0;
  }
  _handleClick() {
    this._counter += 1;
  }
  render() {
    return x`
            <div>
                ${n(
      this._counter % 2 === 0,
      () => x`
                        <my-view1></my-view1>
                    `,
      () => x`
                        <my-view2></my-view2>
                    `
    )}
                <sp-button
                    variant="primary"
                    size="m"
                    @click=${this._handleClick}
                >
                    Switch views
                </sp-button>
            </div>
        `;
  }
}
__decorateClass([
  r()
], MyContainer.prototype, "_counter");
customElements.define("my-container", MyContainer);
class MyView1 extends XElement {
  render() {
    const blendModeOptions = [
      {
        value: 2 /* normal */,
        title: "Normal 1",
        subtitle: "No effect applied"
      },
      {
        value: 3 /* multiply */,
        title: "Multiply",
        subtitle: "Darken shadows with contrast and details"
      },
      {
        value: 7 /* screen */,
        title: "Screen",
        subtitle: "Brighten highlights with contrast and details"
      }
    ];
    return x`
            View 1
            <my-picker
                .blendMode=${2 /* normal */}
                .blendModeOptions=${blendModeOptions}
                dir="ltr"
            ></my-picker>
        `;
  }
}
customElements.define("my-view1", MyView1);
class MyView2 extends XElement {
  render() {
    const blendModeOptions = [
      {
        value: 2 /* normal */,
        title: "Normal 2",
        subtitle: "No effect applied"
      },
      {
        value: 3 /* multiply */,
        title: "Multiply",
        subtitle: "Darken shadows with contrast and details"
      },
      {
        value: 7 /* screen */,
        title: "Screen",
        subtitle: "Brighten highlights with contrast and details"
      }
    ];
    return x`
            View 2
            <my-picker
                .blendMode=${2 /* normal */}
                .blendModeOptions=${blendModeOptions}
            ></my-picker>
        `;
  }
}
customElements.define("my-view2", MyView2);
class MyPicker extends XElement {
  constructor() {
    super(...arguments);
    this.blendModeOptions = [];
    this.blendMode = 2 /* normal */;
  }
  _renderBlendOptions() {
    return x`
            ${c(
      this.blendModeOptions,
      // This is intentional so that repeat directive will add instead of
      // update existing DOM which will then trigger error in
      // MenuItem.childrenItem
      // Using .value for the key will workaround the issue
      (blendModeOption) => blendModeOption,
      (blendModeOption) => x`
                        <sp-menu-item value=${blendModeOption.value}>
                            ${blendModeOption.title}
                            <span slot="value">
                                ${blendModeOption.subtitle}
                            </span>
                        </sp-menu-item>
                    `
    )}
        `;
  }
  render() {
    return x`
            <sp-picker
                id="blendMode"
                size="l"
                label="Blend"
                value=${this.blendMode}
            >
                ${this._renderBlendOptions()}
            </sp-picker>
        `;
  }
}
__decorateClass([
  n$1({ type: Array })
], MyPicker.prototype, "blendModeOptions");
__decorateClass([
  n$1()
], MyPicker.prototype, "blendMode");
customElements.define("my-picker", MyPicker);
var menuItem_disconnected_stories = {
  component: "sp-menu-item",
  title: "Menu Item/Disconnected"
};
const disconnectedChildItems = () => x`
    <my-container></my-container>
`;
disconnectedChildItems.swc_vrt = {
  skip: true
};
const __namedExportsOrder = ['disconnectedChildItems'];

export { __namedExportsOrder, menuItem_disconnected_stories as default, disconnectedChildItems };