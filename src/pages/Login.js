import classes from './Login.module.css'

function Login() {
    return (
        <div className={classes.loginForm}>
            <div className={classes.loginButton}>Login</div>
            <div className={classes.createAccount}>Create Account</div>
        </div>
    );
}

export default Login;