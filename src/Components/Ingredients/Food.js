import React from 'react';
import './Food.css';
import Ingredient from "./Ingredient/Ingredient";

const Food = props => {
        return (
            <div className='Food'>
                {props.ingredients.map((ingredient, index) => (
                    <Ingredient
                        key={index}
                        name={ingredient.name}
                        remove={() => props.remove(index)}
                        count={ingredient.count}
                        change={(event) => props.change(event, index)}
                        add={() => props.add(index)}
                    />
                ))}
            </div>
        );
};

export default Food;