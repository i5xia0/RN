import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';

export default class WelcomPage extends Component {
    componentDidMount() {
        this.timer = setTimeout(() => {
            NavigationUtil.resetToLoginPage({
                navigation: this.props.navigation
            })
            // const {navigation}=this.props;
            // navigation.navigate("Login");
        }, 100);
    }
    componentWillMount() {
        this.timer && clearTimeout(this.timer);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>WelcomPage</Text>
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