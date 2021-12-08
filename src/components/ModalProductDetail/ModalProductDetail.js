import {FaWindowClose} from "react-icons/all";
import {useDispatch, useSelector} from "react-redux";
import {hideModal} from "../../redux/actions/modal.actions";
import {API_URL} from "../../config/constants";
import './styles.scss'
import {addProductToBag} from "../../redux/actions/bag.actions";
import {useNavigate} from "react-router";

const ModalProductDetail = () => {

    const modal = useSelector(state => state.Modal);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.User.token !== null);

    if(!modal.showing) return null;

    return (
        <>
            <div style={{ position: 'fixed', height: '100vh', width: '100vw', backgroundColor: 'black', opacity: '.5', zIndex: '999' }}/>
            <div style={{ position: 'fixed', height: '100vh', width: '100vw', zIndex: '1000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ backgroundColor: 'white', borderRadius: '5px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
                        <FaWindowClose size={20} color="#C81685" style={{ cursor: 'pointer' }} onClick={() => dispatch(hideModal())}/>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ height: '300px', display: 'flex', justifyContent: 'center', padding: '0 100px 0 100px' }}>
                            <img style={{ height: '100%' }} src={`${API_URL}/products/image/${modal.product.image}`}/>
                        </div>
                        <div style={{ flex: 1, margin: '10px 10px 0 10px' }}>
                            <h3 style={{ color: '#C81685' }}>
                                { modal.product.name }
                            </h3>
                        </div>
                        <div style={{ flex: 1, margin: '0 10px 0 10px', color: '#73787A' }}>
                            <h4>${ modal.product.price }</h4>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button onClick={() => {
                                if(!isLoggedIn) {
                                    dispatch(hideModal())
                                    return navigate('/login');
                                }
                                dispatch(addProductToBag(modal.product._id))
                            }}>Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalProductDetail;