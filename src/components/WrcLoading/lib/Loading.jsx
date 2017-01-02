/**
 * Created by delta
 */

import Layer from '../../WrcLayer';
import './Loading.duss';

function Loading() {
    let optionsLoading = {
        type: 'loading'
    };
    let loadingLayer = new Layer(optionsLoading);
    return loadingLayer;
}

export default Loading;