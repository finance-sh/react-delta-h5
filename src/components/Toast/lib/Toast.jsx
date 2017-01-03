/**
 * Created by delta
 * ----------------------------------
 * str {string} toast's text  
 * outTime {number} display time,in milliseconds
 */

import Layer from '../../Layer';
import './Toast.duss';

function Toast(str, outTime) {
	var toastOptions = {
	    type: 'toast',
	    toastStr: str,
	    outTime: outTime || 3000
	};
	new Layer(toastOptions);
}

export default Toast;