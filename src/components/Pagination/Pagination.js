import {getProducts} from "../../redux/actions/products.actions";
import {useDispatch, useSelector} from "react-redux";

const Pagination = ({ setQuery }) => {
    const data  = useSelector(state => state.Products.data);
    const dispatch = useDispatch();

    const renderPages = () => {
        return Array(data.pagesLength).fill(0).map((_, i) => <a key={i} href="#" className={data.currentPage === (i+1) ? 'active' : ''} onClick={() => {
            dispatch(getProducts({ pageNumber: i + 1, quantity: data.productsPerPage }))
        }}>{i + 1}</a>)
    }

    const renderQuantityOptions = () => {
        return (
            <select defaultValue={data.productsPerPage} onChange={(e) => {
                localStorage.setItem('quantity', +e.target.value);
                setQuery("");
                dispatch(getProducts({quantity: +e.target.value}))
            }}>
                <option>5</option>
                <option>10</option>
                <option>20</option>
                <option>40</option>
            </select>
        )
    }

    return (
        <>
            { renderQuantityOptions() }
            <div className="pagination">
                <a href="#" onClick={() => {
                    if(data.currentPage > 1) dispatch(getProducts({pageNumber: data.currentPage - 1, quantity: data.productsPerPage}))
                }}>&laquo;</a>
                {
                    renderPages()
                }
                {
                    <a href="#" onClick={() => {
                        if(data.currentPage < data.pagesLength) dispatch(getProducts({pageNumber: data.currentPage + 1, quantity: data.productsPerPage}))
                    }}>&raquo;</a>
                }
            </div>
        </>
    )
};

export default Pagination;