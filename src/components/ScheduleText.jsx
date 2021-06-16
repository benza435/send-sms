import React, { useState, useEffect } from 'react';
import { sendMessage, cancelMessage, createMessage } from '../utils/sms-utils';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';
import API_KEY from '../../API_KEY.env.js';

const ScheduleText = ({ endTime, latitude, longitude }) => {
  const [contactNumber, setContactNumber] = useState('');
  const [time, setTime] = useState(0);
  const [messageId, setMessageId] = useState(69420);
  const [confirmContactNumber, setConfirmContactNumber] = useState('');
  const userName = 'Cal';
  const contactName = 'Christian';
  const [confirmedContactNumber, setConfirmedContactNumber] = useState('');

  console.log('endtime from ScheduleText:', endTime);

  // useEffect((endTime)=>{
  //       console.log("endtime before settime",endTime)
  //       setTime(endTime)
  //       console.log("endtime after settime",endTime)
  //     },[endTime])

  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = API_KEY;
      //console.log("SendText >>>>>>> ","config changed");
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  const beginRamble = () => {
    setTimeout(() => {
      console.log('#############################################message send attempt');
      const message = createMessage(userName, contactName, latitude, longitude);
      console.log(message, '<<<<< message');
      console.log(confirmedContactNumber, '<<<<< confirmedcontactnumber!!!');
      console.log(contactNumber, '<<<<< contact number');
      console.log(confirmContactNumber, '<<<< confirmcontactnumber');
      console.log('should send after', endTime, 'seconds <<<');
      sendMessage(confirmContactNumber, message) 
      //<<<< SENDS TEXT TO CORRECT NUMBER
    }, endTime * 1000);
  };

  return (
    <View>
      {/* <Text>'current number in state' {confirmedContactNumber}</Text> */}
      <TextInput
        style={styles.input}
        value={contactNumber}
        placeholder="enter number"
        onChangeText={setContactNumber}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={confirmContactNumber}
        placeholder="Re-enter number"
        onChangeText={setConfirmContactNumber}
        keyboardType="numeric"
      />

      {contactNumber === confirmContactNumber && confirmContactNumber !== '' ? (
        <Button
          onPress={() => {
            setConfirmedContactNumber(confirmContactNumber);
            // setTimerEnd(false);
            console.log('TimeSelector >>>>>> button pressed');
            beginRamble();
          }}
          title="Start timer!"
        />
      ) : null}

      <Text>endTime from TimeSelector is {endTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default ScheduleText;

{
  /* <Text> time: {time}</Text>
            <View>
            <Button title={'schedule'} onPress={()=>{scheduleMessage(contact, endTime)}} />
            </View>
            
            <View>
            <TextInput
            style={styles.input}
        value={messageId}
        placeholder="message id"
        onChangeText={setMessageId}
        keyboardType="numeric"
      />
            <Button title={'cancel'} onPress={()=>{cancelMessage(messageId)}} />
            <Text>{messageId}</Text>
            </View>
            <Text>current duration: {endTime}</Text> */
}
