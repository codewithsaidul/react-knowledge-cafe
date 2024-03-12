import PropTypes from "prop-types";
import Bookmarks from "../bookmark/Bookmarks";
// import Bookmark from "../bookmark/Bookmark";


const Markread = ({ bookmarks, time }) => {
  console.log(time)
  return (
    <div className="md:w-1/3">
      <div>
        <div className="py-3 border border-[#6047EC] rounded-lg px-5 bg-[#6047EC1A] text-center">
          <h2 className="text-2xl text-[#6047EC] font-bold">
            Spent time on read : {time} min
          </h2>
        </div>

        <div className="bg-[#1111110D] h-auto p-4 mt-6 rounded-lg">
          <h2 className="text-2xl text-[#111111] font-bold mb-5 text-center">
            Bookmarked Blogs : {bookmarks.length}
          </h2>

          {bookmarks.map((bookmark) => (
            <Bookmarks key={bookmarks.id} bookmark={bookmark}></Bookmarks>
          ))}

          {/* <Bookmark></Bookmark> */}
        </div>
      </div>
    </div>
  );
};

Markread.propTypes = {
  bookmarks: PropTypes.array,
  time: PropTypes.number,
};

export default Markread;
