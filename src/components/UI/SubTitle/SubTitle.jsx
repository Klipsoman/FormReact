import style from './SubTitle.module.css'

const SubTitle = (props) => {
    return  <h3 className={"h4 " + style.subTitle}>{props.children}</h3>
} 

export default SubTitle