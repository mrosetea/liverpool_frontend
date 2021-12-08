import RootReducer from './reducers';
import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose} from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['User']
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistedReducer = persistReducer(persistConfig, RootReducer)
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
let persistor = persistStore(store);
export { store, persistor };