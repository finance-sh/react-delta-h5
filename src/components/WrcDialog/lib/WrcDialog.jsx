/**
 * @file
 * @author
 */


import Layer from '../../WrcLayer/lib/WrcLayer';

function dialog(tpl) {
    let options = {
        type: 'dialog',
        html:  tpl    
    };
    new Layer(options);
}
export default dialog;