
const ExperienceBar = () => {
  return (
    <>
      <div className="box bg-transparent flex flex-row justify-center w-full">
        <div className="rectangle-wrapper border-0 h-12 w-96"></div>
        <div className="rectangle bg-blue-100 border border-purple-900 border-opacity-50 rounded-lg h-12 fixed top-0 left-0 w-96"></div>
      </div>

      <div className="my-4">
        <input
          type="url"
          className="border border-gray-300 rounded-md px-4 py-2 w-full"
        />
      </div>
    </>
  );
};

export default ExperienceBar;
