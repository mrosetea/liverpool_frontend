import {FaWindowClose} from "react-icons/all";
import {API_URL} from "../../config/constants";
import {deleteFromBag, hideBagModal} from "../../redux/actions/bag.actions";
import {useDispatch, useSelector} from "react-redux";
import './styles.scss';

const ModalBag = () => {

    const bag = useSelector(state => state.Bag);
    const dispatch = useDispatch();

    if(!bag.show) return null;

    const calculateTotal = (products) => {
        const total = products.reduce((previous, current) => previous + current.price, 0);
        return {
            subtotal: total * .84,
            iva: total * .16,
            total,
        }
    }

    const renderProducts = () => {
        return bag.bag.map(p => (
            <div style={{ width: '100%', height: '200px', margin: '20px', display: 'flex', flexDirection: 'row'  }}>
                <div style={{ height: '100%', width: '180px' }}>
                    <img style={{ height: '100%', width: '100%', objectFit: 'cover' }} src={`${API_URL}/products/image/${p.image}`} alt=""/>
                </div>
                <div style={{ height: '100%', width: '700px', display: 'flex', justifyContent: 'center', flexDirection: 'column', marginLeft: '20px' }}>
                    <h3>{p.name}</h3>
                    <h3>${p.price}</h3>
                </div>
                <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                    <button type="button" onClick={() => {
                        dispatch(deleteFromBag(p._id))
                    }}>Eliminar</button>
                </div>
            </div>
        ));
    };

    return (
        <>
            <div className="BackgroundOpacity"/>
            <div className="ModalBag">
                <div className="ModalBagContainer">
                    <div className="ExitButtonContainer">
                        <FaWindowClose size={20} color="#C81685" style={{ cursor: 'pointer' }} onClick={() => dispatch(hideBagModal())}/>
                    </div>
                    <div className="Content">
                        <div style={{ flex: 3, height: '90%', overflow: 'scroll' }}>
                            { bag.bag.length === 0 && (
                                <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <h3>Tú carrito está vacío.</h3>
                                </div>
                            ) }
                            {
                                bag.bag.length > 0 && renderProducts()
                            }
                        </div>
                        <div style={{ flex: 1, height: '90%', marginTop: '30px' ,color: '' }}>
                            <h3>Subtotal: ${ calculateTotal(bag.bag).subtotal }</h3>
                            <h3>IVA: ${ calculateTotal(bag.bag).iva }</h3>
                            <h3>Total: ${ calculateTotal(bag.bag).total }</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalBag;