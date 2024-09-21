import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { _ProductList } from "../../../Functions/Products";

// CSS
import '../../../Style/User/Products/Products.css';
import '../../../Style/User/Products/Search.css';

function Products() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selectUser = (state) => state.user;
    const user = useSelector(selectUser);

    // Check if the user is logged in
    useEffect(() => {
      if (!user) {
          navigate('/SignIn');
      }
    }, [user, navigate]);
  
    // Logout function
    const handleLogout = () => {
        dispatch({ type: 'LOGGED_OUT_USERS', payload: null });
        navigate('/');
    };


    // State for products data and pagination
    const [data, setData] = useState([]);
    const [visibleItems, setVisibleItems] = useState(12); // Number of items to display
    const [hasMore, setHasMore] = useState(true); // Check if there are more items to load
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Load data function
    const loadData = useCallback(() => {
        if (loading) return; // Prevent multiple loads
        setLoading(false);

        _ProductList() // Assuming _ProductList fetches all data for now
            .then(res => {
                const newData = res.data;
                setData(newData);
                setHasMore(newData.length > visibleItems); // Check if more items are available
                setLoading(false);
            })
            .catch(err => {
                setError('Failed to load products.');
                console.error(err);
                setLoading(false);
            });
    }, [loading, visibleItems]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    // Handle loading more items
    const loadMoreItems = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 6);
    };

    return (
        <div>
            <div className="Product-Title">Products</div>

            <hr />
            {error && <p className="error-message">{error}</p>}
            {data.length > 0 ? (
                data.slice(0, visibleItems).map((item, index) => (
                    <div key={index}>
                        <Link to={`/ProductsDetail/${item._id}`}>
                            <div className="ProductsList">
                                <div className="card">
                                    <img src={`http://127.0.0.1:8081/api/ProductImages/${item.file}`} alt={item.name} />
                                    <p className="productname">{item.name}</p>
                                    <p className="price">฿{item.price.toLocaleString()}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            ) : (
                <p>No products available.</p>
            )}
            {hasMore && (
                <button
                    className="load-more-button"
                    onClick={loadMoreItems}
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'LOAD MORE'}
                </button>
            )}
        </div>
    );
}

export default Products