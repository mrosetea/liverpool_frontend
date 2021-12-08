import styles from "../HeaderButtons/HeaderButtons.module.css";
import {BsFillBagFill} from "react-icons/bs";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBag, showBagModal} from "../../redux/actions/bag.actions";

const BagButton = () => {
    const dispatch = useDispatch();
    const bag = useSelector(state => state.Bag.bag);
    useEffect(() => {
        dispatch(getBag())
    }, [])
    return(
        <div className={styles.BagContainer} onClick={() => dispatch(showBagModal())}>
            <div className={styles.Bag}>
                <BsFillBagFill color="white" size={25}/>
            </div>
            {
               bag && <div className={styles.Badge}>
                    { bag.length }
                </div>
            }
        </div>
    )
}

export default BagButton;