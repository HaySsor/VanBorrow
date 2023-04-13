import {Outlet} from 'react-router-dom';
import styled from './App.module.scss';
import {Navigation} from './components/navigation/navigation.component';

function App() {
  return (
    <main className={styled.wrapper}>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </main>
  );
}

export default App;
