import classes from './HomePage.module.css';
import MainNavigation from '../components/layout/MainNavigation';

function HomePage() {
    return (
        <>
            <MainNavigation />
            <header className={classes.image}>
                <div>Login</div>
            </header>
        </>
    );
}

export default HomePage;