import { useState } from "react";
import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <>
      <div className="flex flex-col lg:w-1/3  ">
        <div>
          <p>Spent time on read :</p>
        </div>
        <div className="bg-slate-400 rounded-md p-5">
          <h2>Bookmarked Blogs : {bookmarks.length} </h2>
          <div className="flex flex-col  ">
            {bookmarks.map((bookmark, index) => (
              <Bookmark key={index} bookmark={bookmark}></Bookmark>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookmarks;
