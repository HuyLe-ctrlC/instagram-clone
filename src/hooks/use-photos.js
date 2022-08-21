import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";
import { getPhotos, getUserByUserId } from "../services/firebase";

export default function usePhotos() {
  const [photos, setPhotos] = useState(null);
  const {
    user: { uid: userId = "" },
  } = useContext(UserContext);
  useEffect(() => {
    async function getTimeLinePhotos() {
      //example: [2, 1, 5] <- 2 being raphael
      const [{ following }] = await getUserByUserId(userId);
      // does the user actually following people?
      let followedUserPhotos = [];
      if (following.length > 0) {
        followedUserPhotos = await getPhotos(userId, following);
      }
      // re-arrange array to be newest  photos first  by dateCreated
      followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
      setPhotos(followedUserPhotos);
    }
    //console.log("userId", userId);
    getTimeLinePhotos();
  }, [userId]);
  return { photos };
}
