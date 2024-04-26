import MobileNav from "./MobileNav.tsx";
import MainNav from "./MainNav.tsx";

const Header = () => {
  return (
    <div className="border-b-1 border-black">
      <div className="md:hidden fixed z-[1] w-[100vw] bg-white">
        <MobileNav />
      </div>
      <div className="hidden md:block">
        <MainNav />
      </div>
    </div>
  );
};

export default Header;
