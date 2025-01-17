import React from 'react'
import { TopNav } from '../Components/Navbar/TopNav'
import { BottomNav } from '../Components/Navbar/BottomNav'
import { Header } from '../Components/OurInstructors/Header'

import { Tutor } from '../Components/Tutot/Tutor'
import { ICONS } from '../Components/Icons/Icons'
import Footer from '../Components/Footer/Footer'

export const Instructors = () => {
  return (
    <div>
      <TopNav />
      <BottomNav />
      <Header />
    <Tutor />
    <ICONS />
    <Footer />
    </div>
  )
}
