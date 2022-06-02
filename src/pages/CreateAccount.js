import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewUserForm from '../components/users/NewUserForm';
import PasswordWarning from '../components/users/PasswordWarning';
import classes from './CreateAccount.module.css';

function CreateAccount() {
    const [showWarning, setWarningState] = useState(false);

    function addUserHandler(userData) {
        fetch(
            'https://my-app-1b537-default-rtdb.firebaseio.com/users.json',
            {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/', {replace:true});
        });
    }

    function passwordFailHandler(userData) {
        setWarningState(true);
    }


    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/login'; 
        navigate(path);
    }

    return (
        <div className={classes.createAccountForm}>
            {showWarning && <PasswordWarning/>}
            <div className={classes.loginButton} onClick={routeChange}>Login</div>
            <div className={classes.createAccount}>Create Account</div>
            <NewUserForm onAddUser={addUserHandler} onPasswordFail={passwordFailHandler}/>
        </div>
    );
}

export default CreateAccount;