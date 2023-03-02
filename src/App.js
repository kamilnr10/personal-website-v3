import React, { useState, useEffect, useRef } from "react";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Services from "./components/Services/Services";
import Work from "./components/Work/Work";
import client from "./sanity";
import { getPageInfo } from "./api/getApi";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

function App() {
  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const shouldLog = useRef(true);

  const fetchInfo = async () => {
    try {
      console.log("started fetching");
      const response = await client.fetch(getPageInfo);
      console.log(response);
      if (response) setInfo(response);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (shouldLog.current) {
      console.log("component mounted");
      setTimeout(() => {
        fetchInfo();
      }, 2000);
      shouldLog.current = false;
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
          <Header />
          <Banner info={info} />
          <About />
          <Services />
          <Work />
          <Contact />
          <Navigation />
        </div>
      )}
    </>
  );
}

export default App;
