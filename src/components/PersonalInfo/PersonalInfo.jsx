import style from "./PersonalInfo.module.css";
import Name from "./Name/Name";
import SurName from "./SurName/SurName";
import Email from "./Email/Email";
import File from "./File/File";

const PersonalInfo = (props) => {
  return ( <div className={style.personalInfo}>
        <Name />
        <SurName />
        <Email />
        <File />
      </div>
  );
};

export default PersonalInfo;
