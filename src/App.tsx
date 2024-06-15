import React from 'react';
import './App.css';

import {decrement, increment, useAppDispatch, useAppSelector} from "./redux/store";

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
      </div>
  );
};

export default App;
