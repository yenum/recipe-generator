import React, {useState, useEffect} from "react"

const data = require('../data.json').recipes

//const url =  '../../data.json'
const Meal =() => {
    const [food, setFood] = useState(data)

    const fetchFood =  () => {
        console.log(data.recipes)
        setFood(data.recipes)
    }

    useEffect(() => {
    //fetchFood()

    }, [])


    return(
       <> 

<div className="button">
        <button onClick={() => fetchFood()} className="btn">
          Generate Meal
        </button>
      </div>

        <section>
            {food.map((f) => {
                const {analyzedInstructions, id, image, title, extendedIngredients,servings} = f

                return(
                    <article key={id} className="recipes">
                        <h3> {title}</h3>
                        <img src={image} alt={title}/>
                        <h4> {servings} </h4>
                        <p>Ingredients</p>
                        <ul>
                        {extendedIngredients.map((d,i)=>{
                            return <li key={i}>{d.original}</li>
                        })}
                        </ul>

                        <p>Steps</p>

                        {analyzedInstructions.length === 0 ? (
                         <span>
                       No Steps Required
                         </span>
                             ) : (
                            <ol>
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