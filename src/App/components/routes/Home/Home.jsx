import { Outlet } from 'react-router-dom';

import Directoy from '../../directory/Directory';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Bonés',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      route: '/shop/hats'
    },
    {
      id: 2,
      title: 'Jaquetas',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      route: '/shop/jackets'
    },
    {
      id: 3,
      title: 'Tênis',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      route: '/shop/sneakers'
    },
    {
      id: 4,
      title: 'Mulheres',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      route: '/shop/womens'
    },
    {
      id: 5,
      title: 'Homens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      route: '/shop/mens'
    }
  ];
  return (
    <div>
      <Outlet />
      <Directoy categories={categories} key={categories} />
    </div>
  );
};

export default Home;
