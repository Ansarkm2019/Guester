import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Packages
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Icons & Images
import HomeIcon from '../assets/icons/navigation/home.svg';
import HomIcon from '../assets/icons/navigation/home1.svg';
import ProfileIcon from '../assets/icons/navigation/profile-active.svg';
import ProfilIcon from '../assets/icons/navigation/profile-tab.svg';

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
import OtpVerification from '../components/screens/auth/login/OtpVerification';
import Home from '../components/screens/app/home/Home';
import Profile from '../components/screens/app/profile/Profile';
import Location from '../components/screens/app/location/Location';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MyTabs">
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
                <Stack.Screen
                    name="OtpVerification"
                    component={OtpVerification}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="MyTabs"
                    component={MyTabs}
                    options={{headerShown: false, showLabel: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={() => ({
                tabBarActiveTintColor: '#133149',
                tabBarShowLabel: ({focused}) => {},
            })}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    // tabBarShowLabel: false,
                    tabBarIcon: ({focused}) =>
                        focused ? (
                            <HomeIcon name="Home" size={26} />
                        ) : (
                            <HomIcon name="Home" size={26} />
                        ),
                }}
            />
            <Tab.Screen
                name="Location"
                component={Location}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Profile',
                    // tabBarShowLabel: false,
                    tabBarIcon: ({focused}) =>
                        focused ? (
                            <>
                                <ProfileIcon size={26} />
                            </>
                        ) : (
                            <ProfilIcon name="Profile" size={26} />
                        ),
                }}
            />
        </Tab.Navigator>
    );
}

export default Navigation;

const styles = StyleSheet.create({});
