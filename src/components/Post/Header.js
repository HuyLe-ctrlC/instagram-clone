import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Header({ username }) {
  return (
    <div className="flex border-b border-gray-primary h-4 p-4 py-8">
      <div className="flex items-center">
        <Link to={`/p/${username}`} className="flex items-center">
          {/* <img
            className="rounded-full h-8 w-8 flex mr-3"
            src={require(`../../images/avatars/${username}.jpg`)}
            alt={`${username} profile`}
          /> */}
          <div className="">
            <div className="p-0.5 rounded-full bg-gradient-to-tr from-amber-500 to-fuchsia-700 mr-3">
              <div className="p-0.5 bg-white rounded-full">
                <img
                  className="rounded-full h-8 w-8"
                  src={require(`../../images/avatars/${username}.jpg`)}
                  alt={`${username} profile`}
                />
              </div>
            </div>
          </div>
          <p className="font-bold">{username}</p>
        </Link>
      </div>
    </div>
  );
}

Header.propTypes = {
  username: PropTypes.string.isRequired,
};
