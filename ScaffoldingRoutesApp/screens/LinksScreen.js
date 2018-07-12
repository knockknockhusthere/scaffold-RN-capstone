import React from 'react';
import { ScrollView, StyleSheet, SafeAreaView } from 'react-native';
// import { ExpoLinksView } from '@expo/samples';
import Map from '../components/Map';

const region = {
  latitude: 37.321996988,
  longitude: -122.0325472123455,
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
    paddingTop: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
   justifyContent: 'center',
  },
});
