export const useFetch = () => {
  const getData = async <T,>(url: string): Promise<T> => {
    const response = await fetch(url);
    if (!response.ok) {
      throw {
        message: 'Failed to fetch vans',
        statusText: response.statusText,
        status: response.status,
      };
    }
    return await response.json();
  };
  return [getData];
};
