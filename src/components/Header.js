import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import FirebaseContext from "./../context/firebase";
import UserContext from "../context/user";
import useUser from "./../hooks/use-user";
import * as ROUTES from "../constants/routes";
import logo from "../images/logo.png";
import { DEFAULT_IMAGE_PATH } from "../constants/paths";

//icons
import { BiLogOut, BiHomeHeart } from "react-icons/bi";

function Header() {
  const { user: loggedInUser } = useContext(UserContext);
  const { user } = useUser(loggedInUser?.uid);
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();
  return (
    <header className="h-16 bg-white border-b border-gray-primary mb-8">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
            <h1 className="flex justify-center w-full">
              <Link to={ROUTES.DASHBOARD} aria-label="Instagram logo">
                <img src={logo} alt="Instagram" className="mt-2 w-6/12" />
              </Link>
            </h1>
          </div>
          <div className="text-gray-700 text-center flex items-center align-items">
            {loggedInUser ? (
              <>
                <Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
                  <BiHomeHeart className="w-8 mr-6 text-black-light cursor-pointer text-2xl" />
                </Link>
                <button
                  type="button"
                  title="Sign Out"
                  onClick={() => {
                    firebase.auth().signOut();
                    navigate(ROUTES.LOGIN, { replace: true });
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "enter") {
                      firebase.auth().signOut();
                      navigate(ROUTES.LOGIN, { replace: true });
                    }
                  }}
                >
                  <BiLogOut className="w-8 mr-6 text-black-light cursor-pointer text-2xl rotate-180" />
                </button>
                {user && (
                  <div className="flex items-center cursor-pointer">
                    <Link to={`/p/${user?.username}`}>
                      <img
                        className="rounded-full h-8 w-8 flex"
                        src={require(`../images/avatars/default.png`)}
                        alt={`${user?.username} profile avatar`}
                        onError={(e) => {
                          e.target.src = require(DEFAULT_IMAGE_PATH);
                        }}
                      />
                    </Link>
                  </div>
                )}
              </>
            ) : (
              <>
                <Link to={ROUTES.LOGIN}>
                  <button
                    type="button"
                    className="bg-blue-medium font-bold text-sm rounded text-white w-20 h-8"
                  >
                    Log In
                  </button>
                </Link>
                <Link to={ROUTES.SIGN_UP}>
                  <button
                    type="button"
                    className="shadow font-bold text-sm rounded text-blue-medium w-20 h-8 ml-3"
                  >
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
