import './styles.scss';
import {BiMenu, FaUserCircle} from "react-icons/all";
import {useNavigate} from "react-router";
import {useSelector} from "react-redux";
import BagButton from "../../BagButton/BagButton";

const MobileHeader = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.User.token !== null)

    return(
        <header className="container2">
            <div className="menu_button">
                <BiMenu color="white" size={35}/>
            </div>
            <div className="Mobile__Logo__Container" onClick={() => {
                navigate('/')
            }}>
                <img className="Mobile__Logo" src="/assets/images/logo.svg"/>
            </div>
            <div style={{ display: 'flex' }}>
                <FaUserCircle  onClick={() => {
                    navigate('/login');
                }} color="white" size={25} style={{ marginRight: '10px' }}/>
                {
                    isLoggedIn && <BagButton/>
                }
            </div>
        </header>
    );
}

export default MobileHeader;