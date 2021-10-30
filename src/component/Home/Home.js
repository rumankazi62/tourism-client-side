import React from 'react';
import Bannar from './Bannar/Bannar';
import Destination from './Destination/Destination';
import Featured from './Featured/Featured';
import Footer from './Footer/Footer';
import Package from './Package/Package';

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <Featured></Featured>
      <Package></Package>
      <Destination></Destination>
      <Footer></Footer>
    </div>
  );
};

export default Home;