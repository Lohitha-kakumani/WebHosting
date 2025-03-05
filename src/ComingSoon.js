import React from "react";
import Countdown from "react-countdown";

const ComingSoon = () => {
  const launchDate = new Date("2025-06-01T00:00:00"); // Set your launch date

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}><h1>Coming Soon - Updated Version 🚀</h1>      </h1>
      <p style={styles.text}>We're launching in:</p>
      <Countdown date={launchDate} renderer={CountdownRenderer} />
    </div>
  );
};

const CountdownRenderer = ({ days, hours, minutes, seconds }) => (
  <h2 style={styles.timer}>{`${days}d ${hours}h ${minutes}m ${seconds}s`}</h2>
);

const styles = {
  container: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor: "#003566", color: "#FFD60A", textAlign: "center" },
  heading: { fontSize: "3rem", marginBottom: "1rem" },
  text: { fontSize: "1.5rem", marginBottom: "1rem" },
  timer: { fontSize: "2rem" },
};

export default ComingSoon;
