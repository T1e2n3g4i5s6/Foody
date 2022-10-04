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
import {Link} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { UserData } from '../provider/userDataProvider';

const SignUpCart = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {name, setName} = UserData();

    const navigate = useNavigate();

  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
};

const createEmailAndPassword = () => {createUserWithEmailAndPassword(auth, email, password).then(() => {
    navigate("/Login")
    alert("amjilttai burtgegdlee")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode, errorMessage)
  });
}

  return (
      <div>
      <Root>
          <Typography variant='h4' sx={black}>Бүртгүүлэх</Typography>

          <TextField sx={{width:"30ch"}} label="User Name" value={name} onChange={(e) => setName(e.target.value)}/>
          <TextField sx={{width:"30ch"}} label="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>

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
              label="new-Password"
              />
          </FormControl>
          {/* nuuts ug sergeeh, newtreh button  */}

              <Box item>
                <Link variant="body2" sx={black} onClick={() => navigate("/Login")}>{"Already have an account? Sign in"}</Link>
              </Box>

          <Button variant="contained" color="success" onClick={createEmailAndPassword}>Бүртгүүлэх</Button>
      </Root>
    </div>
  );
}
const black = {
  color: "black",
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
export default SignUpCart;