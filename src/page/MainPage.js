/**
 * Created by gao on 2017-05-10.
 */
import {TabNavigator,DrawerNavigator,StackNavigator,TabBarTop} from 'react-navigation'
import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    Image,
    View
} from 'react-native';

import BookMainPage from './Book/BookMainPage.js'
import FilmMainPage from './Film/FilmMainPage.js'
import TechMainPage from './Tech/TechMainPage.js'
import px2dp from '../util/px2dp.js'
export class MainPage extends Component{
    onLeftPress (){
        const onLeftPress = this.props.onLeftPress;
        onLeftPress();
    }
    MenuButton = ()=>(
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('rgba(255, 255, 255, 0.2)',true)}
            onPress={()=>{this.onLeftPress()}}>
            <View style={{width: 50, height: 55,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                <Image
                    style={{alignContent:'center',width: px2dp(23),height: px2dp(23)}}
                    source={require('../../res/images/titlebar_menu.png')}
                />
            </View>
            {/* */}
        </TouchableNativeFeedback>
    )
    SearchButton = ()=>(
        <View style={{width: 50, height: 55,justifyContent:'center',alignItems:'center'}}>
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('rgba(255, 255, 255, 0.2)',true)}
                onPress={()=>{alert('hello')}}>
                <View style={{borderRadius:30,width: 30, height: 30,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                    <Image
                        style={{alignContent:'center',width: px2dp(23),height: px2dp(23)}}
                        source={require('../../res/images/actionbar_search.png')}
                    />
                </View>
            </TouchableNativeFeedback>
        </View>
    )
    TabBar(prop){
       /* const nextProps = {
            ...prop,
            borderless: false
        };*/
        return(
            <View style={{ backgroundColor:'#D33A31',flexDirection: 'column'
                         }}>
                <View style={{height:24,backgroundColor:'#D33A31'}}></View>
                <View style={{flexDirection:'row'}}>
                    <this.MenuButton style={{backgroundColor:'#ff0000',alignContent:'left'}}></this.MenuButton>
                    <View style={{flex:1,flexDirection: 'row',justifyContent:'center'}}>
                        <View style={{width:20,height:55,backgroundColor:'#ce3d3a'}}></View>
                        <TabBarTop {...prop} borderless ={true}/>
                        <View style={{width:20,height:55,backgroundColor:'#ce3d3a'}}></View>
                    </View>
                    <this.SearchButton></this.SearchButton>
                </View>
            </View>
        )
    }
    render(){
        const Tabs =  TabNavigator({
            FilmPage:{
                screen:FilmMainPage,
                navigationOptions:{
                    title:'A',
                    tabBarIcon: ({ tintColor,focused}) => (
                        <Image
                            resizeMode={Image.resizeMode.contain}
                            source={focused ? require('../../res/images/titlebar_discover_selected.png'):require('../../res/images/titlebar_discover_normal.png')}
                            style={{ width: px2dp(55),height:px2dp(55)}}
                        />
                    )
                }
            },
            GankPage:{
                screen:TechMainPage,
                navigationOptions:{
                    title:'I',
                    tabBarIcon: ({ tintColor,focused}) => (
                        <Image
                            resizeMode={Image.resizeMode.stretch}
                            source={focused ? require('../../res/images/titlebar_music_selected.png'):require('../../res/images/titlebar_music_normal.png')}
                            style={ {width: px2dp(55),height:px2dp(55)}}
                        />
                    )
                }
            },
            BookPage:{
                screen:BookMainPage,
                navigationOptions:{
                    title:'W',
                    tabBarIcon: ({ tintColor,focused}) => (
                        <Image
                            resizeMode={Image.resizeMode.stretch}
                            source={focused ? require('../../res/images/titlebar_friends_selected.png'):require('../../res/images/titlebar_friends_normal.png')}
                            style={{ width: px2dp(55),height:px2dp(55)}}
                        />
                    )
                }
            }
        },{
            tabBarComponent:(prop) => {
                return (
                    this.TabBar(prop)
                )
            },
            initialRouteName:'FilmPage',
            tabBarPosition:'top',
            swipeEnabled:true,
            lazy: true,
            animationEnabled: false,
            borderless:true,
            tabBarOptions: {
                //activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
                showIcon:true,
                showLabel:false,
                style: {
                    width:150,
                    height:55,
                    backgroundColor: '#00000000',
                    justifyContent:'center',
                    alignContent:'center'
                },
                iconStyle:{
                    width:30,
                    height:30,
                },
                pressColor:'#7D7D7D88',
                tabStyle:{
                    width:50,
                },
                indicatorStyle:{
                    width:50,
                    alignContent:'center',
                    justifyContent:'center'
                },
                indicatorStyle:{
                    height:0
                }
            },
        });
        return <Tabs  />
    }
}
const styles = StyleSheet.create({
    tabBarCenterImage:{
        width: px2dp(55),
        height:px2dp(55)
    },
    tabBarLeftInLayout:{
        width: 50,
        height: 55,
        justifyContent:'center',
        alignItems:'center'
    },
    tabBarRightInLayout:{
        width: 30,
        height: 30,
        justifyContent:'center',
        alignItems:'center'
    },
    tabBarOutImage:{
        alignContent:'center',
        width: px2dp(23),
        height:px2dp(23)
    }
})