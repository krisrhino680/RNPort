import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import ResumePage from '../pages/ResumePage';
import ContactPage from '../pages/ContactPage';

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Projects" component={ProjectsPage} />
        <Stack.Screen name="Resume" component={ResumePage} />
        <Stack.Screen name="Contact" component={ContactPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;