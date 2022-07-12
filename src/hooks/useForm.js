import * as Yup from "yup";
function getMinMessage(label, value) {
    return `${label} Must be Greater ${value}`
}
function getOneOfMessage(label) {
    return `${label} Must be Equal to Password`
}
function getnotOneOfMessage(label) {
    return `${label} Must not be Equal to old Password`
}

function getEqualMessage(label, value) {
    return `${label} Must be Equal to ${value}`
}
function getGreater(label) {
    return `${label} is required`
}
function getRequiredMessage(label) {
    let finalLabel = label.replace(' :', '')
    let checkCaptial = finalLabel.split(" ");
    for (let i = 0; i < checkCaptial.length; i++) {
        checkCaptial[i] = checkCaptial[i].charAt(0).toUpperCase() + checkCaptial[i].slice(1);
    }
    let requriedLabel = checkCaptial.join(" ")
    return `${requriedLabel} is required`
}

function isOneSelectedMessage(label) {
    return `Please select atleast one option from ${label}`
}

function getMaxMessage(label, value) {
    return `${label} Must be Less Than ${value}`
}
function getEmailMessage(label) {
    return `${label} Must be Valid Email`
}
function getZipCodeMessage(label) {
    if (label === "Reset Code") {
        return "Incorrect Reset Code"
    }
    else {
        return `${label} Must be Valid`
    }
}
function getParamAndType(validation, label) {
    let Message = validation.Message;
    if (validation.hasOwnProperty('min')) {
        return {
            type: 'min',
            params: [validation.min, Message && Message.length > 0 ? Message : getMinMessage(label, validation.min)]
        }
    }
    else if (validation.hasOwnProperty('length')) {
        return {
            type: 'length',
            params: [validation.length, Message && Message.length > 0 ? Message : getEqualMessage(label, validation.length)]
        }
    }
    else if (validation.hasOwnProperty('oneOf')) {
        return {
            type: 'oneOf',
            params: [validation.oneOf, Message && Message.length > 0 ? Message : getOneOfMessage(label)]
        }
    }
    else if (validation.hasOwnProperty('notOneOf')) {
        return {
            type: 'notOneOf',
            params: [validation.notOneOf, Message && Message.length > 0 ? Message : getnotOneOfMessage(label)]
        }
    }
    else if (validation.hasOwnProperty('matches')) {
        return {
            type: 'matches',
            params: [validation.matches, Message && Message.length > 0 ? Message : getZipCodeMessage(label)]
        }
    }
    else if (validation.hasOwnProperty('max')) {
        return {
            type: 'max',
            params: [validation.max, Message && Message.length > 0 ? Message : getMaxMessage(label, validation.max)]
        }
    } else if (validation.hasOwnProperty('isRequired')) {
        return {
            type: 'required',
            params: [Message && Message.length > 0 ? Message : getRequiredMessage(label.toLowerCase())]
        }
    } else if (validation.hasOwnProperty('isOneSelected')) {
        // console.log(Message, " *********************** THIS IS MESSAGE *******************************")
        return {
            type: 'isOneSelected',
            params: [Message && Message.length > 0 ? Message : isOneSelectedMessage(label.toLowerCase())]
        }
    }
    else if (validation.hasOwnProperty('isEmail')) {
        return {
            type: 'email',
            params: [Message && Message.length > 0 ? Message : getEmailMessage(label)]
        }
    }
    else if (validation.hasOwnProperty('positive')) {
        return {
            type: 'positive',
            params: [Message && Message.length > 0 ? Message : getGreater(label)]
        }
    }
    else if (validation.hasOwnProperty('integer')) {
        return {
            type: 'integer',
            params: [Message && Message.length > 0 ? Message : getGreater(label)]
        }
    }
    else if (validation.hasOwnProperty('number')) {
        return {
            type: 'number',
            params: [Message && Message.length > 0 ? Message : getGreater(label)]
        }
    }
}

const isOneSelectedFromArray = (array) => {
    return array.some(each => each.selected === true)
}



function createYupSchema(schema, config) {
    let { id, label, validationType, validations = [] } = config;
    if (!validationType) {
        validationType = "string"
    }
    if (!Yup[validationType]) {
        return schema;
    }
    let validator = Yup[validationType]();


    validations.forEach(validation => {
        const { params, type } = getParamAndType(validation, label);
        if (!validator[type]) {
            if (type === 'isOneSelected') {
                validator = validator["test"]('isOneSelected', isOneSelectedMessage(label.toLowerCase()),
                    function (value) {
                        return isOneSelectedFromArray(value)
                    })
            }
            return;
        }
        validator = validator[type](...params);
    });
    schema[id] = validator;
    return schema;
}
export function useForm(inputs) {
    let initialValues = {};
    let formData = Object.values(inputs)
    formData.forEach((entry) => {
        initialValues[entry.id] = entry.value;
    });
    const yepSchema = formData.reduce(createYupSchema, {});
    let schema = Yup.object().shape(yepSchema)
    return { initialValues, schema }
}