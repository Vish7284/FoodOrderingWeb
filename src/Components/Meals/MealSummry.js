import React from "react";
import classes from './MealSummery.module.css';


const MealSummery = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Foods , Delivered to You</h2>
      <p>
        Choose your Favorite meal form our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high Quality ingredients,just-in-time and
        ofCourse by experienced chef's.
      </p>
    </section>
  );
};

export default MealSummery;
