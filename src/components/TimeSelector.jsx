import React, {useState, useEffect} from 'react';
import {View, Button, Platform, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {durationInSeconds} from '../utils/time-utils'
import Coordinates from './Coordinates';

import ScheduleText from './ScheduleText'
const moment = require ('moment')

const TimeSelector = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  //const [timerEnd, setTimerEnd] = useState(false);
  const [endTime, setEndTime] = useState("");

  // useEffect(()=>{
  //   setTimerEnd(true)
  // },[duration])


  const onChange = (event, selectedDate) => {
    
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    //console.log("the date and time from time selector:",event.nativeEvent.timestamp)
    const unformattedTimestamp = event.nativeEvent.timestamp

    // const formattedDate = moment(unformattedTimestamp).format('MMMM D, YYYY')
    // const formattedTime = moment(unformattedTimestamp).format()
    
    // // I apologise for this.  Best way we could find to pass the date through
    // const a = formattedTime.toString().split('T')
    // const b = a[1].slice(0,8)
    // const selectedDateTime = formattedDate.concat(" ",b)
    // setEndTime(selectedDateTime)
    const duration = durationInSeconds(unformattedTimestamp)
    setEndTime(duration)
    console.log("the time from timeSelector:",endTime)

  
    
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
   showMode('time');
  };

  return (
    <View>
 
       
        <Button onPress={showDatepicker} title="Show date picker!" />
        <Button onPress={showTimepicker} title="Show time picker!" />
   
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      
      
      <Coordinates endTime={endTime}/>
      
       
    </View>
  );
};

export default TimeSelector;