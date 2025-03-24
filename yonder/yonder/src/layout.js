import {Stack} from 'expo-router';

export default function RootLayout() {
	return(
		<Stack>
			<Stack.Screen 
				name = "index"
				options = {{
					title: 'Yonder',
					headerShown: false
				}}
			/>
			<Stack.Screen
				name= "login"
				options = {{
					title: 'Login';
					presentation:  'modal'
				}}
			/>
		<Stack>
	)
}