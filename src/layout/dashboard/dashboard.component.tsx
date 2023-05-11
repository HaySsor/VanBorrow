import {Suspense} from 'react';
import {Link, defer, Await, useLoaderData} from 'react-router-dom';
import {useFetch} from '../../hooks/useFetch';
import {VanType} from '../../types/vanType';
import {requireAuth} from '../../utils/requireAuth';
import styled from './dashboard.module.scss';

const API_LINK = '/api/host/your-vans';

const fetchData = async () => {
  const [getData] = useFetch();
  const vansData = await getData<{vans: VanType[]}>(API_LINK);
  return vansData.vans;
};

export async function loader({request}: {request: Request}) {
  await requireAuth(request);
  return defer({vans: fetchData()});
}

export const Dashboard = () => {
  const loaderData = useLoaderData() as {vans: Promise<VanType[]>};
  return (
    <>
      <section className={styled.hostDashboardEarnings}>
        <div className={styled.info}>
          <h1>Welcome!</h1>
          <p>
            Income last <span>30 days</span>
          </p>
          <h2>$2,260</h2>
        </div>
        <Link to='income'>Details</Link>
      </section>
      <section className={styled.hostDashboardReviews}>
        <h2>Review score</h2>

        <p>
          <span>5.0</span>/5
        </p>
        <Link to='reviews'>Details</Link>
      </section>
      <section className={styled.hostDashboardVans}>
        <div className={styled.top}>
          <h2>Your listed vans</h2>
          <Link to='vans'>View all</Link>
        </div>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Await resolve={loaderData.vans}>
            {(vans: VanType[]) => {
              const hostVansEls = vans.map((van) => (
                <div className={styled.hostVanSingle} key={van.id}>
                  <div className={styled.hostVanInfo}>
                    <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                    <div className={styled.infoBox}>
                      <h3>{van.name}</h3>
                      <p>${van.price}/day</p>
                    </div>
                  </div>
                  <Link to={`vans/${van.id}`}>View</Link>
                </div>
              ));

              return (
                <div className='host-vans-list'>
                  <section>{hostVansEls}</section>
                </div>
              );
            }}
          </Await>
        </Suspense>
      </section>
    </>
  );
};
