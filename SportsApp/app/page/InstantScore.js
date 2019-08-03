import React from 'react';
import {
    Button,
    View,
    Text,
} from 'react-native';


export default class InstantScore extends React.Component {
    static navigationOptions = {
        title: "即时比分",
        
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>InstantScore</Text>
            </View>
        );
    }
}