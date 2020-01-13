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
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.button}>
          <Button
            title="Generate Random Number"
            color="#f194ff"
            onPress={() => this.generateRandomNumber()}
          />
          </View>
          <Text>{(rand) ? rand : ''}</Text>
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
  }
});