'use strict'
import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#225560',
    paddingTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
  },
  wrap: {
    height: Dimensions.get('screen').height,
  },
  heading: {
    color: 'white',
    fontSize: 60,
    fontFamily: "raleway-extrabold",
    zIndex: 99
  },
  dif: {
    color: '#F0803C',
    fontSize: 65
  },
  text: {
    color: 'white',
    fontSize: 50,
    fontFamily: 'raleway-regular',
    marginTop: 30,
    zIndex: 99,
  },
  rect: {
    position: 'absolute',
    top: 263,
    width: '95%',
    resizeMode: 'contain'
  },
  imgWrap: {
   flex: 1,
   justifyContent: 'flex-end',
   alignItems: 'flex-start',
  },
  felix:{
    height: 400,
    width: 300,
    resizeMode: 'contain'
  },
  letsGo: {
    position: 'absolute',
    bottom: 230,
    right: 0,
    zIndex: 100
  },
  circle: {
    position: 'absolute',
    bottom: 170,
    right: 20,
    width: 90,
    resizeMode: 'contain',
    zIndex: 1
  },

  
});