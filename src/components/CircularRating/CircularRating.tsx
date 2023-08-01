import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { FC } from "react";
import "react-circular-progressbar/dist/styles.css";

export const CircularRating: FC<{ rating: number; type?: string }> = ({ rating, type }) => {
  const bgc = type === "big" ? "#13293b" : "#d6d6d6";
  const trailColor = rating === 0 ? "red" : "#d6d6d6";

  return (
    <CircularProgressbar
      value={rating}
      maxValue={10}
      text={rating != 0 ? rating.toString() : "0"}
      strokeWidth={type === "big" ? 13 : 9}
      background={true}
      backgroundPadding={5}
      styles={buildStyles({
        pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
        backgroundColor: bgc,
        textSize: "30px",
        pathTransitionDuration: 3,
        textColor: "white",
        trailColor: trailColor,
      })}
    />
  );
};
