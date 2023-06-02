'use client';
import { FC } from 'react';
import { Typography, Stack, Button } from '@mui/material';

type errorProps = {
  error: Error;
  reset(): void;
};

const error: FC<errorProps> = ({ error, reset }) => {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 3,
        textTransform: 'capitalize',
        alignItems: 'center',
        height: '100svh',
      }}
    >
      <Typography variant="h4" component="h1">
        not found page
      </Typography>
      <Button variant="contained" color="info" onClick={reset}>
        try again
      </Button>
    </Stack>
  );
};

export default error;
