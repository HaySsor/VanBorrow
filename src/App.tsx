import {Outlet} from 'react-router-dom';
import styled from './App.module.scss';
import {Navigation} from './components/navigation/navigation.component';

function App() {
  return (
    <main className={styled.wrapper}>
      <Navigation />
      <Outlet />
    </main>
  );
}

export default App;
