import style from "./Button.module.css"

const Button = (props) => {

    return <button
    className={"btn btn-primary " + style.submitBtn}
    type="submit"
    style={props.styles}
    onClick={props.onClick}
  > {props.children} </button>
}

export default Button