import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FetchChuckNorrisJoke} from './FetchChuckNorrisJoke';

const App = () => {
  const [jokes, setjokes] = useState();
  const [loading, setloading] = useState(false);

  async function getSomeJokes() {
    setloading(true);
    try {
      const res = await FetchChuckNorrisJoke();
      console.log(res);
      setjokes(res.value);
    } catch (err) {
      console.log(err);
    } finally {
      setloading(false);
    }
  }

  const onPress = () => {
    getSomeJokes();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chuck Norris Facts.</Text>
      <View style={styles.text}>
        {loading ? (
          <View style={styles.loading}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <Text style={styles.text}>{jokes}</Text>
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>New Joke</Text>
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={require('./image/chuck-norris.jpeg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
    marginTop: 100,
  },
  image: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 370,
    height: 300,
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
  },
  text: {
    margin: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 2,
  },
  loading: {
    padding: 20,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
