/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, StatusBar, ScrollView, Button, Text, View} from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import { Header, SearchBar, FormLabel, FormInput } from 'react-native-elements'

// ホーム画面
class FirstScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      movie: '動画',
      title: 'タイトル',
      owner:  '人'
    }
  }

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.body}>
          <ScrollView>
            <Text style={styles.movie} onPress={() => this.props.navigation.navigate('Details')} >{this.state.movie}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.cInfo}>{this.state.owner}</Text>
              <Text style={styles.cInfo}>{this.state.title}</Text>
              <Text style={styles.cInfo} onPress={this.countGood}>いいね: {this.state.good}</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }

  countGood = ()=>{
    this.setState({good: ++this.state.good})
  }

}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const HomeStack = createStackNavigator(
  {
    First: FirstScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'First',
  }
);


// タイトル画面
class SecondScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'タイトル画面',
      message: 'サンプル',
      movietitle: 'タイトル'
    }
  }

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.body}>
          <ScrollView>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.category}>音</Text>
              <Text style={styles.category}>ゲ</Text>
              <Text style={styles.category}>ニ</Text>
              <Text style={styles.category}>映</Text>
              <Text style={styles.category}>ア</Text>
            </View>
            <SearchBar
              lightTheme
              placeholder='検索キーワード' />
            <Text style={styles.movie} onPress={() => this.props.navigation.navigate('Details')} >{this.state.movietitle}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.contributer}>人</Text>
              <Text style={styles.cInfo}>タイトル        いいね</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }

}

class titleDetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const TitleStack = createStackNavigator(
  {
    Second: SecondScreen,
    Details: titleDetailsScreen,
  },
  {
    initialRouteName: 'Second',
  }
);


// アップロード画面
class ThirdScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '投稿画面',
      message: 'サンプル',
    }
  }

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.body}>
          <ScrollView>
            <Text style={styles.title}>{this.state.title}</Text>
          </ScrollView>
        </View>
      </View>
    );
  }

}

class movieUploadScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '投稿画面',
      message: 'サンプル',
    }
  }

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.body}>
          <ScrollView>
            <Text style={styles.title}>{this.state.title}</Text>
          </ScrollView>
        </View>
      </View>
    );
  }

}

const UploadStack = createMaterialTopTabNavigator(
  {
    お題: ThirdScreen,
    動画: movieUploadScreen,
  },
  {
    initialRouteName: 'お題',
    tabBarOptions: {
      style: {
        marginTop: 30
      },
    },
  }
);


// 通知画面
class ForthScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '通知画面',
      message: 'サンプル',
    }
  }

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.body}>
          <ScrollView>
            <Text style={styles.title}>通知</Text>
          </ScrollView>
        </View>
      </View>
    );
  }

}


// マイページ
class FifthScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'マイページ',
      message: 'サンプル',
    }
  }

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.body}>
          <ScrollView>
            <Text style={styles.title}>{this.state.title}</Text>
          </ScrollView>
        </View>
      </View>
    );
  }

}

class mpTitleScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'マイページ',
      message: 'サンプル',
    }
  }

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.body}>
          <ScrollView>
            <Text style={styles.title}>{this.state.title}</Text>
          </ScrollView>
        </View>
      </View>
    );
  }

}

class mpGoodScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'マイページ',
      message: 'サンプル',
    }
  }

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.body}>
          <ScrollView>
            <Text style={styles.title}>{this.state.title}</Text>
          </ScrollView>
        </View>
      </View>
    );
  }

}

class mpGoodTitleScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'マイページ',
      message: 'サンプル',
    }
  }

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.body}>
          <ScrollView>
            <Text style={styles.title}>{this.state.title}</Text>
          </ScrollView>
        </View>
      </View>
    );
  }

}

const MyPageStack = createMaterialTopTabNavigator(
  {
    投稿動画: FifthScreen,
    投稿タイトル: mpTitleScreen,
    いいね: mpGoodScreen,
    見たい: mpGoodTitleScreen,
  },
  {
    initialRouteName: '投稿動画',
    tabBarOptions: {
      style: {
        marginTop: 30
      },
    },
  }
);


// 
const Home = createBottomTabNavigator (
  {
    Home: HomeStack,
    Title: TitleStack,
    Upload: UploadStack,
    Notifi: { screen: ForthScreen },
    MyPage: MyPageStack,
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      activeBackgroundColor: '#0000ff',
      inactiveBackgroundColor: '#0000aa',
      LabelStyle: {
        fontSize: 24,
      },
    }
  }
);

const HomeContainer = createAppContainer(Home);

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <View style={styles.base}>
        {/* <Header
          leftComponent={{
            text: "DrinkBee",
            style: styles.header
          }}
          centerComponent={{
            text: "カメラ",
          }}
          rightComponent={{
            text: "検索",
          }}
          outerContainerStyles={{
            height: 100, backgroundColor: '#dd0000'
          }}
        /> */}
        <HomeContainer />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  base: {
    padding: 0,
    flex: 1,
    backgroundColor: '#ccc'
  },
  body: {
    padding: 10,
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  title:{
    padding: 10,
    fontSize: 25,
    textAlign: 'center'
  },
  message: {
    padding: 10,
    fontSize: 28,
  },
  movie: {
    paddingTop: 10,
    textAlign: 'center',
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 40
  },
  contributer:{
    padding: 5,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  cInfo: {
    padding: 10,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  category: {
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
