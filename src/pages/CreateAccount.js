import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewUserForm from '../components/users/NewUserForm';
import Warning from '../components/users/Warning';
import classes from './CreateAccount.module.css';

function CreateAccount() {
    const [showPasswordWarning, setPasswordWarningState] = useState(false);
    const [showEmailWarning, setEmailWarningState] = useState(false);
    const [createUser, setCreateUserState] = useState(false);

    function addUserHandler(userData) {
        fetch(
            'https://my-app-1b537-default-rtdb.firebaseio.com/users.json',
        ).then((response) => {
            return response.json();
        }).then((data) => {
            for (const key in data)
            {
                const user = 
                {
                    id: key,
                    ...data[key]
                };

                if (userData.email === user.email)
                {
                    setEmailWarningState(true);
                }
                else
                {
                    setCreateUserState(true);
                }
            }
        });

        if (showEmailWarning === false && createUser)
        {
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
    }

    function passwordFailHandler(userData) {
        setPasswordWarningState(true);
    }


    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/login'; 
        navigate(path);
    }

    return (
        <div className={classes.createAccountForm}>
            {showPasswordWarning && <Warning>Passwords do not match.</Warning>}
            {showEmailWarning && <Warning>Email is already taken.</Warning>}
            <div className={classes.loginButton} onClick={routeChange}>Login</div>
            <div className={classes.createAccount}>Create Account</div>
            <NewUserForm onAddUser={addUserHandler} onPasswordFail={passwordFailHandler}/>
        </div>
    );
}

export default CreateAccount;