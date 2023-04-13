import {VanType} from '../../types/vanType';
import styled from './van-list-item.module.scss';
import {Link} from 'react-router-dom';

type PropsType = {
  van: VanType;
};

export const VanListItem = ({van}: PropsType) => {
  const {id, name, price, type, imageUrl} = van;

  return (
    <div className={styled.VanItemBox}>
      <Link to={`/vans/${id}`}>
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
