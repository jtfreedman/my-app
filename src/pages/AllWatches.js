import { useState, useEffect } from 'react';

import WatchList from "../components/watches/WatchList";
import classes from './AllWatches.module.css';

function AllWatchesPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedWatches, setLoadedWatches] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://my-app-1b537-default-rtdb.firebaseio.com/watches.json',
        ).then((response) => {
            return response.json();
        }).then((data) => {
            const watches = [];

            for (const key in data)
            {
                const watch = 
                {
                    id: key,
                    ...data[key]
                };

                watches.push(watch);
            }

            setIsLoading(false);
            setLoadedWatches(watches);
    
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
    <section>
        <h1 className={classes.h1}>All Watches</h1>
        <WatchList watches={loadedWatches}/>
        
    </section>
    );
}

export default AllWatchesPage;