import { useContext } from "react";
import { ReviewContext } from "../App";
import Rating2 from "./Rating2";

function Review2() {
  const { ratings, setRatings } = useContext(ReviewContext);
  const categories = ["Story", "Game Play", "Graphics", "Sound"];
  let total = ratings.reduce((prev, current) => prev + current);
  return (
    <>
      <h2>Total: {total}</h2>
      {categories.map((category, index) => (
        <Rating2 key={category} name={category} index={index} />
      ))}
    </>
  );
}

export default Review2;
