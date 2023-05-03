import styled from './vans.module.scss';
import {useEffect, useState} from 'react';
import {useFetch} from '../../hooks/useFetch';
import type {VanType} from '../../types/vanType';
import {VanListItem} from '../../components/van-list-item/van-list-item.component';
import {useSearchParams, Link} from 'react-router-dom';

const API_LINK = '/api/vans';

export const VansPage = () => {
  const [vanList, setVanList] = useState<VanType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [getData] = useFetch();

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const vansData = await getData<{vans: VanType[]}>(API_LINK);
        setVanList(vansData.vans);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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

  if (loading) {
    return <h1> Loading...</h1>;
  }
  if (error) {
    return <h1> There was an error: {error.message}</h1>;
  }

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
