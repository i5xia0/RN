/** 
 * 全局导航跳转工具类
*/
export default class NavigationUtil {
    static resetGoBack(navigation) {
        navigation.goBack();
    }
    static resetToLoginPage(params) {
        const {navigation} = params;
        navigation.navigate("Login");
    }
    static resetToRegisterPage(params) {
        const {navigation} = params;
        navigation.navigate("Register");
    }
    static resetToHomePage(params) {
        const {navigation} = params;
        navigation.navigate("Main");
    }
}