import { objectContainsKey } from "../utils/commonUtils";

const getDisplayTextKey = function (value) {
    const objHasKey = objectContainsKey(this.displayTextKeys, value);
    if (objHasKey) {
        return this.displayTextKeys[value];
    }
    return "";
};

const getLabelClass = function (value) {
    const objHasKey = objectContainsKey(this.labelClasses, value);
    if (objHasKey) {
        return this.labelClasses[value];
    }
    return "";
};

const injectBaseConstantMethods = function (constantsObj, displayTextKeysObject, labelClassObject) {
    Object.defineProperties(constantsObj, {
        getDisplayTextKey: {
            configurable: false,
            enumerable: false,
            value: getDisplayTextKey,
            writable: false
        },
        displayTextKeys: {
            configurable: false,
            enumerable: false,
            value: displayTextKeysObject,
            writable: false
        },
        labelClasses: {
            configurable: false,
            enumerable: false,
            value: labelClassObject,
            writable: false
        },
        getLabelClass: {
            configurable: false,
            enumerable: false,
            value: getLabelClass,
            writable: false
        }
    });
    return constantsObj;
};

export { injectBaseConstantMethods };
