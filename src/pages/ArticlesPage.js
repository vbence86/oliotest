import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ArticlesView from '../components/ArticlesView';
import Articles from '../models/Articles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class ArticlesPage extends React.Component {

  constructor(props) {
    super(props);
    this.onBack = this.onBack.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.articles = Articles.singleton();
  }

  componentDidMount() {
    this.setArticles();
  }

  setArticles() {
    this.setState({
      articles: this.articles.getAll()
    });
  }  

  onSelect(data, idx) {
    data.seen = true;
    this.navigateToMapPage(data, idx);
  }

  navigateToMapPage(data, index) {
    this.props.navigator.push({
      id: 'MapPage',
      name: 'MapPage',
      data,
      index
    });
  }

  onBack() {
    this.props.navigator.pop({
      closeMenu: true
    });
  }  

  render() {
    return (
      <View style={styles.container}>
        <ArticlesView {...this.state} 
          onSelect={this.onSelect}
          onBack={this.onBack}
        />
      </View>
    );
  }
}

export default ArticlesPage;
