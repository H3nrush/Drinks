import { useEffect, useState } from "react";
import Header from "../component/Header/Header";
import { Link } from "react-router-dom";

function DrinksAll (){
    const [DrinksAll, setDrinksAll] = useState(null)
    // value of  'DrinksAll' is null by useState
    // useEffect will help me to choose a value from data in random . also useEffect will help me to use the fumction like useState and .. without class .
    useEffect(()=> {
        // if DrinksAll is null , undefined , {} or ...
        (async()=>{
            const DrinksAllResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
            // after recieveing the all value from the url it will wait to recive a asking
            const DrinksAllInJs = await DrinksAllResponse.json()
            // then here const of the url (DrinksAllResponse) will save all the values of the Drinks into a .json file (recode)
            setDrinksAll(DrinksAllInJs.drinks)
            // console.log will print the data for test . and function setDrinksAll will take the value of the drinks from object beacuse drinks date are inside a object valuer
        })();
    },[]);
    console.log(DrinksAll);

    return(<>
    <Header />
    {DrinksAll !== null ? (
        <>
          {DrinksAll.map((drink) => {
            return (
              
              <article className="Drinks">

                <Link className="Link" to={`/Drinks/Detailes/${drink.idDrink}`}>

                <h2>{drink.strCategory}</h2>

                </Link>
              </article>
            );
          })}
        </>
      ) : (
        <p className="Drinks">En cours de chargement</p>
      )}
    </>);
}
export default DrinksAll;