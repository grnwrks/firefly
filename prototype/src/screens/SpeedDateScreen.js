import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function SpeedDateScreen({ navigation }) {
  const [timeRemaining, setTimeRemaining] = useState(105); // 1:45 in seconds
  const [participants, setParticipants] = useState([
    { id: 1, position: { x: 0.5, y: 0.2 }, active: true },
    { id: 2, position: { x: 0.2, y: 0.4 }, active: false },
    { id: 3, position: { x: 0.8, y: 0.4 }, active: false },
    { id: 4, position: { x: 0.1, y: 0.6 }, active: false },
    { id: 5, position: { x: 0.9, y: 0.6 }, active: false },
    { id: 6, position: { x: 0.5, y: 0.8 }, active: false },
    { id: 7, position: { x: 0.3, y: 0.7 }, active: false },
    { id: 8, position: { x: 0.7, y: 0.7 }, active: false },
  ]);
  const [isARActive, setIsARActive] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleBackToMap = () => {
    navigation.goBack();
  };

  const toggleAR = () => {
    setIsARActive(!isARActive);
  };

  const handleParticipantPress = (participantId) => {
    console.log(`Viewing profile of participant ${participantId}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#f8f9fa', '#e9ecef']}
        style={styles.gradient}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackToMap}>
            <Text style={styles.backButtonText}>← Back to map</Text>
          </TouchableOpacity>
          
          <View style={styles.roomInfo}>
            <Text style={styles.roomTitle}>Meetup Room Name</Text>
            <View style={styles.timerContainer}>
              <Text style={styles.timerLabel}>Meetup starts in</Text>
              <Text style={styles.timerText}>{formatTime(timeRemaining)}</Text>
            </View>
          </View>
        </View>

        {/* Virtual Room */}
        <View style={styles.roomContainer}>
          {participants.map((participant) => (
            <TouchableOpacity
              key={participant.id}
              style={[
                styles.participant,
                {
                  left: participant.position.x * (width - 60),
                  top: participant.position.y * 300 + 100,
                },
                participant.active && styles.activeParticipant,
              ]}
              onPress={() => handleParticipantPress(participant.id)}
            >
              <View style={styles.participantIcon}>
                <Text style={styles.participantEmoji}>👤</Text>
              </View>
            </TouchableOpacity>
          ))}

          {/* Connection lines */}
          <View style={styles.connectionLines}>
            {/* Simplified connection visualization */}
            <View style={[styles.line, { top: 150, left: width * 0.3, width: width * 0.4 }]} />
            <View style={[styles.line, { top: 200, left: width * 0.2, width: width * 0.6 }]} />
            <View style={[styles.line, { top: 250, left: width * 0.4, width: width * 0.2 }]} />
          </View>
        </View>

        {/* Event Info */}
        <View style={styles.eventInfo}>
          <View style={styles.eventStats}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>35</Text>
              <Text style={styles.statLabel}>RSVPs</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>6:00PM</Text>
              <Text style={styles.statLabel}>Time</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>✈️</Text>
              <Text style={styles.statLabel}>Travel</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>19/35</Text>
              <Text style={styles.statLabel}>Unique</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>6</Text>
              <Text style={styles.statLabel}>with similar interests</Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionContainer}>
          <TouchableOpacity
            style={[styles.arButton, isARActive && styles.arButtonActive]}
            onPress={toggleAR}
          >
            <Text style={styles.arButtonText}>
              {isARActive ? '🥽 AR ON' : '🥽 Enable AR'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.joinButton}>
            <Text style={styles.joinButtonText}>JOIN</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Controls */}
        <View style={styles.bottomControls}>
          <TouchableOpacity style={styles.controlButton}>
            <Text style={styles.controlIcon}>🚫</Text>
            <Text style={styles.controlLabel}>Block</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.controlButton}>
            <Text style={styles.controlIcon}>❓</Text>
            <Text style={styles.controlLabel}>Icebreaker</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.controlButton}>
            <Text style={styles.controlIcon}>📱</Text>
            <Text style={styles.controlLabel}>Rotate View</Text>
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
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  backButton: {
    marginBottom: 15,
  },
  backButtonText: {
    color: '#667eea',
    fontSize: 16,
  },
  roomInfo: {
    alignItems: 'center',
  },
  roomTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  timerContainer: {
    alignItems: 'center',
  },
  timerLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  timerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#667eea',
  },
  roomContainer: {
    flex: 1,
    position: 'relative',
    marginHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 20,
    marginBottom: 20,
  },
  participant: {
    position: 'absolute',
    width: 40,
    height: 40,
  },
  activeParticipant: {
    transform: [{ scale: 1.2 }],
  },
  participantIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#667eea',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  participantEmoji: {
    fontSize: 20,
    color: 'white',
  },
  connectionLines: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  line: {
    position: 'absolute',
    height: 1,
    backgroundColor: 'rgba(102, 126, 234, 0.3)',
  },
  eventInfo: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  eventStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 10,
    color: '#666',
    textAlign: 'center',
  },
  actionContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 15,
  },
  arButton: {
    flex: 1,
    backgroundColor: 'rgba(102, 126, 234, 0.1)',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#667eea',
  },
  arButtonActive: {
    backgroundColor: '#667eea',
  },
  arButtonText: {
    color: '#667eea',
    fontSize: 16,
    fontWeight: '600',
  },
  joinButton: {
    flex: 1,
    backgroundColor: '#667eea',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
  },
  joinButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  controlButton: {
    alignItems: 'center',
    padding: 10,
  },
  controlIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  controlLabel: {
    fontSize: 12,
    color: '#666',
  },
});
