// 2. usePrevious - hook that allows a component to keep track of the previous value of a variable
import { useRef } from "react"

export default function usePrevious(value: any): void {
    const currentRef = useRef(value)
    const previousRef = useRef()

    if (currentRef.current !== value) {
        previousRef.current = currentRef.current
        currentRef.current = value
    }

    return previousRef.current
}