import { Link } from "react-router-dom";


function Navbar(){
    return(
        <nav className=" shadow-lg bg-gray-100 py-4 px-5 flex justify-between  items-center container mx-auto">
            <div className="">
                <Link className="text-orange-700 font-normal  text-4xl" to="/">WebStore</Link>
            </div>
            <ul className="list-none flex justify-center gap-5">
                <li>
                    <Link to="/">Home</Link>
                </li>
                {/* <li>
                    <Link to="/About">About</Link>
                </li> */}
                <li>
                    <Link to="/Product">Product</Link>
                </li>
                <li>
                    <Link to="/Booking">Booking</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li>
                    <Link to="/Cart">Cart</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;