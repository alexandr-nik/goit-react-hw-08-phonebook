import { Box, Container, Typography } from '@mui/material';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getIsLogin } from 'redux/auth/selector';
const Layout = () => {
  const isLogin = useSelector(getIsLogin);

  return (
    <>
      <Box sx={{ backgroundColor: 'primary.main' }}>
        <Container maxWidth="lg">
          <Box sx={{ p: 1 }}>{isLogin ? <UserMenu /> : <AuthMenu />}</Box>
        </Container>
      </Box>
      <main>
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </main>
      <footer>
        <Box sx={{ backgroundColor: 'primary.main' }}>
          <Container maxWidth="lg">
            <Box sx={{ p: 2 }}>
              <Typography
                level="body1"
                fontSize="xl"
                textAlign={'center'}
                sx={{ color: 'primary.contrastText' }}
              >
                Copyright © 2023
              </Typography>
            </Box>
          </Container>
        </Box>
      </footer>
    </>
  );
};
export default Layout;
