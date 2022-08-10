import React, {useState} from "react";
import {Link} from "react-router-dom";
import './Home.css';


const Home = (props) => {

const getMakeup = () => {
    props.getMakeupCallback();
};
const getSkincare = () => {
    props.getSkincareCallback();
};
const getSubscriptions = () => {
    props.getSubscriptionCallback();
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
                    <span className="category-name" onClick={getMakeup}>MAKEUP</span>
                </Link>
                <Link to="products">
                    <span className="category-name" onClick={getSkincare}>SKINCARE</span>
                </Link>
                <Link to="products">
                    <span className="category-name" onClick={getSubscriptions}>SUBSCRIPTIONS</span>
                </Link>
                <Link to="products">
                    <span className="items category-name">ALL</span>
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