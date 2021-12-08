import './styles.scss';
import {useDispatch, useSelector} from "react-redux";
import {clearLoginError, doRegister} from "../../redux/actions/user.actions";
import { useForm } from "react-hook-form";
import {useEffect} from "react";
import Swal from 'sweetalert2';
import Header from "../../components/Header/Desktop/Header";
import MobileHeader from "../../components/Header/Mobile/Mobile";
import {useMediaQuery} from "react-responsive";
import {useNavigate} from "react-router";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => dispatch(doRegister(data));
    const dispatch = useDispatch();
    const {error, success} = useSelector(state => state.User);
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    useEffect(() => {
        dispatch(clearLoginError());
    }, [])

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

    useEffect(() => {
        if(success){
            Swal.fire({
                icon: 'success',
                title: '¡Éxito!',
                text: "Usuario registrado con éxito",
            })
                .then(() => {
                    dispatch(clearLoginError())
                    navigate('/login');
                })
        }
    }, [success])

    return (
        <>
            { !isMobile && <Header /> }
            { isMobile && <MobileHeader /> }
            <div className="login-page">
                <div className="form">
                    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <label style={{ width: '100%', textAlign: 'left' }}>Nombre</label>
                        <input type="text" placeholder="Nombre" {...register("name")}/>
                        <label style={{ width: '100%', textAlign: 'left' }}>Apellidos</label>
                        <input type="text" placeholder="Apellidos" {...register("lastName")}/>
                        <label style={{ width: '100%', textAlign: 'left' }}>Usuario</label>
                        <input type="text" placeholder="Usuario" {...register("username")}/>
                        <label style={{ width: '100%', textAlign: 'left' }}>Contraseña</label>
                        <input type="password" placeholder="Contraseña" {...register("password")}/>
                        <button type="submit" >Regístrate</button>
                    </form>
                </div>
            </div>
        </>

    );
}

export default Register;