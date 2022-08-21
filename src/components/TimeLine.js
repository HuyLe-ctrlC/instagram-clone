import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import usePhotos from "../hooks/use-photos";
import Post from "./Post/index";

function TimeLine() {
  // we need to get the logged in user's photo (hook)
  const { photos } = usePhotos();
  // on loading the photos, we need to use react skeleton
  // if we have photos, render them (create a post component)
  //if the user has no photos, tell them to create some photos
  return (
    <div className="container col-span-2">
      {!photos ? (
        <>
          {[...new Array(4)].map((_, index) => (
            <Skeleton
              key={index}
              count={4}
              width={640}
              height={500}
              className="mb-5"
            />
          ))}
        </>
      ) : photos?.length > 0 ? (
        photos.map((content) => (
          <Post key={content.docId} content={{ content }} />
        ))
      ) : (
        <p className="text-center text-2xl">Follow people to see more photos</p>
      )}
    </div>
  );
}

export default TimeLine;
