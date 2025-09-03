import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function LoginScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleFacebookLogin = async () => {
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Tutorial');
    }, 2000);
  };

  const handleAlternativeLogin = () => {
    // Navigate to alternative login options
    console.log('Alternative login options');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.gradient}
      >
        {/* Firefly Logo and Branding */}
        <View style={styles.logoContainer}>
          <View style={styles.logoIcon}>
            <Text style={styles.logoEmoji}>🦋</Text>
          </View>
          <Text style={styles.logoText}>FIREFLY</Text>
        </View>

        {/* Tagline */}
        <View style={styles.taglineContainer}>
          <Text style={styles.tagline}>Look on the Bright Side</Text>
        </View>

        {/* Login Actions */}
        <View style={styles.loginContainer}>
          <TouchableOpacity
            style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
            onPress={handleFacebookLogin}
            disabled={isLoading}
          >
            <View style={styles.loginButtonContent}>
              <Text style={styles.facebookIcon}>f</Text>
              <Text style={styles.loginButtonText}>
                {isLoading ? 'Connecting...' : 'Continue with Facebook'}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.alternativeButton}
            onPress={handleAlternativeLogin}
          >
            <Text style={styles.alternativeButtonText}>Use another option</Text>
          </TouchableOpacity>
        </View>

        {/* Terms and Privacy */}
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            By signing up or logging in, you agree to our{' '}
            <Text style={styles.termsLink}>Terms and Conditions</Text> and{' '}
            <Text style={styles.termsLink}>Privacy Policy</Text>
          </Text>
        </View>

        {/* Floating particles effect */}
        <View style={styles.particlesContainer}>
          {[...Array(8)].map((_, index) => (
            <View
              key={index}
              style={[
                styles.particle,
                {
                  left: Math.random() * width,
                  top: Math.random() * height,
                  animationDelay: `${Math.random() * 3}s`,
                },
              ]}
            />
          ))}
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoEmoji: {
    fontSize: 40,
  },
  logoText: {
    fontSize: 28,
    fontWeight: '300',
    color: 'white',
    letterSpacing: 3,
  },
  taglineContainer: {
    marginBottom: 60,
  },
  tagline: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.9)',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  loginContainer: {
    width: '100%',
    marginBottom: 40,
  },
  loginButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  loginButtonDisabled: {
    opacity: 0.6,
  },
  loginButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebookIcon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#4267B2',
    width: 30,
    height: 30,
    textAlign: 'center',
    lineHeight: 30,
    borderRadius: 15,
    marginRight: 15,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  alternativeButton: {
    paddingVertical: 15,
  },
  alternativeButtonText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  termsContainer: {
    position: 'absolute',
    bottom: 50,
    paddingHorizontal: 40,
  },
  termsText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
  },
  termsLink: {
    textDecorationLine: 'underline',
    color: 'rgba(255, 255, 255, 0.9)',
  },
  particlesContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
  particle: {
    position: 'absolute',
    width: 4,
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 2,
  },
});
