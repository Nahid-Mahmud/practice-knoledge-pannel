import PropTypes from "prop-types";
const Blog = ({ blog, handleBookmarks }) => {
  const {
    author_name,
    author_img,
    banner_image,
    title,
    tags,
    reading_time,
    publish_date,
  } = blog;
  return (
    <div className="max-w-[80%] mx-auto">
      <img src={banner_image} alt="" />
      <div className="flex justify-between my-4">
        <div className="flex gap-4">
          <div>
            <img className="w-14" src={author_img} alt="" />
          </div>
          <div>
            <p>{author_name}</p>
            <p>{publish_date}</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <p>{reading_time} min read</p>
          </div>
          <div>
            <svg
              onClick={() => handleBookmarks(blog)}
              className="cursor-pointer"
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
      <p>{title}</p>
      <div className="flex gap-3">
        {tags.map((tag, index) => {
          return <p key={index}>#{tag}</p>;
        })}
      </div>
      <button className="text-blue-700 ">Mark As Read</button>
    </div>
  );
};

export default Blog;

Blog.propTypes = {
  blog: PropTypes.object,
};
