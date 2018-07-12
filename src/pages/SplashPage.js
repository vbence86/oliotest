import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Articles from '../models/Articles';

const splashImage = require('../../resources/olio.png');

const styles = StyleSheet.create({
  splashImage: {
    marginBottom: 30,
    width: 256,
    height: 256,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

class SplashPage extends React.Component {

  constructor() {
    super();
  }

  componentDidMount() {
    // loads the articles async, but waits at most 2 seconds even though
    // the atricles are fetched successfully in order to make the splash
    // screen also visible for a little while
    Promise.all([
      Articles.singleton().load(),
      wait(2000)
    ])
      .then(this.goToArticlesPage.bind(this));
  }

  goToArticlesPage(props) {
    this.props.navigator.push({
      id: 'ArticlesPage',
      name: 'Articles',
      passProps: {
        name: props
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={splashImage} style={styles.splashImage}/>
      </View>
    );
  }

}

export default SplashPage;