import './App.scss';
import { useMediaQuery } from 'react-responsive'

import Header from "./components/Header/Desktop/Header";
import MobileHeader from "./components/Header/Mobile/Mobile";
import Login from "./containers/Login/Login";
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import Home from "./containers/Home/Home";
import {useSelector} from "react-redux";
import LoaderComponent from "./components/LoaderComponent/LoaderComponent";
import Admin from "./containers/Admin";
import Register from "./containers/Register";
import ModalProductDetail from "./components/ModalProductDetail/ModalProductDetail";
import ModalBag from "./components/ModalBag/ModalBag";

function App() {
    const isLoggedIn = useSelector(state => state.User.token !== null);
    const loading = useSelector(state => state.Loader.loading);

    return (
    <div className="App">
        {
            loading && <LoaderComponent />
        }
        <BrowserRouter>
            <ModalProductDetail />
            <ModalBag />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to={'/'}/>} />
                <Route path="/register" element={!isLoggedIn ? <Register /> : <Navigate to={'/'}/>} />
                <Route path="/admin" element={isLoggedIn ? <Admin /> : <Navigate to={'/'}/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
