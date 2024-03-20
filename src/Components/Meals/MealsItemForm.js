import classes from "./MealsItem.module.css";
import Input from '../UI/Input';
const MealsItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input 
      id= {props.id}
      label ="Amount"
      type="number"
      min="1"
      max="5"
      defaultValue="1"/>
      <button>+Add</button>
    </form>
  );
};

export default MealsItemForm;
