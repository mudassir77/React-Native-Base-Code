import { injectBaseConstantMethods } from "./BaseConstants";

// TODO: temp statuses change with server one in future
const TRANSACTION_STATUS = {
    ACCEPTED: 1,
    TRANSFERRED: 2,
    PENDING_COLLECTION: 3,
    COMPLETED: 4
};

const displayTextKeys = {
    [TRANSACTION_STATUS.ACCEPTED]: "Accepted",
    [TRANSACTION_STATUS.TRANSFERRED]: "Transferred",
    [TRANSACTION_STATUS.PENDING_COLLECTION]: "Pending Collection",
    [TRANSACTION_STATUS.COMPLETED]: "Completed"
};

const labelClass = {
    [TRANSACTION_STATUS.ACCEPTED]: "#0AAF1A",
    [TRANSACTION_STATUS.TRANSFERRED]: "#0317C6",
    [TRANSACTION_STATUS.PENDING_COLLECTION]: "#CBA900",
    [TRANSACTION_STATUS.COMPLETED]: "#9504E8"
};

export default injectBaseConstantMethods(BUSINESS_TYPE, displayTextKeys, labelClass);
