import { useState } from 'react';
import classes from './LoginForm.module.css'

export default function LoginForm(props) {
    const [currentEmail, setEmail] = useState('');
    const [currentPassword, setPassword] = useState('');

    function emailChangeHandler(event) {
        setEmail(event.target.value);
    };

    function passwordChangeHandler(event) {
        setPassword(event.target.value);
    };

    function submitHandler(event) {
        event.preventDefault();

        const userData = {
            email: currentEmail,
            password: currentPassword
        };

        props.onLogin(userData);

        setEmail('');
        setPassword('');
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <input
                    className={classes.loginText}
                    type="text"
                    required id="email"
                    placeholder="Email"
                    onChange={emailChangeHandler}
                    value={currentEmail}
                />
                <input
                    className={classes.loginPassword}
                    type="text"
                    required id="password"
                    placeholder="Password"
                    onChange={passwordChangeHandler}
                    value={currentPassword}
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