import React from 'react';
import './App.css';

import {decrement, increment, incrementByAmount, reset, useAppDispatch, useAppSelector} from "./redux/store";

const App = () => {

    const {value} = useAppSelector(state => state.slice1);

    const dispatch = useAppDispatch();

  return (
      <div>
          <h2>{value}</h2>
          <button onClick={() => {
              dispatch(increment(2));
          }}>increment</button>
          <button onClick={() => {
              dispatch(decrement());
          }}>decrement</button>
          <button onClick={() => {
              dispatch(reset());
          }}>reset</button>
          <button onClick={() => {
              dispatch(incrementByAmount(10))
          }}>increment by 10 amount</button>
      </div>
  );
};

export default App;
