// 2. usePrevious - hook that allows a component to keep track of the previous value of a variable
import { useRef } from "react"

export default function usePrevious <T> (value: T): T | null | undefined {
    const currentRef = useRef<T>(value)
    const previousRef = useRef<T | undefined | null>()

    if (currentRef.current !== value) {
        previousRef.current = currentRef.current
        currentRef.current = value
    }

    return previousRef.current
}

// usePrevious<number>(3);