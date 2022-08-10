import React from "react";
import {Link} from "react-router-dom";
import './Home.css';


const Home = (props) => {
const selectMakeup = () => {
    props.getMakeupCallback();
};
const selectSkincare = () => {
    props.getSkincareCallback();
};
const selectSubscriptions = () => {
    props.getSubscriptionCallback();
};
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
            <span className="new-section">ADD NEW PRODUCT</span>
        </Link>

</section>
);
}
export default Home;