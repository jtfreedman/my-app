import classes from './LoginHeader.module.css'

function LoginHeader() {
    return (
        <div className={classes.desktop}>
            <span className={classes.desktop__shipping}>Free U.S. Standard Shipping Orders $50+</span>
            <span className={classes.desktop__about}>About Us</span>
            <span className={classes.desktop__locations}>Locations</span>
            <span className={classes.desktop__track}>Track Order</span>
            <span className={classes.desktop__login}>Log In</span>
        </div>
    );
}

export default LoginHeader;