import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addTodo } from 'reduxTodo/todos/todosSlice';
import { nanoid } from '@reduxjs/toolkit';

export const Form = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const newValue = e.target.elements.search.value;

    dispatch(
      addTodo({
        text: newValue,
        id: nanoid(),
      }),
    );
  };

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
