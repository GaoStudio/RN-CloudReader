/**
 * Created by gao on 2017-05-10.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    RefreshControl,
    ListView,
    View
} from 'react-native';
import {ScreenWidth} from '../../util/ScreenUtils.js'
import PageLoading from '../../view/PageLoading.js'
const URL = 'https://api.douban.com/v2/book/search?tag=文学&count=12&start='
import px2dp from '../../util/px2dp.js'
export default class WelfarePage extends Component{
    static navigationOptions = ({ navigation }) => ({

       title: `Chat with `,
    });
    constructor(props) {
        super(props);
       // const p = this.props.navigation.tilte;
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            isLoading: true,
            dataSource: ds,
            dataArray:[],
            pageNumber:0,
            isRefreshing: false,
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
                    dataSource:this.state.dataSource.cloneWithRows(responseData.books),
                    isLoading: false,
                    isRefreshing: false,
                    dataArray:responseData.books,
                    pageNumber:this.state.pageNumber+1*12
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
                    dataArray:this.state.dataArray.concat(responseData.books),
                    dataSource:this.state.dataSource.cloneWithRows(this.state.dataArray),
                    //isLoading: false,
                    isRefreshing: false,
                    isRenderFooter: false,
                    pageNumber:this.state.pageNumber+1*12
                });
                //console.log(this.state.data.Android);
            });
    }
    _onRefresh() {
        this.state.pageNumber=0;
        this.setState({isRefreshing: true});
        this.fetchData();
    }
    listItemView(rowData){
        return(
            <View style={{width:ScreenWidth/3,justifyContent:'center',alignItems:'center',height:200}}>
                <Image source={{uri:rowData.images.large}} style={{width:'90%',height:150}}
                       resizeMode={Image.resizeMode.stretch}></Image>
                <Text numberOfLines={1}  style={{marginTop:10,fontSize:12}}>{rowData.title}</Text>
                <Text style={{fontSize:12}}>评分：{rowData.rating.average}</Text>
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
                    pageSize={3}
                    refreshControl={
                      <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        tintColor="#ff0000"
                        title="Loading..."
                        titleColor="#00ff00"
                        colors={['#ff0000', '#00ff00', '#0000ff']}
                        progressBackgroundColor="#ffffff"
                      />
                    }
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