import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function News() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>News</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
    }
});