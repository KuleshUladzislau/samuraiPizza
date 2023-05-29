import React from 'react';
import s from './IngredientStand.module.css'
import {RequiredIngredients} from "./RequiredIngredients/RequiredIngredients";
import {SeafoodBox} from "./AdditionalIngredients/SeafoodBox/SeafoodBox";
import {MeatBox} from "./AdditionalIngredients/MeatBox/MetaBox";
import {VegetablesBox} from "./AdditionalIngredients/VegetablesBox/VagetablesBox";
import {CheeseBox} from "./AdditionalIngredients/CheeseBox/CheeseBox";


export const IngredientStand = () => {
    return (
        <div className={s.wrapperIngredientStand}>
            <div>
                <h3>Основные ингредиенты</h3>
                <RequiredIngredients/>
            </div>
            <hr/>
            <div>
                <h3>Дополнительные ингредиенты:</h3>
                <div>
                    <MeatBox/>
                    <VegetablesBox/>
                    <CheeseBox/>
                    <SeafoodBox/>
                </div>
            </div>


        </div>
    );
};


























