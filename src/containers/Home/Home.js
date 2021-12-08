import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../redux/actions/products.actions";
import './styles.scss'
import "typeface-roboto";
import Header from "../../components/Header/Desktop/Header";
import MobileHeader from "../../components/Header/Mobile/Mobile";
import {useMediaQuery} from "react-responsive";
import Product from "../../components/Product/Product";
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
    const dispatch = useDispatch();
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const data  = useSelector(state => state.Products.data);
    const [query, setQuery] = useState("");
    useEffect(() => {
        const quantity = localStorage.getItem('quantity');
        dispatch(getProducts({quantity: quantity ? quantity : 20 }));
    }, [])

    const renderHeader = () => {
        if(isMobile) return <MobileHeader query={query} setQuery={setQuery}/>;
        return <Header />
    }

    return (
        <>
            { renderHeader() }
            <div style={{ width: '100%', padding: '50px' }}>
                <div className="grid">
                    <div className="product-grid grid-1">
                        {
                            data && data.products.map((p) => (
                                <Product p={p}/>
                            ))
                        }
                    </div>
                    {
                        data && <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',marginBottom: '20px' }}>
                            <Pagination setQuery={setQuery}/>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default Home