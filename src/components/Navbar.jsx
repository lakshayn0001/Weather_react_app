import React from "react";

export default function Navbar({ setPage }) {
  return (
    <div style={styles.nav}>
      <h2 style={styles.logo}>🌤 WeatherPro</h2>

      <div>
        <button style={styles.btn} onClick={() => setPage("current")}>
          Current Weather
        </button>

        <button style={styles.btn} onClick={() => setPage("history")}>
          Historical Data
        </button>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "#1e293b",
    color: "white",
  },
  logo: {
    margin: 0,
  },
  btn: {
    marginLeft: "10px",
    padding: "8px 12px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    background: "#3b82f6",
    color: "white",
  },
};