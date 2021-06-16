import React, {useState, useEffect} from 'react';
import {sendMessage, cancelMessage, createMessage} from '../utils/sms-utils';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import axios from 'axios';
import API_KEY from "../../API_KEY.env.js"



const ScheduleText = ({endTime, latitude, longitude}) => {
  
    const [contact, setContact] = useState('07590365354')
    const [time, setTime] = useState(0)
    const [messageId, setMessageId] = useState(69420)
    const userName = "Cal"
    const contactName = "Christian"



console.log("endtime from ScheduleText:", endTime)
    
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

      setTimeout(() => { 
        console.log( )
        console.log('message send attempt');
        const message = createMessage(userName, contactName, latitude, longitude)
        console.log(message)
        console.log("should send after",endTime,"but hardcoded for 10 seconds")
        //sendMessage(contact, message)
    }, 5000); 



      
    return (
        <View>

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












            {/* <Text> time: {time}</Text>
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
            <Text>current duration: {endTime}</Text> */}