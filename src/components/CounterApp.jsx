import React, { useEffect, useRef, useState } from 'react';
import {  View } from 'react-native';
import CountDownTimer from 'react-native-countdown-timer-hooks';
import SendTextOnTimerEnd from './sendTextOnTimerEnd';



function CounterApp({duration, timerEnd, setTimerEnd,confirmedContactNumber}) {
  

  console.log("DURATION",duration)
  // Timer References
  const refTimer = useRef();
  // For keeping a track on the Timer

  const timerCallbackFunc = (timerFlag) => {
    // Setting timer flag to finished
    console.log(timerFlag,"<<<timerFlag")
    setTimerEnd(timerFlag);
    
    console.log(timerEnd, "<<< timerEnd in the counter app func")
    console.warn(
      'You can alert the user by letting him know that Timer is out.',
    );
  };
  return (
    
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
        /> : <SendTextOnTimerEnd confirmedContactNumber={confirmedContactNumber}/>}
      </View>
      
   
  );
}

export default CounterApp;