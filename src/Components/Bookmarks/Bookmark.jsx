const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div>
      <p className="my-3 bg-white font-bold px-2 py-5 px-6 rounded-lg">
        {title}
      </p>
    </div>
  );
};

export default Bookmark;
