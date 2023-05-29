import React from 'react';
import s from './PizzaConstructor.module.css'
import {IngredientType} from "../../App";
import {IngredientStand} from "./IngredientStand/IngredientStand";


type PizzaConstructorPropsType = {
    ingredient: IngredientType[]
    myPizza: IngredientType[]
    addIngredient: (title: string) => void
    removeIngredient: (id: string) => void
}


export const PizzaConstructor: React.FC<PizzaConstructorPropsType> = (
    {}
) => {


    return (
        <div>
            <div className={s.addPizzaName}>
                <input type="text"/>
                <button>+</button>
            </div>
            <div className={s.wrapperPizzaConstructor}>

                <IngredientStand/>

            </div>
        </div>
    );
};





