/**
 * @file
 * @author
 */


import Layer from '../../WrcLayer';
import './Dialog.less';

function dialog(tpl) {
    let options = {
        type: 'dialog',
        html:  tpl    
    };
    new Layer(options);
}
export default dialog;