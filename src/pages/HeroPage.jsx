import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import InventoryList from "../components/InventoryList";
import AddItem from "../components/AddItem";
import TechStack from "../components/techStack";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HeroPage = () => {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <InventoryList />
      <AddItem />
      <TechStack />
      <Footer />
    </div>
  );
};

export default HeroPage;
