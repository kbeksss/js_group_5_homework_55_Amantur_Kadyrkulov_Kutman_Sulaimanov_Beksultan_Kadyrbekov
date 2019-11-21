import React from 'react';
import '../Food.css';
import './Ingredient.css';
import classnames from 'classnames';

import {Ingredients} from "../../../App";

const Ingredient = props => {
    const ing = Ingredients.find(i => i.name === props.name);
    let flag = false;
    if(props.count > 3 ){
        flag = true;
    }
    let buttonAdd = classnames('Button Button_add', {'Red': flag});
    return (
        <div className='block'>
            <img style={{maxWidth: '50px'}} src={ing.image} onClick={props.imageClick} alt='ingredient images'/>
            <h4>{props.name}</h4>
            <button className='Button Button_remove' onClick={props.remove}>-</button>
            <input type="text" value={props.count} onChange={props.change}/>
            <button className={buttonAdd} onClick={props.add}>+</button>
        </div>
    );
};


export default Ingredient;