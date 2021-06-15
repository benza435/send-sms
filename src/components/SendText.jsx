import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import API_KEY from '../../API_KEY.env';

const SendText = () => {
  const [contactNumber, setContactNumber] = useState('');
  const [message, setMessage] = useState('');

  const url = 'https://api.thesmsworks.co.uk/v1/message/send';

  // axios.interceptors.request.use(
  //   (config) => {
  //     config.headers.authorization = API_KEY;

  //     return config;
  //   },
  //   (err) => {
  //     return Promise.reject(err);
  //   }
  // );

  const sendMessage = (contactNumber, message) => {
    axios({
      method: 'post',
      url: url,
      data: {
        sender: 'ramblr',
        destination: contactNumber,
        content: message,
      },
    }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <>
      <TextInput
        style={styles.input}
        value={contactNumber}
        placeholder="enter number"
        onChangeText={setContactNumber}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={message}
        placeholder="enter message"
        onChangeText={setMessage}
      />
      <Button
        title="send"
        defaultValue={contactNumber}
        onPress={() => sendMessage(contactNumber, message)}
      />
      <View>
        <Text>Contact number in state: {contactNumber}</Text>
        <Text>Message in state: {message}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default SendText;
