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
import { useTranslation } from "react-i18next";

function NavLinks() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-6">
      <Link to={"/"}>
        <span className="text-blue-700 font-semibold hover:text-blue-900 transition">
          {t("fruits")}
        </span>
      </Link>

      <Link to={"/vegetables"}>
        <span className="text-blue-700 font-semibold hover:text-blue-900 transition">
          {t("vegetables")}
        </span>
      </Link>

      <Link to={"/meats"}>
        <span className="text-blue-700 font-semibold hover:text-blue-900 transition">
          {t("meats")}
        </span>
      </Link>

      <Link to={"/help"}>
        <span className="text-blue-700 font-semibold hover:text-blue-900 transition">
          {t("help")}
        </span>
      </Link>
    </div>
  );
}

function CartBadge() {
  const cartItems = useCartStore((state) => state.cartItems);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const { t } = useTranslation();

  return (
    <Link to={"/cart"} className="relative">
      <span className="text-blue-700 font-semibold hover:text-blue-900 transition">
        {t("cart")}
      </span>

      {totalQuantity > 0 && (
        <span
          className="
            absolute -top-4 -right-4 
            bg-blue-600 text-white
            text-[10px] font-bold
            w-5 h-5 rounded-full
            flex items-center justify-center
            shadow leading-none
          "
        >
          {totalQuantity}
        </span>
      )}
    </Link>
  );
}

function LanguageSelect() {
  const { i18n } = useTranslation();

  return (
    <select
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      defaultValue={i18n.language}
      className="border-[2px] border-blue-300 rounded-lg px-2 py-1 text-blue-700 bg-white hover:bg-blue-50 cursor-pointer"
    >
      <option value="rus">Rus</option>
      <option value="eng">Eng</option>
    </select>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  return (
    <Navbar className="rounded-none mx-auto max-w-full px-6 py-3 bg-white shadow-sm">
      <div className="flex items-center justify-between w-full">
        <Typography
          as="a"
          href="#"
          variant="h5"
          className="mr-4 cursor-pointer py-1.5 font-bold text-blue-700 hover:text-blue-800 transition-colors"
        >
          Foodly
        </Typography>

        <div className="hidden lg:flex">
          <NavLinks />
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <CartBadge />
          <LanguageSelect />
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

      <Collapse open={openNav}>
        <div className="flex flex-col gap-4 mt-2">
          <NavLinks />
          <div className="flex items-center gap-4">
            <LanguageSelect />
            <CartBadge />
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}
