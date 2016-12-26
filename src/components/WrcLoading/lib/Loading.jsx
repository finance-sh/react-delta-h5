/**
 * @file
 * @author
 */

import Layer from '../../WrcLayer';
import './Loading.less';

function loading() {
    let optionsLoading = {
        type: 'loading'
    };
    let loadingLayer = new Layer(optionsLoading);
    return loadingLayer;
}
export default loading;