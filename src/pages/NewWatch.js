import { useNavigate } from 'react-router-dom';

import NewWatchForm from "../components/watches/NewWatchForm";

function NewWatchPage() {
    const navigate = useNavigate();

    function addWatchHandler(watchData) {
        fetch(
            'https://my-app-1b537-default-rtdb.firebaseio.com/watches.json',
            {
                method: 'POST',
                body: JSON.stringify(watchData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/', {replace:true});
        });
    }

    return (
        <section>
            <h2>Add a New Watch</h2>
            <NewWatchForm onAddWatch={addWatchHandler}/>
        </section>
    );
}

export default NewWatchPage;