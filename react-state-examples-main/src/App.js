import "./App.css";
import { useState, createContext } from "react";

import Review1 from "./components/Review1";
import Review2 from "./components/Review2";

export const ReviewContext = createContext();

function App() {
  const [ratings, setRatings] = useState([1, 1, 1, 1]);
  return (
    <>
      <Review1 />
      <ReviewContext.Provider value={{ ratings, setRatings }}>
        <Review2 />
      </ReviewContext.Provider>
    </>
  );
}

export default App;
