import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmarks,handleMarkAsRead}) => {
  const [blog, setBlogs] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Nahid-Mahmud/practice-knoledge-pannel/main/data.json"
    )
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <>
      <div className="lg:w-2/3 flex flex-col gap-28  p-5">
        {blog.map((blog, index) => (
          <Blog handleMarkAsRead={handleMarkAsRead} handleBookmarks={handleBookmarks} key={index} blog={blog}></Blog>
        ))}
      </div>
    </>
  );
};

export default Blogs;
