import React from 'react';
import './App.css';
import {Posts} from "./components/Posts/Posts";
import PostForm from "./components/PostForm/PostForm";

// потрібно на jsonplaceholder відправити об'єкт post
// відповідно, для цього вам потрібно його створити. Створення об'єкту повинно відбуватись за допомоги форми з useForm та валідацією.
// Якщо ви не пам'ятаєте як відправляти данні на jsonplaceholder подивіться його документації

const App = () => {
  return (
      <div>
        <PostForm/>
        <Posts/>
      </div>
  );
};

export {App};

export default App;
