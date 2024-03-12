import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleToAddBookmarks, handleToAddTimes }) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-10 border-b border-[#1111111A] pb-5">
      {/* Cover Image ofe the Bloag */}
      <img
        className="w-full"
        src={cover}
        alt={`Cover Image of Title ${title}`}
      />

      <div className="flex flex-col sm:flex-row items-center sm:justify-between sm:items-center mt-8 gap-3">
        <div className="flex items-center gap-6">
          {/* Image of Author  */}
          <img
            className="w-14"
            src={author_img}
            alt={`Profile Image of Author ${author_img}`}
          />

          <div>
            {/* Author Name & Posting Date */}
            <h3 className="text-2xl text-[#111] font-bold">{author}</h3>
            <span className="text-base text-[#11111199] font-semibold">
              {posted_date}
            </span>
          </div>
        </div>

        {/* Reading Time */}
        <div className="flex gap-3">
          <span className="text-xl text-[#11111199] font-medium">
            {reading_time} Min Read
          </span>

          <button
            onClick={() => handleToAddBookmarks(blog)}
            className="text-2xl text-[#11111199] font-medium"
          >
            <CiBookmark />
          </button>
        </div>
      </div>

      {/* Blog Title */}
      <h2 className="text-2xl sm:text-4xl my-8 text-[#111111] font-bold">
        {title}
      </h2>

      {/* Blog Hash Tag */}

      <p>
        {hashtags.map((hash, index) => (
          <span className="ml-3" key={index}>
            {" "}
            <a className="text-xl text-[#11111199] font-medium" href="#">
              #{hash}
            </a>{" "}
          </span>
        ))}
      </p>

      <button
        onClick={() => handleToAddTimes(reading_time)}
        className="text-xl text-[#6047EC] font-semibold mt-3 underline pb-1"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleToAddBookmarks: PropTypes.func,
  handleToAddTimes: PropTypes.func
};

export default Blog;
