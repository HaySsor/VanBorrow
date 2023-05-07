import styled from './vans.module.scss';
import {useEffect, useState} from 'react';
import {useFetch} from '../../hooks/useFetch';
import type {VanType} from '../../types/vanType';
import {VanListItem} from '../../components/van-list-item/van-list-item.component';
import {useLoaderData, useSearchParams} from 'react-router-dom';

const API_LINK = '/api/vans';

const fetchData = async () => {
  const [getData] = useFetch();
  const vansData = await getData<{vans: VanType[]}>(API_LINK);
  return vansData.vans;
};

export const loader = async () => {
  try {
    return await fetchData();
  } catch (err) {
    return await fetchData();
  }
};

export const VansPage = () => {
  const vanList = useLoaderData() as VanType[];
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');

  const FilterVanList = typeFilter
    ? vanList.filter((van) => van.type === typeFilter)
    : vanList;

  const HandleSearchParams = (key: string, value: string | null) => {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };

  return (
    <div className={styled.vanListContainer}>
      <div className={styled.vanListFilterButtons}>
        <button
          className={styled.simple}
          onClick={() => HandleSearchParams('type', 'simple')}>
          Simple
        </button>
        <button
          className={styled.rugged}
          onClick={() => HandleSearchParams('type', 'rugged')}>
          Rugged
        </button>
        <button
          className={styled.luxury}
          onClick={() => HandleSearchParams('type', 'luxury')}>
          Luxury
        </button>
        {typeFilter ? (
          <button
            className={styled.clear}
            onClick={() => HandleSearchParams('type', null)}>
            Clear
          </button>
        ) : null}
      </div>
      <div className={styled.vanList}>
        {FilterVanList &&
          FilterVanList.map((van) => {
            return (
              <VanListItem
                key={van.id}
                van={van}
                searchParams={searchParams}
                typeFilter={typeFilter}
              />
            );
          })}
      </div>
    </div>
  );
};
