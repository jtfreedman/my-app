import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import WatchList from '../components/watches/WatchList';

function FavoritesPage() {
    const favContext = useContext(FavoritesContext);

    let content;

    if (favContext.total === 0)
    {
        content = <p>You currently have no favorites, start adding some!</p>
    }
    else
    {
        content = <WatchList watches={favContext.favorites} />
    }

    return (
        <section>
            <h2>My Favorites</h2>
            {content}
        </section>
    );
}

export default FavoritesPage;