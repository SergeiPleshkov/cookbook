import React, { Component } from 'react';
import './app.css';

import {Route, /*Switch,*/ HashRouter} from "react-router-dom";

import Category from "./category/category";
import AddCategory from "./add-category/addCategory";
import ChangeCategory from "./change-category/changeCategory";
import Recipe from "./recipe/recipe";
import AddRecipe from "./add-recipe/addRecipe";
import ChangeRecipe from "./change-recipe/changeRecipe";
import Home from "./home/home";
import Menu from "./menu/menu";



class App extends Component {
  	render() {
        return (
            <HashRouter>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/change-category" component={ChangeCategory} />
                    <Route path="/add-category" component={AddCategory} />
                    <Route path="/change-recipe" component={ChangeRecipe} />
                    <Route path="/add-recipe" component={AddRecipe} />
                    <Route path="/recipe" component={Recipe} />
                    <Route path="/category" component={Category} />
                    <Route path="/menu" component={Menu} />
                </div>
            </HashRouter>
        );
    }
}

export default App;

