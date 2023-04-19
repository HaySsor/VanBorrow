import styled from './your-vans-item-photo.module.scss';
import {useOutletContext} from 'react-router-dom';
import type {VanType} from '../../types/vanType';

export const YourVansItemPhoto = () => {
  const [van]: [VanType] = useOutletContext();

  return (
    <div className=''>
      <img src={van.imageUrl} alt='' className={styled.img} />
    </div>
  );
};
