import WatchItem from './WatchItem';
import classes from './WatchList.module.css';

function WatchList(props) {
    return (
        <ul className={classes.list}>
            {props.watches.map(watch => 
            <WatchItem 
                key={watch.id} 
                id={watch.id} 
                image={watch.image} 
                title={watch.title}
                description={watch.description}
                price={watch.price}/>)}
        </ul>
    );
}

export default WatchList;