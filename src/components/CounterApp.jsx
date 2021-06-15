import React, { useEffect, useRef, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import CountDownTimer from 'react-native-countdown-timer-hooks';


function CounterApp({duration, timerEnd, setTimerEnd}) {


  console.log("DURATION",duration)
  // Timer References
  const refTimer = useRef();
  // For keeping a track on the Timer

  const timerCallbackFunc = (timerFlag) => {
    // Setting timer flag to finished
    setTimerEnd(timerFlag);
    console.warn(
      'You can alert the user by letting him know that Timer is out.',
    );
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{ display: timerEnd ? 'none' : 'flex' }}>
        
       {timerEnd === false ? 
        
        <CountDownTimer 
          ref={refTimer}
          timestamp={duration}
          timerCallback={timerCallbackFunc}
          containerStyle={{
            height: 56,
            width: 120,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 35,
            backgroundColor: '#2196f3',
          }}
          textStyle={{
            fontSize: 25,
            color: '#FFFFFF',
            fontWeight: '500',
            letterSpacing: 0.25,
          }}
        /> : null}




      </View>
      <TouchableOpacity
        style={{
          display: timerEnd ? 'flex' : 'none',
          height: 56,
          width: 120,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 35,
          backgroundColor: '#512da8',
        }}
        onPress={() => {
          setTimerEnd(false);
          refTimer.current.resetTimer();
        }}>
        <Text style={{ fontSize: 18, color: '#FFFFFF', fontWeight: 'bold' }}>
          Resend
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default CounterApp;