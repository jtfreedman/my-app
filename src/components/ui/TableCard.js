import classes from './TableCard.module.css';

export default function TableCard(props) {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    );
}