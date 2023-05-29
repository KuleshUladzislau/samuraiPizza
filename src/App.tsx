import React, {useState} from 'react';
import './App.css';
import {PizzaConstructor} from "./components/PizzaConstructor/PizzaConstructor";
import {Pizzas} from "./components/Pizzas/Pizzas";
import {Reviews} from "./components/Reviews/Reviews";
import {ShoppingCart} from "./components/ShoppingCart/ShoppingCart";
import {AboutUs} from "./components/AboutUS/AboutUS";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NavBar} from "./components/NavBar/NavBar";
import {v1} from "uuid";


export type IngredientType = {
    id: string
    title: string
}


function App() {

    const [ingredient, setIngredient] = useState<IngredientType[]>([
        {id: v1(), title: 'mashrooms'},
        {id: v1(), title: 'mashrooms'},
        {id: v1(), title: 'mashrooms'},
        {id: v1(), title: 'mashrooms'},
        {id: v1(), title: 'mashrooms'},
        {id: v1(), title: 'mashrooms'}
    ])
    const [myPizza, setMyPizza] = useState<IngredientType[]>([])

    const addIngredient = (title: string) => {
        let newIngredient = {id: v1(), title}
        setMyPizza([...myPizza, newIngredient])
    }

    const removeIngredient = (id: string) => {
        setMyPizza(myPizza.filter(i => i.id !== id))
    }


    return (
        <BrowserRouter>
            <div className="App">
                <div className={'header'}>
                    <NavBar/>
                </div>
                <div className={'container'}>


                    <div className={'main'}>
                        <Routes>
                            <Route path={'/pizzaConstructor'} element={<PizzaConstructor
                                ingredient={ingredient}
                                myPizza={myPizza}
                                addIngredient={addIngredient}
                                removeIngredient={removeIngredient}
                            />}
                            />
                            <Route path={'/pizzas'} element={<Pizzas/>}/>
                            <Route path={'/reviews'} element={<Reviews/>}/>
                            <Route path={'/shoppingCart'} element={<ShoppingCart/>}/>
                            <Route path={'/aboutUs'} element={<AboutUs/>}/>
                        </Routes>

                    </div>

                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
