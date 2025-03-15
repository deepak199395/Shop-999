import React from 'react'
import "../../Styles/Header.css"
import Layout from '../Layouts/Layout';
import Carosel from "../Carosel/Carousels"
const Home = () => {
  return (
    <div>
      <Layout>
        <Carosel/>
      </Layout>
    </div>
  )
}

export default Home;
