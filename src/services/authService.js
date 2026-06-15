import API from "./api";

/* ================================================= */
/* REGISTER USER */
/* ================================================= */

export const registerUserService =

  async (userData) => {

    try {

      const response =

        await API.post(

          "/api/auth/register",

          userData
        );

      /* SUCCESS */

      return response.data;

    } catch (error) {

      throw (

        error.response?.data ||

        {

          message:
            "Registration Failed",
        }
      );
    }
};

/* ================================================= */
/* LOGIN USER */
/* ================================================= */

export const loginUserService =

  async (userData) => {

    try {

      const response =

        await API.post(

          "/api/auth/login",

          userData
        );

      /* ================================================= */
      /* STORE TOKEN */
      /* ================================================= */

      if (
        response.data?.token
      ) {

        localStorage.setItem(

          "token",

          response.data.token
        );
      }

      /* ================================================= */
      /* STORE USER */
      /* ================================================= */

      if (
        response.data?.user
      ) {

        localStorage.setItem(

          "user",

          JSON.stringify(
            response.data.user
          )
        );
      }

      return response.data;

    } catch (error) {

      throw (

        error.response?.data ||

        {

          message:
            "Login Failed",
        }
      );
    }
};

/* ================================================= */
/* LOGOUT */
/* ================================================= */

export const logoutUserService = () => {

  localStorage.removeItem(
    "token"
  );

  localStorage.removeItem(
    "user"
  );

  window.location.href =
    "/login";
};

/* ================================================= */
/* GET USER */
/* ================================================= */

export const getCurrentUser = () => {

  const user =

    localStorage.getItem(
      "user"
    );

  return user
    ? JSON.parse(user)
    : null;
};

/* ================================================= */
/* CHECK AUTH */
/* ================================================= */

export const isAuthenticated = () => {

  return !!localStorage.getItem(
    "token"
  );
};