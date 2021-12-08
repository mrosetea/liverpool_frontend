import styles from './Header.module.css';
import Search from "../../Search";
import HeaderButtons from "../../HeaderButtons/HeaderButtons";
import "typeface-roboto";
import {useNavigate, useLocation} from "react-router";

const Header = ({ setQuery, query }) => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <header className={styles.container}>
           <div className={styles.offset}>
               <div style={{ cursor: 'pointer' }} className={styles.logo_container} onClick={() => {
                   navigate('/')
               }}>
                   <img className={styles.logo} src="/assets/images/logo.svg"/>
               </div>
               <div className={styles.search_container}>
                   { location.pathname === '/' && <Search setQuery={setQuery} query={query}/> }
               </div>
               <div className={styles.buttons_container}>
                    <HeaderButtons  />
               </div>
           </div>
        </header>
    );
};

export default Header;