import { useRef } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Image from "./Image";
import Actions from "./Actions";
import Footer from "./Footer";
import Comments from "./Comments";

export default function Post({ content }) {
  const commentInput = useRef(null);
  const handleFocus = () => commentInput.current.focus();
  //component
  //=> header, image, actions (likes & comment icons), footer and comments
  return (
    <div className="rounded col-span-4 border bg-white border-gray-primary mb-12">
      <Header username={content.content.username} />
      <Image
        imageSrc={content.content.imageSrc}
        caption={content.content.caption}
      />
      <Actions
        docId={content.content.docId}
        totalLikes={content.content.likes.length}
        likedPhoto={content.content.userLikedPhoto}
        handleFocus={handleFocus}
      />
      <Footer
        caption={content.content.caption}
        username={content.content.username}
      />
      <Comments
        docId={content.content.docId}
        comments={content.content.comments}
        posted={content.content.dateCreated}
        commentInput={commentInput}
      />
    </div>
  );
}

Post.propTypes = {
  content: PropTypes.shape({
    content: PropTypes.shape({
      username: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
      docId: PropTypes.string.isRequired,
      userLikedPhoto: PropTypes.bool.isRequired,
      likes: PropTypes.array.isRequired,
      comments: PropTypes.array.isRequired,
      dateCreated: PropTypes.number.isRequired,
    }),
  }),
};
