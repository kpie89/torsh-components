import { createTheme } from '@mui/material/styles';

export const torshTheme = createTheme({
  palette: {
    primary: {
        main: '#00758d',
        contrastText: '#fff',
    },
    warning: {
        main: '#f57e25',
        contrastText: '#fff',
      },
  },
  typography: {
    fontFamily: 'Lato,sans-serif',
    fontSize: 14,
    button: {
      textTransform: 'none',
    }
  }
});