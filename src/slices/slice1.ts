import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CounterStateType = {
    value: number;
}

const initialState: CounterStateType = {
    value: 100500,
};
export const counter1Slice = createSlice({
    name: "counter1",
    initialState: initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.value = state.value + action.payload;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        },
        reset: (state) => {
            state.value = 0;
        },
        incrementByAmount: ((state, action: PayloadAction<number>) => {
            state.value += action.payload;
        })
    }
});