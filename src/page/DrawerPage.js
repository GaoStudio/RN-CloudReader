/**
 * Created by gao on 2017-05-10.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    TouchableNativeFeedback,
    View
} from 'react-native';
export default class DrawerPage extends Component{
    render(){
        return(
            <View style={styles.main}>
                <Image style={styles.top} resizeMode={Image.resizeMode.stretch} source={require('../../res/images/ic_nav_bg_drawerlayout.png')}>
                    <View>
                        <View style={{height:70}}></View>
                        <Image style={styles.head} resizeMode={Image.resizeMode.stretch} source={require('../../res/images/you.jpg')}></Image>
                        <View style={{height:70,alignItems:'center',marginLeft:10,flexDirection:'row'}}>
                            <Text style={{textAlignVertical:'center',color:'#ffffff',fontSize:18}}>Jaye_Gao</Text>
                            <View style={{borderRadius:10,marginLeft:10,borderWidth:1,paddingLeft:6,paddingRight:6,borderColor:'#fff'}}>
                                <Text style={{color:'#ffffff',fontSize:10,fontWeight:'bold'}}>Lv.10</Text>
                            </View>
                        </View>
                    </View>
                </Image>
                <TouchableNativeFeedback>
                    <View style={{width:'100%',height:50,marginTop:10,flexDirection:'row',alignItems:'center'}}>
                        <Image style={{marginLeft:10,width:25,height:25}} source={require('../../res/images/ic_nav_homepage.png')}></Image>
                        <Text style={{marginLeft:10,fontSize:16,color:'#333333'}}>项目主页</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback>
                    <View style={{width:'100%',height:50,flexDirection:'row',alignItems:'center'}}>
                        <Image style={{marginLeft:10,width:25,height:25}} source={require('../../res/images/ic_nav_homepage.png')}></Image>
                        <Text style={{marginLeft:10,fontSize:16,color:'#333333'}}>项目主页</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback>
                    <View style={{width:'100%',height:50,flexDirection:'row',alignItems:'center'}}>
                        <Image style={{marginLeft:10,width:25,height:25}} source={require('../../res/images/ic_nav_homepage.png')}></Image>
                        <Text style={{marginLeft:10,fontSize:16,color:'#333333'}}>项目主页</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback>
                    <View style={{width:'100%',height:50,flexDirection:'row',alignItems:'center'}}>
                        <Image style={{marginLeft:10,width:25,height:25}} source={require('../../res/images/ic_nav_homepage.png')}></Image>
                        <Text style={{marginLeft:10,fontSize:16,color:'#333333'}}>项目主页</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback>
                    <View style={{width:'100%',height:50,flexDirection:'row',alignItems:'center'}}>
                        <Image style={{marginLeft:10,width:25,height:25}} source={require('../../res/images/ic_nav_homepage.png')}></Image>
                        <Text style={{marginLeft:10,fontSize:16,color:'#333333'}}>项目主页</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#ffffff',

    },
    top:{
        width:'100%',
        height:200,
    },
    head:{
        width:60,
        borderRadius:120,
        marginLeft:10,
        height:60,
    }
})