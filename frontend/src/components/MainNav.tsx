import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/nav.css";
import UserNameMenu from "./UserNameMenu";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const navLinks = [
    {
      text: "Shop",
      link: "/",
    },
    {
      text: "Orders",
      link: "/order",
    },
    {
      text: "Plate",
      link: "/cart",
    },
  ];

  return (
    <div className="flex h-[120px] w-full items-center justify-between border border-black bg-white z-2231">
      {/* Logo */}
      <Link
        to="/home"
        className="flex items-center justify-center h-full mx-auto flex-1 border-r border-black"
      >
        LOGO
      </Link>

      {/* Navigation links */}
      <div className="flex items-center justify-center h-full flex-1">
        {navLinks.map((link, index) => (
          <div
            key={index}
            className="w-full border-r border-black h-full items-center justify-center flex"
          >
            <div className="text-container link-container">
              <div className="rotate">
                <Link to={link.link} className="textone">
                  {link.text}
                </Link>
                <Link to={link.link} className="texttwo">
                  {link.text}
                </Link>
              </div>
            </div>
          </div>
        ))}

        <div className="w-full border-r border-black h-full items-center justify-center flex">
          {!isAuthenticated ? (
            <button
              className="text-[1.2rem]"
              onClick={async () => await loginWithRedirect()}
            >
              Log In
            </button>
          ) : (
            <UserNameMenu />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainNav;
