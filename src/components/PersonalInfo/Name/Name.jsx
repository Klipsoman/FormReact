import { useDispatch, useSelector } from "react-redux";
import { changeName, isReadyToSubmit, nameError } from "../../../redux/formReducer";
import CustomLabel from "../../UI/CustomLabel/CustomLabel";
import Input from "../../UI/Input/Input";
import style from "./Name.module.css";

const Name = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.form.name);
  const readyToSubmit = useSelector(state=> state.form.isReadyToSubmit)
  const reg = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/;

  function handleChange(e) {
    dispatch(changeName(e.target.value))
    dispatch(isReadyToSubmit({...readyToSubmit, name: true}))
  }
  function HandleBlur(e) {
    if(name.name.length < 2){
      dispatch(nameError("Заполните это поле "));
      return
    }
    if (!reg.test(name.name)) {    
      dispatch(nameError("В имени могут быть только буквы"));
      return
    } 
    dispatch(nameError(""));
  }

  return (
    <div className={style.name}>
      <CustomLabel className="form-label">Имя *</CustomLabel>
      <Input
        type="text"
        id="name"
        placeholder="Имя"
        className={
          name.error ? style.errorInput + " form-control" : "form-control"
        }
        value={name.name}
        onChange={handleChange}
        onBlur={HandleBlur}
      />
      {name.error ? (
        <span className="errorValidate">{name.error}</span>
      ) : (
        <span
          style={{ visibility: "hidden", height: 18, display: "block" }}
        ></span>
      )}
    </div>
  );
};

export default Name;
