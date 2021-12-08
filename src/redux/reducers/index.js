import { combineReducers } from 'redux';
import User from './user.reducer';
import Products from './products.reducer';
import Loader from './loader.reducer';
import Modal from './modal.reducer';
import Bag from './bag.reducer'

export default combineReducers({
    User,
    Products,
    Loader,
    Modal,
    Bag
});