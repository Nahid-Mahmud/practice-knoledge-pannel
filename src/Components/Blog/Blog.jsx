import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  console.log(blog);
  return (
    <div>
      <p>Single Blog</p>
    </div>
  );
};

export default Blog;

Blog.propTypes = {
  blog: PropTypes.object,
};
