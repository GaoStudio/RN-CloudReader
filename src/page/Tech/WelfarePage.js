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
const URL = 'http://gank.io/api/data/福利/10/'
import px2dp from '../../util/px2dp.js'
export default class WelfarePage extends Component{
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            isLoading: true,
            dataSource: ds,
            dataArray:[],
            pageNumber:1,
            isRenderFooter: false,
            isFullData:false
        };
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData(){
        fetch(URL+this.state.pageNumber)
            .then((response) => response.text())
            .then((responseData) => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                responseData = JSON.parse(responseData)
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(responseData.results),
                    isLoading: false,
                    dataArray:responseData.results,
                    pageNumber:this.state.pageNumber+1
                });
                //console.log(this.state.data.Android);
            });
    }
    fetchMoreData(url){
        fetch(url)
            .then((response) => response.text())
            .then((responseData) => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                responseData = JSON.parse(responseData)
                this.setState({
                    dataArray:this.state.dataArray.concat(responseData.results),
                    dataSource:this.state.dataSource.cloneWithRows(this.state.dataArray),
                    //isLoading: false,
                    isRenderFooter: false,
                    pageNumber:this.state.pageNumber+1
                });
                //console.log(this.state.data.Android);
            });
    }
    listItemView(rowData){
        return(
            <View style={{width:ScreenWidth/2,justifyContent:'center',alignItems:'center',height:248}}>
                <Image source={{uri:rowData.url}} style={{width:'96%',height:240}}
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
    _listViewOnEndReached(){
        if(!this.state.isRenderFooter) {
            this.setState({
                isRenderFooter: true,
            })
            setTimeout(() => {
                this.fetchMoreData(URL+this.state.pageNumber);
            }, 1000);
        }
    }
    _renderFooter(){
        if(this.state.isRenderFooter) {
            if (this.state.isFullData)
                return (
                    <View style={styles.footer}>
                        <Text style={{color: this.props.indicatorColor}}>已加载全部</Text>
                    </View>
                );
            else
                return (
                    <View style={styles.footer}>
                        <PageLoading ref='MyLoadingFooter'></PageLoading>
                    </View>
                );
        }
        return null;
    }
    render(){
        if(this.state.isLoading){
            return this.LoadingView();
        }
        if(this.refs.MyLoading){
            this.refs.MyLoading.stopLoadAnimate();
        }
        return(
                <View style={styles.main}>
                    <ListView
                        dataSource={this.state.dataSource}
                        contentContainerStyle={{flexDirection:'row',flexWrap:'wrap'}}
                        pageSize={2}
                        renderFooter={this._renderFooter.bind(this)}
                        onEndReached={this._listViewOnEndReached.bind(this)}
                        renderRow={(rowData)=>this.listItemView(rowData)}
                        onEndReachedThreshold={5}
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
    },
    footer: {
        flexDirection: 'row',
        width: '100%',
        height: px2dp(60),
        justifyContent: 'center',
    }
})