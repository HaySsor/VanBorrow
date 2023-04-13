import {useParams} from 'react-router-dom';
import styled from './van.module.scss';
import {useFetch} from '../../hooks/useFetch';
import {useEffect, useState} from 'react';
import {VanType} from '../../types/vanType';


export const VanPage = () => {
  const [van, setVan] = useState<VanType | null>(null);

  const [getData] = useFetch();
  const {id} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const vanData = await getData<{vans: VanType}>(`/api/vans/${id}`);
      setVan(vanData.vans);
    };
    fetchData();
  }, []);

  return (
    <div className={styled.vanDetailContainer}>
      {van ? (
        <div className={styled.vanDetail}>
          <img src={van.imageUrl} />
          <i
            className={`${styled.vanType} ${styled[van.type]} ${
              styled.selected
            }`}>
            {van.type}
          </i>
          <h2>{van.name}</h2>
          <p className={styled.vanPrice}>
            <span>${van.price}</span>/day
          </p>
          <p className={styled.info}>{van.description}</p>
          <button className={styled.linkButton}>Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
