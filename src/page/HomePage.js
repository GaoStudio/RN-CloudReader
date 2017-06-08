/**
 * Created by gao on 2017-05-10.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    BackAndroid,
    DrawerLayoutAndroid,
    StatusBar,
    ToastAndroid,
    View
} from 'react-native';
import {MainPage} from './MainPage.js'
import DrawerPage from './DrawerPage.js'
/**
 * 应用主目录
 */
export default class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpening: false,
        };
    }
    openDrawer(){
        this.drawer.openDrawer();
    }
    componentWillMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
    onBackAndroid = () => {
        if( this.state.isOpening){
            this.drawer.closeDrawer();
            return true;
        }
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            return false;
        }
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用',ToastAndroid.SHORT);
        return true;
    };
    _onDrawerOpen(){
        this.state.isOpening = true;
    }
    render(){
        return (
            <DrawerLayoutAndroid
                ref={(drawer) => { this.drawer = drawer; }}
                drawerWidth={320}
                onDrawerOpen={this._onDrawerOpen.bind(this)}
                onDrawerClose = {()=>this.state.isOpening=false}
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