import * as React from 'react';
import { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useFunction } from '../provider/FunctionProvider';
import { auth } from '../FireBase/FirebaseConfig';

const LoginModal = () => {
  const { open, handleClose } = useFunction();
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant='h4'>Нэвтрэх</Typography>
          <TextField sx={{ width: '30ch' }} label="Email" />

          {/* Password Button */}

          <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
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

          <Typography href="#">Forgot Password</Typography>
          <Button variant="contained" color="success">Нэвтрэх</Button>
        </Box>
      </Modal>
    </div>
  );
}
const style = {
  width: 400,
  height: 450,
  bgcolor: 'silver',
  border: '1px solid #000',
  boxShadow: 24,
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  transform: 'translate(+225%, +50%)',
  alignItems: "center",
  justifyContent: "space-evenly",
};

export default LoginModal;
