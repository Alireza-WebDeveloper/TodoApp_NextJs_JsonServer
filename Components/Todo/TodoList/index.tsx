'use client';
import { FC } from 'react';
import TodoItem from '../TodoItem';
import { Grid } from '@mui/material';
type TodoListProps = {
  todos: TodoModelResponse;
};

const TodoList: FC<TodoListProps> = ({ todos }) => {
  const renderTodoItems = () => {
    return todos.map((todo) => {
      return (
        <Grid item xs={12} key={todo.id}>
          <TodoItem todo={todo} /> 
        </Grid>
      );
    });
  };
  return (
    <Grid container spacing={3}>
      {renderTodoItems()}
    </Grid>
  );
};

export default TodoList;
