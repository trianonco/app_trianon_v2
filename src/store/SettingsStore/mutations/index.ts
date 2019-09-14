const PROP1_UPDATED = (state: any, payload: any) => {
    // state.someObj.prop1 = payload;
};

const PROP2_UPDATED = (state: any, payload: any) => {
    // state.someObj.prop2 = payload;
};

const SET_KEYBOARD_STATUS = (state: any, payload: boolean) => {
    state.DEVICE.MOBILE.KEYBOARD.isOpen = payload;
};



export default {
    PROP1_UPDATED,
    PROP2_UPDATED,
    SET_KEYBOARD_STATUS,
};
