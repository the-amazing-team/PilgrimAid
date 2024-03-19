import { IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react";
import BackArrow from "../../assets/chevron_left_thin.png";
import ProfilePicture from "../../assets/profile.png";

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="mb-4">
        <IonToolbar>
          <div className="flex items-center justify-center mr-2 ml-4">
            <img src={BackArrow} alt="" />
            <div className="flex-1 text-center font-bold">Profile</div>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="bg-gray-200">
          <div className="p-10 flex flex-col justify-center gap-1">
            <div className="flex place-content-center">
              <img src={ProfilePicture} alt="profile-picture" />
            </div>
            <div className="font-bold text-center text-lg">Sophia</div>
            <div className="flex justify-center gap-5">
              <button className="bg-black w-32 p-2 mt-2 rounded-md text-white">
                Followers
              </button>
              <button className="bg-black w-32 p-2 mt-2 rounded-md text-white">
                Chat
              </button>
            </div>
          </div>
        </div>
        <div className="flex border p-5">
            <div className="flex-1 font-bold">
                Name
            </div>
            <div className="flex-1">
                Sophia Silverhand
            </div>
        </div>
        <div className="flex border p-5">
            <div className="flex-1 font-bold">
                Username
            </div>
            <div className="flex-1">
                @sophiasilverhand
            </div>
        </div>
        <div className="flex border p-5">
            <div className="flex-1 font-bold">
                Email
            </div>
            <div className="flex-1">
                sophia@gmail.com
            </div>
        </div>
        <div className="flex border p-5">
            <div className="flex-1 font-bold">
                Links
            </div>
            <div className="flex-1 flex flex-col gap-3">
                <div className="text-blue-800 cursor-pointer">sophia.com</div>
                <div className="text-blue-800 cursor-pointer">mylink.net/sophia</div>
                <div className="text-blue-800 cursor-pointer">youtube.com/sophia</div>
                <div className="text-gray-400 p-2 rounded-lg cursor-pointer hover:bg-gray-100 w-fit">+ Add link</div>
            </div>
        </div>
        <div className="flex border p-5">
            <div className="flex-1 font-bold">
                Bio
            </div>
            <div className="flex-1">
                A discription of the user.
            </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
