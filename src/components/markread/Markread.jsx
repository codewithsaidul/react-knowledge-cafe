import PropTypes from "prop-types";


const Markread = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3">
      <div>
        <div className="py-3 border border-[#6047EC] rounded-lg px-5 bg-[#6047EC1A] text-center">
          <h2 className="text-2xl text-[#6047EC] font-bold">
            Spent time on read : 177 min
          </h2>
        </div>

        <div>
          <h2>Bookmarks: {bookmarks.length}</h2>
        </div>
      </div>
    </div>
  );
};

Markread.propTypes = {
  bookmarks: PropTypes.object,
};

export default Markread;
