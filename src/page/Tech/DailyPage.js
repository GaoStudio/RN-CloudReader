/**
 * Created by gao on 2017-05-10.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    RefreshControl,
    ScrollView,
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
            <ScrollView  refreshControl={
                  <RefreshControl
                    refreshing={this.state.isRefreshing}
                    tintColor="#ff0000"
                    title="Loading..."
                    titleColor="#00ff00"
                    colors={['#ff0000', '#00ff00', '#0000ff']}
                    progressBackgroundColor="#ffffff"
                  />
                }>
                <Swiper autoPlay={true} height={150} style={{flex:1,width:'100%'}} showsButtons={true}>
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
                <View style={{marginTop:15,marginBottom:10,flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../../../res/images/home_icon_fm.png')}style={{width:50,height:50}}></Image>
                        <Text  style={{fontSize:12,marginTop:5}}>干货闲读</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../../../res/images/home_icon_day.png')} style={{alignItems:'center',justifyContent:'center',width:50,height:50}}>
                            <Text style={{fontSize:25,color:'#D33A31'}}>
                                20
                            </Text>
                        </Image>
                        <Text style={{fontSize:12,marginTop:5}}>每日推荐</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../../../res/images/home_icon_rank.png')} style={{width:50,height:50}}></Image>
                        <Text  style={{fontSize:12,marginTop:5}}>电影排行</Text>
                    </View>
                </View>
                <View style={{width:'100%',height:1,backgroundColor:'#d4d4d4'}}></View>
            </ScrollView >
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