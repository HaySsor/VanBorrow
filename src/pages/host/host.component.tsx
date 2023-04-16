import {Outlet, NavLink} from 'react-router-dom';
import styled from './host.module.scss';
import {useNavActiveClass} from '../../hooks/useNavActiveClass';

export const HostPage = () => {
  const [activeClassName] = useNavActiveClass(styled);

  return (
    <div className={styled.hostBox}>
      <div className={styled.navBox}>
        <NavLink className={activeClassName} to='.' end>
          Dashboard
        </NavLink>
        <NavLink className={activeClassName} to='income'>
          Income
        </NavLink>
        <NavLink className={activeClassName} to='your-vans'>
          Vans
        </NavLink>
        <NavLink className={activeClassName} to='reviews'>
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};
