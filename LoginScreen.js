/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

import {SafeAreaView} from 'react-navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function LoginScreen(props) {
  const [name, setName] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.title}>Please enter your name:</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Chat', {
              passedName: name,
            });
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  input: {
    width: 200,
    height: 50,
    backgroundColor: '#008080',
    borderRadius: 25,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: '#008080',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textTransform: 'uppercase',
  },
});
