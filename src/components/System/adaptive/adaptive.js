/**
 * adaptive.js
 * @author  [delta]
 * @version [1.0]
 */

;(function (win, lib) {

    var doc = win.document;
    var docEl = doc.documentElement;
    var devicePixelRatio = win.devicePixelRatio;
    var dpr = 1;            // 物理像素与逻辑像素的对应关系
    var scale = 1;          // css像素缩放比率
    var newBase = 100;
    var tid;
    
    lib.desinWidth = 640;
    lib.baseFont = 18;

    var adapitve = {
        init:function(){
            var that = this;
            that.setViewport();

            lib.init = function () {
                // console.log('init' + lib.baseFont)
                win.addEventListener('resize', function () {
                    clearTimeout(tid);
                    tid = setTimeout(that.setRem, 300);
                }, false);
                win.addEventListener('pageshow', function (e) {
                    // console.log('pageshow')
                    if (e.persisted) {
                        clearTimeout(tid);
                        tid = setTimeout(that.setRem, 300);
                    }
                }, false);
                if (doc.readyState === 'complete') {
                    // console.log('complete')
                    doc.body.style.fontSize = lib.baseFont * dpr + 'px';
                }
                else {
                    // console.log('DOMContentLoaded')
                    doc.addEventListener('DOMContentLoaded', function (e) {
                        doc.body.style.fontSize = lib.baseFont * dpr + 'px';
                    }, false);
                }
                that.setRem();
                docEl.setAttribute('data-dpr', dpr);
            };
        },
        /**
         * [setViewport]
         */
        setViewport:function(){
            var metaEl = doc.createElement('meta');
            // dpr = devicePixelRatio;
            // scale = 1 / dpr;
            win.devicePixelRatioValue = dpr;
            metaEl.setAttribute('name', 'viewport');
            metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no,target-densitydpi=device-dpi');
            if (docEl.firstElementChild) {
                docEl.firstElementChild.appendChild(metaEl);
            }
            else {
                var wrap = doc.createElement('div');
                wrap.appendChild(metaEl);
                doc.write(wrap.innerHTML);
            }
        },
        /**
         * [setRem]
         */
        setRem:function () {
            // visual viewport
            var visualView = Math.min(
                docEl.getBoundingClientRect().width, 
                540 * win.devicePixelRatioValue
            ); 
            newBase = 100 * visualView / lib.desinWidth;
            docEl.style.fontSize = newBase + 'px';
            // console.log('setRem' + lib.baseFont)
        }
    };
    adapitve.init();
})(window, window['adaptive'] || (window['adaptive'] = {}));