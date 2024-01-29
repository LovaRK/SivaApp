// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import ForgotPassword from './src/screens/ForgotPassword'; // Import ForgotPassword screen
import SignUp from './src/screens/SignUp'; // Import SignUp screen

type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    ForgotPassword: undefined; // Add ForgotPassword to the navigation stack type
    SignUp: undefined; // Add SignUp to the navigation stack type
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen 
                    name="ForgotPassword" 
                    component={ForgotPassword} 
                    options={{ title: 'Reset Password' }} 
                />
                <Stack.Screen 
                    name="SignUp" 
                    component={SignUp} 
                    options={{ title: 'Sign Up' }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
