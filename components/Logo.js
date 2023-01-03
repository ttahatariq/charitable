import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Images } from '../config';

export const Logo = ({ uri }) => {
  return <Image source={uri} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    marginTop:80,
    width: 150,
    height: 150
  }
});
