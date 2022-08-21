import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

export default function IsUserLoggedIn({ user, loggedInPath, children }) {
  if (user) {
    return children;
  }
  if (!user) {
    return (
      <Navigate
        to={{
          pathname: loggedInPath,
        }}
        replace={true}
      />
    );
  }
  return null;
}

IsUserLoggedIn.propTypes = {
  user: PropTypes.object,
  loggedInPath: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
