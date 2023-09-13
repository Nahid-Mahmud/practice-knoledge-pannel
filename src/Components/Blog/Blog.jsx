import PropTypes from "prop-types";
import "./blog.css";
const Blog = ({ blog, handleBookmarks, handleMarkAsRead }) => {
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
            <p className="text-xl font-bold text-black">{author_name}</p>
            <p className="text-base font-semibold text-slate-400">
              {publish_date}
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <p className="text-slate-400 font-medium text-xl">
              {reading_time} min read
            </p>
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
      <p className="font-bold text-4xl text-black">{title}</p>
      <div className="flex gap-1 flex-wrap">
        {tags.map((tag, index) => {
          return <p className="font-medium text-slate-400 text-xl" key={index}>#{tag}</p>;
        })}
      </div>
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="text-blue-700 mark-as-read text-xl"
      >
        Mark As Read
      </button>
    </div>
  );
};

export default Blog;

Blog.propTypes = {
  blog: PropTypes.object,
};
