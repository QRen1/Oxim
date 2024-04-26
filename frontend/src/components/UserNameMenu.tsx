import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";

const UserNameMenu = () => {
  const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold gap-2">
        <img
          src={user?.picture}
          alt="User Profile"
          className="rounded-full h-[3rem]"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        style={{ transform: "translateX(-30%)", border: "black 1px solid" }}
      >
        <DropdownMenuItem className="flex flex-col">
          <Link to="/user-profile" className="font-bold text-center m-[auto]">
            User Profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Button className="flex flex-1 font-bold" onClick={() => logout()}>
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNameMenu;
