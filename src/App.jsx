import "./App.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import { useState } from "react";

//function for bookmark icon
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmarks = (blog) => {
    const isExist = bookmarks.find((e) => e.id == blog.id);
    if (isExist) return;
    console.log(isExist);
    const newbookmarks = [...bookmarks, blog];
    setBookmarks(newbookmarks);
  };

  //function for mark as read button

  const [time, setTime] = useState(0);

  const handleMarkAsRead = (reading_time, id) => {
    const newReadingTime = time + reading_time;
    setTime(newReadingTime);
    // console.log(id);
    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmarks);
  };
  return (
    <>
      <Header></Header>
      <main className="max-w-[80vw] mx-auto flex flex-col lg:flex-row gap-5 ">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleBookmarks={handleBookmarks}
        ></Blogs>
        <Bookmarks time={time} bookmarks={bookmarks}></Bookmarks>
      </main>
    </>
  );
}

export default App;

// https://raw.githubusercontent.com/Nahid-Mahmud/practice-knoledge-pannel/main/data.json

// https://i.ibb.co/7JbsZ3M/1.jpg
// https://i.ibb.co/kQdSRZj/2.png
// https://i.ibb.co/88hKChx/3.png
// https://i.ibb.co/cxvnN2Q/4.jpg
// https://i.ibb.co/fFSJLDY/boy1.png
// https://i.ibb.co/MRbvq62/boy2.jpg
// https://i.ibb.co/YWZ09bj/girl1.jpg
// https://i.ibb.co/y6c5BRS/girl2.jpg
// https://i.ibb.co/rHf9kvR/profile.png
