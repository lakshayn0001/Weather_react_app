export default function WeatherCard({ title, value }) {
  return (
    <div style={{ padding: 10, border: "1px solid #ccc", borderRadius: 10 }}>
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
}