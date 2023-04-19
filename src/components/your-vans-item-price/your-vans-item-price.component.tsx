import styled from './your-vans-item-price.module.scss';
import {useOutletContext} from 'react-router-dom';
import type {VanType} from '../../types/vanType';

export const YourVansItemPrice = () => {
  const [van]: [VanType] = useOutletContext();
  return (
    <div className={styled.price}>
      <h3 className='host-van-price'>
        ${van.price}
        <span>/day</span>
      </h3>
    </div>
  );
};
