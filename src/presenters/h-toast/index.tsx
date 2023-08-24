import React, { useRef, createContext, useContext, useState } from 'react';
import Toast from 'react-native-easy-toast';
import { Portal } from 'react-native-portalize';
import { ToastContextValueProps, ToastProviderProps, typesProps } from './type';


const ToastContext = createContext<ToastContextValueProps>({
    showToast: () => { },
});



const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    const toastRef = useRef<Toast>(null);
    const [type, setType] = useState<typesProps>("success")

    const showToast = (type: typesProps, message: string,) => {
        setType(type)
        if (toastRef.current) {
            toastRef.current.show(message);
        }
    };

    const contextValue: ToastContextValueProps = {
        showToast,
    };

    const background = type == 'error' ? "red" : type == 'success' ? "green" : "black"


    return (
        <ToastContext.Provider value={contextValue}>
            <Portal>
                <Toast fadeOutDuration={3000} style={{ backgroundColor: background }} textStyle={{ color: "white" }} ref={toastRef} position="top" />
            </Portal>
            {children}
        </ToastContext.Provider>
    );
};

const useSilentToast = () => {
    const { showToast } = useContext(ToastContext);
    return showToast;
};

export { ToastProvider, useSilentToast };
