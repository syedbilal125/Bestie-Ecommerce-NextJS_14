import React from "react";

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-[#9748FF] text-white">
      <h1 className="text-[40px] font-bold animate-bounce">Sorry</h1>
      <h2 className="text-[30px] animate-pulse font-medium">404 Page Not Found</h2>
    </div>
  );
}

export default NotFound;
