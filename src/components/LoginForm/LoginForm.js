import { Box, Button, FormControl, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { singIn } from 'redux/auth/operation';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(singIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Box display={'flex'} sx={{justifyContent:'center', alignItems:'center' , padding: 3, minHeight:"85vh"}}>
        <FormControl  display={'flex'} sx={{gap:4, minWidth:'40%'}} >     
       
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
              placeholder="Password"
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
      
          <Button   variant="outlined" type="submit" onClick={handleSubmit}>Enter</Button>
        </FormControl>
      </Box>
    </>
  );
};
