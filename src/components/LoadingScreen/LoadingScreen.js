import { motion } from "framer-motion";
import React from "react";
import { Rings } from "react-loader-spinner";

const LoadingScreen = () => {
  return (
    <motion.div className="bg-site h-screen w-screen flex items-center justify-center transition-all ease-in-out">
      <Rings
        height="80"
        width="80"
        radius="9"
        color="#B809C3"
        ariaLabel="three-dots-loading"
      />
    </motion.div>
  );
};

export default LoadingScreen;
