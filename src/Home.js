import React from "react";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./Trusted";
import Contact from "./Contact";
import FeatureProduct from "./components/FeatureProduct";

const Home = () => {
    const data = {
        name:"QuickCart",
    };

    return (
        <>
            <HeroSection myData={data}/>
            <FeatureProduct/>
            <Services/>
            <Trusted/>
        </>
    )
};



export default Home;