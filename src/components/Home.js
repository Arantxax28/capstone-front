import React, {useState} from "react";
import {Link} from "react-router-dom";
import './Home.css';


const Home = (props) => {

const selectMakeup = () => {
    props.getMakeupCallback('http://localhost:8080/products/makeup');
};
const selectSkincare = () => {
    props.getSkincareCallback('http://localhost:8080/products/skincare');
};
const selectSubscriptions = () => {
    props.getSubscriptionCallback('http://localhost:8080/products/subscriptions');
};

const getToday = () => {
    props.getWeekdayCallback();
};

// const resetForm = () => {
//         props.blankMessageCallback();
//     };
return (
<section className="right-side">
    <h1>hello!</h1>
        <section className="category-section">
            <span className="category-header">MY ITEMS</span>
            <section className="categories">
                <Link to="products">
                    <span onClick={selectMakeup}>Makeup</span>
                </Link>
                <Link to="products">
                    <span onClick={selectSkincare}>Skincare</span>
                </Link>
                <Link to="products">
                    <span onClick={selectSubscriptions}>Subscriptions</span>
                </Link>
                <Link to="products">
                    <span className="items">ALL</span>
                </Link>
            </section>
        </section>
        <Link to="new">
            {/*<span onClick={resetForm} className="new-section">ADD NEW PRODUCT</span>*/}
            <span className="new-section">ADD NEW PRODUCT</span>
        </Link>

</section>
);
}
export default Home;