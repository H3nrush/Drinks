import { useEffect, useState } from "react";
import Header from "../component/Header/Header";

function DrinksAll (){
    const [DrinksAll, setDrinksAll] = useState(null)
    // value of  'DrinksAll' is null by useState
    // useEffect will help me to choose a value from data in random . also useEffect will help me to use the fumction like useState and .. without class .
    useEffect(()=> {
        // if DrinksAll is null , undefined , {} or ...
        (async()=>{
            const DrinksAllResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
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
          {DrinksAll.map((category) => {
            return (
              <article className="Drinks">
                <h2>{category.strCategory}</h2>
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