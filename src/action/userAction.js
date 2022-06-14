import axios from "axios";
import {
  ADD_PRODUCT_ERR,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADRESS_SHOW_ERR,
  ADRESS_SHOW_REQUEST,
  ADRESS_SHOW_SUCCESS,
  CHANGE_ADRESS_ERR,
  CHANGE_ADRESS_REQUEST,
  CHANGE_ADRESS_SUCCESS,
  CHANGE_PASSWORD_ERR,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  DELETE_ERR,
  DELETE_REQUEST,
  DELETE_SUCCESS,
  FORGOT_PASSWORD_ERR,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  IMAGE_UPLOAD_ERR,
  IMAGE_UPLOAD_REQUEST,
  IMAGE_UPLOAD_SUCCESS,
  LOGIN_ERR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  OTP_SEND_ERR,
  OTP_SEND_REQUEST,
  OTP_SEND_SUCCESS,
  REGISTER_ERR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../constant/userConstant";

export const RegisterAction = (obj) => async (dispatch, getState) => {
  try {
    console.log(obj, "objobjobj");
    let { email, firstName, lastName, password } = obj;
    let emailorphonenumber = email;
    dispatch({ type: REGISTER_REQUEST });

    let { data } = await axios.post(
      "https://api.oopacks.com/api/test/register",

      { emailorphonenumber, password, firstName, lastName }
    );
    console.log(data, "datadatadatadatadata");

    dispatch({ type: REGISTER_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log(error, "errorerrorerrorerrorerror");
    dispatch({
      type: REGISTER_ERR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const LoginAction = (obj) => async (dispatch, getState) => {
  try {
    console.log(obj, "signInsignInsignInsignInsignIn");
    let { email, password } = obj;
    let emailorphonenumber = email;
    dispatch({ type: LOGIN_REQUEST });
    let { data } = await axios.post("https://api.oopacks.com/api/test/login", {
      emailorphonenumber,
      password,
    });

    dispatch({ type: LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log(error.response.data, "errorerrorerrorerrorerror");
    dispatch({
      type: LOGIN_ERR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const forgotPasswordAction = (obj) => async (dispatch, getState) => {
  try {
    console.log(obj, "signInsignInsignInsignInsignIn");
    let { email, password } = obj;
    let emailorphonenumber = email;
    dispatch({ type: FORGOT_PASSWORD_REQUEST });
    let { data } = await axios.put(
      "https://api.oopacks.com/api/test/forgotpassword",
      {
        emailorphonenumber,
        password,
      }
    );

    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log(error.response.data, "errorerrorerrorerrorerror");
    dispatch({
      type: FORGOT_PASSWORD_ERR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const imageUploadAction = (file) => async (dispatch, getState) => {
  try {
    const formData = new FormData();
    formData.append("files", file);

    let isUser = JSON.parse(localStorage.getItem("userInfo"));
    console.log(isUser.tokens, "isUser.tokensisUser.tokensisUser.tokens");

    dispatch({ type: IMAGE_UPLOAD_REQUEST });

    let { data } = await axios.put(
      "https://api.oopacks.com/api/test/upload",
      formData,
      {
        headers: {
          Authorization: `Bearer ${isUser.tokens}`,
        },
      }
    );
    console.log(data, "sdfjfskdjfhj");

    dispatch({ type: IMAGE_UPLOAD_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.response.data, "errorerrorerrorerrorerror");
    dispatch({
      type: IMAGE_UPLOAD_ERR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const AddressShowAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ADRESS_SHOW_REQUEST });

    let isUser = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${isUser.tokens}`,
      },
    };
    console.log(isUser, "fdgsdjkfglsjkdfgkljsdfgsjdfghsdjkdk");

    let { data } = await axios.get(
      "https://api.oopacks.com/api/test/profile",
      config
    );
    console.log(data, "sdfjfskdjfhj");

    dispatch({ type: ADRESS_SHOW_SUCCESS, payload: data });
  } catch (error) {
    console.log(error, "errorerrorerrorerrorerror");
    dispatch({
      type: ADRESS_SHOW_ERR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const ChangePasswordAction = (obj) => async (dispatch, getState) => {
  try {
    console.log(obj, "signInsignInsignInsignInsignIn");
    let { oldPassword, newPassword } = obj;

    let isUser = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${isUser.tokens}`,
      },
    };
    dispatch({ type: CHANGE_PASSWORD_REQUEST });
    let { data } = await axios.put(
      "https://api.oopacks.com/api/test/changepassword",
      config,
      {
        oldPassword,
        newPassword,
      }
    );

    dispatch({ type: CHANGE_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.response.data, "errorerrorerrorerrorerror");
    dispatch({
      type: CHANGE_PASSWORD_ERR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const ChangeAddrssAction = (obj) => async (dispatch, getState) => {
  try {
    console.log(obj, "signInsignInsignInsignInsignIn");
    let { address } = obj;

    let isUser = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;

    const config = {
      headers: {
        Authorization: `Bearer ${isUser.tokens}`,
      },
    };
    dispatch({ type: CHANGE_ADRESS_REQUEST });
    let { data } = await axios.put(
      "https://api.oopacks.com/api/test/updateaddress",

      {
        address,
      },
      config
    );
    console.log(data, "datadatadatadata");

    dispatch({
      type: CHANGE_ADRESS_SUCCESS,
      payload: "your added adress successfuly",
    });
  } catch (error) {
    console.log(error.response.data, "errorerrorerrorerrorerror");
    dispatch({
      type: CHANGE_ADRESS_ERR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteAction =
  (emailorphonenumber) => async (dispatch, getState) => {
    try {
      let isUser = localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null;

      const config = {
        headers: {
          Authorization: `Bearer ${isUser.tokens}`,
        },
      };
      dispatch({ type: DELETE_REQUEST });
      let { data } = await axios.delete(
        "https://api.oopacks.com/api/test",
        config,
        { emailorphonenumber }
      );
      console.log(data, "datadatadatadata");

      dispatch({
        type: DELETE_SUCCESS,
        payload: "your added adress successfuly",
      });
    } catch (error) {
      console.log(error.response.data, "errorerrorerrorerrorerror");
      dispatch({
        type: DELETE_ERR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const SendOtpAction =
  ({ phonenumber }) =>
  async (dispatch, getState) => {
    try {
      let isUser = localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null;

      const config = {
        headers: {
          Authorization: `Bearer ${isUser.tokens}`,
        },
      };
      dispatch({ type: OTP_SEND_REQUEST });
      let { data } = await axios.post(
        "https://api.oopacks.com/api/auth/sendotp",

        { phonenumber }
      );
      console.log(data, "datadatadatadata");

      dispatch({
        type: OTP_SEND_SUCCESS,
        payload: "your Sended successfuly",
      });
    } catch (error) {
      console.log(error.response.data, "errorerrorerrorerrorerror");
      dispatch({
        type: OTP_SEND_ERR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
