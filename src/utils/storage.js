import AsyncStorage from "@react-native-async-storage/async-storage";

export const storageDataKeys = {
    AUTH: "#####-token",
};

export const getItemFromStorage = async key => {
    try {
        const item = await AsyncStorage.getItem(key);
        if (item !== null) {
            return JSON.parse(item);
        }
        return null;
    } catch (err) {
        return err;
    }
};

export const setItemInStorage = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        console.log(err);
        return err;
    }
};

export const removeItemFromStorage = async key => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (err) {
        console.log(err);
        return err;
    }
};
