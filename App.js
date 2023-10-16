import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './src/navigations/Navigation';

const App = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Navigation />
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
});
