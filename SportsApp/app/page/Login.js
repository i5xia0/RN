import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    SafeAreaView,
} from 'react-native';
// import {TextInput,} from 'react-native-gesture-handler';
import NavigationUtil from '../navigator/NavigationUtil';
import { TextInput } from 'react-native-gesture-handler';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
      }

    render() {
        return (
            <SafeAreaView>
            <View>
                <Text style= {styles.logo}>LOGO</Text>
                    <TextInput style={styles.phoneInput}
                        placeholder="请输入您的账号/手机号"
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                    <TextInput style={styles.passwordInput}
                        placeholder="请输入密码"
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text} 
                        />
                <Button style= {styles.buttonContainer}
                    title="登录"
                    onPress={() => {
                        NavigationUtil.resetToHomePage({
                            navigation: this.props.navigation
                        })
                    }}
                />
                <Button style= {styles.buttonContainer}
                    title="注册"
                    onPress={() => {
                        NavigationUtil.resetToRegisterPage({
                            navigation: this.props.navigation
                        })
                    }}
                />
            </View>
            </SafeAreaView>
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
    logo: {
        fontSize: 20,
        alignSelf: 'center', 
        textAlign: 'center',
        width: 250,
        height: 100,
        backgroundColor: 'red'
    },
    phoneInput: {
        width: 300,
        height: 30,
        alignSelf: 'center', 
        borderColor: 'gray',
        borderWidth: 1,
    },
    passwordInput: {
        width: 300,
        height: 30,
        alignSelf: 'center', 
        borderColor: 'gray',
        borderWidth: 1,
    },
    buttonContainer: {
        width: 100,
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 5,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
//登录
function login() {
    var email = "1233444@qq.com";
    var password =  "qwe123";
    const query = `mutation Login($input: LoginInput!) {
        login(input: $input) {
            success
            token
            user
            previousLoginTime
         }
    }`;
    fetch('http://192.168.254.20:8000/graphql/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables: {
                input: {
                    email,
                    password,
                }
            }
        })
    })
        .then(r => r.json())
        .then(data => console.log('data returned:', data))
        .catch(error => console.log('错误',error));
}