import React from "react";

import { Link } from "react-router-dom";

//const API_KEY = "Your-api-key";
const API_KEY = "c5d0b7659fda1ac0324d7e2a56fe1a40";
class RecipeInfo extends React.Component {
  state ={
    activeRecipe:[]
  }
componentDidMount = async() =>{
const title = this.props.location.state.recipe;
const request = await fetch (`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);
const response = await request.json() 
//console.log (response.recipes[0]);
this.setState({activeRecipe:response.recipes[0]});
console.log(this.state.activeRecipe);
}
  render(){
    //const Rec = this.state.activeRecipe;
    console.log(this.props);
    return(
      <div className="container">
      {this.state.activeRecipe.length !==0 &&
        <div className="active-recipe">
        <img className="active-recipe__img" src={this.state.activeRecipe.image_url} alt={this.state.activeRecipe.title}/>
        
        <h3 className="active-recipe__title">{this.state.activeRecipe.title}</h3>
        <h4 className="active-recipe__publisher"> Publisher: <span> {this.state.activeRecipe.publisher}</span></h4>
        <p className="active-recipe__website">Source Website: <span> <a href={this.state.activeRecipe.publisher_url}>{this.state.activeRecipe.publisher_url}</a></span></p>
        <button className="active-recipe__button"><Link to="/">Go Home</Link></button>
        </div>
      }
      </div>
    )
  }
}
export default RecipeInfo ;