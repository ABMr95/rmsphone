import React from 'react';
import { Text, View } from 'react-native';

export default class Login extends React.Component {
    static navigationOptions = {
        title: `Login`,
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Login!</Text>
            </View>
        );
    }
}