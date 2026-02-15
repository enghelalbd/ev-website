import React from "react";
import Background from "./Component/Background/Background";

const App = () => {
  let heroData = [
    { text1: "Dive into", text2: "What You Love" },
    { text1: "Indulge ", text2: "Your Passions" },
    { text1: "Give in to", text2: "Your pasion" },
  ];

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}></Background>
    </div>
  );
};

export default App;
