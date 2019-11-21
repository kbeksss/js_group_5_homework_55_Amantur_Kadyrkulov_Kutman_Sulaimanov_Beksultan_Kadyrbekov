import React, {Component} from 'react';
import './App.css';
import Food from "./Components/Ingredients/Food";
import Output from "./Components/Output/Output";

import meatImage from './assets/burger-cutlet.png';
import lettuce from './assets/lettuce.png';
import cheese from './assets/cheese.png';
import bacon from './assets/bacon.png';

export const Ingredients = [
    {name: 'Meat', price: 50 , image: meatImage},
    {name: 'Cheese', price: 20, image: cheese},
    {name: 'Salad', price: 5, image: lettuce},
    {name: 'Bacon', price: 30, image: bacon},
];


class App extends Component{
 state = {
  ingredients: [
   {name: 'Meat', count: 0},
   {name: 'Cheese', count: 0},
   {name: 'Salad', count: 0},
   {name: 'Bacon', count: 0}
  ]
 };
 addFirst = index => {
     let ingredients = [...this.state.ingredients];
     let food = {...ingredients[index]};
     if(food.count === 0){
         food.count = 1;
     } else {
         food.count = 0;
     }
     ingredients[index] = food;
     this.setState({ingredients});
 };
 add = index => {
    let ingredients = [...this.state.ingredients];
    let food = {...ingredients[index]};
    food.count++;
    ingredients[index] = food;
    this.setState({ingredients})
 };
 changeCount = (event, index) => {
    let ingredients = [...this.state.ingredients];
    let food = {...ingredients[index]};
    food.count = event.target.value;
    ingredients[index] = food;
    this.setState({ingredients});
 };
 decrease = index => {
    let ingredients = [...this.state.ingredients];
    let food = {...ingredients[index]};
    if(food.count > 0){
     food.count--;
     ingredients[index] = food;
     this.setState({ingredients});
    }
 };

 render() {
     let total = 20;
     this.state.ingredients.forEach(ing => {
         if(ing.count >= 1){
             Ingredients.forEach(innerIng => {
                 if(innerIng.name === ing.name){
                     total += ing.count * innerIng.price;
                 }
             })
         }
     });

    return (
       <div className='App'>
         <Food
             imageClick={this.addFirst}
             ingredients={this.state.ingredients}
             add={this.add}
             change={this.changeCount}
             remove={this.decrease}
         />
         <Output
            ingredients={this.state.ingredients}
            price={total}
         />
       </div>
    )
 }
}

export default App;
