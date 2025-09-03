import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function EventsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Events</Text>
        <Text style={styles.subtitle}>Discover themed dating events</Text>
        <Text style={styles.placeholder}>🎭 Event discovery interface coming soon...</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  placeholder: {
    fontSize: 18,
    textAlign: 'center',
    color: '#667eea',
  },
});
