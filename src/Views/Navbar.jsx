import Logo from "../assets/Logo.svg";
import cart from "../assets/icons/cart.svg";
import { Link, NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { items } = useSelector((state) => state.user);
  
  return (
    <nav className="bg-darkGreen text-white py-3">
      <div className="flex container justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>

        <ul className=" lg:inline-flex justify-between w-1/5">
          <li className="border-b-2 border-transparent hover:border-white">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "text-orange-300" : "text-white"
              }>
              Products
            </NavLink>
          </li>
          <li className="border-b-2 border-transparent hover:border-white">
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive ? "text-orange-300" : "text-white"
              }>
              About Us
            </NavLink>
          </li>
          <li className="cursor-pointer mt-0.5 flex relative">
            <Link to="/cart">
              <BsCart4 />
              {items?.length > 0 && (
                <p className="absolute text-center bottom-3 left-6 bg-white text-black w-6 h-6 rounded-full">
                  {items.length}
                </p>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
