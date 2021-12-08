import styles from './HeaderButtons.module.css';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearLoginError, doLogout} from "../../redux/actions/user.actions";
import BagButton from "../BagButton/BagButton";

const HeaderButtons = () => {
    const isLoggedIn = useSelector(state => state.User.token !== null)
    const dispatch = useDispatch();

    const handleOnClickLogout = () => {
        dispatch(clearLoginError());
        dispatch(doLogout());
    };

    return (
        <div className={styles.Buttons}>
            { isLoggedIn && <Link to={'/admin'}  className={styles.Button}>Registrar Producto</Link> }
            { isLoggedIn ? <a style={{ cursor: 'pointer' }} onClick={handleOnClickLogout} className={styles.Button}>Cerrar Sesión</a> : <Link to={'/login'} className={styles.Button}>Iniciar Sesión</Link> }
            { !isLoggedIn && <Link style={{ cursor: 'pointer' }} to={'/register'} className={styles.Button}>Regístrate</Link> }
            { isLoggedIn && <BagButton /> }
        </div>
    );
}

export default HeaderButtons;