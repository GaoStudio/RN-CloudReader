/**
 * Created by gao on 2017-05-10.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    ListView,
    TouchableNativeFeedback,
    Image,
    View
} from 'react-native';
import PageLoading from '../../view/PageLoading.js'
export default class FilmMainPage extends Component{
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            isLoading: true,
            dataSource: ds,
        };
        this.interval = setInterval(()=>(
            console.log('Time')
        ),500)
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData(){
        fetch('https://api.douban.com/v2/movie/in_theaters')
            .then((response) => response.json())
            .then((responseData) => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.subjects),
                    isLoading: false,
                });
            });
    }
    listHeadView(){
        return (
            <View>
                <Image source={require('../../../res/images/file_banner.jpg')}
                       style={{  width:'100%',height:180}}></Image>
                <View style={{ flex:1,flexDirection: 'row',alignItems:'center',width:'100%',backgroundColor:'#F2F4F5',height:55}}>
                    <TouchableNativeFeedback
                        background={TouchableNativeFeedback.Ripple('#DADCDD', false)}>
                        <View  style={{width:'50%',height:'100%',alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
                            <Image style={{width:35,height:35}} source={require('../../../res/images/koubei_paihang.png')} ></Image>
                            <Text style={{marginLeft:10,color:'#333333',fontSize:14}}>飙升榜</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <View style={{width:1,height:'60%',backgroundColor:'#DADCDD'}}></View>
                    <TouchableNativeFeedback>
                        <View style={{width:'50%',alignItems:'center',flexDirection:'row',justifyContent:'center',height:'100%'}}>
                            <Image style={{width:35,height:35}} resizeMode={Image.resizeMode.contain} source={require('../../../res/images/top_250.png')}></Image>
                            <Text style={{marginLeft:10,color:'#333333',fontSize:14}}>Top排行</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={{width:'100%',height:1,backgroundColor:'#DADCDD'}}></View>
            </View>
        )
    }
    listItemHead(sectionID){
        return(
            <View style={{backgroundColor:'#fAfAfA'}}>
                <View style={{flex:1,flexDirection:'row',marginTop:20,marginBottom:10,width:'100%'}}>
                    <View style={{marginLeft:10,width:4,borderRadius:2,height:22,backgroundColor:'#D33A31'}}></View>
                    <Text style={{marginLeft:10,color:'#333333',fontSize:16}}>热映榜</Text>
                </View>
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

    listItemView(rowData){
        return(
            <TouchableNativeFeedback>
            <View style={{flex:1,flexDirection:'row'}}>
                <Image source={{uri:rowData.images.large}}
                       resizeMode={Image.resizeMode.contain}
                        style={{width:'24%',height:140,marginLeft:10,marginTop:5,marginBottom:5}}>
                </Image>
                <View style={{flexDirection:'column',width:'76%',flex:1,marginLeft:10}}>
                    <View style={{flex:1,justifyContent:'center',flexDirection:'column',marginRight:10}}>
                        <Text style={{fontWeight:'bold',fontSize:18,color:'#333333'}}>{rowData.title}</Text>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'column'}}>
                                <Text style={{fontSize:16}}>导演</Text>
                                <View style={{width:'100%',height:3,backgroundColor:'#D33A31'}}></View>
                            </View>
                            <Text style={{fontWeight:'bold'}}> : </Text>
                            <Text style={{fontSize:16}}>{rowData.directors[0].name}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                                <Text style={{fontSize:16}}>主演</Text>
                                <Text style={{fontWeight:'bold'}}> : </Text>
                                <Text style={{width:'85%',textAlign:'left',fontSize:16}}>
                                    {rowData.casts[0].name}/{rowData.casts[1].name}/{rowData.casts[2].name}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:16}}>类型</Text>
                            <Text style={{fontWeight:'bold'}}> : </Text>
                            <Text style={{width:'85%',textAlign:'left',fontSize:16}}>{rowData.genres[0]}/{rowData.genres[1]}/{rowData.genres[2]}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:16}}>评分</Text>
                            <Text style={{fontWeight:'bold'}}> : </Text>
                            <Text style={{width:'85%',textAlign:'left',fontSize:16}}>{rowData.rating.average}</Text>
                        </View>

                    </View>
                    <View style={{backgroundColor:'#DADCDD',height:1}}></View>
                </View>
            </View>
            </TouchableNativeFeedback>
        )
    }
    render(){
        //console.log('FilmMainPage');
        if(this.state.isLoading){
            return this.LoadingView();
        }
        this.refs.MyLoading.stopLoadAnimate();
        //this.interval && clearTimeout(this.interval);
        return(
            <View style={styles.main}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderHeader = {()=>this.listHeadView()}
                    renderSectionHeader={(sectionID)=>this.listItemHead(sectionID)}
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
    }
})