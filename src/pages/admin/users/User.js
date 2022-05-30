import classes from './User.module.css';
import TableCard from '../../../components/ui/TableCard';

export default function User(props) {
    return (
        <li className={classes.item}>
            <TableCard>
                <div className={classes.content}>
                    <h3>{props.email}</h3>
                    <p>{props.first}</p>
                    <p>{props.last}</p>
                </div>
            </TableCard>
        </li>
    );
}