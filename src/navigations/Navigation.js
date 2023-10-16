import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Componetes
import SignUp from '../components/screens/auth/sigup/SignUp';
import SignUpOtp from '../components/screens/auth/sigup/SignUpOtp';
import SignUpName from '../components/screens/auth/sigup/SignUpName';
import SignLocation from '../components/screens/auth/sigup/SignLocation';
import OnBordingScreen from '../components/screens/onbording/OnBordingScreen';
import Login from '../components/screens/auth/login/Login';
import OtpPasswordVerify from '../components/screens/auth/login/OtpPasswordVerify';
import ResetPassword from '../components/screens/auth/login/ResetPassword';
import LoginOtp from '../components/screens/auth/login/LoginOtp';

const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ResetPassword">
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="SignUpOtp"
                    component={SignUpOtp}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="SignUpName"
                    component={SignUpName}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="SignLocation"
                    component={SignLocation}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="OnBordingScreen"
                    component={OnBordingScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="OtpPasswordVerify"
                    component={OtpPasswordVerify}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="ResetPassword"
                    component={ResetPassword}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="LoginOtp"
                    component={LoginOtp}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;

const styles = StyleSheet.create({});
