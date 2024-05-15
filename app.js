import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/pages/HomePage';
import ProjectsPage from './src/pages/ProjectsPage';
import ResumePage from './src/pages/ResumePage';
import ContactPage from './src/pages/ContactPage';

const Stack = createNativeStackNavigator();

function App() {
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

export default App;