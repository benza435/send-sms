import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'
import axios from 'axios';
import API_KEY from './API_KEY'

const SendText = () => {
    const [contactNumber, setContactNumber] = useState("")
    const [message, setMessage] = useState("")
    //const [payload, setPayload] = useState([null, null, null])
    const url = "https://api.thesmsworks.co.uk/v1/message/send"

    const apiURL = axios.create({   
        "baseURL": 'https://api.thesmsworks.co.uk/v1/message/send',
        "headers": {
        "Authorization": API_KEY
        }
    }); 
     
    const sendMessage = (contactNumber,message) => {
          axios.post(url, { 
            "sender": "ramblr-dev",
            "destination": contactNumber,
            "content" : message   
        }).then(res => console.log(res))
          .catch((err) => {console.log("it broke here: ",err)})
    }




    return (

        <>
                contact number: <TextInput style={styles.input} value={contactNumber} placeholder="enter number" onChangeText={setContactNumber} keyboardType="numeric"/>
                message:<TextInput style={styles.input} value={message} placeholder="enter message" onChangeText={setMessage}/>

                <Button title="send" 
                defaultValue={contactNumber}
                onPress={()=>sendMessage(contactNumber, message)}
                />
        <View >
            <Text>Contact number in state: {contactNumber}<br/></Text>
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