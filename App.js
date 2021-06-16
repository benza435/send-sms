import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { TimeSelector } from './src/components/TimeSelector';
export default function App() {
	
	return (
		<View style={styles.container}>
			<StatusBar style='auto' />
			<TimeSelector  />
			
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	
});
