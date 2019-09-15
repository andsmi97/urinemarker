import React from "react";
import BottomMenu from "../Components/BottomMenu";
import AnalysisCard from "../Components/AnalysisCard";

const Home = () => {
  const analysis = [
    { date: new Date(), img: "img" },
    { date: new Date(), img: "img" },
    { date: new Date(), img: "img" }
  ];
  return (
    <div className="backgorund">
      Последние тесты
      {analysis.map(analys => (
        <AnalysisCard date={analys.date} img={analys.img} />
      ))}
      <BottomMenu />
    </div>
  );
};

export default Home;
