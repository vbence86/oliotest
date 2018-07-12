import React, { Component } from 'react';
import { View } from 'react-native';
import ArticlesPage from './pages/ArticlesPage';
import MapPage from './pages/MapPage';
import SplashPage from './pages/SplashPage';
import NavigationExperimental from 'react-native-deprecated-custom-components';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  updateScene(route, navigator) {
    const routeId = route.id;
    let page;
    if (routeId === 'SplashPage') {
      return <SplashPage navigator={navigator} />
    } else if (routeId === 'ArticlesPage') {
      return <ArticlesPage navigator={navigator} />
    } else if (routeId === 'MapPage') {
      return <MapPage reset={route.reset} navigator={navigator} article={route.data} />
    }    
  }

  render () {
    return (
      <NavigationExperimental.Navigator
            initialRoute={{id: 'SplashPage', name: 'Index'}}
            renderScene={this.updateScene.bind(this)}
            configureScene={(route) => {
        if (route.sceneConfig) {
          return route.sceneConfig;
        }
        return NavigationExperimental.Navigator.SceneConfigs.HorizontalSwipeJump;
      }}/>
    );
  }
}