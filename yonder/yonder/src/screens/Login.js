import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Link} from 'expo-router';

export default function Login() {
	return(
		<View style = {{ 
			flex: 1, 
			justifyContent: 'center', 
			alignItems: 'center'
		}}>
		<Text> Click to Login </Text>
		<Link href = "/" style = {{ color: 'green', marginTop: 20 }} > 
		</Link>
		</View>
	);
}
