import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ArticleMapView from '../components/ArticleMapView';
import Articles from '../models/Articles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class MapPage extends React.Component {

  constructor(props) {
    super(props);
    this.onBack = this.onBack.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(data, idx) {
    //this.navigateToGiftDetailsPage(data, idx)
  }

  onBack() {
    this.props.navigator.pop({
      closeMenu: true
    });
  }  

  render() {
    return (
      <View style={styles.container}>
        <ArticleMapView {...this.props} 
          onSelect={this.onSelect}
          onBack={this.onBack}
        />
      </View>
    );
  }
}

export default MapPage;
