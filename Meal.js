import React from 'react';
import { Text, View } from 'react-native';

export default class Meal extends React.Component {
    static navigationOptions = {
        title: `Meal`,
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Meal!</Text>
            </View>
        );
    }
}