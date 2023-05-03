import {VanType} from '../../types/vanType';
import styled from './van-list-item.module.scss';
import {Link} from 'react-router-dom';

type PropsType = {
  van: VanType;
  searchParams: URLSearchParams;
  typeFilter: string | null;
};

export const VanListItem = ({van, searchParams, typeFilter}: PropsType) => {
  const {id, name, price, type, imageUrl} = van;

  return (
    <div className={styled.VanItemBox}>
      <Link
        to={`${id}`}
        state={{search: searchParams.toString(), type: typeFilter}}>
        <img src={imageUrl} />
        <div className={styled.vanInfo}>
          <h3>{name}</h3>
          <p>
            ${price}
            <span>/day</span>
          </p>
        </div>
        <i className={`${styled.vanType} ${styled[type]} ${styled.selected}`}>
          {type}
        </i>
      </Link>
    </div>
  );
};
