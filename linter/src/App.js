import React from "react";

function App() {

  // eslint-disable-line 
  // esLint 가 사용하지 않는 변수명을 그냥 에러로 잡아낼 경우 
  
  const [count, setCount] = React.useState();

  return (
    <div className="App">
      <div>초기세팅</div>
    </div>
  );
}

export default App;
