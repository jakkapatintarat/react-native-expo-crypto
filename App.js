import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import * as Crypto from 'expo-crypto';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [hashedText, setHashedText] = useState('');

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const handleHashButton = async () => {
    const digest = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, inputText);
    setHashedText(digest);
  }

  return (
    <View style={styles.container}>
      <Text>Crypto Example</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter text to hash"
        onChangeText={handleInputChange}
        value={inputText}
      />

      <Button title='Hash' onPress={handleHashButton}/>
      
      <Text style={styles.hashed}>Hashed Text: {hashedText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  hashed: {
    marginVertical: 10,
    paddingHorizontal: 10,
  }
});
