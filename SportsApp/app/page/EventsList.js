import React from 'react';
import {
    Button,
    View,
    Text,
} from 'react-native';


export default class EventsList extends React.Component {
    static navigationOptions = {
        title: "赛事列表",
        
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>EventsList</Text>
            </View>
        );
    }
}