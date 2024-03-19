import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { useHistory } from "react-router-dom";

import BackArrow from "../../assets/chevron_left_thin.png";
import PilgrimImg from "../../assets/Carousel.png";
import NaviationPanel from "../../components/NavigationPanel";

const PilgrimSearch: React.FC = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/pilgrim/1");
      };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <img src={BackArrow} alt="" className="ml-3" />
          <IonTitle>Pilgrim_Sites</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding " fullscreen>
        <div className="flex flex-col justify-start h-full">
          <input
            type="text"
            placeholder="Search for a pilgrimage site..."
            className="w-full h-10 p-4 rounded-md bg-white border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <div onClick={handleClick} className="flex flex-col items-start mt-4 gap-1 border-2 border-black rounded-lg shadow-2xl  p-3">
            <div className="font-bold text-[24px]">Pilgrim Name</div>
            <div className="opacity-40">Pilgrim_location</div>
            <img src={PilgrimImg} alt="" className="w-[200px] h-[150px]" />
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              voluptas non quo blanditiis at nobis amet fuga voluptate nisi sint
              quas alias dolores quasi ipsa debitis ullam, accusamus beatae
              dolore.
            </div>
            <div className="border-2 border-black rounded-lg">
              <button className="py-1 px-2">Book</button>
            </div>
          </div>
        </div>
      </IonContent>
      <NaviationPanel />
    </IonPage>
  );
};

export default PilgrimSearch;
