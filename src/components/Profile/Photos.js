import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";

import { FaComments, FaHeart } from "react-icons/fa";

export default function Photos({ photos }) {
  console.log("photos", photos);
  return (
    <div className="h-16 border-t border-gray-primary mt-12 pt-4">
      <div className="grid grid-cols-3 gap-8 mt-4 mb-12">
        {!photos ? (
          <>
            <Skeleton count={12} height={320} width={400} />
          </>
        ) : photos.length > 0 ? (
          photos.map((photo) => (
            <div key={photo.docId} className="group relative">
              <img
                src={require(`../../${photo.imageSrc}`)}
                alt={`${photo.caption}`}
              />
              <div className="container absolute bottom-0 left-0 z-10 w-full justify-evenly items-center h-full transition ease-in-out duration-300 hover:bg-black-fade group-hover:flex hidden">
                <p className="flex items-center text-white font-bold leading-snug">
                  <FaHeart className="text-2xl mr-2" />
                  <span className="">{photo.likes.length}</span>
                </p>
                <p className="flex items-center text-white font-bold leading-snug">
                  <FaComments className="text-2xl mr-2" />
                  <span className="">{photo.comments.length}</span>
                </p>
              </div>
            </div>
          ))
        ) : null}
      </div>
      {!photos ||
        (photos.length === 0 && (
          <p className="text-center text-2xl">No Posts Yet</p>
        ))}
    </div>
  );
}

Photos.propTypes = {
  photos: PropTypes.array.isRequired,
};
