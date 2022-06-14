import {
  ADRESS_SHOW_ERR,
  ADRESS_SHOW_REQUEST,
  ADRESS_SHOW_SUCCESS,
  CHANGE_ADRESS_ERR,
  CHANGE_ADRESS_REQUEST,
  CHANGE_ADRESS_SUCCESS,
  CHANGE_PASSWORD_ERR,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  LOGIN_ERR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_ERR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../constant/userConstant";

export const userRegsterReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { loading: true };
    case REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case REGISTER_ERR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case LOGIN_ERR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const AddressShowReducer = (state = {}, action) => {
  switch (action.type) {
    case ADRESS_SHOW_REQUEST:
      return { loading: true };
    case ADRESS_SHOW_SUCCESS:
      return { loading: false, adressInfo: action.payload };
    case ADRESS_SHOW_ERR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const ChangePasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD_REQUEST:
      return { loading: true };
    case CHANGE_PASSWORD_SUCCESS:
      return { loading: false, change: action.payload };
    case CHANGE_PASSWORD_ERR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const ChangeAddrssReducer = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_ADRESS_REQUEST:
      return { loading: true };
    case CHANGE_ADRESS_SUCCESS:
      return { loading: false, changeAdress: action.payload };
    case CHANGE_ADRESS_ERR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
