import { useContext } from "react";
import { ReviewContext } from "../App";

function Rating2({ name, maxRating = 10, index }) {
  const { ratings, setRatings } = useContext(ReviewContext);
  var buttons = [];
  for (let i = 1; i <= maxRating; ++i) {
    let button = (
      <button
        key={i}
        style={i == ratings[index] ? { background: "red" } : {}}
        onClick={() => {
          let newRatings = [...ratings];
          newRatings[index] = i;
          setRatings(newRatings);
        }}
      >
        {i}
      </button>
    );
    buttons.push(button);
  }
  return (
    <div>
      {name} {buttons}
    </div>
  );
}

export default Rating2;
