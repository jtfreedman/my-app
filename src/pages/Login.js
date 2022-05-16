import classes from './Login.module.css'

function Login() {

    function submitHandler(event) {}


    return (
        <div className={classes.loginForm}>
            <div className={classes.loginButton}>Login</div>
            <div className={classes.createAccount}>Create Account</div>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <input className={classes.loginText} type="text" required id="user"/>
                    <input className={classes.loginPassword} type="text" required id="password"/>
                </div>
                <label className={classes.checkboxContainer}>
                    <input className={classes.checkmark} type="checkbox" name="checkbox" value="remember" />
                    <span ></span>
                    <div className={classes.checkmarkText}>Remember Me</div>
                </label>
                <div>
                    <button className={classes.actions}>LOG IN</button>
                    <div className={classes.forgotPassword}>Forgot Password</div>
                </div>
                
            </form>
        </div>
    );
}

export default Login;