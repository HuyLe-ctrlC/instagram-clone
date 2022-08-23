import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import SideBar from "../components/SideBar/SideBar";
import TimeLine from "../components/TimeLine";
import useUser from "../hooks/use-user";
import LoggedInUserContext from "./../context/LoggedInUser";

export default function Dashboard({ user: loggedInUser }) {
  const { user, setActiveUser } = useUser(loggedInUser.uid);
  useEffect(() => {
    document.title = "Instagram";
  }, []);
  console.log(user);
  return (
    <LoggedInUserContext.Provider value={(user, setActiveUser)}>
      <div className="bg-gray-background">
        <Header />
        <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
          <TimeLine />
          <SideBar />
        </div>
      </div>
    </LoggedInUserContext.Provider>
  );
}

Dashboard.propTypes = {
  user: PropTypes.object.isRequired,
};
