import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
// import { ExpoLinksView } from '@expo/samples';
import { MapView } from 'expo';
import Map from '../components/Map';

const region = {
  latitude: 40.7556029,
  longitude: -73.9871253,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
}

export default class LinksScreen extends React.Component {

  state = {
    region: null,
    coffeeShops: []
  }

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <Map
          region={region}
          places={this.state.coffeeShops}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
