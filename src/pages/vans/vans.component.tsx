import styled from './vans.module.scss';
import {useEffect, useState} from 'react';
import {useFetch} from '../../hooks/useFetch';
import type {VanType} from '../../types/vanType';
import {VanListItem} from '../../components/van-list-item/van-list-item.component';

const API_LINK = '/api/vans';

export const VansPage = () => {
  const [vanList, setVanList] = useState<VanType[]>([]);
  const [getData] = useFetch();

  useEffect(() => {
    const fetchData = async () => {
      const vansData = await getData<{vans: VanType[]}>(API_LINK);
      setVanList(vansData.vans);
    };
    fetchData();
  }, []);

  
  return (
    <div className={styled.vanListContainer}>
      <div className={styled.vanList}>
        {vanList &&
          vanList.map((van) => {
            return <VanListItem key={van.id} van={van} />;
          })}
      </div>
    </div>
  );
};
