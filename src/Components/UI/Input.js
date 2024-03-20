import classes from './Input.module.css'


const Input = (props) => {
  return (
    <div className={classes.input}>
      <label>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        min={props.min}
        max={props.max}
        defaultValue={props.defaultValue}
      />
    </div>
  );
};

export default Input;
