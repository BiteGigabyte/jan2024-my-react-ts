import React, {useState} from 'react';
import './App.css';
import Users from "./components/Users/Users";
import {IPostModel} from "./models";
import Posts from "./components/Posts/Posts";




const App = () => {

    const [postTrigger, setPostTrigger] = useState<number>(-1)
    const getPostsOfUser = (id: number): void => {
        console.log(id);
        if (id >= 0) {
            setPostTrigger(id);
        }
    }

  return (
      <div>
          {postTrigger && <Posts userID={postTrigger}/>}
          <Users getPostsOfUser={getPostsOfUser}/>
      </div>
  );
};

export {App};

export default App;

// https://dummyjson.com/docs/users
//     отримати та вивести інфу по всіх юзерах. Для запитів використовуємо axios та розносимо логіку в сервіси
// Структура компонентів : App - Users- User
// в компоненті User зробити кнопку при натсиканні на яку відбувається стейт ліфтінг ід користувача в батьківську компоненту. В батьківській компоненті вивести всі пости обраного юзера (https://dummyjson.com/docs/posts  Get all posts by user id)
