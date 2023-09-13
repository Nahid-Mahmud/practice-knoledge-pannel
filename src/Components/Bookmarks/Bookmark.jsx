const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div>
      <p className="my-3 bg-white px-2 py-3 rounded-lg">{title}</p>
    </div>
  );
};

export default Bookmark;
