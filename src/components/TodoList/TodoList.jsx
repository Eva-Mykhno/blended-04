import { Grid, GridItem, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectFilter } from 'reduxTodo/filter/filterSlice';
import { selectTodos } from 'reduxTodo/todos/todosSlice';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const value = useSelector(selectFilter);
  console.log(todos);

  const filteredData = todos.filter(todo =>
    todo.text.toLowerCase().includes(value.toLowerCase()),
  );
 

  return (
    <>
      {filteredData.length === 0 && <Text textAlign="center">We did not find any todo😯</Text>}
      <Grid>
        {filteredData.map((todo, index) => (
          <GridItem key={todo.id}>
            <Todo text={todo.text} count={index + 1} id={todo.id} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
