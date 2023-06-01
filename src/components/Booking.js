import { useNavigate } from "react-router-dom";


const Booking = () => {
  const navigate = useNavigate();
  const styles={
        backgroundImage: "url('https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbnN1bHRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')",
        
  }
  return (
    <section 
        style={styles}
        className="consultation flex items-center bg-no-repeat bg-cover h-[40rem] ">
      <div className="w-full h-full mx-auto bg-black/60 flex justify-evenly items-center px-20">
        <div className="flex container text-gray-50 flex-col  gap-4">
          <h1 className="text-4xl w-[80%] ">
            Are you confused,which product is suitable for you ?
          </h1>
          <h1 className="text-4xl font-semibold w-[80%] text-orange-500">
            Need consultation?
          </h1>
          <p className="text-lg">Get ultimate solution from our talent</p>
        </div>
        <button
          className="text-gray-50 border rounded-full border-orange-500 px-10 bg-orange-500 py-2"
          onClick={() => navigate("booking")}
        >
          BookNow
        </button>
      </div>
    </section>
  );
};

export default Booking;
