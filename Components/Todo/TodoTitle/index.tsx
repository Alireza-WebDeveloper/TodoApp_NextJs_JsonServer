import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
type TodoTitle = {
  title: string;
  description?: string;
};

const TodoTitle: FC<TodoTitle> = ({ title, description }) => {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textTransform: 'capitalize',
        alignItems:'center'
      }}
    >
      <Typography gutterBottom variant="h3" component="h1">
        {title}
      </Typography>
      <Typography variant="h6" component="p">
        {description}
      </Typography>
    </Stack>
  );
};

export default TodoTitle;
