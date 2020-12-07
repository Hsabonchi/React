import { useState } from "react";
import Rating1 from "./Rating1";

function Review1() {
  const [ratings, setRatings] = useState([1, 1, 1, 1]);
  const categories = ["Story", "Game Play", "Graphics", "Sound"];
  let total = ratings.reduce((prev, current) => prev + current);
  return (
    <>
      <h2>Total: {total}</h2>
      {categories.map((category, index) => (
        <Rating1
          key={category}
          name={category}
          rating={ratings[index]}
          onRatingChange={(value) => {
            let newRatings = [...ratings];
            newRatings[index] = value;
            setRatings(newRatings);
          }}
        />
      ))}
    </>
  );
}

export default Review1;
