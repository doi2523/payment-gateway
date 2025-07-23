import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

const DefaultLayout = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="grid grid-rows-[auto_1fr_auto]">
      {/* Fixed Header */}
      <Header />
      {/* Main Content with Scroll */}
      <main className="overflow-auto bg-base-200 text-base-content relative">
        <div className="relative z-10">{children}</div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default DefaultLayout;
