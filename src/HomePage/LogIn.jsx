import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useFunction } from '../provider/FunctionProvider';

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
};
const LoginModal = () => {

    const {open, setOpen, handleClose, handleOpen} = useFunction();
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>Нэвтрэх</Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default LoginModal
