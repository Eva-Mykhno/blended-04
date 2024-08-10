import { useDispatch } from 'react-redux';
import style from './Filter.module.css';
import { changeFilter } from 'reduxTodo/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch()

  const onChange = (e) => {
    dispatch(changeFilter(e.target.value))
  }

  return (
    <input
      className={style.input}
      onChange={onChange}
      placeholder="Find it"
      name="filter"
    />
  );
};
