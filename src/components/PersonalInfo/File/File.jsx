import { useDispatch, useSelector } from "react-redux";
import { changeFile } from "../../../redux/formReducer";
import CustomLabel from "../../UI/CustomLabel/CustomLabel";
import Input from "../../UI/Input/Input";
import style from "./File.module.css";

const File = () => {
    const dispatch = useDispatch()
    const file = useSelector(state=>state.form.file)

  function handleChange(e){
    dispatch(changeFile(e.target.files[0].name))
  }

  return ( <>
    <div className={style.file}>
      <CustomLabel className={"form-label " + style.fileLabel} htmlFor="file"><span className={style.fileName}>{file.file}</span></CustomLabel>
      <Input type="file" id="file" placeholder="Выберите файл" className="form-control" onChange={handleChange}/>
    </div>
    </>
  );
};

export default File;
