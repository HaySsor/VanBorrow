import {
  useLocation,
  Link,
  useLoaderData,
  LoaderFunction,
  Params,
} from 'react-router-dom';
import styled from './van.module.scss';
import {useFetch} from '../../hooks/useFetch';
import {VanType} from '../../types/vanType';

const fetchData = async (id: string) => {
  const [getData] = useFetch();
  const vansData = await getData<{vans: VanType[]}>(`/api/vans/${id}`);
  return vansData.vans;
};

type loaderProps = {
  params: Params<string>;
};

export const loader: LoaderFunction = async ({params}: loaderProps) => {
  if (!params.id) {
    return;
  }
  try {
    return await fetchData(params.id);
  } catch (err) {
    return await fetchData(params.id);
  }
};

export const VanPage = () => {
  const {state} = useLocation();
  const van = useLoaderData() as VanType;
  console.log(state);

  const search = state?.search || '';
  const type = state?.type || 'all';

  return (
    <div className={styled.vanDetailContainer}>
      <Link to={`..?${search}`} relative='path' className={styled.backButton}>
        &larr; <span>Back to {type} Vans</span>
      </Link>
      {van ? (
        <div className={styled.vanDetail}>
          <img src={van.imageUrl} />
          <div className={styled.infoBox}>
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
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
