import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SendText from './src/components/SendText';

import { TimeSelector } from './src/components/TimeSelector';

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style='auto' />
			<SendText />
			<TimeSelector />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
