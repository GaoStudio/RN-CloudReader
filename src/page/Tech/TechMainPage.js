/**
 * Created by gao on 2017-05-10.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import ScrollableTabView ,{DefaultTabBar} from 'react-native-scrollable-tab-view'
import AndroidPage from './AndroidPage.js'
import DailyPage from './DailyPage.js'
import GankPage from './GankPage.js'
import WelfarePage from './WelfarePage.js'
import {TabNavigator} from 'react-navigation'
export default class TechMainPage extends Component{
    render(){
        return(
            <TechMainTab/>
        )
    }
}
TechMainTab = new TabNavigator(
    {
        DailyPage:{
            screen:DailyPage,
            navigationOptions: {
                title: '每日推荐',
            }
        },

        WelfarePage:{
            screen:WelfarePage,
            navigationOptions: {
                title:'福利'
            }
        },
        GankPage:{
            screen:GankPage,
            navigationOptions: {
                title:'干货'
            }
        },
        AndroidPage:{
            screen:AndroidPage,
            navigationOptions: {
                title:'大安卓'
            }
        }
    },
    {
        swipeEnabled:true,
        lazy: true,
        backBehavior:'none',
        animationEnabled: false,
        tabBarOptions:{
            inactiveTintColor:'#767676',
            activeTintColor:'#D33A31',
            borderless:false,
            style: {
                height:40,
                backgroundColor: '#ffffff',
                justifyContent:'center',
                alignContent:'center',
            },
            labelStyle: {
                fontSize: 14,
            },
            pressColor:'#7D7D7D88',
            tabStyle:{
                height:40,
                justifyContent:'center',
                alignContent:'center',
                alignItems:'center'
            },
            indicatorStyle:{
                backgroundColor: '#D33A31',
                alignContent:'center',
                justifyContent:'center'
            },
        }
    }
)
const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    }
})