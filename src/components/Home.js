import React, {useState} from "react";
import {Link} from "react-router-dom";
import './Home.css';
import CategoryPie from "./CategoryPie";
import Countdown from "./Countdown";
import UsePie from "./UsePie";



const Home = (props) => {

const getProductsFromApi = () => {
    props.getProductsFromAPICallback();
};
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

console.log('home',props.makeupItems)
// const resetForm = () => {
//         props.blankMessageCallback();
//     };
return (
<div className="home-page">
    <h1>hello!</h1>
    <section className="section-container">
        <section className="right-side">
                <section className="category-section">
                    <span className="category-header">MY ITEMS</span>
                    <section className="categories">
                        {/*<section className="categories-top">*/}
                        <Link to="products">
                            <span className="category-name" onClick={getMakeup}>MAKEUP</span>
                        </Link>
                        <Link to="products">
                            <span className="category-name" onClick={getSkincare}>SKINCARE</span>
                        </Link>
                        {/*</section>*/}
                        {/*<section className="categories-bottom">*/}
                        <Link to="products">
                            <span className="category-name" onClick={getSubscriptions}>SUBSCRIPTIONS</span>
                        </Link>
                        <Link to="products">
                            <span className="items category-name" onClick={getProductsFromApi}>ALL</span>
                        </Link>
                        {/*</section>*/}
                    </section>
                </section>
                <Link to="new">
                    {/*<span onClick={resetForm} className="new-section">ADD NEW PRODUCT</span>*/}
                    <span className="new-section">ADD NEW ITEM</span>
                </Link>

        </section>
        <section className="left-side">
            <section className="chart-section">
                <CategoryPie makeup={props.makeupItems} skincare={props.skincareItems} subscriptions={props.subscriptionItems}/>
                <UsePie all={props.sumCount} makeup={props.makeupCount} skincare={props.skincareCount} subscriptions={props.subscriptionsCount} />
            </section>
            <Countdown products={props.expiring} />

        </section>
    </section>
</div>
);
}
export default Home;