import { IonContent, IonPage } from "@ionic/react";

import PilgrimLogo from "../../assets/Rectangle 26.png";
import GoogleLogo from "../../assets/Google.png";

const Register: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="font-bold text-3xl mt-12 ">Pilgrim App</div>
          <img
            src={PilgrimLogo}
            alt="pilgrim_logo"
            className="text-center mt-1"
          />
          <div className="font-semibold text-xl mt-1">Create an account</div>
          <div>Enter your email to sign up for this app</div>
          <input
            type="email"
            placeholder="enter email"
            className="w-11/12 mt-4 outline-none h-10 p-4 rounded-md bg-white border border-gray-300"
          />
          <button className="bg-black w-11/12 p-2 mt-2 rounded-md text-white">
            Sign up with email
          </button>
          <div className="flex items-center w-11/12 mt-4">
            <div className="flex-1 bg-gray-300 h-px"></div>
            <div className=" mx-2 text-gray-500">or continue with</div>{" "}
            <div className="flex-1 bg-gray-300 h-px"></div>
          </div>
          <button className="flex items-center justify-center bg-gray-100 w-11/12 rounded-md p-3 mt-5">
            <img src={GoogleLogo} alt="google_logo" className="px-2" />
            Google
          </button>
          <div className="text-center text-sm mt-4 w-11/12  text-gray-500">
            By clicking continue, you agree to our{" "}
            <span className="text-black font-medium">Terms of Service </span>
            and <span className="text-black font-medium">Privacy Policy</span>
          </div>
          {/* <IonList>
            <IonItem>
              <IonInput placeholder="Enter Full Name"></IonInput>
            </IonItem>
            <IonItem>
              <IonInput placeholder="Email"></IonInput>
            </IonItem>
            <IonItem>
              <IonInput placeholder="Password"></IonInput>
            </IonItem>
              <IonButton expand="block">Register</IonButton>
          </IonList> */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
