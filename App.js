
let CocoapodExample = require('react-native').NativeModules.CocoapodExample
let {random} = CocoapodExample

import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';

export default class App extends React.Component {

  state = {
    rand: 0
  }

  generateRandomNumber = (num = 1024) => {
    random(num, (err, res) => {
      if (err) this.setState("error")
      else this.setState({rand: res})
    })
  }

  componentDidMount() {
    this.generateRandomNumber()
  }

  render() {
    let {rand} = this.state;
    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.button}>
          <Button
            title="Generate Random Number"
            color="#f194ff"
            onPress={() => this.generateRandomNumber()}
          />
          </View>
          <Text style={styles.text}>{(rand) ? rand : ''}</Text>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderColor: '#f194ff', 
    borderWidth: 1, 
    borderRadius: 5, 
    marginVertical: 15
  },
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#1c1c1e'
  },
  text: {
    color: '#fff'
  }
});