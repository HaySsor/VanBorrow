import styled from './your-vans-item-info.module.scss';
import {useOutletContext} from 'react-router-dom';
import {VanType} from '../../types/vanType';

export const YourVansItemInfo = () => {
  const [van]: [VanType] = useOutletContext();
  const {name, type, description} = van;
  return (
    <div>
      <section className={styled.info}>
        <h4>
          Name: <span>{name}</span>
        </h4>
        <h4>
          Category: <span>{type}</span>
        </h4>
        <h4>
          Description: <span>{description}</span>
        </h4>
        <h4>
          Visibility: <span>Public</span>
        </h4>
      </section>
    </div>
  );
};
