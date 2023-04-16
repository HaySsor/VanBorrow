import {Outlet} from 'react-router-dom';
import styled from './App.module.scss';
import {Navigation} from './components/navigation/navigation.component';
import {Footer} from './components/footer/footer.component';

function App() {
  return (
    <div>
      <main className={styled.wrapper}>
        <header>
          <Navigation />
        </header>
        <section>
          <Outlet />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
