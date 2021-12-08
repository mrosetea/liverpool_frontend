import styles from './Search.module.css';
import {AiOutlineSearch} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {getProducts} from "../../redux/actions/products.actions";
import _ from 'lodash';

const Search = ({ query, setQuery }) => {
    const dispatch = useDispatch();
    const quantity = localStorage.getItem('quantity');

    const handleOnChange = (e) => {
        dispatch(getProducts({ pageNumber: 1, quantity: quantity ? quantity : 20, q: e.target.value }))
    };

    return (
        <div className={styles.Search}>
            <input placeholder="Buscar..." onChange={_.debounce(handleOnChange, 500)} className={styles.Input} maxLength={50}/>
            <AiOutlineSearch color={"gray"} size={25}/>
        </div>
    )
}

export default Search;