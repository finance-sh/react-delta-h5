/**
 * Created by delta
 */

import Layer from '../../Layer';
import './Loading.duss';

function Loading(loadingText) {
    let optionsLoading = {
        type: 'loading',
        text: loadingText || '正在加载……'
    };
    let loadingLayer = new Layer(optionsLoading);
    return loadingLayer;
}

export default Loading;