import React, { useEffect } from "react";
import Header from "../components/Header";

function NotFound() {
  useEffect(() => {
    document.title = "Not Found Page!";
  }, []);
  return (
    <div className="bg-gray-background">
      <Header />
      <div className="flex justify-center items-center max-w-screen">
        <div className="font-bold text-3xl">Not Found!</div>
      </div>
    </div>
  );
}

export default NotFound;
