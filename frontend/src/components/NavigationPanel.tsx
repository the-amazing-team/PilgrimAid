import HomeIcon from "../assets/home-bar.png";
import SearchIcon from "../assets/search-bar.png";
import AddIcon from "../assets/add-button.png";
import NotificationIcon from "../assets/notification.png";
import ProfileIcon from "../assets/tab-bar-profile-picture.png";
import { Link } from "react-router-dom";

const NaviationPanel: React.FC = () => {
  return (
    <div className="fixed bottom-0 bg-white w-full border-t">
      <div className="flex justify-center p-2">
        <Link to="/home">
          <img src={HomeIcon} alt="home" />
        </Link>
        <Link to="/searchPilgrims">
          <img src={SearchIcon} alt="search" />
        </Link>
        <Link to="/add">
          <img src={AddIcon} alt="add" />
        </Link>
        <Link to="/notifications">
          <img src={NotificationIcon} alt="notification" />
        </Link>
        <Link to="/profile">
          <img src={ProfileIcon} alt="profile" />
        </Link>
      </div>
    </div>
  );
};

export default NaviationPanel;
