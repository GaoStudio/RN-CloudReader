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
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
        };
    }
    LoadingView(){
        return(
            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <PageLoading ref='MyLoading'></PageLoading>
            </View>
        )
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false,
            });
         },100);

    }
    render(){
        if(this.state.isLoading){
            return this.LoadingView();
        }
        this.refs.MyLoading.stopLoadAnimate();
        return(
            <View>
                <Swiper height={150} style={{flex:1,width:'100%'}} showsButtons={true}>
                    <Image
                        resizeMode={Image.resizeMode.cover}
                        source={require('../../../res/images/banner01.jpg')}style={{width:'100%',height:150}}></Image>
                    <Image
                        resizeMode={Image.resizeMode.cover}
                        source={require('../../../res/images/banner02.jpg')} style={{width:'100%',height:150}}></Image>
                    <Image
                        resizeMode={Image.resizeMode.cover}
                        source={require('../../../res/images/banner03.jpg')}style={{width:'100%',height:150}}></Image>
                    <Image
                        resizeMode={Image.resizeMode.cover}
                        source={require('../../../res/images/banner04.jpg')}style={{width:'100%',height:150}}></Image>
                    <Image
                        resizeMode={Image.resizeMode.cover}
                        source={require('../../../res/images/banner05.jpg')}style={{width:'100%',height:150}}></Image>
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
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    }
})