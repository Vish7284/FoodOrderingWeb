import React from "react";
import classes from "./AvailableMeal.module.css";
import Card from "../UI/Card";
import MealsList from './MealsList';

const meals = [
  {
    id: 0,
    name: "Paneer masala",
    description: "Pata nhi kaise bna hai khane me maja aayega.",
    price: 220,
  },
  {
    id: 1,
    name: "Butter Chicken",
    description: "Made up of fresh form chicken.",
    price: 250,
  },
  {
    id: 2,
    name: "Mutton Nihari",
    description: "Made up of best and fresh form meat organic!",
    price: 650,
  },
];
const AvailableMeal = () => {
  const mealsAvailable = meals.map((meal) => {
    return (
      <MealsList
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsAvailable}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeal;
