/**
 * Created by delta
 */

import Layer from '../../Layer';
import './Dialog.duss';

function Dialog(tpl) {
    let options = {
        type: 'dialog',
        html:  tpl    
    };
    new Layer(options);
}

export default Dialog;