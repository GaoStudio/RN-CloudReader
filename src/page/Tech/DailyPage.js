/**
 * Created by gao on 2017-05-10.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View
} from 'react-native';
import PageLoading from '../../view/PageLoading.js'
export default class DailyPage extends Component{
    _onPress(){
        this.refs.MyLoading.stopLoadAnimate();
    }
    render(){
        return(
            <View style={styles.main}>
                <Button onPress={()=>{this._onPress()}} title={'关闭动画'}></Button>
                <PageLoading ref='MyLoading'></PageLoading>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    }
})