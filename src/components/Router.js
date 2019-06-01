import React from "react";
import { BrowserRouter, Switch, Route} from  "react-router-dom";
import App from "../App"
import RecipeInfo from "../components/RecipeInfo";

const Router = ()=>(
    <BrowserRouter>
    <Switch>
     <Route path="/" component={App} exact/>
     <Route path="/recipe/:id" component={RecipeInfo}/>
     </Switch>
    </BrowserRouter>
);

export default Router;