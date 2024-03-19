import React, { useState } from "react";
import { useHistory } from "react-router-dom";


import { IonContent, IonPage } from "@ionic/react";

import PilgrimLogo from "../../assets/Rectangle 26.png";
import GoogleLogo from "../../assets/Google.png";

const Login: React.FC = () => {
    const history = useHistory();
  // State for form fields
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    fullName: "",
    password: "",
    bio: ""
  });

  // Handler for input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // You can perform form submission logic here

    history.push("/home");
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="font-bold text-3xl mt-4 ">Pilgrim App</div>
          <img src={PilgrimLogo} alt="pilgrim_logo" className="text-center" />
          <div className="font-semibold text-xl">Create an account</div>
          <div className="text-sm text-gray-500">Enter your details below:</div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-11/12 ">
            {/* Username */}
            <div className="relative mt-4">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="username "
                className="w-full h-10 p-4 rounded-md bg-white border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div className="relative mt-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="email "
                className="w-full h-10 p-4 rounded-md bg-white border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Full Name */}
            <div className="relative mt-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="full name "
                className="w-full h-10 p-4 rounded-md bg-white border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Password */}
            <div className="relative mt-4">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="password "
                className="w-full h-10 p-4 rounded-md bg-white border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Bio */}
            <div className="relative mt-4">
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                placeholder="bio "
                rows={3}
                className="w-full p-4 rounded-md bg-white border border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            {/* Sign Up Button */}
            <button type="submit" className="bg-black w-full p-2 rounded-md text-white mt-4">
              Sign up
            </button>
          </form>

{/* Or Continue With */}
<div className="flex items-center w-11/12 mt-4">
            <div className="flex-1 bg-gray-300 h-px"></div>
            <div className="mx-2 text-gray-500">or continue with</div>{" "}
            <div className="flex-1 bg-gray-300 h-px"></div>
          </div>

          {/* Google Sign In Button */}
          <button className="flex items-center justify-center bg-gray-100 w-11/12 rounded-md p-3 mt-5">
            <img src={GoogleLogo} alt="google_logo" className="px-2" />
            Google
          </button>

          {/* Terms of Service and Privacy Policy */}
          <div className="text-center text-sm mt-4 w-11/12 text-gray-500">
            By clicking continue, you agree to our{" "}
            <span className="text-black font-medium">Terms of Service</span>{" "}
            and <span className="text-black font-medium">Privacy Policy</span>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;

