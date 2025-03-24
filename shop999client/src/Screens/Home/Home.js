import React from 'react'
import "../../Styles/Header.css"
import Layout from '../Layouts/Layout';
import Carosel from "../Carosel/Carousels"
import BalconyTckets from '../Products/Ipl';
const Home = () => {
  return (
    <div>
      <Layout>
        <Carosel/>
        <BalconyTckets/>
      </Layout>
    </div>
  )
}

export default Home;
