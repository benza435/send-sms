import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScheduleText from './src/components/ScheduleText';
import Header from './src/components/Header';
import Coordinates from './src/components/Coordinates';

import TimeSelector from './src/components/TimeSelector';

export default function App() {
	return (
		<View style={styles.container}>
			<Header />
			<TimeSelector />
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
