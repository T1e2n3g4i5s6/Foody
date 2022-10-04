import FoodyImg from "../images/hool.jpeg"
import LoginCart from "../components/LogInCart";
import { styled } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
const Login = () => {
    return(
        <Root>
            <CssBaseline/>
            <LoginCart/>
        </Root>
        )
}
const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:"100vh",
        width:"auto",
        backgroundImage: `url(${FoodyImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    [theme.breakpoints.up('sm')]: {
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