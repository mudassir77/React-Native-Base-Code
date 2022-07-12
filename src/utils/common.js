import { Platform } from "react-native";

export const isAppleAuthSupported = !!(Platform.OS === "ios" && Platform.Version >= 13);

export const getObjectByKeys = (arr, key = "Id", deleteKey = null, addKeys = null) => {
  let obj = {};
  arr.forEach(val => {
    obj[val[key]] = val;
    if (deleteKey) {
      delete obj[val[key]][deleteKey];
    }
    if (addKeys) {
      obj[val[key]] = {
        ...obj[val[key]],
        ...addKeys
      };
    }
  });
  return obj;
};
