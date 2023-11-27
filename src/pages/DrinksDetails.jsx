import { useEffect, useState } from "react";
import Header from "../component/Header/Header";
import { useParams } from "react-router-dom";



function Details () {

    const {idDrink} = useParams();

    const [cocktail, setCocktail] = useState(null);

useEffect ( () => {  
    (async () => {
 
        const cocktailApiResponse = await  fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + idDrink )
        const cocktailApi = await cocktailApiResponse.json()

        setCocktail(cocktailApi.drinks[0])
    })();
 
},[idDrink])

    return (
        <>
            <Header />
            <main className="Drinks">
                {cocktail ? (
                 <article>
                        <h2>{cocktail.strDrink} </h2>
                        <img src= {cocktail.strDrinkThumb} alt= {cocktail.strDrink}/>
                        <p>Categorie: {cocktail.strCategory}</p>
                        <p>Instruction : {cocktail.strInstructions}</p>

                 </article>   
                ):(
                    <p>Pas de cocktail</p>
                )}
                <p>test</p>
            </main>
            
        </>
    )
}

export default Details;