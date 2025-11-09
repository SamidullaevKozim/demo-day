import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

function NavList() {
  const cartItems = useCartStore((state) => state.cartItems);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <ul className="my-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-5">
      <Link to={"/fruits"}>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-2 font-medium text-blue-600 rounded hover:bg-blue-50 transition-all duration-200"
        >
          <span className="flex items-center cursor-pointer">Фрукты</span>
        </Typography>
      </Link>
      <Link to={"/vegetables"}>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-2 font-medium text-blue-600 rounded hover:bg-blue-50 transition-all duration-200"
        >
          <span className="flex items-center cursor-pointer">Овощи</span>
        </Typography>
      </Link>
      <Link to={"/meats"}>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-2 font-medium text-blue-600 rounded hover:bg-blue-50 transition-all duration-200"
        >
          <span className="flex items-center cursor-pointer">Мясо</span>
        </Typography>
      </Link>
      <Link to={"/cart"}>
        <li className="ml-4 font-semibold text-blue-700">🛒 {totalQuantity}</li>
      </Link>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <Navbar className="rounded-none mx-auto max-w-full px-6 py-3 bg-white shadow-sm">
      <div className="flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          variant="h5"
          className="mr-4  cursor-pointer py-1.5 font-bold text-blue-700 hover:text-blue-800 transition-colors"
        >
          Foodly
        </Typography>

        <div className="hidden lg:block">
          <NavList />
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-blue-600 hover:bg-blue-50 active:bg-blue-100 lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>

      <Collapse open={openNav} className="bg-white">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
