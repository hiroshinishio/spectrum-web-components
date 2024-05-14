import './sp-slider-viasVaFt.js';
import { x } from './lit-html-COgVUehj.js';
import { o } from './if-defined-DDJGFaN4.js';
import './focusable-CUJIQEAB.js';
import './focus-visible-D29Av9Xb.js';
import './define-element-ByMWMcVd.js';
import './lit-element-BL-po2DW.js';
import './LanguageResolution-BeoILyI5.js';
import './NumberFormatter-D4LOw21s.js';
import './observe-slot-text-DLXbbJr-.js';
import './mutation-controller-D2lT1xZk.js';
import './query-assigned-nodes-DAYI4epk.js';
import './base-u8Z1Hrsd.js';
import './sp-field-label-Cf_nvrkT.js';
import './random-id-BST1Puzz.js';
import './custom-tag-B5IH9PTE.js';
import './IconBase-C1z7UsT5.js';
import './condition-attribute-with-id-Cnyhr7Mp.js';
import './ElementResolution-B9KteuX8.js';
import './sizedMixin-C1lD98vT.js';
import './query-DQF6X5qW.js';
import './class-map-DdRvesrq.js';
import './directive-Bn5c4u4M.js';
import './style-map-DtKTc8KS.js';
import './streaming-listener-BPAf_aKW.js';
import './async-directive-DF6rMZJ5.js';
import './directive-helpers-icdnqxxc.js';
import './repeat-D5JakrYV.js';

var sliderSizes_stories = {
  component: "sp-slider",
  title: "Slider/Sizes"
};
const template = ({
  editable,
  size
} = {}) => {
  return x`
        <div style="width: 500px; margin-inline: 20px;">
            <sp-slider
                ?editable=${editable}
                max="1"
                min="0"
                value=".5"
                step="0.01"
                size=${o(size)}
            >
                Opacity
            </sp-slider>
        </div>
    `;
};
const s = () => template({ size: "s" });
const sEditable = () => template({ size: "s", editable: true });
const m = () => template();
const mEditable = () => template({ editable: true });
const l = () => template({ size: "l" });
const lEditable = () => template({ size: "l", editable: true });
const XL = () => template({ size: "xl" });
const XLEditable = () => template({ size: "xl", editable: true });
const __namedExportsOrder = ['s', 'sEditable', 'm', 'mEditable', 'l', 'lEditable', 'XL', 'XLEditable'];

export { XL, XLEditable, __namedExportsOrder, sliderSizes_stories as default, l, lEditable, m, mEditable, s, sEditable };