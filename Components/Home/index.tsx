'use client';
import { FC } from 'react';
import { Grid, Container } from '@mui/material';
import Form from '../Form';
import TodoList from '../Todo/TodoList';
import TodoTitle from '../Todo/TodoTitle';
type HomecomponentProps = {
  todos: TodoModelResponse;
};

const HomeComponent: FC<HomecomponentProps> = ({ todos }) => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TodoTitle
            title="todo app"
            description="You can write down or delete your to-do list"
          />
        </Grid>
        <Grid item xs={12}>
          <Form />
        </Grid>
        <Grid item xs={12}>
          <TodoList todos={todos} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeComponent;
