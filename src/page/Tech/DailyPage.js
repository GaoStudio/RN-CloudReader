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
export default class DailyPage extends Component{
    _onPress(){
        this.refs.MyLoading.stopLoadAnimate();
    }
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            isLoading: true,
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian'
            ])
        };
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
            <Swiper  autoplay={true} height={150} style={{flex:1,width:'100%'}} showsButtons={true}>
                <Image
                    resizeMode={Image.resizeMode.cover}
                    source={require('../../../res/images/banner01.jpg')}style={{width:'100%',height:150}}></Image>
                <Image
                    resizeMode={Image.resizeMode.cover}
                    source={require('../../../res/images/banner02.jpg')} style={{width:'100%',height:150}}></Image>
                <Image
                    resizeMode={Image.resizeMode.cover}
                    source={require('../../../res/images/banner03.jpg')}style={{width:'100%',height:150}}></Image>
                <Image
                    resizeMode={Image.resizeMode.cover}
                    source={require('../../../res/images/banner04.jpg')}style={{width:'100%',height:150}}></Image>
                <Image
                    resizeMode={Image.resizeMode.cover}
                    source={require('../../../res/images/banner05.jpg')}style={{width:'100%',height:150}}></Image>
            </Swiper>
        )
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false,
            });
         },1000);

    }
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
    AndroidComponentItem(rowData){
        return(
            <View style={{width:ScreenWidth/3,alignItems:'center',height:150,justifyContent:'center'}}>
                <Image
                    resizeMode={Image.resizeMode.cover}
                    source={require('../../../res/images/banner05.jpg')}style={{width:'90%',height:120}}></Image>
                <Text>{rowData}</Text>
            </View>
        )
    }
    AndroidComponent(item){
        this.state.dataSource.cloneWithRows(item)
        return(
            <ListView
                dataSource={this.state.dataSource}
                style={{marginTop:5}}
                contentContainerStyle={{flexDirection:'row',flexWrap:'wrap'}}
                pageSize={3}
                renderRow={(rowData) => this.AndroidComponentItem(rowData)}
                >
            </ListView>
        )
    }
    WelfareComponent(){
        return(
            <View style={{height:140,justifyContent:'center',alignItems:'center'}}>
                <Image
                    resizeMode={Image.resizeMode.cover}
                    source={require('../../../res/images/banner05.jpg')}style={{width:'97%',height:120}}></Image>
            </View>
        )
    }
    IOSComponent(){
        return(
            <View style={{height:140,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <View style={{width:'50%',alignItems:'center',justifyContent:'center'}}>
                    <Image
                        resizeMode={Image.resizeMode.cover}
                        source={require('../../../res/images/banner05.jpg')}style={{width:'94%',height:120}}></Image>
                </View>
                <View style={{width:'50%',alignItems:'center',justifyContent:'center'}}>
                    <Image
                        resizeMode={Image.resizeMode.cover}
                        source={require('../../../res/images/banner05.jpg')}style={{width:'94%',height:120}}></Image>
                </View>
            </View>
        )
    }
    VideoComponent(){
        return(
            <View style={{height:160,marginTop:5,justifyContent:'center',alignItems:'center'}}>
                <Image
                    resizeMode={Image.resizeMode.cover}
                    source={require('../../../res/images/banner05.jpg')}style={{width:'97%',marginLeft:10,marginRight:10,height:120}}></Image>
                <Text style={{marginRight:5,marginLeft:5}} numberOfLines={2}>收集整理Android开发所需的Android SDK、开发中用到的工具、Android开发教程、Android设计规范，免费的设计素材等。</Text>
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
                        {data: [this.state.dataSource],imageUrl:require('../../../res/images/home_title_android.png'),
                            renderItem:({item})=>this.AndroidComponent(item),key:'Andorid'},
                        {data: [this.state.dataSource], imageUrl:require('../../../res/images/home_title_meizi.png'),
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