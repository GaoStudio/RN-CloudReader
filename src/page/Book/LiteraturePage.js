/**
 * Created by gao on 2017-05-10.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
export default class LiteraturePage extends Component{
    render(){
        return(
            <View style={styles.main}>
                <Text>
                    文学
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    }
})