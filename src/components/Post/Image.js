import PropTypes from "prop-types";

export default function Image({ imageSrc, caption }) {
  return (
    <div>
      <img src={require(`../../${imageSrc}`)} alt={caption} />
    </div>
  );
}

Image.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};
