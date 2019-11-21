import React from 'react';
import '../Food.css';
import './Ingredient.css';

const Ingredient = props => {
    return (
        <div className='block'>
            <h4>{props.name}</h4>
            <button className='Button Button_remove' onClick={props.remove}>-</button>
            <input type="text" value={props.count} onChange={props.change}/>
            <button className='Button  Button_add' onClick={props.add}>+</button>
        </div>
    );

};


export default Ingredient;