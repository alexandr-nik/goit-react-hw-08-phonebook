import { Box, Typography } from '@mui/material';

export const HomePage = () => {
  return (
    <Box
      display={'flex'}
      sx={{ justifyContent: 'center', alignItems: 'center', minHeight: '85vh' }}
    >
      <Box>
        <Typography
          variant="h2"
          sx={{ textAlign: 'center', color: 'primary.main' }}
        >
         Phonebook{' '}
        </Typography>
        <img
          alt="PhoneBook"
          src="https://play-lh.googleusercontent.com/7O6Mvzvsy_gxPY7IPHN5iJWo9CB9CEeUvs8Ha1m1v0fctHD-tLwBR6TycZ45V-5aGkE=w240-h480-rw"
          loading="lazy"
          width="400px"
          heigth="500px"
        />
      </Box>
    </Box>
  );
};
