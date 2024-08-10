import { Grid, GridItem, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'reduxTodo/todos/todosSlice';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  console.log(todos);

  return (
    <>
      <Text textAlign="center">We did not find any todo😯</Text>
      <Grid>
        {todos.map((todo, index) => (
          <GridItem key={todo.id}>
            <Todo text={todo.text} count={index + 1} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
