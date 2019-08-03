/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import AppNavigators from './app/navigator/AppNavigators';
import {name as appName} from './app.json';

console.disableYellowBox = true
AppRegistry.registerComponent(appName, () => AppNavigators);
