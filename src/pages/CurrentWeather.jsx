import { useEffect, useState } from "react";
import useLocation from "../hooks/useLocation";
import { fetchWeather } from "../services/api";
import WeatherCard from "../components/WeatherCard";
import ChartBlock from "../components/ChartBlock";

export default function CurrentWeather() {
  const coords = useLocation();
  const [data, setData] = useState(null);
  const [unit, setUnit] = useState("C");

  useEffect(() => {
    if (!coords) return;
    fetchWeather(coords.lat, coords.lon).then(setData);
  }, [coords]);

  if (!data) return <h2>Loading...</h2>;

  const convert = (t) => (unit === "C" ? t : (t * 9) / 5 + 32);

  const chartData = data.hourly.time.map((t, i) => ({
    time: t.split("T")[1],
    temp: convert(data.hourly.temperature_2m[i]),
    humidity: data.hourly.relative_humidity_2m[i],
    wind: data.hourly.windspeed_10m[i],
  }));

  return (
    <div>
      <h1>Current Weather</h1>

      <button onClick={() => setUnit(unit === "C" ? "F" : "C")}>
        Switch °{unit === "C" ? "F" : "C"}
      </button>

      {/* Cards */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <WeatherCard
          title="Temperature"
          value={`${convert(data.current_weather.temperature)} °${unit}`}
        />
        <WeatherCard
          title="Wind"
          value={`${data.current_weather.windspeed} km/h`}
        />
        <WeatherCard
          title="Humidity"
          value={`${data.hourly.relative_humidity_2m[0]} %`}
        />
        <WeatherCard
          title="Sunrise"
          value={data.daily.sunrise[0]}
        />
        <WeatherCard
          title="Sunset"
          value={data.daily.sunset[0]}
        />
      </div>

      {/* Charts */}
      <h3>Temperature</h3>
      <ChartBlock data={chartData} dataKey="temp" color="blue" />

      <h3>Humidity</h3>
      <ChartBlock data={chartData} dataKey="humidity" color="green" />

      <h3>Wind Speed</h3>
      <ChartBlock data={chartData} dataKey="wind" color="red" />
    </div>
  );
}