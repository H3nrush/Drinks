import { useEffect, useState } from "react";
import Header from "../component/Header/Header";

function DrinksIng (){
    const [DrinksIn, setDrinksIn] = useState(null)
    // value of  'DrinksIn' is null by useState
    // useEffect will help me to choose a value from data in random . also useEffect will help me to use the fumction like useState and .. without class .
    useEffect(()=> {
        (async()=>{
            const DrinksInResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
            // after recieveing the all value from the url it will wait to recive a asking
            const DrinksInInJs = await DrinksInResponse.json()
            // then here const of the url (DrinksInResponse) will save all the values of the Drinks into a .json file (recode)
            setDrinksIn(DrinksInInJs.drinks)
        })();
    },[]);
    return (
        <>
        <Header />
        {DrinksIn !== null ? (
        <>
          {DrinksIn.map((category) => {
            return (
              <article className="Drinks">
                <h2>{category.strIngredient1}</h2>
              </article>
            );
          })}
        </>
      ) : (
        <p className="Drinks">En cours de chargement</p>
      )}
        </>
    )
}
export default DrinksIng;