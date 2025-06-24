import { render } from '@czechitas/render';
import '../global.css';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

document.querySelector('#root').innerHTML = render(
  <div className="page">
      <Header />
      <main>
        <Banner />
        <Menu />
        <Gallery />
        <Contact />
      </main>
      <Footer />
  </div>
);

const btnNavEl = document.querySelector('.nav-btn');
const navEl = document.querySelector('.rollout-nav');

const handleClickNav = () => {
  navEl.classList.toggle('nav-closed');
};

const handleClickItem = () => {
  navEl.classList.add('nav-closed');
};

btnNavEl.addEventListener('click', handleClickNav);

navEl.addEventListener('click', handleClickItem);