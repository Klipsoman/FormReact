import { useDispatch, useSelector } from "react-redux";
import { changeSex, isReadyToSubmit } from "../../../redux/formReducer";
import CustomLabel from "../../UI/CustomLabel/CustomLabel";
import style from "./Sex.module.css";

const Sex = () => {
  let sex = useSelector(state=>state.form.sex)
  const readyToSubmit = useSelector(state=>state.form.isReadyToSubmit)
  let dispatch = useDispatch()

  function handleChange(e) {
    dispatch(changeSex(e.target.value));
    dispatch(isReadyToSubmit({...readyToSubmit, sex: true}))
  }

  return (
    <div className={style.sex}>
      <input
        className="form-check-input"
        type="radio"
        name="sex"
        id="man"
        value="man"
        onChange={handleChange}
        checked={sex.sex == "man" ? true : false}
      />
      <CustomLabel
        className="form-check-label"
        htmlFor="man"
        styles={{ marginLeft: 12 }}
      >
        Мужской
      </CustomLabel>
      <input
        className="form-check-input"
        type="radio"
        name="sex"
        id="woman"
        value="woman"
        onChange={handleChange}
        checked={sex.sex == "woman" ? true : false}
        style={{ marginLeft: 108 }}
      />
      <CustomLabel
        className="form-check-label"
        htmlFor="woman"
        styles={{ marginLeft: 12 }}
      >
        Женский
      </CustomLabel>
    </div>
  );
};

export default Sex;
