import { useNavigate } from 'react-router-dom';
import NewUserForm from '../components/users/NewUserForm';
import classes from './CreateAccount.module.css';

function CreateAccount() {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/login'; 
        navigate(path);
    }

    return (
        <div className={classes.createAccountForm}>
            <div className={classes.loginButton} onClick={routeChange}>Login</div>
            <div className={classes.createAccount}>Create Account</div>
            <NewUserForm />
        </div>
    );
}

export default CreateAccount;