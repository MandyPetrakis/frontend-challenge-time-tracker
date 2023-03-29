import { useState, useEffect } from "react";
import {
  Ellipsis,
  Work,
  Study,
  Play,
  SelfCare,
  Social,
  Exercise,
} from "./Icons";

export default function TimeCards({ timeframe }) {
  const [timeData, setTimeData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/times")
      .then((r) => r.json())
      .then((data) => setTimeData(data));
  }, []);

  const timeCards = timeData.map((category) => {
    const cardClasses = `card-header ${category.title}`;
    return (
      <div key={category.title} className="time-wrapper">
        <div className={cardClasses}>
          {category.title == "Work" ? (
            <Work />
          ) : category.title == "Play" ? (
            <Play />
          ) : category.title == "Study" ? (
            <Study />
          ) : category.title == "Exercise" ? (
            <Exercise />
          ) : category.title == "Social" ? (
            <Social />
          ) : (
            <SelfCare />
          )}
        </div>
        <div className="time-content">
          <div className="header">
            <h3>{category.title}</h3>
            <Ellipsis />
          </div>
          <h1>
            {timeframe == "daily"
              ? category.timeframes.daily.current
              : timeframe == "weekly"
              ? category.timeframes.weekly.current
              : category.timeframes.monthly.current}
            hrs
          </h1>
          <h4>
            {timeframe == "daily"
              ? "Yesterday -" + category.timeframes.daily.previous + "hrs"
              : timeframe == "weekly"
              ? "Last Week -" + category.timeframes.weekly.previous + "hrs"
              : "Last Month -" + category.timeframes.monthly.previous + "hrs"}
          </h4>
        </div>
      </div>
    );
  });

  return <div className="grid">{timeCards}</div>;
}
