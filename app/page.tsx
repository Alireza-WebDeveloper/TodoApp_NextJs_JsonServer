import { FC } from 'react';
import HomeComponent from '@/Components/Home';
import { fetchGetAllTodos } from '@/Helpers/Todos';

type HomePageProps = {
  todos: TodoModelResponse;
};

export const dynamic = 'force-dynamic';

const HomePage = async () => {
  try {
    const todos = await fetchGetAllTodos();

    return (
      <>
        <HomeComponent todos={todos} />
      </>
    );
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default HomePage;
