import {createStackNavigator,createAppContainer} from 'react-navigation';
import page1 from '../page/page1';
import page2 from '../page/page2';
const MainNavigator = createStackNavigator({
    Home: {screen: page1},
  });
  
const AppNavigation = createAppContainer(MainNavigator);
  
export default AppNavigation;