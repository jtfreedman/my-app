import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/users/LoginForm';
import classes from './Login.module.css'

function Login() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/signup'; 
        navigate(path);
    }

    return (
        <div className={classes.loginForm}>
            <div className={classes.loginButton}>Login</div>
            <div className={classes.createAccount} onClick={routeChange}>Create Account</div>
            <LoginForm />
        </div>
    );
}

export default Login;