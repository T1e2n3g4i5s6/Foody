import { Box, Button} from "@mui/material";
import FoodyImg from "../images/hool.jpeg"
import LoginCart from "../components/LogInCart";
import { styled } from '@mui/material/styles';
const Login = () => {
    return(
        <Root>
            <LoginCart/>
        </Root>
        )
}
const imgStyle = {
    height:"100%",
    width:"100%",
}
const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:"98.1vh",
        width:"auto",
        backgroundImage: `url(${FoodyImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
 
    [theme.breakpoints.up('lg')]: {
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-start",
        height:"100vh",
        width:"100vw",
        backgroundImage: `url(${FoodyImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
  }));
export default Login;