/**
 * Created by Administrator on 2017/4/24.
 */
'use strict';

import {Dimensions} from 'react-native';

// device width/height
//const deviceWidthDp = Dimensions.get('window').width;
const deviceHeightDp = Dimensions.get('window').height;
// design width/height
const uiHeightPx = 640;

export default function px2dp(uiElementPx) {
    //console.log(deviceWidthDp);
    //console.log(deviceHeightDp);
    return uiElementPx *  deviceHeightDp / uiHeightPx;
}