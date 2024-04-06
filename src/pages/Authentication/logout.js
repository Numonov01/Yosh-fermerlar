import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { logoutUser } from "../../slices/thunk";

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import withRouter from "../../Common/withRouter";

const Logout = () => {

    document.title = "Sign Out" + process.env.REACT_APP_PAGE_TITLE;

  const dispatch = useDispatch();

  const selectLogin = createSelector(
    (state) => state.Login,
    (login) => ({
      isUserLogout: login.isUserLogout,
    })
  );

  const { isUserLogout } = useSelector(selectLogin);

  useEffect(() => {
    dispatch(logoutUser());
  }, [dispatch]);

  if (isUserLogout) {
    return <Navigate to="/login" />;
  }

  return <React.Fragment></React.Fragment>;
};

export default withRouter(Logout);