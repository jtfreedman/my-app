import classes from './HomePage.module.css';
import MainNavigation from '../components/layout/MainNavigation';

function HomePage() {
    return (
        <>
            <div className={classes.desktop}>
                <span className={classes.desktop__shipping}>Free U.S. Standard Shipping Orders $50+</span>
                <span className={classes.desktop__about}>About Us</span>
                <span className={classes.desktop__locations}>Locations</span>
                <span className={classes.desktop__track}>Track Order</span>
                <span className={classes.desktop__login}>Log In</span>
            </div>

            <MainNavigation />

            <header className={classes.image}>
                <div>Login</div>
            </header>
        </>
    );
}

export default HomePage;