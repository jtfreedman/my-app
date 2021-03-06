import { useState, useEffect } from 'react';
import UserList from './users/UserList';

import classes from './AllUsers.module.css'

export default function AllUsers() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedUsers, setLoadedUsers] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://my-app-1b537-default-rtdb.firebaseio.com/users.json',
        ).then((response) => {
            return response.json();
        }).then((data) => {
            const users = [];

            for (const key in data)
            {
                const user = 
                {
                    email: key,
                    ...data[key]
                };

                users.push(user);
            }

            setIsLoading(false);
            setLoadedUsers(users);
    
        });
    }, []);

    if (isLoading)
        {
            return (
                <section>
                    <p>Loading...</p>
                </section>
            );
        }

    return (
    <div className={classes.table}>
        <UserList users={loadedUsers}/>
    </div>
    );
}