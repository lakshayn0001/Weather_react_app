export const fetchWeather = async (lat, lon) => {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relative_humidity_2m,precipitation,visibility,windspeed_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=auto`
  );
  return res.json();
};

export const fetchHistorical = async (lat, lon, start, end) => {
  const res = await fetch(
    `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=${start}&end_date=${end}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max&timezone=auto`
  );
  return res.json();
};