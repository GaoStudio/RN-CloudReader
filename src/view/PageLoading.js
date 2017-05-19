/**
 * Created by gao on 2017-05-18.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Animated,
    View,
    Text,
    Button
} from 'react-native';
export default class PageLoading extends Component{
    constructor(props){
        super(props);
        this.state = {
            stopAnimation: false,
            fV: new Animated.Value(10),
            sV: new Animated.Value(20),
            tV: new Animated.Value(6),
            foV: new Animated.Value(15),
        };
    }
    loadAnimate(){
        //alert('hhh')
      this.animate =  Animated.parallel([
            Animated.sequence([
                Animated.timing(
                    this.state.fV,
                    {
                        toValue: 18,
                        duration:130,
                        delay:0,
                    }
                ),
                Animated.timing(
                    this.state.fV,
                    {
                        toValue: 10,
                        duration:130,
                        delay:130,
                    }
                )
            ]),
            Animated.sequence([
                Animated.timing(
                    this.state.sV,
                    {
                        toValue: 8,
                        duration:130,
                        delay:0,

                    }
                ),
                Animated.timing(
                    this.state.sV,
                    {
                        toValue: 20,
                        duration:130,
                        delay:130,
                    }
                )
            ]),
            Animated.sequence([
                Animated.timing(
                    this.state.tV,
                    {
                        toValue: 20,
                        duration:130,
                        delay:0,
                    }
                ),
                Animated.timing(
                    this.state.tV,
                    {
                        toValue: 8,
                        duration:130,
                        delay:130,
                    }
                )
            ]),
            Animated.sequence([
                Animated.timing(
                    this.state.foV,
                    {
                        toValue: 8,
                        duration:130,
                        delay:0,
                    }
                ),
                Animated.timing(
                    this.state.foV,
                    {
                        toValue: 15,
                        duration:130,
                        delay:130,
                    }
                )
            ]),
        ]).start(event => {
            if (event.finished) {
                if(this.state.stopAnimation === false){
                    this.loadAnimate();
                }
            }
        });
    }
    componentDidMount() {
        this.loadAnimate();
    }
    stopLoadAnimate() {
        this.state.stopAnimation = true
    }
    render(){
        return(
            <View style={{flexDirection:'row',height:40,alignItems:'flex-end'}}>
               {/* <Button onPress={()=>{this.stopLoadAnimate()}}></Button>*/}
                <Animated.View style={{marginRight:3,backgroundColor:'#D33A31',width:3,height:this.state.fV}}></Animated.View>
                <Animated.View style={{marginRight:3,backgroundColor:'#D33A31',width:3,height:this.state.sV}}></Animated.View>
                <Animated.View style={{marginRight:3,backgroundColor:'#D33A31',width:3,height:this.state.tV}}></Animated.View>
                <Animated.View style={{marginRight:3,backgroundColor:'#D33A31',width:3,height:this.state.foV}}></Animated.View>
                <Text style={{marginBottom:-2,fontSize:14,marginLeft:3}}>努力加载中...</Text>
            </View>
        )
    }
}