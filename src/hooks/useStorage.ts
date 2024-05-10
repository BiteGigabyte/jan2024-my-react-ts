// 3. useStorage - hook that allows a component to store a value in the browser's LocalStorage

import {useState} from "react";

export function useLocalStorage(key: any, defaultValue: any): any {
    return useStorage(key, defaultValue, window.localStorage)
}
function useStorage(key: any, defaultValue: any, storageObject: any): any {
    const [value, setValue] = useState<any>(() => {
        const jsonValue = storageObject.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof defaultValue === "function") {
            return defaultValue()
        } else {
            return defaultValue
        }
    })
}