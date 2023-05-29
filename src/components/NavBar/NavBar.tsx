import React from 'react';
import {Link} from "react-router-dom";
import s from './NavBar.module.css'

export const NavBar = () => {
    return (
        <div className={s.wrapperNav}>
            <ul className={s.NavList}>
                <li>
                    <Link to={'/pizzaConstructor'}>PizzaConstructor</Link>
                </li>
                <li>
                    <Link to={'pizzas'}>Pizzas</Link>
                </li>
                <li>
                    <Link to={'reviews'}>Reviews</Link>
                </li>
                <li>
                    <Link to={'/shoppingCart'}>ShoppingCart</Link>
                </li>
                <li>
                    <Link to={'/aboutUs'}>AboutUs</Link>
                </li>
            </ul>

        </div>
    );
};


