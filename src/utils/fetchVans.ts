import { useFetch } from "../hooks/useFetch";
import type { VanType } from "../types/vanType";
const API_LINK = '/api/vans';

export const fetchVans = async () => {
  const [getData] = useFetch();
  const vansData = await getData<{vans: VanType[]}>(API_LINK);
  return vansData.vans;
};
