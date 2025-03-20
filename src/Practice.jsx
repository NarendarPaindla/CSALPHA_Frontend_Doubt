import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Practice() {
  return (
    <Stack spacing={4} direction="column">
      <Button variant="text">Text</Button>
      <Button variant="contained" color='secondary'>Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
