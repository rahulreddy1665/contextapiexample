import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import home from './app/screens/Home';
import blank from './app/screens/Blank';
import {PractiseProvider} from './app/global/Context';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PractiseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={home} />
          <Stack.Screen name="Blank" component={blank} />
        </Stack.Navigator>
      </NavigationContainer>
    </PractiseProvider>
  );
};

export default App;
