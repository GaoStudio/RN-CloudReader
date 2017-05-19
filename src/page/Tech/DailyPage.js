/**
 * Created by gao on 2017-05-10.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    Button,
    View
} from 'react-native';
import PageLoading from '../../view/PageLoading.js'
import Swiper from 'react-native-swiper';
export default class DailyPage extends Component{
    _onPress(){
        this.refs.MyLoading.stopLoadAnimate();
    }
    render(){
        return(
            <View style={styles.main}>
                <Swiper style={{width:100,height:90,backgroundColor:'#00ff00'}} showsButtons={true}>
                    <View style={{height:90}}>
                        <Text>Hello Swiper</Text>
                        {/*<Image source={require('../../../res/images/banner01.jpg')} style={{width:'100%',height:100}}></Image>*/}
                    </View>
                    <View style={{height:90}}>
                        <Text>Hello Swiper</Text>
                      {/*  <Image source={require('../../../res/images/banner01.jpg')} style={{width:'100%',height:100}}></Image>*/}
                    </View>
                    <View style={{height:90}}>
                        <Text>Hello Swiper</Text>
                     {/*   <Image source={require('../../../res/images/banner01.jpg')} style={{width:'100%',height:100}}></Image>*/}
                    </View>
                </Swiper>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#ff0000'
    },
})