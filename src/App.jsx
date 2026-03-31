import { useState } from "react";
import CurrentWeather from "./pages/CurrentWeather";
import Historical from "./pages/Historical";
import Navbar from "./components/Navbar";

export default function App() {
  const [page, setPage] = useState("current");

  return (
    <div>
      <Navbar setPage={setPage} />

      <div style={{ padding: 20 }}>
        {page === "current" ? <CurrentWeather /> : <Historical />}
      </div>
    </div>
  );
}