import React from 'react';
import './Output.css';

const Output = (props) => {
    let ingredients = props.ingredients.map(ing => {
        const ingComponents = [];
        for(let i = 0; i < ing.count; i++){
            ingComponents.push(<div key={ing.name + i} className={ing.name}/>)
         }
        return ingComponents;
    }).flat();


    return (
       <div className='Output'>
           <div className="Burger">
               <div className="BreadTop">
                   <div className="Seeds1"/>
                   <div className="Seeds2"/>
               </div>
               {ingredients}
               <div className="BreadBottom"/>
           </div>
           <div className='Price'>
               Price: {props.price} soms
           </div>
       </div>
    );
};

export default Output;