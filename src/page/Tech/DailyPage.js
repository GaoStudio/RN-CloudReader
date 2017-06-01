/**
 * Created by gao on 2017-05-10.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    ListView,
    RefreshControl,
    SectionList,
    ScrollView,
    Button,
    View
} from 'react-native';
import PageLoading from '../../view/PageLoading.js'
import Swiper from 'react-native-swiper';
import {ScreenWidth} from '../../util/ScreenUtils.js'
const URL = 'http://gank.io/api/day/2017/05/16'
export default class DailyPage extends Component{
    _onPress(){
        this.refs.MyLoading.stopLoadAnimate();
    }
    constructor(props){
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
            .then((response) => response.text())
            .then((responseData) => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                responseData = JSON.parse(responseData)
                this.setState({
                    data:responseData.results,
                    isLoading: false,
                });
                console.log(this.state.data.Android);
            });
    }
    LoadingView(){
        return(
            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <PageLoading ref='MyLoading'></PageLoading>
            </View>
        )
    }
    BannerView(){
        return(
            <Swiper  autoplay={true} height={150} style={{flex:1,width:'100%'}} showsButtons={false}>
                <Image
                    resizeMode={Image.resizeMode.cover}
                    source={require('../../../res/images/banner01.png')}style={{width:'100%',height:150}}></Image>
                <Image
                    resizeMode={Image.resizeMode.cover}
                    source={require('../../../res/images/banner02.png')} style={{width:'100%',height:150}}></Image>
                <Image
                    resizeMode={Image.resizeMode.cover}
                    source={require('../../../res/images/banner03.png')}style={{width:'100%',height:150}}></Image>
                <Image
                    resizeMode={Image.resizeMode.cover}
                    source={require('../../../res/images/banner04.png')}style={{width:'100%',height:150}}></Image>
                <Image
                    resizeMode={Image.resizeMode.cover}
                    source={require('../../../res/images/banner05.png')}style={{width:'100%',height:150}}></Image>
            </Swiper>
        )
    }
  /*  componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false,
            });
         },1000);

    }*/
    renderSectionHeader = ({section}) => (

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{marginLeft:5,flexDirection:'row',alignItems:'center'}}>
                    <Image source={section.imageUrl} style={{width:25,height:25}}></Image>
                    <Text>{section.key}</Text>
                </View>
                <View style={{marginLeft:2,flexDirection:'row',alignItems:'center'}}>
                    <Text>更多</Text>
                    <Image source={require('../../../res/images/home_arrow_right.png')}  style={{width:20,height:20}}></Image>
                </View>
            </View>
    );
    HeaderComponent(){
        return(
            <View>
                <View style={{marginTop:15,marginBottom:10,flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../../../res/images/home_icon_fm.png')}style={{width:50,height:50}}></Image>
                        <Text  style={{fontSize:12,marginTop:5}}>干货闲读</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../../../res/images/home_icon_day.png')} style={{alignItems:'center',justifyContent:'center',width:50,height:50}}>
                            <Text style={{fontSize:25,color:'#D33A31'}}>
                                20
                            </Text>
                        </Image>
                        <Text style={{fontSize:12,marginTop:5}}>每日推荐</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../../../res/images/home_icon_rank.png')} style={{width:50,height:50}}></Image>
                        <Text  style={{fontSize:12,marginTop:5}}>电影排行</Text>
                    </View>
                </View>
                <View style={{marginBottom:5,width:'100%',height:1,backgroundColor:'#d4d4d4'}}></View>
            </View>
        )
    }
    FooterComponent(){
        return(
            <View>
                <View style={{marginTop:5,width:'100%',height:1,backgroundColor:'#d4d4d4',alignContent:'flex-start'}}></View>
                <View style={{height:100,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:14}}>现在暂不可以根据个人喜好,自由调整首页项目顺序</Text>
                    <Text style={{marginTop:5,padding:5,color:'#D33A31',borderRadius:5,borderColor:'#D33A31',borderWidth:1}}>调整栏目顺序</Text>
                </View>
            </View>
        )
    }
    AndroidComponentItem(rowData,imageUrl){
        return(
            <View style={{width:ScreenWidth/3,alignItems:'center',height:150,justifyContent:'center'}}>
                <Image
                    resizeMode={Image.resizeMode.cover}
                    source={imageUrl}style={{width:'90%',height:120}}></Image>
                <Text numberOfLines={1}>{rowData.desc}</Text>
            </View>
        )
    }
    AndroidComponent(item){
        //this.state.dataSource.cloneWithRows(item)
        return(
            <View style={{flexDirection:'row'}}>
                {this.AndroidComponentItem(item[0],require('../../../res/images/Android02.jpg'))}
                { this.AndroidComponentItem (item[1],require('../../../res/images/Android01.jpg'))}
                {this.AndroidComponentItem (item[2],require('../../../res/images/Android03.jpg'))}
            </View>
        )
    }
    WelfareComponent(){
        return(
            <View style={{height:150,justifyContent:'center',alignItems:'center'}}>
                <Image
                    resizeMode={Image.resizeMode.cover}
                    source={{uri:this.state.data.福利[0].url}}style={{width:'97%',height:140}}></Image>
            </View>
        )
    }
    IOSComponent(){
        return(
            <View style={{height:150,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <View style={{width:'50%',alignItems:'center',justifyContent:'center'}}>
                    <Image
                        resizeMode={Image.resizeMode.cover}
                        source={require('../../../res/images/ios01.jpg')}style={{width:'94%',height:120}}></Image>
                    <Text>{this.state.data.iOS[0].desc}</Text>
                </View>
                <View style={{width:'50%',alignItems:'center',justifyContent:'center'}}>
                    <Image
                        resizeMode={Image.resizeMode.cover}
                        source={require('../../../res/images/ios02.jpg')}style={{width:'94%',height:120}}></Image>
                    <Text>{this.state.data.iOS[1].desc}</Text>
                </View>
            </View>
        )
    }
    VideoComponent(){
        return(
            <View style={{height:180,marginTop:5,justifyContent:'center',alignItems:'center'}}>
                <Image
                    resizeMode={Image.resizeMode.cover}
                    source={require('../../../res/images/xiuxi.jpg')}style={{width:'97%',marginLeft:10,marginRight:10,height:140}}></Image>
                <Text style={{marginTop:10,marginRight:5,marginLeft:5}} numberOfLines={2}>
                    {this.state.data.休息视频[0].desc}</Text>
            </View>
        )
    }
    render(){
        if(this.state.isLoading){
            return this.LoadingView();
        }
        this.refs.MyLoading.stopLoadAnimate();
        return(
           <ScrollView>
               {this.BannerView()}
               <SectionList
                   ListHeaderComponent = {()=>this.HeaderComponent()}
                   ListFooterComponent = {()=>this.FooterComponent()}
                   renderSectionHeader = {this.renderSectionHeader}
                   sections={[
                        {data: [this.state.data.Android],imageUrl:require('../../../res/images/home_title_android.png'),
                            renderItem:({item})=>this.AndroidComponent(item),key:'Andorid'},
                        {data: [this.state.data.福利], imageUrl:require('../../../res/images/home_title_meizi.png'),
                            renderItem:({item})=>this.WelfareComponent(),key:'福利'},
                        {data: [this.state.dataSource], imageUrl:require('../../../res/images/home_title_ios.png'),
                            renderItem:({item})=>this.IOSComponent(),key:'IOS'},
                        {data: [this.state.dataSource], imageUrl:require('../../../res/images/home_title_movie.png'),
                            renderItem:({item})=>this.VideoComponent(),key:'休息视频'},
                       ]}>
               </SectionList>
            </ScrollView>

        )
    }
}
const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#ff0000'
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    }
})