import {NavLink, Outlet, useParams} from 'react-router-dom';
import styled from './details-van.module.scss';
import {useFetch} from '../../hooks/useFetch';
import {useState, useEffect} from 'react';
import {VanType} from '../../types/vanType';
import {BackButton} from '../../components/back-button/back-button.component';
import {useNavActiveClass} from '../../hooks/useNavActiveClass';

const API_LINK = '/api/host/your-vans';

export const DetailsVans = () => {
  const {id} = useParams();
  const [van, setVan] = useState<VanType | null>(null);
  const [getData] = useFetch();
  const [activeClassName] = useNavActiveClass(styled);

  useEffect(() => {
    const fetchData = async () => {
      const vansData = await getData<{vans: VanType}>(`${API_LINK}/${id}`);
      setVan({...vansData.vans});
    };
    fetchData();
  }, []);

  return (
    <div>
      <BackButton />
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
            <div className={styled.nav}>
              <NavLink className={activeClassName} to='.' end>
                Info
              </NavLink>
              <NavLink className={activeClassName} to='price'>
                Price
              </NavLink>
              <NavLink className={activeClassName} to='photo'>
                Photo
              </NavLink>
            </div>
            <Outlet context={[van]} />
          </div>
        </section>
      ) : (
        <h3>Loading ..</h3>
      )}
    </div>
  );
};