'use strict'
import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
 
  right:{
    alignItems: 'flex-end',
  },
  left: {
    alignItems: 'flex-start',
  },
  center: {
    alignItems: 'center',
  },



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
    height: '100%',
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

  //Screen Register

  headReg: {
    marginTop: 45,
    marginBottom: 50,
    textAlign: 'center',
    lineHeight: 80,    
  },
  rectangle: {
    backgroundColor: 'rgb(240,128,60)',
    opacity: 0.74,
    position: 'absolute',
    height: 68,
    width: 298,
    top: 90,
    left: 0,
  },
  inputWrap: {
    width: Dimensions.get('screen').width - 60,
    alignItems: 'center',
    zIndex: 2

  },
  inputName:{
    borderWidth: 4,
    borderColor: 'rgb(169, 203, 183)',
    borderStyle: 'dotted',
    borderRadius: 1,
    fontSize: 35,
    fontFamily: "raleway-regular",
    color: 'white',
    padding: 15,
    zIndex: 100
  },
  felix2: {
    position: 'relative',
    bottom: 190,
    left: 0,
    width: '56%',
    resizeMode: 'contain'
  },
  headingReg: {
    fontSize: 85,
    marginRight: 15,
    textAlign: 'center'
  },  

  // Screen Home

  headHome: {
    fontSize: 48,
    marginBottom: 15,
  },
  orange: {
    color: '#F0803C',
  },
  subHeading: {
    color: 'white',
    fontFamily: 'raleway-regular',
    fontSize: 33,
  },
  subHeadWrap: {
    width: Dimensions.get('screen').width - 60,
    marginTop: 5,
  },
  margTop: {
    marginTop: 50
  },
  subjectWrapLeft: {
    width: Dimensions.get('screen').width,
    height: 90,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.82)',
    borderWidth: 5,
    borderColor: '#F0803C',
    borderStyle: 'dotted',
    borderRadius: 20,
    paddingRight: 50,
    marginBottom: 25,
    marginRight: 110,
    elevation: 8,  
  },  
  subjectWrapRight: {
    width: Dimensions.get('screen').width,
    height: 90,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.82)',
    borderWidth: 5,
    borderColor: '#F0803C',
    borderStyle: 'dotted',
    borderRadius: 80,
    paddingLeft: 50,
    marginBottom: 25,
    marginLeft: 110,
    elevation: 8,  
  },
  subjectText: {
    textAlign: 'center',
    color: '#225560',
    fontFamily: 'raleway-medium',
    fontSize: 28
  },

});