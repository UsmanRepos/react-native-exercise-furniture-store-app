import { } from 'react-native';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home, ItemDetails } from '../screens'

const stack = createNativeStackNavigator();

const stackScreen = () => (
	<stack.Navigator
		initialRouteName='home'
		screenOptions={{
			headerShown: false,
		}}
	>
		<stack.Screen
			name="home"
			component={Home}
		/>
		<stack.Screen
			name="itemDetails"
			component={ItemDetails}
		/>
	</stack.Navigator>
)

const theme = {
	...DefaultTheme,
	colors:{
		...DefaultTheme.colors,
		border:"transparent",
	},

};
const Index = () => {
	return (
		<NavigationContainer theme={theme}>
			{stackScreen()}
		</NavigationContainer>
	);
};

export default Index;

