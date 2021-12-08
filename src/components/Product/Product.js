import {API_URL} from "../../config/constants";
import {FaEye, FaShoppingBag, FaStar} from "react-icons/fa";
import {addProductToBag} from "../../redux/actions/bag.actions";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {showModal} from "../../redux/actions/modal.actions";

const Product = ({ p }) => {

    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.User.token !== null);
    const navigate = useNavigate();

    return (
        <div className="product-item">
            <div className="product-single">
                <div className="product-img">
                    <img src={`${API_URL}/products/image/${p.image}`} alt="Product Image"/>
                    <div className="product-status">
                        <span>Nuevo</span>
                        <span>Producto</span>
                    </div>
                    <div className="product-action">
                        <a href="#" onClick={() => {
                            dispatch(showModal({ product: {...p} }))
                        }}><FaEye /></a>
                        <a href="#" onClick={() => {
                            if(!isLoggedIn) return navigate('/login');
                            dispatch(addProductToBag(p._id))
                        }}><FaShoppingBag/></a>
                    </div>
                </div>
                <div className="product-content">
                    <div className="product-title">
                        <h2><a href="">{
                            p.name
                        }</a></h2>
                    </div>
                    <div className="product-ratting">
                        <FaStar color='#D0068C'/>
                        <FaStar color='#D0068C'/>
                        <FaStar color='#D0068C'/>
                        <FaStar color='#D0068C'/>
                        <FaStar color='#D0068C'/>
                    </div>
                    <div className="product-price">
                        <h2>${p.price}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;