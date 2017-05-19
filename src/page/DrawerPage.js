/**
 * Created by gao on 2017-05-10.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
export default class DrawerPage extends Component{
    render(){
        return(
            <View style={styles.main}>
              <View >
                  <Image style={styles.top} resizeMode={Image.resizeMode.stretch} source={require('../../res/images/ic_nav_bg_drawerlayout.png')}></Image>
              </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#ff0000'
    },
    top:{
        width:'100%',
        height:180,
    }
})