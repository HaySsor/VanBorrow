import styled from './back-button.module.scss';
import {Link} from 'react-router-dom';

export const BackButton = () => {
  return (
    <Link to='..' relative='path' className={styled.backButton}>
      &larr; <span>Back to all vans</span>
    </Link>
  );
};
