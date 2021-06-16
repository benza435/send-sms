import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
 import axios from 'axios';
// import API_KEY from '../../API_KEY.env';

import API from '../../api'


const SendTextOnTimerEnd = async ({timerEnd, confirmedContactNumber}) => {
  
  const [message, setMessage] = useState('sent with a time end');
  
  const getMoviesFromApi = () => {
    return fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => {
        return json.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const baseApi = axios.create({
    baseURL: 'https://rest.clicksend.com/v3/sms/send',
    auth:{username:'thegitstashes@gmail.com',password:API}
  });

  const smsApi = new api.SMSApi("thegitstashes@gmail.com", API);
  
  const smsMessage = new api.SmsMessage();

  console.log(baseApi,smsApi,smsMessage)
  
  smsMessage.source = "ramblr";
  smsMessage.to = "+61411111111";
  smsMessage.body = "test message";
  
  const smsCollection = new api.SmsMessageCollection();
  
  smsCollection.messages = [smsMessage];
  
  smsApi.smsSendPost(smsCollection).then((response) => {
    console.log(response.body);
  }).catch((err)=>{
    console.error(err.body);
  });

  return (
      <View>
        <Text>Message in state: {message}</Text>
      </View>
  );
};


export default SendTextOnTimerEnd;
