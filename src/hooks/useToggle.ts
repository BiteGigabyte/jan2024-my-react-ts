// 1. useToggle - custom React hook that allows a component to toggle a value between true and false
import { useState } from "react"

export default function useToggle(defaultValue: any) {
    const [value, setValue] = useState(defaultValue)

    function toggleValue(value: any) {
        setValue((currentValue: any) =>
            typeof value === "boolean" ? value : !currentValue
        )
    }

    return [value, toggleValue]
}


// https://dev.to/arafat4693/15-useful-react-custom-hooks-that-you-can-use-in-any-project-2ll8#10-usefetch
