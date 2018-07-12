import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import StarRating from 'react-native-star-rating';

const styles = StyleSheet.create({
  navigatorContainer: {
    position: 'relative',
    width: '100%',
    height: 50,
    backgroundColor: '#f2f2f2', 
  },
  container: {
    width: '100%',
    height: '100%',
    padding: 0
  },
  list: {
    backgroundColor: '#fff'
  },
  MenuHeaderText: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ab3a94'
  },
  titleTextSeen: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitleContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 10,
  },
  subtitleView: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingTop: 5,
  },
  subtitleText: {
    fontSize: 12,
    color: '#666',
  },
  starContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  ratingText: {
    paddingLeft: 5,
    fontSize: 9,
    color: '#aaa',
  },
  image: {
    width: 100,
    height: 100,
  }  
});

class ArticlesView extends React.Component {

  renderRow(data, idx) {
    return (
      <ListItem
        containerStyle={!data.seen ? {backgroundColor: '#F5F5FA'} : null}
        key={idx}
        subtitle={
          <View style={styles.subtitleContainer}>
            <Image style={styles.image} source={{uri: data.images[0].files.small}} />
            <View style={styles.subtitleView}>
              <Text style={data.seen ? styles.titleTextSeen : styles.titleText}>{data.title}</Text>
              <Text style={styles.subtitleText}>{data.description}</Text>
              <View style={styles.starContainer}>
                <StarRating
                  disabled={true}
                  emptyStar={'star-o'}
                  fullStar={'star'}
                  halfStar={'star-half-empty'}
                  iconSet={'FontAwesome'}
                  maxStars={5}
                  rating={Math.floor(data.user.rating.rating / 2)}
                  starColor={'#ffc200'}
                  starSize={10}
                />
                <Text style={styles.ratingText}>({data.user.rating.number})</Text>
              </View>
            </View>
          </View>          
        }
        onPress={() => {
          this.props.onSelect(data, idx);
        }}
      />
    )
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.navigatorContainer}>
          <Text style={styles.MenuHeaderText}>Articles</Text>
        </View>
        {this.renderArticlesList()}
      </View>
    );
  }

  renderArticlesList() {
    if (!this.props.articles) return null;
    return (
      <ScrollView contentContainerStyle={styles.list}>
        {this.props.articles.map((data, idx) => this.renderRow(data, idx))}
      </ScrollView>
    );
  }

}

export default ArticlesView;
