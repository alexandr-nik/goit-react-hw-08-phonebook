// import { useState } from 'react';
import { Box, Button, FormControl, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { singUp } from 'redux/auth/operation';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() && email.trim() && password.trim()) {
      console.log({ name, email, password });
      dispatch(singUp({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
    }
  };
  return (
    <Box
      display={'flex'}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3,
        minHeight: '85vh',
      }}
    >
      <FormControl display={'flex'} sx={{ gap: 4, minWidth: '40%' }}>
        <TextField
          label="Name"
          variant="standard"
          placeholder="Name"
          type="text"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="standard"
          required
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="standard"
          placeholder="Pasword min 8 digits"
          type="password"
          required
          minLength="8"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button variant="outlined" type="submit" onClick={handleSubmit}>
          Enter
        </Button>
      </FormControl>
    </Box>
  );
};
