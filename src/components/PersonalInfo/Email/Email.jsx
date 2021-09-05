import { useDispatch, useSelector } from "react-redux";
import { changeEmail, emailError, isReadyToSubmit } from "../../../redux/formReducer";
import CustomLabel from "../../UI/CustomLabel/CustomLabel";
import Input from "../../UI/Input/Input";
import style from "./Email.module.css";

const Email = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.form.email);
  const readyToSubmit = useSelector(state=> state.form.isReadyToSubmit)
  const reg = /^[^@]+@[^@.]+\.[^@]+$/;

  function handleChange(e) {
    dispatch(changeEmail(e.target.value))
    dispatch(isReadyToSubmit({...readyToSubmit, email: true }))
  }
  function HandleBlur(e) {
    if(email.email.length < 5){
      dispatch(emailError("Заполните это поле "));
      return
    }
    if (!reg.test(email.email)) {    
      dispatch(emailError("В имени могут быть только буквы"));
      return
    } 
    dispatch(emailError(""));
  }

  return (
    <div className={style.email}>
      <CustomLabel className="form-label">Электронная почта *</CustomLabel>
      <Input
        type="email"
        id="email"
        placeholder="Электронная почта"
        className={
          email.error ? style.errorInput + " form-control" : "form-control"
        }
        value={email.email}
        onChange={handleChange}
        onBlur={HandleBlur}
      />
      {email.error ? (
        <span className="errorValidate">
          {email.error} 
        </span>
      ) : <span
      style={{ visibility: "hidden", height: 18, display: "block" }}
    ></span>}
    </div>
  );
};

export default Email;
