import {createAppContainer,createStackNavigator,createSwitchNavigator} from 'react-navigation';
import WelcomePage from '../page/WelcomePage';
import Login from '../page/Login';
import Register from '../page/Register';
import TabNavigator from './TabNavigator';

const InitNavigator = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage,
        navigationOptions: {
            header: null,
        }
    }
});
const LoginNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: '登录',
        },
        navigationOptions: {
            header: null,
        }
    }
});
const RegisterNavigator = createStackNavigator({
    Register: {
        screen: Register,
        navigationOptions: {
            title: '注册',
        }
    }
});
const SwitchNavigator =  createSwitchNavigator({
    Init: InitNavigator,
    Login: LoginNavigator,
    Register: RegisterNavigator,
    Main: TabNavigator,
}, {
    navigationOptions: {
        header: null,
    }
});

export default  AppNavigator = createAppContainer(SwitchNavigator);
