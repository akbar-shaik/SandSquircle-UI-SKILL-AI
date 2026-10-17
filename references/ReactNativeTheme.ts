import React, { useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Animated,
  ViewStyle,
  TextStyle,
  Platform,
} from 'react-native';

// ============================================================================
// SandSquircle UI — React Native & Expo Design System Tokens & Components
// Warm Sand & Charcoal Soft-Squircle Daylight Aesthetic
// ============================================================================

export const SandSquircleColors = {
  // Sand Canvas Foundations
  sand50: '#FBF9F6',
  sand100: '#F8F6F2', // Primary Canvas
  sand200: '#F4EFEA', // Card Dividers & Tracks
  sand300: '#EAE2D8', // Subtle Borders
  sand400: '#D8CDC0',

  // Charcoal Ink Palette
  charcoal900: '#111827', // Primary Headings, FAB & Main CTAs
  charcoal800: '#1F2937',
  charcoal700: '#374151',
  charcoal500: '#6B7280', // Subtitles & Inactive Icons
  charcoal400: '#9CA3AF',
  charcoal200: '#E5E7EB',
  charcoal100: '#F3F4F6',

  // Brand Teal Accents
  teal700: '#0F766E',
  teal600: '#0D9488', // Primary Brand Accent & Active Nav
  teal50: '#F0FDFA',

  // Semantic Status Tokens
  emeraldMintText: '#10B981',
  emeraldMintBg: '#ECFDF5',
  emeraldMintBorder: '#D1FAE5',

  crimsonCoralText: '#EF4444',
  crimsonCoralBg: '#FEF2F2',
  crimsonCoralBorder: '#FEE2E2',

  amberSandText: '#F59E0B',
  amberSandBg: '#FFFBEB',
  amberSandBorder: '#FEF3C7',

  hairline: 'rgba(0, 0, 0, 0.04)',
};

export const SandSquircleRadii = {
  modal: 32,
  darkHero: 28,
  card: 26,
  miniCard: 22,
  row: 16,
  chip: 12,
  pill: 9999,
};

export const SandSquircleShadows = {
  card: Platform.select({
    ios: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.04,
      shadowRadius: 15,
    },
    android: {
      elevation: 3,
    },
    default: {},
  }),
  pillDock: Platform.select({
    ios: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.08,
      shadowRadius: 24,
    },
    android: {
      elevation: 6,
    },
    default: {},
  }),
  fab: Platform.select({
    ios: {
      shadowColor: '#111827',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.28,
      shadowRadius: 16,
    },
    android: {
      elevation: 8,
    },
    default: {},
  }),
};

// ----------------------------------------------------------------------------
// Tactile Spring Pressable Component (Scale down to 0.96)
// ----------------------------------------------------------------------------
export interface PressableScaleProps {
  onPress?: () => void;
  children: React.ReactNode;
  style?: ViewStyle;
}

export const PressableScale: React.FC<PressableScaleProps> = ({
  onPress,
  children,
  style,
}) => {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.96,
      useNativeDriver: true,
      dampingRatio: 0.65,
      stiffness: 400,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      dampingRatio: 0.65,
      stiffness: 400,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View style={[{ transform: [{ scale }] }, style]}>
        {children}
      </Animated.View>
    </Pressable>
  );
};

// ----------------------------------------------------------------------------
// Ready-to-Use Core Styles
// ----------------------------------------------------------------------------
export const SandSquircleStyles = StyleSheet.create({
  canvas: {
    flex: 1,
    backgroundColor: SandSquircleColors.sand100,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: SandSquircleRadii.card,
    padding: 20,
    borderWidth: 1,
    borderColor: SandSquircleColors.hairline,
    ...SandSquircleShadows.card,
  },
  darkCard: {
    backgroundColor: SandSquircleColors.charcoal900,
    borderRadius: SandSquircleRadii.darkHero,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  pillDock: {
    position: 'absolute',
    bottom: 24,
    left: 16,
    right: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.96)',
    borderRadius: SandSquircleRadii.pill,
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: SandSquircleColors.hairline,
    ...SandSquircleShadows.pillDock,
  },
  fab: {
    marginTop: -20,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: SandSquircleColors.charcoal900,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: SandSquircleColors.sand100,
    ...SandSquircleShadows.fab,
  },
  buttonPrimary: {
    backgroundColor: SandSquircleColors.charcoal900,
    borderRadius: SandSquircleRadii.row,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPrimaryText: {
    color: SandSquircleColors.sand50,
    fontSize: 14,
    fontWeight: '700',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: SandSquircleRadii.pill,
    borderWidth: 1,
  },
  badgeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 5,
  },
});
