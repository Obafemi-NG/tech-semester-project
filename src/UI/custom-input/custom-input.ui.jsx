import styles from "./custom-input.module.css";

const CustomInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className={styles["form-input"]}>
      <label className={styles.label}> {label} </label>
      <input
        className={`${styles.input} ${otherProps.stylename}`}
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};
export default CustomInput;
