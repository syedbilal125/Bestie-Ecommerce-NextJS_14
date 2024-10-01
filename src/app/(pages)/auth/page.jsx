import React from "react";
import AuthModel from "../../../components/Auth/AuthModle";

function Auth() {
 

  return (
    <div className="flex h-screen">
      <div className="w-1/2 backImage hidden lg:block" />
      <div className="w-full mx-10 lg:mx-0 lg:w-1/2 flex justify-center items-center">
       <AuthModel />
      </div>
    </div>
  );
}

export default Auth;
