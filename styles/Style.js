'use strict'
import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default StyleSheet.create({
 
  right:{
    display: 'flex',
    alignItems: 'flex-end',
  },
  left: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
  },
  orange: {
    color: '#F0803C',
  },




  wrap: {
    height: hp('100%'),
    width: wp('100%'),
    display: 'flex',
    backgroundColor: '#225560',
    paddingTop: hp('9%'),
    paddingLeft: wp('8%'),
    paddingRight: wp('8%'),
  },
  heading: {
    color: 'white',
    fontSize: hp('7.5%'),
    fontFamily: "raleway-extrabold",
    zIndex: 99
  },
  dif: {
    color: '#F0803C',
    fontSize: hp('8%')
  },
  text: {
    color: 'white',
    fontSize: hp('6%'),
    fontFamily: 'raleway-regular',
    marginTop: hp('4%'),
    zIndex: 99,
  },
  rectangleWelcome: {
    backgroundColor: 'rgb(240,128,60)',
    opacity: 0.74,
    height: hp('3%'),
    width: wp('71%'),
    marginTop: hp('-3.5%')
  },
  felix:{
    position: 'absolute',
    bottom: hp('-10.3%'),
    left: hp('4%'),
    height: hp('60%'),
    width: wp('60%'),
    resizeMode: 'contain',
  },
  letsGo: {
    display: 'flex',
    alignItems: 'flex-end',
    marginTop: hp('14%'),
    paddingRight: wp('4%'),
  },
  letsGoHeading:{
    textAlign: 'center',
    fontSize: hp('6.8%'),
  },
  circleWelcome: {
    backgroundColor: 'rgb(240,128,60)',
    opacity: 0.74,
    width: wp('17%'),
    height: wp('17%'),
    marginTop: hp('-10%'),
    marginRight: wp('6.5%'),
    borderRadius: 50,
  },

  //Screen Register

  headReg: {
    marginTop: hp('9%'),
    marginBottom: hp('5%'),
    textAlign: 'center',
  },
  rectangle: {
    backgroundColor: 'rgb(240,128,60)',
    opacity: 0.74,
    height: hp('7.5%'),
    width: wp('66%'),
    marginTop: hp('-16.5%'),
  },
  inputWrap: {
    width: wp('100%') - wp('16%'),
    alignItems: 'center',
    marginTop: hp('10%'),
    zIndex: 2
  },
  inputName:{
    borderWidth: 4,
    borderColor: 'rgb(169, 203, 183)',
    borderStyle: 'dotted',
    borderRadius: 1,
    fontSize: hp('4%'),
    fontFamily: "raleway-regular",
    color: 'white',
    padding: 15,
    zIndex: 100
  },
  felix2: {
    position: 'absolute',
    bottom: hp('0%'),
    left: hp('4%'),
    height: hp('40%'),
    width: wp('40%'),
    resizeMode: 'contain'
  },
  go: {
    display: 'flex',
    alignItems: 'flex-end',
    marginTop: hp('14%'),
    paddingRight: wp('6%'),
    width: wp('100%') - wp('16%'),
  },
  goHeading: {
    fontSize: hp('12%'),
    textAlign: 'center'
  },  
  specialRot:{
    transform: [{ rotate: '10deg'}],
    fontSize: hp('12.6%'),
    marginTop: hp('-12%'),
    marginRight: -2,
    zIndex: 0,
  },
  // Screen Home - COUNTINUE HERE!

  wrapHome: {
    paddingRight: wp('1.5%'),
    paddingLeft: wp('1.5%'),
    paddingTop: hp('7%')
  },
  headHome: {
    fontSize: hp('6.8%'),
    marginBottom: hp('1%'),
  },
  subHeading: {
    color: 'white',
    fontFamily: 'raleway-regular',
    fontSize: hp('4.5%'),
  },
  subHeadWrap: {
    width: wp('100%') - wp('16%'),
    marginTop: hp('1%'),
  },
  margBot: {
    marginBottom: hp('6%')
  },
  scrollWrap: {
    width: wp('100%')
  },
  subjectWrap: {
    width: wp('90%'),
    height: hp('12%'),
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.82)',
    borderWidth: 5,
    borderColor: '#F0803C',
    borderStyle: 'dotted',
    borderRadius: 0,
    marginBottom: hp('3.5%'),
    elevation: 8,  
  },
  subjectWrap1: {
    borderRadius: 20,
  },  
  subjectWrap2: {
    borderRadius: 80,
  },
  subjectText: {
    textAlign: 'center',
    color: '#225560',
    fontFamily: 'raleway-medium',
    fontSize: hp('4%')
  },

  // Subject

  wrapSubject: {
    paddingTop: hp('3.5%'),
    paddingBottom: hp('3%'),

  },
  headSub: {
    fontSize: hp('6%'),
    textAlign: 'center'
  },
  rectangleSub: {
    width: wp('90%'),
    height: hp('3%'),
    backgroundColor: '#F0803CAA',
    marginTop: hp('-3%'),
    marginBottom: hp('4.5%'),
  },
  wrapSub: {
    backgroundColor: 'rgba(42,157,143,0.48)',
    borderRadius: 20,
    width: wp('95%'),
    elevation: 4
  },
  scrollText: {
    padding: hp('2.5%'),
  },
  textSub: {
    fontFamily: 'raleway-light',
    fontSize: hp('3%'),
    color: 'white',
  },
  curricHeading: {
    fontSize: hp('4%'),
    fontFamily: 'raleway-medium',
    color: 'rgba(255,255,255,0.9)',
  },
  testBtn: {
    marginTop: hp('2%'),
    paddingTop: hp('1.5%'),
    paddingBottom: hp('1.5%'),
    // paddingLeft: hp('1%'),
    // paddingRight: hp('1%'),
    backgroundColor: '#EA8A64',
    borderRadius: 50,
    elevation: 2,  
  },
  titleTestBtn: {
    fontFamily: 'raleway-medium',
    fontSize: hp('4%'),
    color: 'white',
    textAlign: 'center'
  },
  pagerView:{
    width: wp('95%'),
    // height: hp('68%'),
    height: hp('55%'),
  },
  questView: {
    paddingLeft: hp('2.5%'),
    paddingRight: hp('2.5%'),
  },
  testTitle: {
    fontSize: hp('6%'),
    color: 'white',
    marginBottom: hp('3%'),
    fontFamily: 'raleway-extrabold', 
  },
  testQuestNum: {
    fontFamily: 'raleway-bold',
    fontSize: hp('6%'),
  },
  testQuest: {
    fontSize: hp('5%'),
    marginBottom: hp('3%'),
    fontFamily: 'raleway-medium',
    color: 'white' 
  },
  testAnswear:{
    fontSize: hp('3.8%'),
    fontFamily: 'raleway-regular', 
    color: 'white',
  },
  testQuestBox: {
    paddingTop: hp('1.5%'),
    paddingBottom: hp('1.5%'),
    width: wp('65%'),
    backgroundColor: 'rgba(42,157,143,0.4)',
    borderWidth: 2,
    borderColor: '#F0803C',
    borderStyle: 'solid',
    borderRadius: 30,
    marginBottom: hp('3%'),
    elevation: 7,  
  },
  testQuestBoxWrong: {
    paddingTop: hp('1.5%'),
    paddingBottom: hp('1.5%'),
    width: wp('65%'),
    backgroundColor: 'rgba(42,157,143,0.4)',
    borderWidth: 2,
    borderColor: 'red',
    borderStyle: 'solid',
    borderRadius: 30,
    marginBottom: hp('3%'),
    elevation: 7,  

  },
  testBackBtn: {
    marginTop: hp('4%'),
    paddingTop: hp('1.5%'),
    paddingBottom: hp('1.5%'),
    paddingLeft: hp('1.5%'),
    paddingRight: hp('1.5%'),
    backgroundColor: '#EA8A64',
    borderRadius: 50,
    elevation: 2,  
  },
  testBackBtnTitle: {
    fontFamily: 'raleway-regular',
    fontSize: hp('4%'),
    color: 'white',
    textAlign: 'center'
  }
 });