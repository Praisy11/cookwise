import React , {Component}from 'react';
/*import logo from './logo.svg';*/  
//import { Carousel } from "react-responsive-carousel";
import './App.css';
import Form from "./components/Form"
import Recipes from "./components/Recipes"

const API_KEY = "f14993137a1634edc70b081cba6f9413";

  class App extends Component{

    state={
     recipes:[]

    }
    getRecipe= async (event)=>  {
      const recipeName = event.target.elements.recipeName.value
      event.preventDefault();

      const api_call = await fetch (`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=12`);
/*console.log ("Yay i got it!!!");*/
console.log (recipeName);

const result = await api_call.json();
this.setState({recipes:result.recipes});
console.log(this.state.recipes);
/*console.log(result.recipes[0].recipe_id);*/

/*componentDidMount = () => {
  const json = localStorage.getItem("recipes");
  const recipes = JSON.parse(json);
  this.setState({ recipes });
}
componentDidUpdate = () => {
  const recipes = JSON.stringify(this.state.recipes);
  localStorage.setItem("recipes", recipes);
}*/


    }
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Web2Table Recipe Search</h1>
          </header>
          <Form getRecipe={this.getRecipe} />
          <Recipes recipes={this.state.recipes} />
        </div>
      );
    }
  }
  
  export default App;