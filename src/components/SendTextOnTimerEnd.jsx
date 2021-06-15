import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import API_KEY from '../../API_KEY.env';


const SendTextOnTimerEnd = ({timerEnd, confirmedContactNumber}) => {
  
  const [message, setMessage] = useState('sent with a time end');
  const url = 'https://api.thesmsworks.co.uk/v1/message/send';

  console.log(timerEnd, "<<< timerEnd in the send text func");

  useEffect(()=>{
    console.log(timerEnd, "<<< timerEnd in the send text func in useEffect");
    console.log("send text here")
    // axios({
    //   method: 'post',
    //   url: url,
    //   data: {
    //     sender: 'ramblr',
    //     destination: confirmedContactNumber,
    //     content: message,
    //   },
    // }).then(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
     axios({
      method: 'get',
      url: 'https://api.thesmsworks.co.uk/v1/credits/balance',
    }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  },[])

  

  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = API_KEY;
      console.log("config changed");
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  return (
      <View>
        <Text>Message in state: {message}</Text>
      </View>
  );
};


export default SendTextOnTimerEnd;
