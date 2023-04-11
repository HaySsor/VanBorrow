import styled from './home.module.scss';
import {Link} from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className={styled.home}>
      <h1>You got the travel plans, we got the travel vans.</h1>
      <p>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link to='/vans' className={styled.homeLink}>
        Find your van
      </Link>
    </div>
  );
};
