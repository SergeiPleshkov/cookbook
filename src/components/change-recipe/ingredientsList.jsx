import React from "react";

const IngredientsList = (props) => {
    return (
        <div className="add-recipe__added-ingredient-item">
            {props.recipeIngredients.map((elem, index) => (
                <div key={index} onClick={() => props.changeIngredient(index)}>
                    <span className="ingredient-item-name">{elem.ingredientName}</span>
                    <span> - </span>
                    <span className="ingredient-item-quantity">{elem.ingredientQuantity}</span>
                    <span> </span>
                    <span className="ingredient-item-unit">{elem.ingredientUnits}</span>
                </div>
            ))}
        </div> 
    )
}

export default IngredientsList;