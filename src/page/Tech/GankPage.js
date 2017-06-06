/**
 * Created by gao on 2017-05-10.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    ListView,
    Image,
    View
} from 'react-native';
const URL = 'http://gank.io/api/data/all/10/1'
import PageLoading from '../../view/PageLoading.js'
export default class GankPage extends Component{
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            isLoading: true,
            dataSource: ds,
            data:null,
        };
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData(){
        fetch(URL)
            .then((response) => response.json())
            .then((responseData) => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.results),
                    isLoading: false,
                });
            });
    }
    LoadingView(){
        return(
            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <PageLoading ref='MyLoading'></PageLoading>
            </View>
        )
    }
    listItemView(rowData){
        return(
            <TouchableNativeFeedback>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:1,flexDirection:'column'}}>
                        <Text numberOfLines={2}>rowData.desc</Text>
                      {/*  {rowData.images==null?null:<Image style={{width:100,height:100}} source={{uri:rowData.images[0]}}></Image>}*/}
                    </View>
                  {/*  <View>

                    </View>*/}
                </View>
            </TouchableNativeFeedback>
        )
    }
    render(){
        if(this.state.isLoading){
            return this.LoadingView();
        }
        this.refs.MyLoading.stopLoadAnimate();
        //this.interval && clearTimeout(this.interval);
        return(
            <View style={styles.main}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData)=>this.listItemView(rowData)}
                    stickySectionHeadersEnabled={false}
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