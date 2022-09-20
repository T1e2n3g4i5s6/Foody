import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useFunction } from '../provider/FunctionProvider';
import TextField from "@mui/material/TextField";
import { auth } from '../FireBase/FirebaseConfig';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from '@mui/icons-material';

const style = {
  width:500,
  height:600,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  borderRadius:"20px",
  display:"flex",
  flexDirection:"column",
  transform: 'translate(+180%, +40%)',
  alignItems:"center"
};

const LoginModal = () => {

  const {open,handleClose} = useFunction();

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
  const Set = () => {

  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant='h4'>Нэвтрэх</Typography>
          <TextField sx={{width:"60%"}} label="Email"/>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={(e) => e.preventDefault()}
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
        <Typography>Forgot Password</Typography>
        <Button variant="contained" color="success">Нэвтрэх</Button>
        </Box>
      </Modal>
    </div>
  );
}
export default LoginModal
