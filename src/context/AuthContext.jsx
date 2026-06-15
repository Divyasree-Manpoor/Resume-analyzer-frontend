import {

  createContext,

  useContext,

  useEffect,

  useMemo,

  useState,

} from "react";

/* ================================================= */
/* CREATE CONTEXT */
/* ================================================= */

const AuthContext =
  createContext();

/* ================================================= */
/* AUTH PROVIDER */
/* ================================================= */

export const AuthProvider = ({
  children,
}) => {

  /* ================================================= */
  /* STATES */
  /* ================================================= */

  const [user, setUser] =
    useState(null);

  const [token, setToken] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  /* ================================================= */
  /* LOAD AUTH DATA */
  /* ================================================= */

  useEffect(() => {

    try {

      const storedUser =

        localStorage.getItem(
          "user"
        );

      const storedToken =

        localStorage.getItem(
          "token"
        );

      /* ================================================= */
      /* VALIDATE STORAGE */
      /* ================================================= */

      if (
        storedUser &&
        storedToken
      ) {

        setUser(
          JSON.parse(
            storedUser
          )
        );

        setToken(
          storedToken
        );
      }

    } catch (error) {

      console.log(
        "Failed To Load Auth Data",
        error
      );

      /* ================================================= */
      /* CLEAR INVALID DATA */
      /* ================================================= */

      localStorage.removeItem(
        "user"
      );

      localStorage.removeItem(
        "token"
      );

    } finally {

      setLoading(false);
    }

  }, []);

  /* ================================================= */
  /* LOGIN */
  /* ================================================= */

  const login = (

    userData,

    jwtToken

  ) => {

    /* ================================================= */
    /* UPDATE STATES */
    /* ================================================= */

    setUser(userData);

    setToken(jwtToken);

    /* ================================================= */
    /* SAVE TO STORAGE */
    /* ================================================= */

    localStorage.setItem(

      "user",

      JSON.stringify(
        userData
      )
    );

    localStorage.setItem(

      "token",

      jwtToken
    );
  };

  /* ================================================= */
  /* LOGOUT */
  /* ================================================= */

  const logout = () => {

    /* ================================================= */
    /* CLEAR STATES */
    /* ================================================= */

    setUser(null);

    setToken(null);

    /* ================================================= */
    /* CLEAR STORAGE */
    /* ================================================= */

    localStorage.removeItem(
      "user"
    );

    localStorage.removeItem(
      "token"
    );
  };

  /* ================================================= */
  /* UPDATE USER */
  /* ================================================= */

  const updateUser = (
    updatedUser
  ) => {

    setUser(updatedUser);

    localStorage.setItem(

      "user",

      JSON.stringify(
        updatedUser
      )
    );
  };

  /* ================================================= */
  /* AUTH STATUS */
  /* ================================================= */

  const isAuthenticated =
    Boolean(token);

  /* ================================================= */
  /* CONTEXT VALUE */
  /* ================================================= */

  const value = useMemo(

    () => ({

      /* ================================================= */
      /* STATES */
      /* ================================================= */

      user,

      token,

      loading,

      isAuthenticated,

      /* ================================================= */
      /* METHODS */
      /* ================================================= */

      login,

      logout,

      updateUser,

      setUser,
    }),

    [

      user,

      token,

      loading,

      isAuthenticated,
    ]
  );

  /* ================================================= */
  /* PROVIDER */
  /* ================================================= */

  return (

    <AuthContext.Provider
      value={value}
    >

      {children}

    </AuthContext.Provider>
  );
};

/* ================================================= */
/* USE AUTH */
/* ================================================= */

export const useAuth = () => {

  const context =

    useContext(
      AuthContext
    );

  /* ================================================= */
  /* SAFETY CHECK */
  /* ================================================= */

  if (!context) {

    throw new Error(

      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
};