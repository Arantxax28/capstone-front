import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import './ProductList.css';

const ProductList = (props) => {
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
                    deleteProductsCallback={props.deleteProductsCallback}
                />
            );
        });
    };
    return (
        <ul className="products__list no-bullet">{getProductListJSX(props.products)}</ul>
    );
};
export default ProductList;