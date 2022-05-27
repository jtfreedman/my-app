import classes from './NewUserForm.module.css';

export default function NewUserForm() {

    function submitHandler(event) {}

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <input className={classes.loginText} type="text" required id="firstName" placeholder="First Name"/>

                <input className={classes.loginText} type="text" required id="lastName" placeholder="Last Name"/>
                
                <input className={classes.loginText} type="text" required id="email" placeholder="Email"/>

                <input className={classes.loginPassword} type="text" required id="password" placeholder="Password"/>

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