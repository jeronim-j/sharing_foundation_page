import React from "react";
import HomeHeader from "./HomeHeader";
import HomeMainPage from "./HomeMainPage";
import Home3Columns from "./Home3Columns";
import Home4Steps from "./Home4Steps";
import HomeAbout from "./HomeAbout";
import HomeOrganizations from "./HomeOrganizations";
import HomeContact from "./HomeContact";


const Home = () => {
    return (
        <>
            <HomeHeader/>
            <HomeMainPage/>
            <Home3Columns/>
            <Home4Steps/>
            <HomeAbout/>
            <HomeOrganizations/>
            <HomeContact/>
        </>
    )
}

export default Home;