import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {clearProducts, saveProduct} from "../../redux/actions/products.actions";
import {useEffect} from "react";
import Swal from "sweetalert2";
import {useNavigate} from "react-router";
import {useMediaQuery} from "react-responsive";
import Header from "../../components/Header/Desktop/Header";
import MobileHeader from "../../components/Header/Mobile/Mobile";

const Admin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => dispatch(saveProduct(data))
    const {success, error} = useSelector(state => state.Products);
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    useEffect(() => {
        if(success){
            Swal.fire({
                icon: 'success',
                title: '¡Éxito!',
                text: 'Producto registrado con éxito.',
            })
                .then(() => {
                    dispatch(clearProducts());
                    navigate('/')
                })
        }
    }, [success])

    useEffect(() => {
        if(error){
            Swal.fire({
                icon: 'error',
                title: '¡Error!',
                text: 'Error al registrar el producto, compruebe que todos los campos son correctos.',
            })
                .then(() => {
                    dispatch(clearProducts());
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
                        <label style={{ width: '100%', display: 'flex' }}>Nombre</label>
                        <input type="text" placeholder="Nombre" {...register("name")}/>
                        <label style={{ width: '100%', display: 'flex' }}>Image</label>
                        <input type="file" placeholder="Contraseña" {...register("image")}/>
                        <label style={{ width: '100%', display: 'flex' }}>Precio</label>
                        <input type="number" placeholder="Precio" {...register("price")}/>
                        <button type="submit" >Registrar producto</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Admin;