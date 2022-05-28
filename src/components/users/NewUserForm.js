import { useState } from 'react';

import classes from './NewUserForm.module.css';

export default function NewUserForm(props) {
    const [currentFirstName, setFirstName] = useState('');
    const [currentLastName, setLastName] = useState('');
    const [currentEmail, setEmail] = useState('');
    const [currentPassword, setPassword] = useState('');
    const [currentPasswordConfirm, setPasswordConfirm] = useState('');

    function firstNameChangeHandler(event) {
        setFirstName(event.target.value);
    };

    function lastNameChangeHandler(event) {
        setLastName(event.target.value);
    };

    function emailChangeHandler(event) {
        setEmail(event.target.value);
    };

    function passwordChangeHandler(event) {
        setPassword(event.target.value);
    };

    function passwordConfirmChangeHandler(event) {
        setPasswordConfirm(event.target.value);
    };

    function submitHandler(event) {
        event.preventDefault();
        
        const userData = {
            firstName: currentFirstName,
            lastName: currentLastName,
            email: currentEmail,
            password: currentPassword
        };

        if (currentPassword.normalize() === currentPasswordConfirm.normalize()) {
            props.onAddUser(userData);
        }
        else {
            //do something
        }
        
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setPasswordConfirm('');
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <input
                    className={classes.loginText}
                    type="text"
                    required id="firstName"
                    placeholder="First Name"
                    onChange={firstNameChangeHandler}
                    value={currentFirstName}
                />
                <input
                    className={classes.loginText}
                    type="text"
                    required id="lastName"
                    placeholder="Last Name"
                    onChange={lastNameChangeHandler}
                    value={currentLastName}
                />
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
                <input
                    className={classes.loginPassword}
                    type="text"
                    required id="passwordConfirm"
                    placeholder="Confirm Password"
                    onChange={passwordConfirmChangeHandler}
                    value={currentPasswordConfirm}
                />
            </div>
                <label className={classes.checkboxContainer}>
                    <input className={classes.checkmark} type="checkbox" name="checkbox" value="remember"/>
                    <span ></span>
                    <div className={classes.checkmarkText}>I want to recieve promotional emails.</div>
                </label>
            <div>
                <button className={classes.signUp}>SIGN UP</button>
            </div>
        </form>
    );
}