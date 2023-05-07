import styled from './error.module.scss';
import {Link} from 'react-router-dom';

export const ErrorPage = () => {

  return (
    <div className={styled.errorPage}>
      <h2>Sry that page do not Exist </h2>
      <Link to='/'> Return to Home page </Link>
    </div>
  );
};
