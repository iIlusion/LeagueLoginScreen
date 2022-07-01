import {ThemeProvider, createTheme} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';


function MyApp({ Component, pageProps }) {
  const theme = createTheme({
	typography: {
		fontFamily: '"Lexend Deca", sans-serif',
	},
	palette: {
		primary: {
			main: '#CF3C3F',
			dark: '#bc252a',
		}
	}
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
