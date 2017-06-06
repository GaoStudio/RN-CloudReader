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
const URL = 'http://gank.io/api/data/all/10/'
import ScreenWidth from '../../util/ScreenUtils'
import PageLoading from '../../view/PageLoading.js'
import px2dp from '../../util/px2dp.js'
export default class GankPage extends Component{
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            isLoading: true,
            dataSource: ds,
            dataArray:[],
            pageNumber:1,
            isRenderFooter: false,
            isFullData:false,
            data:null,
        };
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData(){
        fetch(URL+this.state.pageNumber)
            .then((response) => response.json())
            .then((responseData) => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.results),
                    isLoading: false,
                    dataArray:responseData.results,
                    pageNumber:this.state.pageNumber+1
                });
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
    LoadingView(){
        return(
            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <PageLoading ref='MyLoading'></PageLoading>
            </View>
        )
    }
    listItemView(rowData){
        return(
            <TouchableNativeFeedback style={{borderRadius:5}}>
                <View style={{padding:10,marginTop:5,borderRadius:5,marginBottom:5,borderWidth:2,borderColor:'#666666',flexDirection:'column'}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        {rowData.images==null?
                            <Text fontSize={18} style={{width:'90%'}} numberOfLines={2}>{rowData.desc}</Text>
                            :<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                               <Text style={{width:'70%'}} adjustsFontSizeToFit={true} fontSize={18} numberOfLines={4}>{rowData.desc}</Text>
                              <Image style={{width:100,height:100}} resizeMode={Image.resizeMode.stretch} source={{uri:rowData.images[0]}}></Image>
                            </View>
                        }
                    </View>
                   <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text color={'#999999'}>{rowData.who}·{rowData.type}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
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
                    showsVerticalScrollIndicator={false}
                    dataSource={this.state.dataSource}
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