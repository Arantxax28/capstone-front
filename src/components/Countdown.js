import PropTypes from 'prop-types';
import ExpiringProduct from './ExpiringProduct';
import './Countdown.css';

const Countdown = (props) => {
    const getProductListJSX = (products) => {
        return products.map((product) => {
            return (
                <ExpiringProduct
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    brand={product.brand}
                    category={product.category}
                    daysLeft={product.daysLeft}
                />
            );
        });
    };
    return (
        <div className="expiring-page">
            <span className="expiring-title">PRODUCTS EXPIRING IN THE NEXT 30 DAYS</span>
            <section className="expiring-header">
                <span>Product</span>
                <span>Brand</span>
                <span>Days Left</span>
            </section>
            <ul className="expiring-info">{getProductListJSX(props.products)}</ul>
        </div>
    );


};
export default Countdown;