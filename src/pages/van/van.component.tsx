import {useParams} from 'react-router-dom';
import styled from './van.module.scss';
import {useFetch} from '../../hooks/useFetch';
import {useEffect, useState} from 'react';
import {VanType} from '../../types/vanType';

const API_URL = '/api/vans/';

export const VanPage = () => {
  const [van, setVan] = useState<VanType | null>(null);
  const [getData] = useFetch();
  const {id} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const vanData = await getData<{vans: VanType}>(`${API_URL}${id}`);
      setVan(vanData.vans);
    };
    fetchData();
  }, []);

  console.log(van);

  return (
    <div>
      VAN Page
      <p>{van && van.name}</p>
    </div>
  );
};
