import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks, time }) => {
  return (
    <>
      <div className="flex flex-col gap-5 lg:w-1/3  ">
        <div className="p-6 rounded-lg bg-blue-300">
          <p className="text-2xl font-bold text-blue-600">
            Spent time on read : {time}
          </p>
        </div>
        <div className="bg-slate-400 rounded-md p-5">
          <h2 className="font-bold text-2xl">
            Bookmarked Blogs : {bookmarks.length}{" "}
          </h2>
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
