import { useContext } from "react";
import { Link } from "react-router-dom";
import FirebaseContext from "./../context/firebase";
import UserContext from "../context/user";
import * as ROUTES from "../constants/routes";
import logo from "../images/logo.png";

//icons
import { BiLogOut, BiHomeHeart } from "react-icons/bi";

function Header() {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);

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
            {user ? (
              <>
                <Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
                  <BiHomeHeart className="w-8 mr-6 text-black-light cursor-pointer text-2xl" />
                </Link>
                <button
                  type="button"
                  title="Sign Out"
                  onClick={() => firebase.auth().signOut()}
                  onKeyDown={(event) => {
                    if (event.key === "enter") {
                      firebase.auth().signOut();
                    }
                  }}
                >
                  <BiLogOut className="w-8 mr-6 text-black-light cursor-pointer text-2xl rotate-180" />
                </button>
                <div className="flex items-center cursor-pointer">
                  <Link to={`/p/${user.displayName}`}>
                    <img
                      className="rounded-full h-8 w-8 flex"
                      // src={`../images/avatars/${user.displayName}.jpg`}
                      src={require(`../images/avatars/${user.displayName}.jpg`)}
                      alt={`${user.displayName} profile avatar`}
                    />
                  </Link>
                </div>
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
