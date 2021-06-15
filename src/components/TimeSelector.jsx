import React, {useState} from 'react';
import {View, Button, Platform, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {durationInSeconds} from '../utils/time-utils'
import CounterApp from './CounterApp'

export const TimeSelector = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [duration, setDuration] = useState(5);
  //const [timerRunning, setTimerRunning] = useState(false)
  const [timerEnd, setTimerEnd] = useState(false);

  const onChange = (event, selectedDate) => {
    
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    const output = durationInSeconds(event.nativeEvent.timestamp)
    setDuration(output)
    console.log(output, '<< output')
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
      <View>
       
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      <View>
        <Button onPress={() => {setTimerEnd(false); console.log("button pressed");console.log("new duration!:",duration)
        }} title="Start timer!" />
      </View>
      <Text>duration in state: {duration}</Text>
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
      	<CounterApp 
        timerEnd={timerEnd}
        setTimerEnd={setTimerEnd}
        duration={duration}/>
    </View>
  );
};