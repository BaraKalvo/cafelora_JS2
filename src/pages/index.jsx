import { render } from '@czechitas/render';
import '../global.css';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const response = await fetch(`http://localhost:4000/api/drinks`);
const json = await response.json();
const drinks = json.data; 

document.querySelector('#root').innerHTML = render(
  <div className="page">
      <Header showMenu={true} />
      <main>
        <Banner />
        <Menu drinks={drinks}/>
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

const orderCafe = (event) => {
  event.preventDefault()
  const id = event.target.dataset.id
  console.log(id)

  fetch(`http://localhost:4000/api/drinks/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      [{ op: 'replace', path: '/ordered', value: true }]
    ),
  });

  window.location.reload()
};

const forms = document.querySelectorAll('.drink__controls');
forms.forEach((form) => {
  form.addEventListener('submit', orderCafe);
});

