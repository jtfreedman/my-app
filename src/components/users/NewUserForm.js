import { useRef } from 'react';

import classes from './NewUserForm.module.css';

export default function NewUserForm(props) {
    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    //const promotionalInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredFirstName = firstNameInputRef.current.value;
        const enteredLastName = lastNameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        const userData = {
            firstName: enteredFirstName,
            lastName: enteredLastName,
            email: enteredEmail,
            password: enteredPassword
        };

        props.onAddUser(userData);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <input className={classes.loginText} type="text" required id="firstName" placeholder="First Name" ref={firstNameInputRef}/>

                <input className={classes.loginText} type="text" required id="lastName" placeholder="Last Name"  ref={lastNameInputRef}/>
                
                <input className={classes.loginText} type="text" required id="email" placeholder="Email"  ref={emailInputRef}/>

                <input className={classes.loginPassword} type="text" required id="password" placeholder="Password"  ref={passwordInputRef}/>

                <input className={classes.loginPassword} type="text" required id="passwordConfirm" placeholder="Confirm Password"/>
            </div>
            <label className={classes.checkboxContainer}>
                <input className={classes.checkmark} type="checkbox" name="checkbox" value="remember" />
                <span ></span>
                <div className={classes.checkmarkText}>I want to recieve promotional emails.</div>
            </label>
            <div>
                <button className={classes.signUp}>SIGN UP</button>
            </div>
        </form>
    );
}