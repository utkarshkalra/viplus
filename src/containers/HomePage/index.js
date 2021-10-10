import React from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import MenuHeader from "../../components/MenuHeader";
import Carousel from "react-bootstrap/Carousel";

import Icon from "./Icon";

import slide1 from "../../images/1.png";
import slide2 from "../../images/2.png";
import slide3 from "../../images/3.png";
import slide4 from "../../images/4.png";
import bg1 from "../../images/viplus-bg-2.png";

import "./style.home.css";
import Categories from "../../components/Categories/index.categories";

import HomePageProducts from "../ProductListPage/AllProducts/HomepageProducts";

import HomePageAbout from "../../components/HomePageAbout";
{
  /* Welcome To Viplus ! If you are worried To select which Islamic topi is
      suitable for you then you have came to thr right place . Viplus offers all
      latest and trending caps collection. We believe to give you best service
      for all islamic things. Peoples have different choice of caps. They select
      what they prefer we presents you best islamic topi in our bazaar in india
      . Latest and new products for your needs. */
}

const HomePage = (props) => {
  return (
    <Layout>
      <>
        <Carousel>
          <Carousel.Item interval={750}>
            <img className="d-block w-100" src={slide1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={750}>
            <img className="d-block w-100" src={slide2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={750}>
            <img className="d-block w-100" src={slide3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={750}>
            <img className="d-block w-100" src={slide4} alt="Fourth slide" />
          </Carousel.Item>
        </Carousel>

        <Icon />
        <Categories />

        <div className="backgroundImg"></div>

        <HomePageProducts />
        <HomePageAbout />
      </>
    </Layout>
  );
};

export default HomePage;
