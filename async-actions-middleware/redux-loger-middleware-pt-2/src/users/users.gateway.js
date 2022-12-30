const baseUrl = 'https://api.github.com/users';

export const getUserData = async (userName) => {
  const res = await fetch(`${baseUrl}/${userName}`);
  
  if (!res.ok) {
    throw new Error('Error server');
  }

  return await res.json();
}