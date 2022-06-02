import classes from './PasswordWarning.module.css'

export default function PasswordWarning() {
    return (
        <div className={classes.warning}>Passwords do not match</div>
    );
}