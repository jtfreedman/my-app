import { useRef, useState } from 'react';

import classes from './NewUserForm.module.css';

export default function NewUserForm(props) {
    // const [userInput, setUserInput] = useState({
    //     currentFirstName: '',
    //     currentLastName: '',
    //     currentEmail: '',
    //     currentPassword: '',
    //     currentPasswordConfirm: ''
    // })

    const [currentFirstName, setFirstName] = useState('');
    const [currentLastName, setLastName] = useState('');
    const [currentEmail, setEmail] = useState('');
    const [currentPassword, setPassword] = useState('');
    const [currentPasswordConfirm, setPasswordConfirm] = useState('');

    function firstNameChangeHandler(event) {
        // setUserInput((prevState) => {
        //     return { ...prevState, currentFirstName: event.target.value };
        // });
        setFirstName(event.target.value);
    };

    function lastNameChangeHandler(event) {
        // setUserInput((prevState) => {
        //     return { ...prevState, currentLastName: event.target.value };
        // });
        setLastName(event.target.value);
    };

    function emailChangeHandler(event) {
        // setUserInput((prevState) => {
        //     return { ...prevState, currentEmailName: event.target.value };
        // });
        setEmail(event.target.value);
    };

    function passwordChangeHandler(event) {
        // setUserInput((prevState) => {
        //     return { ...prevState, currentPassword: event.target.value };
        // });
        setPassword(event.target.value);
    };

    function passwordConfirmChangeHandler(event) {
        // setUserInput((prevState) => {
        //     return { ...prevState, currentPasswordConfirm: event.target.value };
        // });
        setPasswordConfirm(event.target.value);
    };

    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const passwordConfirmInputRef = useRef();
    const promotionalInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredFirstName = firstNameInputRef.current.value;
        const enteredLastName = lastNameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredPasswordConfirm = passwordConfirmInputRef.current.value;
        const enteredPromoOption = promotionalInputRef.current.value;
        
        const userData = {
            firstName: enteredFirstName,
            lastName: enteredLastName,
            email: enteredEmail,
            password: enteredPassword,
            promo: enteredPromoOption
        };

        if (enteredPassword.normalize() === enteredPasswordConfirm.normalize()) {
            props.onAddUser(userData);
        }
        else {
            //do something
        }
        
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <input className={classes.loginText} type="text" required id="firstName" placeholder="First Name" ref={firstNameInputRef} onChange={firstNameChangeHandler}/>

                <input className={classes.loginText} type="text" required id="lastName" placeholder="Last Name"  ref={lastNameInputRef} onChange={lastNameChangeHandler}/>
                
                <input className={classes.loginText} type="text" required id="email" placeholder="Email"  ref={emailInputRef} onChange={emailChangeHandler}/>

                <input className={classes.loginPassword} type="text" required id="password" placeholder="Password"  ref={passwordInputRef} onChange={passwordChangeHandler}/>

                <input className={classes.loginPassword} type="text" required id="passwordConfirm" placeholder="Confirm Password" ref={passwordConfirmInputRef} onChange={passwordConfirmChangeHandler}/>
            </div>
            <label className={classes.checkboxContainer}>
                <input className={classes.checkmark} type="checkbox" name="checkbox" value="remember" ref={promotionalInputRef}/>
                <span ></span>
                <div className={classes.checkmarkText}>I want to recieve promotional emails.</div>
            </label>
            <div>
                <button className={classes.signUp}>SIGN UP</button>
            </div>
        </form>
    );
}