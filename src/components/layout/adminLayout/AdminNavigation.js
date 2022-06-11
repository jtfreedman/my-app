import { Link } from 'react-router-dom';

import classes from './AdminNavigation.module.css';

export default function AdminNavigation() {

    return (
        <header className={classes.header}>
            <div className={classes.logo}>myAdmin</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/admin/users'>Users</Link>
                    </li>
                    <li>
                        <Link to='/admin/products'>Products</Link>
                    </li>
                    <li>
                        <Link to='/admin/orders'>Orders</Link>
                    </li>
                </ul>  
            </nav>
        </header>
    );
}