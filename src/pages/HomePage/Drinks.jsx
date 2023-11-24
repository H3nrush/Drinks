import { useState } from "react";



function Drinks (){
  // i use the useState to reshare the answer between consts and print the answert in tags
    const [drinksR , setDrinksR] = useState(null);
  //i wanna recieve a data if the drinks for ex: for bar so first i will add the pachage url
  if (!drinksR){
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    //then in here iwill say while you recieve answer from url add the lists of value into a json file 
    .then((answer) => {
      return answer.json();
    })
    //then here i will say to log me every drinks from the list . here json is for every drink 
    .then((json) => {
      // now i test whith console.log
      // here i call the useState const to bring the same value of json
      // i used .drinks to choose the names for print
    setDrinksR(json.drinks);
    });
    }
    return(<>
    {/* here i used the (if) to say if drinksR is not null print me strDrinks else say (Drinks are not ready still) */}
    {drinksR ? (
      <>
      {drinksR.map((cocktail) => {
            return (
              <article className="Drinks">
                <h2>{cocktail.strDrink}</h2>
                <img src={cocktail.strDrink} alt="" />
                <img src={cocktail.strDrinkThumb} alt="Drinks" height={200}  />
              </article>
            );
          })}
      </>
      ):(
        <p>Drinks are not ready still</p>

      )}

    </>)
};
export default Drinks;