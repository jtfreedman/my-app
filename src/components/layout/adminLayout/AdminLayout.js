import classes from './AdminLayout.module.css';
import AdminNavigation from './AdminNavigation';

export default function AdminLayout(props) {
    return (
        <div className={classes.main}>
            <AdminNavigation />
            <main>
                {props.children}
            </main>
        </div>
    );
}