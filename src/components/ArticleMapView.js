import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BackButton from './BackButton';

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
  MenuHeaderText: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  map: {
    position: 'absolute',
    top: 51,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

class ArticleMapView extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navigatorContainer}>
          <BackButton onPress={this.props.onBack} />
          <Text style={styles.MenuHeaderText}>Map</Text>
        </View>
        {this.renderMap()}
      </View>
    );
  }

  renderMap() {
    if (!this.props.article) return null;
    
    const { article } = this.props;
    const { latitude, longitude } = article.location;
    
    const region = {
      latitude,
      longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }

    const latlng = {
      latitude,
      longitude,
    };

    return (
      <MapView 
        style={styles.map}
        region={region}>
        <Marker
          coordinate={{
            latitude,
            longitude,
          }}
          title={article.title}
          description={article.description}/>        
      </MapView>
    );
  }
}

export default ArticleMapView;
