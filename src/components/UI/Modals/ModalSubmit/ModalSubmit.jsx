import { useDispatch, useSelector } from "react-redux";
import { changeSubmitModalVisible } from "../../../../redux/ModalReducer";
import Fade from "react-reveal/Fade";
import Button from "../../Button/Button";
import style from "./ModalSubmit.module.css";
import { clearForm } from "../../../../redux/formReducer";

const ModalSubmit = () => {
  const form = useSelector((state) => state.form);
  const modals = useSelector((state) => state.modals);
  const dispatch = useDispatch();

  function closeModal(e) {
    if (e.target !== e.currentTarget) return;
    dispatch(changeSubmitModalVisible(!modals.isModalSubmitOpen));
    dispatch(clearForm());
  }

  return (
    <div
      className={
        modals.isModalSubmitOpen
          ? style.modal + " modal " + style.modalActive
          : style.modal + " modal"
      }
      onClick={closeModal}
    >
      <Fade>
        <div className={style.modalContent}>
          <div className={style.modalHeader}>
            <h5 className={"modal-title " + style.modalTitle}>
              Спасибо {form.name.name}!{" "}
            </h5>
          </div>
          <div className={style.modalBody}>
            <p>Мы скоро свяжемся с вами</p>
          </div>
          <div className={style.modalFooter}>
            <Button styles={{ marginTop: 0 }} onClick={closeModal}>
              Понятно
            </Button>
          </div>
          <span className={style.closeBtn} onClick={closeModal}>
            ×
          </span>
        </div>
      </Fade>
    </div>
  );
};

export default ModalSubmit;
