import PropTypes from "prop-types";

const Bookmarks = ({bookmark}) => {
    const {title} = bookmark
  return (
    <div className="p-5 bg-[#FFFFFF] rounded-lg mb-5">
      <h3 className="text-lg text-[#111111] font-semibold">{title}</h3>
    </div>
  );
};

Bookmarks.propTypes = {
    bookmark: PropTypes.object,
    time: PropTypes.number
}

export default Bookmarks;
