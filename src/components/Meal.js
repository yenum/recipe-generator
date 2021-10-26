import React, {useState, useEffect} from "react"

const data = require('../data.json').recipes

//const url =  '../../data.json'
const Meal =() => {
    const [food, setFood] = useState([])

    const fetchFood =  () => {
        let index = Math.floor(Math.random()*data.length)
        console.log(data[index])
        setFood([data[index]])
    }

    useEffect(() => {
    //fetchFood()

    }, [])


    return(
       <> 

<div className="button">
        <button onClick={() => fetchFood()} className="btn">
          Generate Recipe
        </button>
      </div>

        <section className="container">
            {food.map((f) => {
                const {analyzedInstructions, id, image, title, extendedIngredients,servings} = f

                return(
                    <article key={id} className="recipes">
                        <h3> {title}</h3>
                        <img src={image} alt={title} width="250px" height="250px"/>
                        <h4> Serves : {servings} </h4>
                        <h4 id="steps">Ingredients</h4>
                        <ul id="steps">
                        {extendedIngredients.map((d,i)=>{
                            return <li key={i}>{d.original}</li>
                        })}
                        </ul>

                        <h4 id="steps">Steps</h4>

                        {analyzedInstructions.length === 0 ? (
                         <span>
                       No Steps Required
                         </span>
                             ) : (
                            <ol id="steps">
                       {analyzedInstructions.map((d, i) => {
                           return d.steps.map((x, c) => {
                    return <li key={`ing-${i}-${c}`}>{x.step}</li>;
                                     });
                                      })}
                               </ol>
                            )}
                         
                       
                    </article>
                )
            })}
        </section>
        </>
        
    )
    
}

export default Meal;