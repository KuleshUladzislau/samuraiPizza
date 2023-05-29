import React from "react";
import {PizzaSizeType} from "./PizzaSizeType/PizzaSizeType";
import {DoughType} from "./DoughType/DoughtType";
import {SouseType} from "./SouseType/SouseType";

export const RequiredIngredients = ()=>{

    return(
        <div>
            <PizzaSizeType/>
            <DoughType/>
            <SouseType/>
        </div>
    )

}