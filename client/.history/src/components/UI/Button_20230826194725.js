import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      id={props.id}
      className={styles.button}
      onClick={props.onActivate}
      draggable
    >
      {props.name}
    </button>
  );
};

export default Button;
