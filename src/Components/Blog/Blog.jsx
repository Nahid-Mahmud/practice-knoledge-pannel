import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  console.log(blog);
  const { author_name, author_img, banner_image, title, tags, reading_time } =
    blog;
  return (
    <div>
      <img src={banner_image} alt="" />
      <div>
        <div>
          <div>
            <img src={author_img} alt="" />
          </div>
          <div>
            <p>{author_name}</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <p>{reading_time} min read</p>
          </div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.593 3.322C18.693 3.45 19.5 4.399 19.5 5.507V21L12 17.25L4.5 21V5.507C4.5 4.399 5.306 3.45 6.407 3.322C10.1232 2.89063 13.8768 2.89063 17.593 3.322Z"
                stroke="#111111"
                strokeOpacity="0.6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <p>{blog.title}</p>
    </div>
  );
};

export default Blog;

Blog.propTypes = {
  blog: PropTypes.object,
};
