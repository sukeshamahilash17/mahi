import React from "react";
import { useParams } from "react-router-dom";
import MensWatches from "./MensWatches";
import WomensWatches from "./WomensWatches";
import AllWatches from "./AllWatches";

const Collection = () => {
  const { category } = useParams();

  return (
    <div className="container mt-5" style={{ backgroundColor: "#d3f1cd" }}>
  {/* Watches rendering components */}


      {category === "mens-watches" && <MensWatches />}
      {category === "womens-watches" && <WomensWatches />}
      {category === "all-watches" && <AllWatches />}
    </div>
  );
};

export default Collection;
