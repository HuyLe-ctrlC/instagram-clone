import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { DEFAULT_IMAGE_PATH } from "../../constants/paths";

export default function User({ username, fullName }) {
  return !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <Link
      to={`/p/${username}`}
      className="grid grid-cols-4 gap-4 mb-6 items-center"
    >
      <div className="flex items-center justify-between col-span-1">
        <img
          src={require(`../../images/avatars/default.png`)}
          className="rounded-full w-16 flex mr-3"
          alt="avatar user"
          onError={(e) => {
            e.target.src = require(DEFAULT_IMAGE_PATH);
          }}
        />
        {/* <img
          className="rounded-full w-16 flex mr-3"
          src={require(`../../images/avatars/${username}.jpg`)}
          alt="avatar user"
        /> */}
      </div>
      <div className="col-span-3">
        <p className="font-bold text-sm">{username}</p>
        <p className="text-sm text-gray-500">{fullName}</p>
      </div>
    </Link>
  );
}

User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string,
};
