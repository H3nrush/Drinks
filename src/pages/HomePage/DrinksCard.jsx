function DrinksCard ({DrinkToDisplay}){
    return(<>
        {DrinkToDisplay? (
                // if there is answer from data , print me the below codes
                <main className="Drinks">
                    <h2>{DrinkToDisplay[0].strDrink}</h2>
                    <img src={DrinkToDisplay[0].strDrinkThumb} alt={DrinkToDisplay[0].strDrink} style={{width:"400px"}} />
                    <p>{DrinkToDisplay[0].strInstructions} <br /><span> (id : {DrinkToDisplay[0].idDrink})</span></p>
                    <button className="btn-next" >Next</button>
                </main>
            ):(
                // if not print this code 
                <main className="Drinks">
                    <p>en train de charger</p>
                </main>
            )}
    </>)
}
export default DrinksCard;