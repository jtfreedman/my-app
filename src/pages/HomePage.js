import classes from './HomePage.module.css';

import MainNavigation from '../components/layout/MainNavigation';
import LoginHeader from '../components/ui/LoginHeader';

function HomePage() {
    return (
        <>
            <LoginHeader />
            <MainNavigation />

            <header>
                <div>Login</div>
            </header>
        </>
    );
}

export default HomePage;