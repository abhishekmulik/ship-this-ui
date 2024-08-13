import { BellDot, Grip, Search } from "lucide-react";
import Profile from "../../ui/profile/Profile";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <span className="font-medium ml-3">Procurement</span>
      </div>

      <div className="flex items-center gap-4">
        <span>
          <Search className="w-5" />
        </span>
        <span>
          <BellDot className="w-5" />
        </span>
        <span>
          <Grip className="w-5" />
        </span>
        <span className="ml-4">
          <Profile />
        </span>
      </div>
    </header>
  );
}

export default Header;
