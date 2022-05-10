import { Link } from 'react-router-dom';

function MainNavigation()
{
    return (
        <header>
            <div>Watches</div>
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