import { IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react";
import BackArrow from "../../assets/chevron_left_thin.png";
import Phone from "../../assets/Phone.png";
import Video from "../../assets/Video.png";

const Chat: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="mb-4">
        <IonToolbar>
          <div className="flex items-center justify-between mr-2 ml-4">
            <img src={BackArrow} alt="" />
            <div>Person Name</div>
            <div className="flex gap-3">
              <img src={Phone} alt="" />
              <img src={Video} alt="" />
            </div>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="flex flex-col h-full">
          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto">
            {/* Example sender's message */}
            <div className="flex justify-start">
              <div className="bg-gray-200 text-black p-2 px-4 rounded-xl ml-2">
                Hello!
              </div>
            </div>
            {/* Example user's message */}
            <div className="flex justify-end">
              <div className="bg-black text-white p-2 px-4 rounded-xl mr-2">
                Hello!
              </div>
            </div>
            {/* More messages */}
          </div>
          {/* Input area */}
          <div className="flex items-center justify-between bg-gray-100 p-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-2 border border-gray-300 rounded-md"
            />
            <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">
              Send
            </button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Chat;
