import { useState, useContext } from "react";
import PropTypes from "prop-types";
import FirebaseContext from "../../context/firebase";
import UserContext from "../../context/user";

import { FaRegComment } from "react-icons/fa";
import { GrShareOption } from "react-icons/gr";

export default function Action({ docId, totalLikes, likedPhoto, handleFocus }) {
  const {
    user: { uid: userId },
  } = useContext(UserContext);

  const [toggleLiked, setToggleLiked] = useState(likedPhoto);
  const [likes, setLikes] = useState(totalLikes);
  const { firebase, FieldValue } = useContext(FirebaseContext);

  const handleToggleLiked = async () => {
    setToggleLiked((toggleLiked) => !toggleLiked);

    await firebase
      .firestore()
      .collection("photos")
      .doc(docId)
      .update({
        likes: toggleLiked
          ? FieldValue.arrayRemove(userId)
          : FieldValue.arrayUnion(userId),
      });

    setLikes((likes) => (toggleLiked ? likes - 1 : likes + 1));
  };
  const cmt = () => {
    return <span className="italic">Be the first person like this</span>;
  };
  return (
    <>
      <div className="flex justify-between p-4">
        <div className="flex items-center">
          <svg
            onClick={handleToggleLiked}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleToggleLiked();
              }
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            tabIndex={0}
            className={`w-8 mr-4 select-none cursor-pointer focus:outline-none hover:text-gray-500 ${
              toggleLiked ? "fill-red-600 text-red-primary" : "text-black-light"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <FaRegComment
            onClick={handleFocus}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleFocus();
              }
            }}
            className="text-2xl mr-4 cursor-pointer hover:text-gray-500 "
          />
          <GrShareOption className="text-2xl mr-4 cursor-pointer focus:outline-none hover:text-gray-500" />
        </div>
      </div>
      <div className="p-4 py-0">
        <p className="font-semibold text-base">
          {likes === 0
            ? cmt()
            : likes === 1
            ? `${likes} like`
            : `${likes} likes`}
        </p>
      </div>
    </>
  );
}

Action.propTypes = {
  docId: PropTypes.string.isRequired,
  totalLikes: PropTypes.number.isRequired,
  likedPhoto: PropTypes.bool.isRequired,
  handleFocus: PropTypes.func.isRequired,
};
