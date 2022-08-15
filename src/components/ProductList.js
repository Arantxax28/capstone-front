import PropTypes from 'prop-types';
import Product from './Product';
import './ProductList.css';
import {Link} from "react-router-dom";

const ProductList = (props) => {
    const getProductsFromApi = () => {
        props.getProductsFromAPICallback();
    };
    const getProductListJSX = (products) => {
        return products.map((product) => {
            return (
                <Product
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    brand={product.brand}
                    category={product.category}
                    price={product.price}
                    purchaseDate={product.purchaseDate}
                    expirationDate={product.expirationDate}
                    daysLeft={product.daysLeft}
                    costPerUse={product.costPerUse}
                    useCount={product.useCount}
                    addOneUseCallback={props.addOneUseCallback}
                    removeOneUseCallback={props.removeOneUseCallback}
                    deleteProductsCallback={props.deleteProductsCallback}
                />
            );
        });
    };
    return (
    <div className="products-page">
        <h2>MY ITEMS</h2>
        <section className="list-header">
            <span>Product</span>
            <span>Brand</span>
            <span>Purchase Date</span>
            <span>Expiration Date</span>
            <span>Price</span>
            <span>Days Left</span>
            <span>Cost Per Use</span>
            <span>Use Count</span>
            <span>Remove</span>
        </section>

        <ul className="item-info">{getProductListJSX(props.products)}</ul>
        <section className="return">
        <Link to="/" className="home-link" onClick={getProductsFromApi}>
            {/*<br />*/}
            Return to Dashboard
        </Link>
        </section>
    </div>
    );


};
export default ProductList;