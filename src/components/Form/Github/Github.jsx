import { useDispatch, useSelector } from "react-redux";
import { changeGitHub } from "../../../redux/formReducer";
import CustomLabel from "../../UI/CustomLabel/CustomLabel";
import Input from "../../UI/Input/Input";
import style from "./Github.module.css";

const Github = () => {
  const dispatch = useDispatch();
  const gitHub = useSelector((state) => state.form.gitHub);

  function handleChange(e) {
    dispatch(changeGitHub(e.target.value));
  }

  return (
    <div className={style.github}>
      <CustomLabel className="form-label">
        Вставьте ссылку на Github
      </CustomLabel>
      <Input
        type="text"
        id="text"
        placeholder="Вставьте ссылку на Github"
        className="form-control"
        value={gitHub}
        onChange={handleChange}
      />
    </div>
  );
};

export default Github;
