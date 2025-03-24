import { createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from ' ../screens/HomeScreen';
import Account from ' ../screens/Account';
import Login from ' ../screens/Login';
import Signup from ' ../screens/Signup';
import Map from ' ../screens/Map';

const Stack = createStackNavigator();

const AppNavigator = () => { 
	return(
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name= "Home" component= {HomeScreen}/>
				<Stack.Screen name= "Login" component= {Login}/>
				<Stack.Screen name= "Signup" component= {Signup}/>
				<Stack.Screen name= "Map" component= {Map}/>
				<Stack.Screen name= "Account" component= {Account}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;