/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    Button,
    View,
    Text,
} from 'react-native';


export default class HomePage extends React.Component {
    static navigationOptions = {
        title: '首页',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerLeft: <Button
            title="注册"
            onPress={() => {
                register();
            }}
        />,
        headerRight: <Button
            title="登录"
            onPress={() => {
                login();
            }}
        />,
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        this.props.navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        });
                    }}
                />
            </View>
        );
    }
}
//注册
function register() {
    // var email = "linke333@qq.com";
    // var phone = "12345678";
    // var username = "linke";
    // var password = "qwe123";
    // var passwordRepeat = "qwe123";
    // const query = `mutation Register($input: RegistrationInput!) {
    //     register(input: $input) {
    //         success
    //     }
    //   }`;

    // fetch('http://192.168.254.20:8000/graphql', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         query,
    //         variables: {
    //             input: {
    //                 email,
    //                 phone,
    //                 username,
    //                 password,
    //                 passwordRepeat,
    //             }
    //         }
    //     })
    // })
    //     .then(r => r.json())
    //     .then(data => console.log('data returned:', data))
    //     .catch(error => console.log('错误', rror));
    var email = "linke111@qq.com";
    var phone = "12345678";
    var username = "linke";
    var password = "qwe123";
    var passwordRepeat = "qwe123";
    var query = `mutation Register($input: RegistrationInput!) {
        register(input: $input) {
            success
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
                    // phone,
                    // username,
                    password,
                    passwordRepeat,
                }
            }
        })
    })
        .then(r => r.json())
        .then(data => console.log('data returned:', data))
        .catch(error => console.log('错误', rror));
}
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