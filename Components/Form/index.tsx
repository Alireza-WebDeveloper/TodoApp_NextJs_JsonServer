'use client';
import { fetchAddNewTodo } from '@/Helpers/Todos';
import { IconButton, TextField, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import * as Icons from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

const Form = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const [IsPending, StartTransition] = useTransition();
  const updateQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetchAddNewTodo({ note: query });
      // Animated
      StartTransition(() => {
        router.refresh();
      });
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <Box
      onSubmit={handleSubmitForm}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        width: '100%',
        m: 'auto',
        mb: { lg: 0, xs: 2 },
        position: 'relative',
      }}
      component={'form'}
    >
      <Box position={'relative'} flexGrow={1}>
        <TextField
          color="primary"
          autoComplete="off"
          sx={{
            width: '100%',
          }}
          InputProps={{
            style: {
              fontSize: '1.3rem',
              color: 'black',
              borderRadius: '1rem',
              backgroundColor: 'white',
            },
          }}
          placeholder="Fill Box Anything To Add Todo..."
          onChange={updateQuery}
          value={query}
        />

        <Box>
          <IconButton
            type="submit"
            size="large"
            color="secondary"
            sx={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              transform: 'translateX(-20%)',
            }}
          >
            <Icons.MdAdd size={'2rem'} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
