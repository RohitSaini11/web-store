import Slider from "../components/Slider";
import Whyus from "../components/Whyus";
import  BestSelling from "../components/BestSelling";
import FeatureProducts from "../components/Featuredproducts";
import Booking from "../components/Booking";
import Footer from "../components/Footer";

function Home(){

  return (
    <>
    <div className='home'>
      <Slider />
      <FeatureProducts />
      <Booking />
      <BestSelling />
      <Whyus/>
      <Footer />
    </div>
    </>
  );
}

export default Home; 