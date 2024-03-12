import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  console.log(blog);
  return <div>bloag</div>;
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;
