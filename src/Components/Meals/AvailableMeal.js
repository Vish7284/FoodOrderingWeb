import React from "react";
import classes from './AvailableMeal.module.css'

const AvailableMeal =(props) =>{
const meals = [{
    id:0,
    name:"Paneer masala",
    price:220,
},{
    id:1,
    name:"Butter Chicken",
    price:250,
},{
    id:2,
    name:"Mutton Nihari",
    price:650,
}]
    return (
        <section className={classes.meals}>
            <ul>
            {meals.map((m) => {
                return <li key={m.id}>{m.name} - Rs.{m.price}
                <button type="button">Add to cart</button></li>
            })}
            </ul>
        </section>
    )
}

export default AvailableMeal;