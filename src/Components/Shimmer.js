const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(10)
        .fill(" ")
        .map((e, index) => (
          <div className=" ml-2 mt-2 bg-gray-300 w-52 h-52" key={index}></div>
        ))}
    </div>
  );
};
export default Shimmer;
