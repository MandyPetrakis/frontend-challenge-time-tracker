export default function Nav({ timeframe, updateTime }) {
  return (
    <div className="wrapper">
      <div className="profile">
        <img src="images/image-jeremy.png" alt="profile" />
        <h4>Report for</h4>
        <h2>Jeremy Robson</h2>
      </div>
      <div className="toggle-wrapper">
        <div
          onClick={() => updateTime("daily")}
          className={timeframe == "daily" ? "active" : "toggle"}
        >
          Daily
        </div>
        <div
          onClick={() => updateTime("weekly")}
          className={timeframe == "weekly" ? "active" : "toggle"}
        >
          Weekly
        </div>
        <div
          onClick={() => updateTime("monthly")}
          className={timeframe == "monthly" ? "active" : "toggle"}
        >
          Monthly
        </div>
      </div>
    </div>
  );
}
