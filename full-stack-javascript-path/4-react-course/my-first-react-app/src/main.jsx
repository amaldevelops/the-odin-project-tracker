import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import { Quotes } from "./Quotes.jsx";
import { TodaysDate } from "./Date.jsx";
import { ConvertThisHTML } from "./htmlConvert.jsx";
import { HtmlConvert2 } from "./HtmlConvert2.jsx";
import Bio from "./Bio.jsx";
import TodoList from "./Person.jsx";
import AnimalsApp from "./Animals.jsx";
import PackingList from "./PackingList.jsx";
import DrinkList from "./Drinks.jsx";
import List from "./People.jsx";
import RecipeList from "./Reciepies.jsx";
import { Buttons } from "./Buttons.jsx";
import Profile from "./Avatar.jsx"

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Greeting />
    <Quotes />
    <h1>Today's Date:</h1>
    <TodaysDate />
    <ConvertThisHTML />
    <HtmlConvert2 />
    <Bio />
    <TodoList />
    <AnimalsApp />
    <PackingList />
    <DrinkList/>
    <List/>
    <RecipeList/>
    <Buttons text="Button1" color="red" fontSize={12}/>
    <Buttons text="Button2" color="yellow" fontSize={12}/>
    <Buttons text="Click Me!" color="blue" fontSize={20} />
    <Buttons/>
    <Profile/>
  </StrictMode>

);
