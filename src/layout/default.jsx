import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

const DefaultLayout = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-base-200 text-base-content">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50">
        <div className="relative z-10">{children}</div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default DefaultLayout;
