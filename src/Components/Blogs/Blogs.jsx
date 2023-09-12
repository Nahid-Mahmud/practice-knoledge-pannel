import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Nahid-Mahmud/practice-knoledge-pannel/main/data.json"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div className="lg:w-2/3">Blogs</div>;
};

export default Blogs;
