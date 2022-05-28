import classes from './LoginForm.module.css'

export default function LoginForm() {
    function submitHandler(event) {}
    
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <input
                    className={classes.loginText}
                    type="text"
                    required id="email"
                    placeholder="Email"
                />
                <input
                    className={classes.loginPassword}
                    type="text"
                    required id="password"
                    placeholder="Password"
                />
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
    );
};