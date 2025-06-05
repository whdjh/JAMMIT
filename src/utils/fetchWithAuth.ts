export const fetchWithAuth = async (
  url: string,
  getToken: () => string | null,
  options: RequestInit = {},
) => {
  const token = getToken();
  const headers = {
    ...options.headers,
    Authorization: token ? `Bearer ${token}` : '',
    'Content-Type': 'application/json',
  };
  const res = await fetch(url, { headers, ...options });
  const data = await res.json();
  if (!res.ok) {
    throw data;
  }

  return data.result;
};
