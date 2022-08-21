import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function ProtectedRoute({ user, children }) {
  if (user) {
    return children;
  }
  if (!user) {
    return (
      <Navigate
        to={{
          pathname: ROUTES.LOGIN,
        }}
        replace={true}
      />
    );
  }
  return null;
}

ProtectedRoute.propTypes = {
  user: PropTypes.object,
  children: PropTypes.object.isRequired,
};
