import React from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';

export default function ActionCard() {
  const openWebsite = (websiteLink: string) => {
    Linking.openURL(websiteLink);
  };

  return (
    <View>
      <Text></Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => openWebsite('https://www.google.com')}>
          <Text style={styles.buttonText}>Click for more</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => openWebsite('https://www.example.com')}>
          <Text style={styles.buttonText}>Read More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap:10
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
