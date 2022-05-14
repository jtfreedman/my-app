import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    total: 0,
    addFavorite: (favoriteWatch) => {},
    removeFavorite: (watchID) => {},
    itemIsFavorite: (watchID) => {}
});

function FavoritesContextProvider(props) {

    const [userFavorites, setUserFavorites] = useState();

    function addFavoriteHandler(favoriteWatch) {
        setUserFavorites((peviousUserFavorites) => {
            return peviousUserFavorites.concat(favoriteWatch);
        });
    }

    function removeFavoriteHandler(watchID) {
        setUserFavorites((peviousUserFavorites) => {
            return peviousUserFavorites.filter(watch => watch.id !== watchID);
        });
    }

    function itemIsFavoriteHandler(watchID) {
        return userFavorites.some(watch => watch.id === watchID);
    }
    
    const context = {
        favorites: userFavorites,
        total: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
        );
}