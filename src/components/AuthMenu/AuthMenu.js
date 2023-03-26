import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthMenu = () => {
  return (
    <>
      <Box
        display={'flex'}
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'primary.contrastText',
          padding: '15px',
        }}
      >
        <Box>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: 'white',
              textDecoration: !isActive && 'none',
            })}
          >
            Home
          </NavLink>
        </Box>
        <Box display={'flex'} sx={{ alignItems: 'center', gap: '20px' }}>
          <NavLink
            to="/login"
            style={({ isActive }) => ({
              color: 'white',
              textDecoration: !isActive && 'none',
            })}
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            style={({ isActive }) => ({
              color: 'white',
              textDecoration: !isActive && 'none',
            })}
          >
            Register
          </NavLink>
        </Box>
      </Box>
    </>
  );
};
