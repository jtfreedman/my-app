import classes from './User.module.css';
import Card from '../../../components/ui/Card';

function User(props) {
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <p>{props.price}</p>
                    <p>{props.desc}</p>
                </div>
            </Card>
        </li>
    );
}

export default WatchItem;