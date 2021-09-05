import style from "./Confidential.module.css";
import { useDispatch, useSelector } from "react-redux";
import { succesConfidential } from "../../../redux/formReducer";
import { changeConfidentialModalVisible } from "../../../redux/ModalReducer";

const Confidential = () => {
  const dispatch = useDispatch();
  const confidential = useSelector((state) => state.form.confidential);

  function handleChange() {
    dispatch(succesConfidential(!confidential.succesConfidential));
  }

  function openConfidential() {
    dispatch(changeConfidentialModalVisible(true));
  }

  return (
    <div>
      <input
        className="form-check-input"
        type="checkbox"
        id="confidential"
        checked={confidential.succesConfidential}
        onChange={handleChange}
      />
      <span className={style.confidential} style={{ marginLeft: 11 }}>
        * Я согласен с{" "}
        <span className={style.confidentialLink} onClick={openConfidential}>
          политикой конфиденциальности
        </span>
      </span>
      {confidential.error ? (
        <span className="errorValidate" style={{ marginLeft: 10 }}>
          {confidential.error}
        </span>
      ) : null}
    </div>
  );
};

export default Confidential;
