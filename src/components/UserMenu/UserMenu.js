import { Avatar, Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { singOut } from 'redux/auth/operation';
import { getUserName } from 'redux/auth/selector';

export const UserMenu = () => {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <Box
      display={'flex'}
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'primary.contrastText',
      }}
    >
      <Box
        display={'flex'}
        sx={{
          gap: '30px',
          alignItems: 'center',
          color: 'primary.contrastText',
        }}
      >
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: 'white',
            textDecoration: !isActive && 'none',
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/contacts"
          style={({ isActive }) => ({
            color: 'white',
            textDecoration: !isActive && 'none',
          })}
        >
          Contact
        </NavLink>
      </Box>
      <Box display={'flex'} sx={{ alignItems: 'center', gap: '10px' }}>
        <Avatar alt={userName} src="../../image/img.png" />
        <Typography sx={{ color: 'primary.contrastText' }}>
          Welcome, {userName}
        </Typography>
        <Button
          type="button"
          size="medium"
          variant="outlined"
          sx={{ color: 'inherit' }}
          onClick={() => dispatch(singOut())}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};
