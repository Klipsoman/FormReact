
import { useDispatch, useSelector } from "react-redux";
import { changeSurName, isReadyToSubmit, surNameError } from "../../../redux/formReducer";
import CustomLabel from "../../UI/CustomLabel/CustomLabel";
import Input from "../../UI/Input/Input";
import style from "./SurName.module.css";

const SurName = () => {
  const dispatch = useDispatch();
  const surName = useSelector((state) => state.form.surName);
  const readyToSubmit = useSelector(state=> state.form.isReadyToSubmit)
  const reg = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/;

  function handleChange(e) {
    dispatch(changeSurName(e.target.value))
    dispatch(isReadyToSubmit({...readyToSubmit, surName: true}))

  }
  function HandleBlur(e) {
    if(surName.surName.length < 2){
      dispatch(surNameError("Заполните это поле "));
      return
    }
    if (!reg.test(surName.surName)) {    
      dispatch(surNameError("В имени могут быть только буквы"));
      return
    } 
    dispatch(surNameError(""));
  }

  return (
    <div className={style.surName}>
      <CustomLabel className="form-label">Фамилия *</CustomLabel>
      <Input
        type="text"
        id="surname"
        placeholder="Фамилия"
        className={surName.error ? style.errorInput + " form-control" : "form-control"}
        value={surName.surName}
        onChange={handleChange}
        onBlur={HandleBlur}
      />
      { surName.error ? <span className="errorValidate">{surName.error}</span> : <span
          style={{ visibility: "hidden", height: 15, display: "block" }}
        ></span> }
    </div>
  );
};

export default SurName;
