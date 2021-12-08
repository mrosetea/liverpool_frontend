import './styles.scss';
import {useDispatch, useSelector} from "react-redux";
import {clearLoginError, doLogin} from "../../redux/actions/user.actions";
import { useForm } from "react-hook-form";
import {useEffect} from "react";
import Swal from 'sweetalert2';
import Header from "../../components/Header/Desktop/Header";
import MobileHeader from "../../components/Header/Mobile/Mobile";
import {useMediaQuery} from "react-responsive";
import {Link} from "react-router-dom";

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => dispatch(doLogin({ username: data.username, password: data.password }));
    const dispatch = useDispatch();
    const error = useSelector(state => state.User.error);
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    useEffect(() => {
        dispatch(clearLoginError());
    }, []);

    useEffect(() => {
        if(error) {
            Swal.fire({
                icon: 'error',
                title: '¡Error!',
                text: error,
            })
                .then(() => {
                    dispatch(clearLoginError())
                })
        }
    }, [error])

    return (
        <>
            { !isMobile && <Header /> }
            { isMobile && <MobileHeader /> }
            <div className="login-page">
                <div className="form">
                    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <label style={{ width: '100%', textAlign: 'left' }}>Usuario</label>
                        <input type="text" placeholder="Usuario" {...register("username")}/>
                        <label style={{ width: '100%', textAlign: 'left' }}>Contraseña</label>
                        <input type="password" placeholder="Contraseña" {...register("password")}/>
                        <p className="message"><a href="#">¿Olvidaste tu contraseña?</a></p>
                        <button type="submit" >Inicia Sesión</button>
                        <p className="message">¿No tienes cuenta? <Link to={'/register'}>Crear cuenta</Link></p>
                        <button style={{ backgroundColor: '#485A96' }}>Inicia Sesión con Facebook</button>
                        <button style={{ backgroundColor: 'gray' }}>Inicia Sesión con APPLE</button>
                    </form>
                </div>
            </div>
        </>

    );
}

export default Login;