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
import img from "../images/hool2.jpeg"
import { styled } from '@mui/material/styles';
import { auth } from '../FireBase/FirebaseConfig';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Grid,Link} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from 'react';
import { useFunction } from '../provider/FunctionProvider';

const LoginCart = () => {

  const [email, setEmail]= useState();
  const [password, setPassword] = useState();
  const {loggedInOpen,loggedIn} = useFunction();

    const SignIn = () => { signInWithEmailAndPassword(auth, email, password).then(() => {
      alert("amjilttai newterlee")
      loggedInOpen();
      navigate("/menu");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode,errorMessage)
      });
    };
  const navigate = useNavigate();

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

  return (
    <div>
      <Root>
          <Typography variant='h4' sx={black}>Нэвтрэх</Typography>
          <TextField sx={{width:"30ch"}} onChange={(e) => setEmail(e.target.value)} label="Email Address" value={email}/>

          {/* Password Button */}

          <FormControl sx={{ m: 1, width: '30ch'}} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              type={values.showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment>
                  <IconButton
                    onClick={handleClickShowPassword}
                    edge="end"
                    >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              />
          </FormControl>
          {/* nuuts ug sergeeh, newtreh button  */}

          <Grid container sx={bottomContainer}>
            <FormControlLabel
              control={<Checkbox value="remember" color="success" />}
              label="Remember me"
            />
            <Box item xs>
              <Link href="#" variant="body2" sx={black}>Forgot password?</Link>
            </Box>
          </Grid>
              <Box item>
                <Link variant="body2" sx={black} onClick={() => navigate('/SignUp')}>{"Don't have an account? Sign Up"}</Link>
              </Box>
          <Button variant="contained" color="success" onClick={SignIn}>Нэвтрэх</Button>
      </Root>
    </div>
  );
}
const black = {
  color: "black",
}
const bottomContainer = {
  display:'flex',
  alignItems:"center",
  justifyContent:"space-around"
}
const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    width: "auto",
    height: "380px",
    color:"black",
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: '2px solid black',
    boxShadow: 24,
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  [theme.breakpoints.up('sm')]: {
    width: "370px",
    height: "410px",
    color:"black",
    backgroundColor:"white",
    opacity:"0.7",
    backgroundRepeat: "no-repeat",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: '2px solid black',
    boxShadow: 24,
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginLeft:"100px",
  },
}));
export default LoginCart;