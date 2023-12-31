import { useEffect, useState } from "react";
import Header from "../../component/Header/Header";
import './style/style.scss';
import DrinksCard from "./DrinksCard";

function Random(){

    const [RandomDrinks, setRandomDrinks] = useState(null)
    // value of  'RandomDrinks' is null by useState
    // useEffect will help me to choose a value from data in random . also useEffect will help me to use the fumction like useState and .. without class .
    useEffect(()=> {
        // if RandomDrinks is null , undefined , {} or ...
        (async()=>{
            const DrinksRandomResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            // after recieveing the all value from the url it will wait to recive a asking
            const DrinksRandomInJs = await DrinksRandomResponse.json()
            // then here const of the url (DrinksRandomResponse) will save all the values of the Drinks into a .json file (recode)
            setRandomDrinks(DrinksRandomInJs.drinks)
            // console.log will print the data for test . and function setRandomDrinks will take the value of the drinks from object beacuse drinks date are inside a object valuer
        })();
    },[]);
    console.log(RandomDrinks);

    return(
        <>
            <Header />
            <DrinksCard DrinkToDisplay={RandomDrinks} />
        </> 
    )
}
export default Random;

