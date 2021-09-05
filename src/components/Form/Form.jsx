import { useSelector, useDispatch } from "react-redux";
import Github from "./Github/Github";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Sex from "./Sex/Sex";
import SubTitle from "../UI/SubTitle/SubTitle";
import style from "./Form.module.css";
import {
  emailError,
  nameError,
  sexError,
  succesConfidentialError,
  surNameError,
} from "../../redux/formReducer";
import Confidential from "./Confidential/Confidential";
import { changeSubmitModalVisible } from "../../redux/ModalReducer";

const Form = () => {
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();

  function handleSendForm(e) {
    e.preventDefault();
    let errors = 0;
    if (
      form.name.name.length < 2 ||
      !form.name.name.trim() ||
      form.name.error
    ) {
      dispatch(nameError("Заполните это поле"));
      errors += 1;
    }
    if (
      form.surName.surName.length < 2 ||
      !form.surName.surName.trim() ||
      form.surName.error
    ) {
      dispatch(surNameError("Заполните это поле"));
      errors += 1;
    }
    if (form.email.email.length < 5 || form.email.error) {
      dispatch(emailError("Заполните это поле"));
      errors += 1;
    }
    if (!form.sex.sex || form.sex.error) {
      dispatch(sexError("укажите пол"));
      errors += 1;
    }
    if (!form.confidential.succesConfidential) {
      dispatch(succesConfidentialError("заполните это поле"));
      errors += 1;
    }
    if (errors !== 0) return;
    dispatch(changeSubmitModalVisible(true));
  }

  return (
    <form className={StyleSheet.form}>
      <SubTitle>Личные данные</SubTitle>
      <PersonalInfo />
      <SubTitle style={{ display: "inline" }}>
        Пол *{" "}
        {form.sex.error ? (
          <span className="errorValidate" style={{ marginLeft: 10 }}>
            {form.sex.error}
          </span>
        ) : null}
      </SubTitle>

      <Sex />
      <SubTitle>Github </SubTitle>
      <Github />
      <Confidential />

      <input
        className={"btn btn-primary " + style.submitBtn}
        type="submit"
        disabled={
          form.isReadyToSubmit.name &&
          form.isReadyToSubmit.surName &&
          form.isReadyToSubmit.email &&
          form.isReadyToSubmit.sex
            ? false
            : true
        }
        onClick={handleSendForm}
      />
    </form>
  );
};

export default Form;
