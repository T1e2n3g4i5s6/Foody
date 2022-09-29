import * as React from 'react';
import { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  TextField,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl
} from '@mui/material';
import img from "../images/mod2.jpeg"
import { styled } from '@mui/material/styles';
import { auth } from '../FireBase/FirebaseConfig';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const LoginCart = () => {
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleChange =
    (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  return (
    <div>
      <Root>
          <Typography variant='h4'>Нэвтрэх</Typography>
          <TextField sx={{width:"30ch"}} InputProps={{style: {color: "white"}}} label="Email" />

          {/* Password Button */}

          <FormControl sx={{ m: 1, width: '30ch', Color:"white"}} variant="outlined">
            <InputLabel sx={white} htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              sx={white}
              endAdornment={
                <InputAdornment>
                  <IconButton
                    onClick={handleClickShowPassword}
                    edge="end"
                    sx={white}
                    >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              />
          </FormControl>

          {/* nuuts ug sergeeh, newtreh button  */}

          <Typography href="#">Forgot Password</Typography>
          <Button variant="contained" color="success">Нэвтрэх</Button>
      </Root>
    </div>
  );
}
const white = {
  color: "white",
}
const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    width: "auto",
    height: "380px",
    color:"white",
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: '1px solid silver',
    boxShadow: 24,
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  [theme.breakpoints.up('lg')]: {
    width: "400px",
    height: "450px",
    color:"white",
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: '1px solid silver',
    boxShadow: 24,
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginLeft:"150px"
  },
}));

export default LoginCart  ;
