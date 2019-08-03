import React from 'react';
import {
    Button,
    View,
    Text,
} from 'react-native';


export default class Preferential extends React.Component {
    static navigationOptions = {
        title: "优惠",
        
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Preferential</Text>
            </View>
        );
    }
}