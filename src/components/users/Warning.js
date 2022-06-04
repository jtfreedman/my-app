import classes from './Warning.module.css'

export default function Warning(props) {
    return (
        <div className={classes.warning}>{props.children}</div>
    );
}