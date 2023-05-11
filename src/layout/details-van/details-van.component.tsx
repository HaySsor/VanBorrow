import {
  NavLink,
  Outlet,
  Params,
  LoaderFunction,
  useLoaderData,
  defer,
  Await,
} from 'react-router-dom';
import styled from './details-van.module.scss';
import {useFetch} from '../../hooks/useFetch';
import {VanType} from '../../types/vanType';
import {BackButton} from '../../components/back-button/back-button.component';
import {useNavActiveClass} from '../../hooks/useNavActiveClass';
import {requireAuth} from '../../utils/requireAuth';
import {Suspense} from 'react';

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
  await requireAuth(request);
  return defer({van: fetchData(params.id)});
};

export const DetailsVans = () => {
  const van = useLoaderData() as {van: Promise<VanType>};
  const [activeClassName] = useNavActiveClass(styled);

  return (
    <div>
      <BackButton />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={van}>
          {(van: VanType) => {
            return (
              <>
                {van ? (
                  <section>
                    <div className={styled.container}>
                      <div className={styled.detail}>
                        <img src={van.imageUrl} />
                        <div className={styled.textBox}>
                          <i
                            className={`${styled[van.type]} ${styled.vanType}`}>
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
              </>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};
