import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Counter = () => {
    return (
        <LinearGradient
            colors={['#F71919', '#FFA553']}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={styles.container}
        >
            <View style={styles.textContainer}>
                <Text style={styles.Text}>1</Text>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 20,
        height: 20,
        borderRadius: 5,
        elevation: 6,
        alignItems: 'center',
    },
    textContainer: {
        width: 16,
        height: 20,
        borderRadius: 5,
    },
    Text: {
        textAlign: 'center',
        fontSize: 16,
        paddingBottom: 5,
        paddingLeft: 3,
    },
});

export default Counter;