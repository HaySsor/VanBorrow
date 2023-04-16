import {VanType} from '../../types/vanType';
import styled from './your-vans-item.module.scss';
import {Link} from 'react-router-dom';

type PropType = {
  van: VanType;
};

export const YourVansItem = ({van}: PropType) => {
  const {id, name, imageUrl, price} = van;
  return (
    <Link to={`/host/your-vans/${id}`} key={id} className={styled.vanWrapper}>
      <div className={styled.van} key={id}>
        <img src={imageUrl} alt={`Photo of ${name}`} />
        <div className={styled.vanInfo}>
          <h3>{name}</h3>
          <p>${price}/day</p>
        </div>
      </div>
    </Link>
  );
};
