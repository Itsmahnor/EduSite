import React from 'react'
import { TopNav } from '../Components/Navbar/TopNav'
import { BottomNav } from '../Components/Navbar/BottomNav'
import { Header } from '../Components/CoursesPage/AppDEvelopment/Header'
import { MainContent } from '../Components/CoursesPage/AppDEvelopment/MainContent'
import CareerOpportunities from '../Components/CareerOpertunities'
import Footer from '../Components/Footer/Footer'


export const AppDevelop = () => {
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
