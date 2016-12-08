/**
 * @file
 * @author
 */

import Layer from '../../WrcLayer/lib/WrcLayer';

function loading() {
    let optionsLoading = {
        type: 'loading'
    };
    let loadingLayer = new Layer(optionsLoading);
    return loadingLayer;
}
export default loading;