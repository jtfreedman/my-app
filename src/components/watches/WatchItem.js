import classes from './WatchItem.module.css';
import Card from '../ui/Card';

function WatchItem(props) {
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <p>{props.price}</p>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button>Add to Favorites</button>
                </div>
            </Card>
        </li>
    );
}

export default WatchItem;