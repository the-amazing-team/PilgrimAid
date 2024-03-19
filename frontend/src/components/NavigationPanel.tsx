import HomeIcon from "../../assets/home-bar.png";
import SearchIcon from "../../assets/search-bar.png";
import AddIcon from "../../assets/add-button.png";
import NotificationIcon from "../../assets/notification.png";
import ProfileIcon from "../../assets/tab-bar-profile-picture.png";

const NaviationPanel: React.FC = () => {
  return (
    <div className="fixed bottom-0 bg-white w-full border-t">
      <div className="flex justify-center p-2">
        <img src={HomeIcon} alt="home" />
        <img src={SearchIcon} alt="search" />
        <img src={AddIcon} alt="add" />
        <img src={NotificationIcon} alt="notification" />
        <img src={ProfileIcon} alt="profile" />
      </div>
    </div>
  );
};

export default NaviationPanel;
