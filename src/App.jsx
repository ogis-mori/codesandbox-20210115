import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontsize: "18px"
  };
  const contentLadyStyle = {
    color: "pink",
    fontsize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <p style={contentLadyStyle}>元気です</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
