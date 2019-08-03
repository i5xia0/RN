import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';

export default class Register extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>LoginPage</Text>
                <Button
                    title="进入首页"
                    onPress={() => {
                        NavigationUtil.resetToHomePage({
                            navigation: this.props.navigation
                        })
                    }}
                />
                <Button
                    title="登录"
                    onPress={() => {
                        NavigationUtil.resetToLoginPage({
                            navigation: this.props.navigation
                        })
                    }}
                />
            </View>
            
        );
    }
}
const styles = StyleSheet.create({
    container: {
         flex: 1,
         alignItems: 'center', 
         justifyContent: 'center',
         backgroundColor: "#F5FCFF",
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});