import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation()
{
    return (
        <header className={classes.header}>
            <div className={classes.logo}>myWatches</div>
            <nav>
              <ul>
                <li>
                    <Link to='/welcome'>All Watches</Link>
                </li>
                <li>
                    <Link to='/new-watch'>Add New Watch</Link>
                </li>
                <li>
                    <Link to='/favorites'>My Favorites</Link>
                </li>
              </ul>  
            </nav>
        </header>
    );
}

export default MainNavigation;