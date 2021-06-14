import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'
import axios from 'axios';

const SendText = () => {
    const [contactNumber, setContactNumber] = useState(123)
    const [message, setMessage] = useState("hello")
    //const [payload, setPayload] = useState([null, null, null])

     
    const sendMessage = (contactNumber,message) => {
        // contsruct http request
        // send it
        // console.log the response
     

          const token = 'insertkey'
          const url = 'https://api.thesmsworks.co.uk/v1/message/send'

          axios.post(url, {
            "sender": "ramblr-dev",
            "destination": contactNumber,
            "content" : message
          }, {
            "headers": {
            'Content-Type' : 'application/json',
            'Authorization': token,
            'Access-Control-Allow-Headers': 'Authorization',
            'Access-Control-Allow-Origin' : '*',   
            }
          }).then(res => console.log(res))
          .catch(err => console.log("it broke here: ",err))


    }

    return (
        <View>
            <View>
                contact number: <TextInput style={styles.input} value={contactNumber} placeholder="enter number" onChangeText={setContactNumber} keyboardType="numeric"/>
                message:<TextInput style={styles.input} value={message} placeholder="enter message" onChangeText={setMessage}/>

                <Button title="send" 
                defaultValue={contactNumber}
                onPress={()=>sendMessage(contactNumber, message)}
                />  
                <View>
                    <Text>Contact number in state: {contactNumber}</Text>
                </View>
                <View>
                    <Text>Message in state: {message}</Text>
                </View>  
            </View>
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

export default SendText;