/**
 * @file
 * @author
 * Created by zhousheng on 2016/9/8
 */
/*
 * str {string} toast's text  
 * outTime {number} display time,in milliseconds
 */

import Layer from '../../WrcLayer/lib/WrcLayer';
import './WrcToast.less';

function toast(str, outTime) {
	var toastOptions = {
	    type: 'toast',
	    toastStr: str,
	    outTime: outTime || 3000
	};
	new Layer(toastOptions);
}

export default toast;