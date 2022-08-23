import React, { useContext } from "react";
import useUser from "../../hooks/use-user";
import User from "./User";
import Suggestions from "./Suggestions";
import LoggedInUserContext from "./../../context/LoggedInUser";
import UserContext from "../../context/user";

export default function SideBar() {
  // const { user: { docId = "", fullName, username, userId, following } = {} } =
  //   useContext(LoggedInUserContext);
  const { user: loggedInUser } = useContext(UserContext);
  const { user: { docId = "", fullName, username, userId, following } = {} } =
    useUser(loggedInUser?.uid);

  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestions
        userId={userId}
        following={following}
        loggedInUserDocId={docId}
      />
    </div>
  );
}
