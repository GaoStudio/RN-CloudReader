/**
 * Created by gao on 2017-05-10.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {TabNavigator} from 'react-navigation'
import CulturePage from './CulturePage.js'
import LifePage from './LifePage.js'
import LiteraturePage from './LiteraturePage.js'

export default class BookMainPage extends Component{
    render(){
        return(
            <BookMainTab/>
                /*<ScrollableTabView  style={styles.main} renderTabBar={() => <DefaultTabBar />}>
                  {/!*  <CulturePage tabLabel="文化" />
                    <LifePage tabLabel="生活" />
                    <LiteraturePage tabLabel="文学" />*!/}
                    <Text tabLabel='Tab #1'>My</Text>
                    <Text tabLabel='Tab #2'>favorite</Text>
                    <Text tabLabel='Tab #3'>project</Text>
                </ScrollableTabView>*/
        )
    }
}
BookMainTab = new TabNavigator(
    {
        CulturePage:{
            screen:CulturePage,
            navigationOptions: {
                title: '文学',
            }
        },
        LifePage:{
            screen:CulturePage,
            navigationOptions: {
                title:'生活',
            }
        },
        LiteraturePage:{
            screen:CulturePage,
            navigationOptions: {
                title:'文化',
            }
        }
    },{
        swipeEnabled:true,
        lazy: true,

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
    }
})