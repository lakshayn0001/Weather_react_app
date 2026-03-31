import { useState, useEffect } from "react";
import useLocation from "../hooks/useLocation";
import { fetchHistorical } from "../services/api";
import ChartBlock from "../components/ChartBlock";

export default function Historical() {
  const coords = useLocation();
  const [data, setData] = useState(null);

  const [range, setRange] = useState({
    start: "2024-01-01",
    end: "2024-01-10",
  });

  useEffect(() => {
    if (!coords) return;
    fetchHistorical(coords.lat, coords.lon, range.start, range.end).then(setData);
  }, [coords, range]);

  if (!data) return <h2>Loading...</h2>;

  const chartData = data.daily.time.map((t, i) => ({
    time: t,
    max: data.daily.temperature_2m_max[i],
    min: data.daily.temperature_2m_min[i],
  }));

  return (
    <div>
      <h1>Historical Data</h1>

      <input
        type="date"
        value={range.start}
        onChange={(e) => setRange({ ...range, start: e.target.value })}
      />
      <input
        type="date"
        value={range.end}
        onChange={(e) => setRange({ ...range, end: e.target.value })}
      />

      <h3>Temperature Trends</h3>
      <ChartBlock data={chartData} dataKey="max" color="orange" />
      <ChartBlock data={chartData} dataKey="min" color="blue" />
    </div>
  );
}