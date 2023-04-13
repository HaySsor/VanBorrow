import {Outlet, Link} from 'react-router-dom';
import styled from './host.module.scss';

export const HostPage = () => {
  return (
    <div className={styled.hostBox}>
      <div className={styled.navBox}>
        <Link to='/host'> Dashboard</Link>
        <Link to='income'> Income</Link>
        <Link to='reviews'> Reviews</Link>
      </div>
      <Outlet />
    </div>
  );
};
