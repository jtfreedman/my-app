import classes from './AdminLayout.module.css';
import AdminNavigation from './AdminNavigation';

export default function AdminLayout(props) {
    return (
        <div>
            <AdminNavigation />
            <main className={classes.main}>
                {props.children}
            </main>
        </div>
    );
}