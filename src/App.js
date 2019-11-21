import React, {Component} from 'react';
import './App.css';
import Food from "./Components/Ingredients/Food";
import Output from "./Components/Output/Output";
//todo: why do we need 'import meatImage from './assets/meat.png';
//todo: is it ok to add ingredients in dummy order;

const Ingredients = [
    {name: 'Meat', price: 50},
    {name: 'Cheese', price: 20},
    {name: 'Salad', price: 5},
    {name: 'Bacon', price: 30},
];


class App extends Component{
 state = {
  ingredients: [
   {name: 'Meat', count: 1},
   {name: 'Cheese', count: 1},
   {name: 'Salad', count: 1},
   {name: 'Bacon', count: 1}
  ]
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
