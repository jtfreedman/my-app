import { useNavigate } from 'react-router-dom';
import NewUserForm from '../components/users/NewUserForm';
import classes from './CreateAccount.module.css';

function CreateAccount() {

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


    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/login'; 
        navigate(path);
    }

    return (
        <div className={classes.createAccountForm}>
            <div className={classes.loginButton} onClick={routeChange}>Login</div>
            <div className={classes.createAccount}>Create Account</div>
            <NewUserForm onAddUser={addUserHandler}/>
        </div>
    );
}

export default CreateAccount;