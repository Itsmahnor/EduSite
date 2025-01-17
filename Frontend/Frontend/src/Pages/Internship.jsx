import React from 'react'
import { Header } from '../Components/InternShip/Header'
import { TopNav } from '../Components/Navbar/TopNav'
import { BottomNav } from '../Components/Navbar/BottomNav'
import InternshipCertificationProgram from '../Components/InternShip/content'
import Footer from '../Components/Footer/Footer'
import { ICONS } from '../Components/Icons/Icons'

export const Internship = () => {
  return (
    <>
     <TopNav />
    <BottomNav/>
  <Header />
  <InternshipCertificationProgram />
  <ICONS />
  <Footer />
    </>
   
  )
}
