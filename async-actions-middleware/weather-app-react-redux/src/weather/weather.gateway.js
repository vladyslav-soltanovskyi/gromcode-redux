const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities';

export const getWeatherCities = async () => {
  const res = await fetch(baseUrl);
  
  if (!res.ok) {
    throw new Error('Error server');
  }

  return await res.json();
}