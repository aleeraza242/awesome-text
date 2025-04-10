import React from 'react';
import { Text as RNText, TextProps, StyleSheet } from 'react-native';

export interface AwesomeTextProps extends TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  color?: string;
  weight?: 'normal' | 'bold' | 'light';
  align?: 'left' | 'center' | 'right';
  customStyle?: object;
}

const AwesomeText: React.FC<AwesomeTextProps> = ({
  variant = 'body',
  color = '#000000',
  weight = 'normal',
  align = 'left',
  customStyle,
  children,
  ...props
}) => {
  const getVariantStyle = () => {
    switch (variant) {
      case 'h1':
        return styles.h1;
      case 'h2':
        return styles.h2;
      case 'h3':
        return styles.h3;
      case 'caption':
        return styles.caption;
      default:
        return styles.body;
    }
  };

  const getWeightStyle = () => {
    switch (weight) {
      case 'bold':
        return styles.bold;
      case 'light':
        return styles.light;
      default:
        return styles.normal;
    }
  };

  return (
    <RNText
      style={[
        getVariantStyle(),
        getWeightStyle(),
        { color, textAlign: align },
        customStyle,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 32,
    lineHeight: 40,
  },
  h2: {
    fontSize: 24,
    lineHeight: 32,
  },
  h3: {
    fontSize: 20,
    lineHeight: 28,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
  normal: {
    fontWeight: 'normal',
  },
  light: {
    fontWeight: '300',
  },
});

export default AwesomeText; 