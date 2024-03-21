import MealsItemForm from './MealsItemForm';
import classes from './MealsList.module.css';

const MealsLIst = props => {
const price = `Rs.${props.price.toFixed(2)}`;
    return (
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.desccription}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealsItemForm id={props.id} />
        </div>
      </li>
    );
}

export default MealsLIst;