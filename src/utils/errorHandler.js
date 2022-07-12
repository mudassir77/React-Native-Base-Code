import { StatusCodes } from "../constants";
import { showMessage } from "react-native-flash-message";
// import { LOGOUT } from "../store/actions";
// import { removeItemFromStorage, storageDataKeys } from "./storage";
import { store } from "../../src/redux/store";


export const handleFetchError = async res => {
    if (res.status >= StatusCodes.BAD_REQUEST && res.status < StatusCodes.CONNECTION_TIMED_OUT) {
        const response = await res.clone().json();
        let errRes = {
            ...response,
            Message: response.Message,
            Status: res.status
        };
        showMessage({ message: response.Message, type: "danger", position: "bottom" });
        // if (res.status === StatusCodes.UNAUTHORIZED) {
        //     store.dispatch({ type: LOGOUT });
        //     removeItemFromStorage(storageDataKeys.TOKEN);
        //     removeItemFromStorage(storageDataKeys.DEVICE_UUID);
        // }
        throw errRes;
    }
    return res.json();
};
