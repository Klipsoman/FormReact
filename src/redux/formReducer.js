const CHANGE_INPUT_NAME = "CHANGE_INPUT_NAME";
const CHANGE_INPUT_SURNAME = "CHANGE_INPUT_SURNAME";
const CHANGE_INPUT_EMAIL = "CHANGE_INPUT_EMAIL";
const CHANGE_INPUT_FILE = "CHANGE_INPUT_FILE";
const CHANGE_INPUT_SEX = "CHANGE_SEX";
const CHANGE_INPUT_GITHUB = "CHANGE_INPUT_GITHUB";

const INPUT_NAME_ERROR = "INPUT_NAME_ERROR";
const INPUT_SURNAME_ERROR = "INPUT_SURNAME_ERROR";
const INPUT_EMAIL_ERROR = "INPUT_EMAIL_ERROR";
const INPUT_FILE_ERROR = "INPUT_FILE_ERROR";
const INPUT_SEX_ERROR = "INPUT_SEX_ERROR";

const SUCCES_CONFIDENTIAL = "SUCCES_CONFIDENTIAL";
const SUCCES_CONFIDENTIAL_ERROR = "SUCCES_CONFIDENTIAL_ERROR";

const IS_READY_TO_SUBMIT = "IS_READY_TO_SUBMIT";
const CLEAR_FORM = "CLEAR_FORM";

const initialState = {
  name: {
    name: "",
    error: "",
  },
  surName: {
    surName: "",
    error: "",
  },
  email: {
    email: "",
    error: "",
  },
  file: {
    file: "Загрузите резюме",
    error: "",
  },
  sex: {
    sex: "",
    error: "",
  },
  gitHub: "",
  confidential: {
    succesConfidential: false,
    error: "",
  },
  isReadyToSubmit: {
    name: false,
    surName: false,
    email: false,
    sex: false,
  },
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_NAME:
      return {
        ...state,
        name: {
          name: action.payload,
        },
      };
    case INPUT_NAME_ERROR:
      return {
        ...state,
        name: { name: state.name.name, error: action.payload },
      };
    case CHANGE_INPUT_SURNAME:
      return {
        ...state,
        surName: {
          surName: action.payload,
        },
      };
    case INPUT_SURNAME_ERROR:
      return {
        ...state,
        surName: {
          surName: state.surName.surName,
          error: action.payload,
        },
      };
    case CHANGE_INPUT_EMAIL:
      return {
        ...state,
        email: {
          email: action.payload,
        },
      };
    case INPUT_EMAIL_ERROR:
      return {
        ...state,
        email: {
          email: state.email.email,
          error: action.payload,
        },
      };
    case CHANGE_INPUT_FILE:
      return {
        ...state,
        file: {
          file: action.payload,
        },
      };
    case INPUT_FILE_ERROR:
      return {
        ...state,
        file: {
          file: state.file.file,
          error: action.payload,
        },
      };
    case CHANGE_INPUT_SEX:
      return {
        ...state,
        sex: {
          sex: action.payload,
        },
      };
    case INPUT_SEX_ERROR:
      return {
        ...state,
        sex: {
          error: action.payload,
        },
      };
    case CHANGE_INPUT_GITHUB:
      return {
        ...state,
        gitHub: action.payload,
      };
    case SUCCES_CONFIDENTIAL:
      return {
        ...state,
        confidential: { succesConfidential: action.payload },
      };
    case SUCCES_CONFIDENTIAL_ERROR:
      return {
        ...state,
        confidential: {
          succesConfidential: state.confidential.succesConfidential,
          error: action.payload,
        },
      };
    case IS_READY_TO_SUBMIT:
      return {
        ...state,
        isReadyToSubmit: action.payload,
      };
    case CLEAR_FORM:
      return initialState;
    default:
      return state;
  }
};

export const changeName = (payload) => ({ type: CHANGE_INPUT_NAME, payload });
export const changeSurName = (payload) => ({
  type: CHANGE_INPUT_SURNAME,
  payload,
});
export const changeEmail = (payload) => ({ type: CHANGE_INPUT_EMAIL, payload });
export const changeFile = (payload) => ({ type: CHANGE_INPUT_FILE, payload });
export const changeSex = (payload) => ({ type: CHANGE_INPUT_SEX, payload });
export const changeGitHub = (payload) => ({
  type: CHANGE_INPUT_GITHUB,
  payload,
});
export const succesConfidential = (payload) => ({
  type: SUCCES_CONFIDENTIAL,
  payload,
});

export const nameError = (payload) => ({ type: INPUT_NAME_ERROR, payload });
export const surNameError = (payload) => ({
  type: INPUT_SURNAME_ERROR,
  payload,
});
export const emailError = (payload) => ({ type: INPUT_EMAIL_ERROR, payload });
export const fileError = (payload) => ({ type: INPUT_FILE_ERROR, payload });
export const sexError = (payload) => ({ type: INPUT_SEX_ERROR, payload });
export const succesConfidentialError = (payload) => ({
  type: SUCCES_CONFIDENTIAL_ERROR,
  payload,
});

export const isReadyToSubmit = (payload) => ({
  type: IS_READY_TO_SUBMIT,
  payload,
});

export const clearForm = () => ({ type: CLEAR_FORM });
