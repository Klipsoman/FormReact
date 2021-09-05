import style from "./Input.module.css";

const Input = (props) => {
  const {
    type = "text",
    id = null,
    placeholder = "",
    className = "",
    styles,
    value,
    onChange,
    onClick,
    onBlur,
  } = { ...props };
  return (
    <input
      className={className + " " + style.input}
      type={type}
      id={id}
      placeholder={placeholder}
      style={styles}
      value={value}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
    />
  );
};

export default Input;
