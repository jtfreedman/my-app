import User from './User';
import classes from './UserList.module.css';

export default function UserList(props) {
    return (
        <ul className={classes.list}>
            {props.users.map(user => 
            <User 
                key={user.id} 
                first={user.firstName}
                last={user.lastName}
                email={user.email}
                password={user.password}
            />)}
        </ul>
    );
}