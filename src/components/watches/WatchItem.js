import { useContext } from 'react';

import classes from './WatchItem.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';

function WatchItem(props) {
    const favContext = useContext(FavoritesContext);

    const itemIsFavorite = favContext.itemIsFavorite(props.id);

    function toggleFavoriteHandler() {
        if (itemIsFavorite)
        {
            favContext.removeFavorite(props.id)
        }
        else
        {
            favContext.addFavorite({
                id: props.id,
                title: props.title,
                price: props.price,
                image: props.image, 
                desc: props.desc
            })
        }
    }


    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <p>{props.price}</p>
                    <p>{props.desc}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteHandler}>{itemIsFavorite ? 'Remove fom List' : "Add to Favorite"}</button>
                </div>
            </Card>
        </li>
    );
}

export default WatchItem;