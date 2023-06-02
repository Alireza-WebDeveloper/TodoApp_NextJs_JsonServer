'use client';
import { FC } from 'react';
import { Stack, Box, ButtonGroup, Button } from '@mui/material';
import { fetchDeleteTodo } from '@/Helpers/Todos';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
type TodoItemProps = {
  todo: TodoModelObject;
};

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const router = useRouter();
  const [isPending, StartTransition] = useTransition();
  const handleDeleteTodo = async (): Promise<void> => {
    try {
      await fetchDeleteTodo({ id: todo.id });
      // Animated
      StartTransition(() => {
        router.refresh();
      });
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: (theme) => theme.palette.info.main,
        p: 2,
        borderRadius: '0.2rem',
        textTransform: 'capitalize',
        alignItems: 'center',
      }}
    >
      <Box>
        {todo.id} : {todo.note}
      </Box>
      <Box>
        <ButtonGroup size="large">
          <Button variant="contained" color="warning">
            edit
          </Button>
          <Button variant="contained" color="error" onClick={handleDeleteTodo}>
            delete
          </Button>
        </ButtonGroup>
      </Box>
    </Stack>
  );
};

export default TodoItem;
