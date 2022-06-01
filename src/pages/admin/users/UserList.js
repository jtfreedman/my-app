//import User from './User';
import classes from './UserList.module.css';

export default function UserList(props) {
    return (
        // <ul className={classes.list}>
        //     {props.users.map(user => 
        //     <User 
        //         key={user.id} 
        //         first={user.firstName}
        //         last={user.lastName}
        //         email={user.email}
        //         password={user.password}
        //     />)}
        // </ul>
        <table className={classes.blueTable}>
            <thead>
            <tr>
                <th>Email</th>
                <th>Last Name</th>
                <th>First Name</th>
            </tr>
            </thead>
            <tbody>
                {
                    props.users.map((user) => (
                        <tr key={user.email}>
                            <td>{user.email}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}