"use client";

import React from 'react'
import { useTranslation } from "react-i18next";
import Navbar from '../Navigation/Navbar'
import HeroSection from '../ReUsables/HeroSection';

const HomePageWrapper = () => {
  return (
    <>
      <Navbar/>
      <HeroSection mainData={}/>
    </>
  )
}

export default HomePageWrapper