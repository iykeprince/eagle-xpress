import React from "react";

const TrackingBox = ({ history }) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  
  const formatDate = (dateString) => {
    const jsDate = new Date(dateString);
    const format =
      months[jsDate.getMonth()] +
      " " +
      jsDate.getDate() +
      ", " +
      jsDate.getFullYear();
    return format;
  };
  const formatTime = (timeString) => {
    const jsTime = new Date(timeString);
    let am_pm = "AM";
    if (jsTime.getHours() >= 12) {
      am_pm = "PM";
    }
    const format = jsTime.getHours() + ":" + jsTime.getMinutes() + " " + am_pm;
    return format;
  };
  return (
    <div className="tracking-box">
      <div className="tracking-time-box">
        <div className="tracking-time">
          {formatDate(history.timestamp.toDate().toString())}
        </div>
        <span>{formatTime(history.timestamp.toDate().toString())}</span>
      </div>
      <div className="tracking-location">
        {history.length === 0 ? '' : history.length < 2 ? '' : (<span className="dott"></span>)}
        <strong>{history.location} </strong>
        {/* Carga Office Near 10-G Location South */}
      </div>
    </div>
  );
};

export default TrackingBox;
