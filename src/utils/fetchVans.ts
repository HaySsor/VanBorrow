import {useFetch} from '../hooks/useFetch';
import type {VanType} from '../types/vanType';

export const fetchVans = async (URL: string, id?: string) => {
  const url = id ? `${URL}/${id}` : URL;

  const [getData] = useFetch();
  const vansData = await getData<{vans: VanType[]}>(url);
  return vansData.vans;
};
