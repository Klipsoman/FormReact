import style from './CustomLabel.module.css'

const CustomLabel = (props) => {
    const {htmlFor, id, className, styles} = {...props}
    return  <label className={className + ' ' + style.customLabel} htmlFor={htmlFor} id={id} style={styles}>
        {props.children}
    </label>
} 

export default CustomLabel