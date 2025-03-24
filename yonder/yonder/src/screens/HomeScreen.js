import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native';
import {Link} from 'expo-router';
import{
	ResponsiveLayout,
	ResponsiveText,
	useScreenSize,
	responsiveValue
} from './index.js';

export default function HomeScreen() { 
	const {currentBreakpoint} = useScreenSize();
return(
	<ScreenWrapper className="flex-1">
		<View>
			
		</View>
	</ScreenWrapper>
)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default HomeScreen;

