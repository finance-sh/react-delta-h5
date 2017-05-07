/**
 * Created by delta
 * ----------------------------------
 * str {string} toast's text  
 * outTime {number} display time,in milliseconds
 */

import Layer from '../../Layer';
import './Toast.duss';

function Toast(str, outTime, sureFun) {
	var toastOptions = {
	    type: 'toast',
	    toastStr: str,
	    outTime: outTime || 3000,
        sureFun: sureFun || null
	};
	new Layer(toastOptions);
}

export default Toast;