import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar} from "@ionic/react";
import BackArrow from "../../assets/chevron_left_thin.png";
import PilgrimImg from "../../assets/Carousel.png";
import NaviationPanel from "../../components/NavigationPanel";

const PilgrimDetails: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <img src={BackArrow} alt="" className="ml-3" />
          <IonTitle>Pilgrim_Name</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <div className="flex flex-col h-full">
          <div className="flex flex-col justify-start items-center gap-4 flex-1 overflow-y-auto">
            <img src={PilgrimImg} alt="" />
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dicta
              animi repudiandae, adipisci esse voluptas quibusdam accusantium
              similique temporibus alias totam, fuga modi, omnis architecto
              praesentium quae cupiditate. Illum, quae.
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dicta
              animi repudiandae, adipisci esse voluptas quibusdam accusantium
              similique temporibus alias totam, fuga modi, omnis architecto
              praesentium quae cupiditate. Illum, quae.
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dicta
              animi repudiandae, adipisci esse voluptas quibusdam accusantium
              similique temporibus alias totam, fuga modi, omnis architecto
              praesentium quae cupiditate. Illum, quae.
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dicta
              animi repudiandae, adipisci esse voluptas quibusdam accusantium
              similique temporibus alias totam, fuga modi, omnis architecto
              praesentium quae cupiditate. Illum, quae.
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dicta
              animi repudiandae, adipisci esse voluptas quibusdam accusantium
              similique temporibus alias totam, fuga modi, omnis architecto
              praesentium quae cupiditate. Illum, quae.
            </div>
          </div>
          {/* Button */}
          <div className="absolute bottom-10 left-0 right-0 p-4 text-center w-full">
            <button className="bg-black text-center font-bold text-white w-full p-2 rounded-2xl">
                Book
            </button>
          </div>
        </div>
      </IonContent>
      <NaviationPanel />
    </IonPage>
  );
};

export default PilgrimDetails;
