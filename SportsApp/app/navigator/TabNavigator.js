import {createStackNavigator,createBottomTabNavigator} from 'react-navigation';
import HomePage from '../page/HomePage';
import EventsList from '../page/EventsList';
import InstantScore from '../page/InstantScore';
import Preferential from '../page/Preferential';
import MineCenter from '../page/MineCenter';
import page2 from '../page/Details';

const HomeStack = createStackNavigator({
    Home: {
        screen: HomePage,
    },
    Details: page2
}, {
        navigationOptions: {
            tabBarLabel: '首页',
        }
});
const EventsListStack = createStackNavigator({
    EventsList: {
        screen: EventsList,
    },
}, {
        navigationOptions: {
            tabBarLabel: '赛事列表',
        }
});
const InstantScoreStack = createStackNavigator({
    InstantScore: {
        screen: InstantScore,
    },
}, {
        navigationOptions: {
            tabBarLabel: '即时比分',
        }
});
const PreferentialStack = createStackNavigator({
    PreferentialScore: {
        screen: Preferential,
    },
}, {
    navigationOptions: {
        tabBarLabel: '优惠',
    }
});
const MineCenterStack = createStackNavigator({
    MineCenterScore: {
        screen: MineCenter,
    },
}, {
    navigationOptions: {
        tabBarLabel: '个人中心',
    }
});
export default TabNavigator = createBottomTabNavigator(
    {
        Home: HomeStack,
        EventsList: EventsListStack,
        InstantScore: InstantScoreStack,
        Preferential: PreferentialStack,
        MineCenter: MineCenterStack,
    }
);