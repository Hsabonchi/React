function Rating1({ name, rating, maxRating = 10, onRatingChange }) {
  var buttons = [];
  for (let i = 1; i <= maxRating; ++i) {
    let button = (
      <button
        key={i}
        style={i == rating ? { background: "red" } : {}}
        onClick={() => onRatingChange(i)}
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

export default Rating1;
