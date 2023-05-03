import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Categories from "../../components/Categories/Categories";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import MainNovelties from "../../components/main/mainNovelties/MainNovelties";
import Discount from "../../components/discount/Discount";
import NavCategories from "../../components/Navbar/NavCategories";
import { Helmet } from "react-helmet";
function Home({language}) {
  return (
    <>
    <Helmet>
      <title>Karniz, Karniz zapchastlari,karniz aksesuarlar, Karniz sotib olish, Karniz fargona </title>
      <meta name="description" content="Sifatli va arzon narhlarda karniz va karniz zapchastlari, Fargona viloyatida, tel:+998903655522" />
      <meta name="keywords" content="karniz karniz zapchastlari karniz fargona" />
    </Helmet>
      <NavCategories />
      <Carousel />
      <Categories />
      <MainNovelties language={language} />
      <Discount language={language} />
      <ContactInfo language={language} />
    </>
  );
}

export default Home;
