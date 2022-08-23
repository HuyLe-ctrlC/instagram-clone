import { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import usePhotos from "../hooks/use-photos";
import Post from "./Post/index";
import LoggedInUserContext from "../context/LoggedInUser";
import UserContext from "../context/user";
import useUser from "./../hooks/use-user";

function TimeLine() {
  // const { user } = useContext(LoggedInUserContext);
  const { user: loggedInUser } = useContext(UserContext);
  const { user } = useUser(loggedInUser?.uid);

  // const { user: { following } = {} } = useContext(LoggedInUserContext);

  const { photos } = usePhotos(user);
  // on loading the photos, we need to use react skeleton
  // if we have photos, render them (create a post component)
  //if the user has no photos, tell them to create some photos
  return (
    <div className="container col-span-2">
      {!photos ? (
        <Skeleton count={4} width={640} height={500} className="mb-5" />
      ) : (
        photos.map((content) => (
          <Post key={content.docId} content={{ content }} />
        ))
      )}
    </div>
  );
}

export default TimeLine;
