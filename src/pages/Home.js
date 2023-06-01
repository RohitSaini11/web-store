import Slider from "../components/Slider";
import Whyus from "../components/Whyus";
import  BestSelling from "../components/BestSelling";
import FeatureProducts from "../components/Featuredproducts";
import Booking from "../components/ProductConsultation";


function Home(){

  return (
    <>
    <div className='home'>
      <Slider />
      <FeatureProducts />
      <Booking />
      <BestSelling />
      <Whyus/>
    </div>
    </>
  );
}

export default Home; 