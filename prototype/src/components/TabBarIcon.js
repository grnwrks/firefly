import React from 'react';
import { Text } from 'react-native';

const iconMap = {
  calendar: '📅',
  video: '🎥',
  heart: '💖',
  user: '👤',
  home: '🏠',
  search: '🔍',
  settings: '⚙️',
  chat: '💬',
  location: '📍',
};

export default function TabBarIcon({ name, color, size }) {
  return (
    <Text style={{ fontSize: size, color: color }}>
      {iconMap[name] || '❓'}
    </Text>
  );
}
