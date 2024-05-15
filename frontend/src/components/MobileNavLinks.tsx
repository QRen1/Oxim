import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <div className="flex flex-col gap-5 w-full pt-5">
      <Link
        className="flex bg-white items-center font-bold text-black"
        to="/user-profile"
      >
        User Profile
      </Link>
      <Link className="flex bg-white items-center font-bold text-black" to="/">
        Shop
      </Link>
      <Link
        className="flex bg-white items-center font-bold text-black"
        to="/order"
      >
        My Orders
      </Link>
      <Link
        className="flex bg-white items-center font-bold text-black"
        to="/cart"
      >
        My Plate
      </Link>

      <button
        className="flex items-center px-3 font-bold w-[full] border border-black p-2 justify-center text-black hover:text-white hover:bg-black"
        onClick={() => logout()}
      >
        Log Out
      </button>
    </div>
  );
};

export default MobileNavLinks;
