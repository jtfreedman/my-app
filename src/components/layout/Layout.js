import LoginHeader from '../ui/LoginHeader';
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

function Layout(props) {
    return (
        <div>
            <LoginHeader />
            <MainNavigation />
            <main className={classes.main}>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;