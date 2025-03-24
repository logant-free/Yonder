import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native';

const HomeScreen = ({navigation}) => { 
return(
	<ScreenWrapper className="flex-1">
		<View>
			<Text className=$((colors.heading) font-bold text-3xl shadow-sm)>Yonder</Text>
			
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

