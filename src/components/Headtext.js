const Headtext = ({ textt }) => {
    return (
      <div className="flex items-center justify-center h-[20rem]  herobg">
        <div className="bg-black/70 h-full w-full flex items-center justify-center">
          <h1 className="text-6xl font-semibold text-gray-50">{textt}</h1>
        </div> 
      </div>
    );
  };
  
  export default Headtext;
  