const IS_MODAL_SUBMIT_OPEN = "IS_MODAL_SUBMIT_OPEN";
const IS_MODAL_CONFIDENTIAL_OPEN = "IS_MODAL_CONFIDENTIAL_OPEN";

const initialState = {
  isModalSubmitOpen: false,
  isModalConfidentialOpen: false,
};

export const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_MODAL_SUBMIT_OPEN:
      return {
        ...state,
        isModalSubmitOpen: action.payload,
      };
    case IS_MODAL_CONFIDENTIAL_OPEN:
      return {
        ...state,
        isModalConfidentialOpen: action.payload,
      };
    default:
      return state;
  }
};

export const changeSubmitModalVisible = (payload) => ({
  type: IS_MODAL_SUBMIT_OPEN,
  payload,
});
export const changeConfidentialModalVisible = (payload) => ({
  type: IS_MODAL_CONFIDENTIAL_OPEN,
  payload,
});
