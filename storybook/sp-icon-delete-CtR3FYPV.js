import { C as CopyIcon, D as DeleteIcon } from './Delete-Q-M6K9oM.js';
import { s as setCustomTemplateLiteralTag } from './custom-tag-Diwq7nXX.js';
import { I as IconBase } from './IconBase-C1z7UsT5.js';
import { x } from './lit-html-COgVUehj.js';
import { d as defineElement } from './define-element-ByMWMcVd.js';

class IconCopy extends IconBase{render(){return setCustomTemplateLiteralTag(x),CopyIcon({hidden:!this.label,title:this.label})}}

defineElement("sp-icon-copy",IconCopy);

class IconDelete extends IconBase{render(){return setCustomTemplateLiteralTag(x),DeleteIcon({hidden:!this.label,title:this.label})}}

defineElement("sp-icon-delete",IconDelete);