import React from 'react'
import { TopNav } from '../Components/Navbar/TopNav'
import { BottomNav } from '../Components/Navbar/BottomNav'

import { MainContent } from '../Components/CoursesPage/FULLSTACK/MainContent'
import Footer from '../Components/Footer/Footer'
import CareerOpportunities from '../Components/CareerOpertunities'
import { Header } from '../Components/CoursesPage/FULLSTACK/Header.JSX'


export const FullSack = () => {
  return (
    <div>
      <TopNav />
      <BottomNav />
     <Header />
     <MainContent />
     <CareerOpportunities />
     <Footer />
     
    </div>
  )
}
