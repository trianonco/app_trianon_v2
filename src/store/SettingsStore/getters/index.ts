const prop1 = (state: any) => state;
const prop2 = (state: any) => state;
const isKeyboardOpen = (state: any): boolean => state.DEVICE.MOBILE.KEYBOARD.isOpen;

export default {
    prop1,
    prop2,
    isKeyboardOpen,
};
