import React from 'react'
import "../../Styles/Header.css"
import Layout from '../Layouts/Layout';
import Carosel from "../Carosel/Carousels"
import BalconyTckets from '../Products/Ipl';
import MovieTckects from '../MovieTickts/MovieTckects';
import Liveshow from '../LiveShow/Liveshow';
const Home = () => {
  return (
    <div>
      <Layout>
        <Carosel/>
        <BalconyTckets/>
        <MovieTckects/>
        <Liveshow/>
      </Layout>
    </div>
  )
}

export default Home;
