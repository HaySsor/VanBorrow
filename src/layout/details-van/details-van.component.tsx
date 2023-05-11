import {
  NavLink,
  Outlet,
  Params,
  LoaderFunction,
  useLoaderData,
} from 'react-router-dom';
import styled from './details-van.module.scss';
import {useFetch} from '../../hooks/useFetch';
import {VanType} from '../../types/vanType';
import {BackButton} from '../../components/back-button/back-button.component';
import {useNavActiveClass} from '../../hooks/useNavActiveClass';
import {requireAuth} from '../../utils/requireAuth';

const fetchData = async (id: string) => {
  const [getData] = useFetch();
  const vansData = await getData<{vans: VanType[]}>(
    `/api/host/your-vans/${id}`
  );
  return vansData.vans;
};

type loaderProps = {
  params: Params<string>;
  request: Request;
};

export const loader: LoaderFunction = async ({
  params,
  request,
}: loaderProps) => {
  if (!params.id) {
    return;
  }

  try {
    await requireAuth(request);
    return await fetchData(params.id);
  } catch (err) {
    await requireAuth(request);
  }
};

export const DetailsVans = () => {
  const van = useLoaderData() as VanType;
  const [activeClassName] = useNavActiveClass(styled);

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
