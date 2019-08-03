import React from 'react';
import {
    Button,
    View,
    Text,
} from 'react-native';


export default class MineCenter extends React.Component {
    static navigationOptions = {
        title: "个人中心",
        header: null
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>MineCenter</Text>
            </View>
        );
    }
}