import {useEffect, useState} from 'react';
import styled from './your-vans.module.scss';
import type {VanType} from '../../types/vanType';
import {useFetch} from '../../hooks/useFetch';
import {YourVansItem} from '../../components/your-vans-item/your-vans-item.component';

const API_LINK = '/api/host/your-vans';

export const YourVans = () => {
  const [vansList, setVansList] = useState<VanType[]>([]);
  const [getData] = useFetch();

  useEffect(() => {
    const fetchData = async () => {
      const vansData = await getData<{vans: VanType[]}>(API_LINK);
      setVansList(vansData.vans);
    };
    fetchData();
  }, []);
  console.log(vansList);

  return (
    <div className={styled.yourVans}>
      {vansList.length !== 0 ? (
        vansList.map((van) => <YourVansItem van={van} />)
      ) : (
        <h3>Empty list</h3>
      )}
    </div>
  );
};
