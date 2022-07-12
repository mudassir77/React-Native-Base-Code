import { useEffect } from 'react'
import { BackHandler, ToastAndroid } from 'react-native'
let exitApp = 0;
const useBackPressClose = () => {
    const backAction = () => {
        setTimeout(() => {
            exitApp = 0
        }, 2000); // 2 seconds to tap second-time
        if (exitApp === 0) {
            exitApp += 1
            ToastAndroid.show('Tap back again to exit the App', ToastAndroid.SHORT);
        } else if (exitApp === 1) {
            BackHandler.exitApp();
        }
        return true;
    };

    useEffect(() => {

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);

}

export default useBackPressClose
