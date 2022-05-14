import { Link } from 'react-router-dom';
import { useContext } from 'react';

import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation()
{
    const favContext = useContext(FavoritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>myWatches</div>
            <nav>
              <ul>
                <li>
                    <Link to='/all-watches'>All Watches</Link>
                </li>
                <li>
                    <Link to='/new-watch'>Add New Watch</Link>
                </li>
                <li>
                    <Link to='/favorites'>
                        My Favorites 
                        <span className={classes.badge}>{favContext.total}</span>
                    </Link>
                </li>
              </ul>  
            </nav>
        </header>
    );
}

export default MainNavigation;