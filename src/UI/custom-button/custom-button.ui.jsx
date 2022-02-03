import styles from "./custom-button.module.css";

const CustomButton = (props) => {
  return <button className={styles.btn}>{props.children}</button>;
};
export default CustomButton;
