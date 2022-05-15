import { useNavigate } from 'react-router-dom';
import classes from './LoginHeader.module.css'

function LoginHeader() {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/login'; 
        navigate(path);
    }

    return (
        <div className={classes.desktop}>
            <div>
                <span className={classes.desktop__shipping}>Free U.S. Standard Shipping Orders $50+</span>
            </div>
            <div>
                <span className={classes.desktop__about}>About Us</span>
                <span className={classes.desktop__locations}>Locations</span>
                <span className={classes.desktop__track}>Track Order</span>
                <span className={classes.desktop__login} onClick={routeChange}>Log In</span>
            </div>
            
        </div>
    );
}

export default LoginHeader;