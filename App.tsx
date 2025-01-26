// In App.js in a new project

import React, { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider, useAuth } from './context/AuthContext';

// screens
import HomeScreen from './src/HomeScreen';
import LoginScreen from './src/LoginScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  const { authenticated } = useAuth();

  if (!authenticated) {
    return <LoginScreen />;
  }

  return (
    <Stack.Navigator>
      {/* hide option */}
      {authenticated ? (
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  useEffect(() => {
    // const init = async () => {
    //   // …do multiple sync or async tasks
    //   setTimeout(() => {
    //     console.log('BootSplash has been hidden successfully');
    //   }, 1000);
    // };

    // init().finally(async () => {
    //   await BootSplash.hide({ fade: true });
    // });

    BootSplash.hide({ fade: true });
  }, []);

  return (
    <AuthProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </AuthProvider>
  );
}
