/**
 * Created by gao on 2017-05-10.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    ListView,
    Image,
    View
} from 'react-native';
import {ScreenWidth} from '../../util/ScreenUtils.js'
import PageLoading from '../../view/PageLoading.js'
export default class WelfarePage extends Component{
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            isLoading: true,
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian'
            ]),
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false,
            });
        },1000);

    }
    listItemView(rowData){
        return(
            <View style={{width:ScreenWidth/2,justifyContent:'center',alignItems:'center',height:248}}>
                <Image source={require('../../../res/images/Superman.jpg')} style={{width:'96%',height:240}}
                       resizeMode={Image.resizeMode.cover}></Image>
            </View>
        )
    }
    LoadingView(){
        return(
            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <PageLoading ref='MyLoading'></PageLoading>
            </View>
        )
    }
    render(){
        if(this.state.isLoading){
            return this.LoadingView();
        }
        this.refs.MyLoading.stopLoadAnimate();
        return(
                <View style={styles.main}>
                    <ListView
                        dataSource={this.state.dataSource}
                        contentContainerStyle={{flexDirection:'row',flexWrap:'wrap'}}
                        pageSize={2}
                        renderRow={(rowData)=>this.listItemView(rowData)}
                    />
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