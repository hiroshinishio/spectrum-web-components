import './sp-progress-circle-BJOFYdbC.js';
import './sp-button-BmJ8gt0Z.js';
import { x } from './lit-html-COgVUehj.js';
import './get-label-from-slot-Cg6mfN40.js';
import './lit-element-BL-po2DW.js';
import './sizedMixin-C1lD98vT.js';
import './define-element-ByMWMcVd.js';
import './if-defined-DDJGFaN4.js';
import './query-DQF6X5qW.js';
import './base-u8Z1Hrsd.js';
import './ButtonBase-CjmqgWAT.js';
import './like-anchor-3x3vwb8N.js';
import './focusable-CUJIQEAB.js';
import './focus-visible-D29Av9Xb.js';
import './observe-slot-text-DLXbbJr-.js';
import './mutation-controller-D2lT1xZk.js';
import './query-assigned-nodes-DAYI4epk.js';
import './when-DEJm_QN9.js';

var progressCircle_stories = {
  title: "Progress Circle",
  component: "sp-progress-circle",
  argTypes: {
    indeterminate: {
      name: "indeterminate",
      type: { name: "boolean", required: false },
      description: "Whether the progress is indeterminate.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false }
      },
      control: {
        type: "boolean"
      }
    }
  }
};
const Default = ({ indeterminate } = {}) => {
  return x`
        <div
            style="width: 250px; height: 150px; display: flex; align-items: center; justify-content: space-around;"
        >
            <sp-progress-circle
                progress="27"
                size="s"
                ?indeterminate=${indeterminate}
                label="Loading progress demo"
            ></sp-progress-circle>
            <sp-progress-circle
                progress="27"
                ?indeterminate=${indeterminate}
                label="Loading progress demo"
            ></sp-progress-circle>
            <sp-progress-circle
                progress="27"
                size="l"
                ?indeterminate=${indeterminate}
                label="Loading progress demo"
            ></sp-progress-circle>
        </div>
    `;
};
Default.args = {
  indeterminate: false
};
const staticWhite = ({
  indeterminate
} = {}) => {
  return x`
        <div
            style="width: 250px; height: 150px; background-color: rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: space-around;"
        >
            <sp-progress-circle
                progress="53"
                static="white"
                size="s"
                ?indeterminate=${indeterminate}
                label="Loading progress demo"
            ></sp-progress-circle>
            <sp-progress-circle
                progress="53"
                static="white"
                ?indeterminate=${indeterminate}
                label="Loading progress demo"
            ></sp-progress-circle>
            <sp-progress-circle
                progress="53"
                static="white"
                size="l"
                ?indeterminate=${indeterminate}
                label="Loading progress demo"
            ></sp-progress-circle>
        </div>
    `;
};
staticWhite.args = {
  indeterminate: false
};
const inButton = ({
  indeterminate
} = {}) => x`
    <style>
        sp-progress-circle[slot='icon'] {
            align-self: center;
            margin-block: 0;
        }
    </style>
    <sp-button variant="black" style="color: white">
        <sp-progress-circle
            progress="53"
            static="white"
            size="s"
            ?indeterminate=${indeterminate}
            slot="icon"
            label="Processing"
        ></sp-progress-circle>
        Processing...
    </sp-button>
`;
const __namedExportsOrder = ['Default', 'staticWhite', 'inButton'];

export { Default, __namedExportsOrder, progressCircle_stories as default, inButton, staticWhite };