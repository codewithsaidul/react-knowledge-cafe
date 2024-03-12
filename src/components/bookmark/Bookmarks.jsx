import PropTypes from "prop-types";

const Bookmarks = ({bookmark}) => {
  return <div>Bookmarks: {bookmark}</div>;
};

Bookmarks.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmarks;
