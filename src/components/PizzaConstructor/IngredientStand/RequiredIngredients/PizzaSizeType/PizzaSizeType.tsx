import React from "react";

export const PizzaSizeType = ()=>{

    return(
        <div>
            <h5>Размер пиццы :</h5>
            <div>
                <span>min</span> <input type="radio" name={'pizzaSize'}/>
                <span>medium</span> <input type="radio" name={'pizzaSize'}/>
                <span>max</span> <input type="radio" name={'pizzaSize'}/>
            </div>

        </div>
    )

}