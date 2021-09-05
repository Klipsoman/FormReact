import style from './Title.module.css'

const Title = (props) => {
    return  <h3 className={"h4 " + style.title}>{props.children}</h3>
} 

export default Title