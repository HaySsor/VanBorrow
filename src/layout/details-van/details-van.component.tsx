import {useParams} from 'react-router-dom';
import styled from './details-van.module.scss';
import {useFetch} from '../../hooks/useFetch';
import {useState, useEffect} from 'react';
import {VanType} from '../../types/vanType';

const API_LINK = '/api/host/your-vans';

export const DetailsVans = () => {
  const {id} = useParams();
  const [van, setVan] = useState<VanType | null>(null);
  const [getData] = useFetch();

  useEffect(() => {
    const fetchData = async () => {
      const vansData = await getData<{vans: VanType}>(`${API_LINK}/${id}`);
      setVan({...vansData.vans});
    };
    fetchData();
  }, []);
  console.log(van);

  return (
    <div>
      {van ? (
        <section>
          <div className={styled.container}>
            <div className={styled.detail}>
              <img src={van.imageUrl} />
              <div className={styled.textBox}>
                <i className={`${styled[van.type]} ${styled.vanType}`}>
                  {van.type}
                </i>
                <h3>{van.name}</h3>
                <h4>${van.price}/day</h4>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h3>Loading ..</h3>
      )}
    </div>
  );
};
