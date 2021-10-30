import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const [num, setNum] = useState(0);
  const [showFlag, setShowFlag] = useState(false);

  const onClicCountUp = () => {
    setNum(num + 1);
  };

  const onClicSwitchShowFlag = () => {
    setShowFlag(!showFlag);
  };

  useEffect(() => {
    if (num > 0 && num % 3 === 0) {
      showFlag || setShowFlag(true);
    } else {
      showFlag && setShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>Hello!!</h1>
      <ColorfulMessage color="blue">how are you</ColorfulMessage>
      <ColorfulMessage color="pink">i'm fine</ColorfulMessage>
      <button onClick={onClicCountUp}>count up</button>
      <br />
      <button onClick={onClicSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {showFlag && <p>!!!!</p>}
    </>
  );
};
