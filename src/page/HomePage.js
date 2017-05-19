/**
 * Created by gao on 2017-05-10.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    DrawerLayoutAndroid,
    StatusBar,
    View
} from 'react-native';
import {MainPage} from './MainPage.js'
import DrawerPage from './DrawerPage.js'
/**
 * 应用主目录
 */
export default class HomePage extends Component{
    openDrawer(){
        this.drawer.openDrawer();
    }
    render(){
        return (
            <DrawerLayoutAndroid
                ref={(drawer) => { this.drawer = drawer; }}
                drawerWidth={320}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => <DrawerPage/>}>
                <View style={{flex:1}}>
                    <StatusBar
                        backgroundColor="#00000000"
                        translucent ={true}
                    />
                    <MainPage onLeftPress={()=>(this.drawer.openDrawer())}></MainPage>
                </View>
            </DrawerLayoutAndroid>
        )
    }
}