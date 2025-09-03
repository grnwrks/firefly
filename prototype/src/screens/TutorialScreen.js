import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function TutorialScreen({ navigation }) {
  const handleContinue = () => {
    navigation.navigate('Main');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to Firefly! 🦋</Text>
          <Text style={styles.subtitle}>Let's get you started with AR speed dating</Text>
          
          <View style={styles.tutorialSteps}>
            <View style={styles.step}>
              <Text style={styles.stepIcon}>🥽</Text>
              <Text style={styles.stepTitle}>AR Features</Text>
              <Text style={styles.stepDescription}>
                Experience face-to-face conversations through augmented reality
              </Text>
            </View>
            
            <View style={styles.step}>
              <Text style={styles.stepIcon}>⚡</Text>
              <Text style={styles.stepTitle}>Speed Dating</Text>
              <Text style={styles.stepDescription}>
                Join themed events and meet multiple people in short sessions
              </Text>
            </View>
            
            <View style={styles.step}>
              <Text style={styles.stepIcon}>💝</Text>
              <Text style={styles.stepTitle}>Meaningful Connections</Text>
              <Text style={styles.stepDescription}>
                Form genuine relationships based on real conversations
              </Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <Text style={styles.continueButtonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginBottom: 50,
  },
  tutorialSteps: {
    width: '100%',
    marginBottom: 50,
  },
  step: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  stepIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  stepTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  stepDescription: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    lineHeight: 22,
  },
  continueButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
