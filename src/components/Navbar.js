function Navbar(){
    return(
        <nav className=" shadow-lg bg-gray-100 py-4 px-5 flex justify-between items-center container mx-auto">
            <div className="">
                <a className="text-gray-700 text-4xl" href="/">WebStore</a>
            </div>
            <ul className="list-none flex justify-center gap-5">
                <li>
                    <a className="active:underline" href="/">Home</a>
                </li>
                <li>
                    <a href="/About">About</a>
                </li>
                <li>
                    <a href="/Product">Product</a>
                </li>
                <li>
                    <a href="/Booking">Booking</a>
                </li>
                <li>
                    <a href="/Contact">Contact</a>
                </li>
                <li>
                    <a href="/Cart">Cart</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;