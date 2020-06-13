import React from 'react';

import {Image, StyleSheet, View} from 'react-native';

const Cover = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Manhaj-Logo.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#06623B',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'center',
  },
});

export default Cover;
