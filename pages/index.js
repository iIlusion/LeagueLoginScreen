import { Box, Button, Checkbox, FormControlLabel, Stack, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';

const InputStyle = styled((props) => (
  <TextField InputLabelProps={{ size: 'small'}} InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  '& label': {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '12px',
    lineHeight: '26px',
    textTransform: 'uppercase',
    '&.Mui-focused': {
      color: theme.palette.text.secondary,
    }
  },
  '& .MuiFilledInput-root': {
    borderRadius: theme.shape.borderRadius,
    border: '2px solid transparent',
    '&.Mui-focused': {
      borderColor: theme.palette.grey[800],
      backgroundColor: '#ffffff'
    }
  }
}));

const ButtonStyle = styled((props) => <Button disableRipple {...props} />)(({ theme }) => ({
  boxShadow: 'none !important',
  padding: theme.spacing(1),
  flexGrow: 1
}));

const VideoStyle = styled("video")({  width: '100%', height: '100%', objectFit: 'cover' });

export default function Home() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeUsername = (event) => {
    setUsername(event.target.value)
  }
  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }
  return (

    <Box sx={{
      display: 'flex',
      height: '100%',
      width: '100%',
      backgroundColor: '#000000',
      position: 'fixed',
      top: 0,
      left: 0,
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: {xs: '100%', lg: 400},
        backgroundColor: '#fff',
        p: 7.5,
        flexShrink: 0,
      }}>
        <Box sx={{textAlign: 'center'}}>
          <img src="/logo.png" alt="logo" width={120}/>
        </Box>
        
        <Stack spacing={2} alignItems="center" sx={{mt: 8}}>
          <Typography variant="h5" color="text.primary" gutterBottom sx={{textAlign: 'center', fontWeight: 600}}>
            Fazer Login
          </Typography>
          <InputStyle 
            value={username}
            onChange={handleChangeUsername}
            variant='filled' 
            size='small' 
            label='Nome de Usuário'
            fullWidth
          />
          
          <InputStyle 
            value={password}
            onChange={handleChangePassword}
            type='password'
            variant='filled' 
            size='small' 
            label='Senha' 
            fullWidth 
          />
        </Stack>

        <Stack direction="row" spacing={1.2} sx={{mt: 4}}>
          <ButtonStyle size="small" variant='contained' sx={{bgcolor: '#1B77F3 !important'}}>
              <img src="/facebook-icon.png" alt="facebook" height={16} />
          </ButtonStyle>
          <ButtonStyle size="small" variant='contained' sx={{bgcolor: '#ECECEC !important'}}>
              <img src="/google-icon.png" alt="facebook" height={16} />
          </ButtonStyle>
          <ButtonStyle size="small" variant='contained' sx={{bgcolor: '#000000 !important'}}>
              <img src="/apple-icon.png" alt="facebook" height={16} />
          </ButtonStyle>
        </Stack>

        <FormControlLabel control={<Checkbox disableRipple sx={{borderRadius: 2,'&.Mui-checked': {color: '#CF3C3F'}}}/>} label='Manter Login' sx={{mt: 0.5}}/>

        <Box sx={{flexGrow: 1}} />
        
        <Button 
          disableRipple
          variant='contained'
          sx={(theme) => ({
            borderRadius: 5, 
            px: 1.5,
            py: 2,
            borderWidth: '2px !important', 
            alignSelf: 'center',
            color: '#fff',
            bgcolor: theme.palette.primary.main,
            "&.Mui-disabled": {
              bgcolor: 'transparent',
              border: '2px solid #ECECEC',
              color: '#ECECEC'
            },
            "&:hover": {
              bgcolor: theme.palette.primary.dark,
              boxShadow: 'none'
            }
          })} 
          disabled={!username || !password}
        >
          <ArrowForwardIcon fontSize='large' />
        </Button>
      </Box>
      <Box sx={{
        display: {xs: 'none', lg: 'block'},
        flexGrow: 1,
        textAlign: 'center',
      }}>
        <VideoStyle autoPlay muted loop playsInline>
          <source src="wallpaper.mp4" type="video/mp4" />
        </VideoStyle>
        
      </Box>
    </Box>
  )
}
