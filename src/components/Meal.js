import React, {useState, useEffect} from "react"

const url =  '/data.json'
const Meal =() => {
    const [food, setFood] = useState([])

    const fetchFood = async () => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data.recipes)
        setFood(data.recipes)
    }

    useEffect(() => {
        fetchFood()

    }, [])


    return(
        <section>
            {food.map((f) => {
                const {analyzedInstructions, id, image, title, extendedIngredients,servings} = f

                return(
                    <article key={id}>
                        <h3> {title}</h3>
                        <h4> {servings} </h4>
                        <p>Ingredients</p>
                        <ul>
                        {extendedIngredients.map((d,i)=>{
                            return <li key={i}>{d.original}</li>
                        })}
                        </ul>

                        <ul>
                        {analyzedInstructions.map((d,i)=>{
                            return <li key={i}>{d.steps}</li>
                        })}
                        </ul>
                         
                        <img src={image} alt={title}/>

                    </article>
                )
            })}
        </section>
    )
    
}

export default Meal;