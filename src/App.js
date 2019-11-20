import React, {Component} from 'react';
import './App.css';
import Food from "./Components/Ingredients/Food";
import Output from "./Components/Output/Output";
import classnames from "classnames";

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
    return (
       <div className='App'>
         <Food
           ingredients={this.state.ingredients}
           add={this.add}
           change={this.changeCount}
           remove={this.decrease}
         />
         <Output/>
       </div>
    )
 }
}

export default App;
