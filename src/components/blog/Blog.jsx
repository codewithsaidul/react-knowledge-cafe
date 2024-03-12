import PropTypes from "prop-types";

const Blog = ({ blog }) => {
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

      <div className="flex justify-between items-center mt-8">
        <div className="flex items-center gap-3">
          {/* Image of Author  */}
          <img
            className="w-14"
            src={author_img}
            alt={`Profile Image of Author ${author_img}`}
          />

          <div>
            {/* Author Name & Posting Date */}
            <h3>{author}</h3>
            <span>{posted_date}</span>
          </div>
        </div>

        {/* Reading Time */}
        <div>
          <span>{reading_time} Min Read</span>
        </div>
      </div>

      {/* Blog Title */}
      <h2 className="text-4xl">{title}</h2>

      {/* Blog Hash Tag */}

      <p>
        {
            hashtags.map((hash, index) => <span key={index}> <a href="#">#{hash}</a> </span>)
        }
      </p>
    </div>
  );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;
