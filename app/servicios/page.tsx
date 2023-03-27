import React from "react";
import { Services } from "../../components/Services";
import Work from "../../components/Works";

const page = () => {
  return (
    <div className="min-h-screen flex items-center flex-col">
      <Services />
      <Work />
    </div>
  );
};

export default page;
