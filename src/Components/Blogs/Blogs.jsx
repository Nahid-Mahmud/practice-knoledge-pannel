import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
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
      <div className="lg:w-2/3">
        Blogs : {blog.length}
        {
            blog.map((blog,index)=><Blog key={index} blog={blog}></Blog>)
        }
      </div>
    </>
  );
};

export default Blogs;
