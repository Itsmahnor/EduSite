import React from 'react'
import { TopNav } from '../Components/Navbar/TopNav'
import { BottomNav } from '../Components/Navbar/BottomNav'
import { SearchProgram } from '../ProgramFindPage/SearchProgram/SearchProgram'
import { Header } from '../ProgramFindPage/Header'
import Footer from '../Components/Footer/Footer'
import { ICONS } from '../Components/Icons/Icons'

export const FindProgram = () => {
  return (
  <>
  <TopNav />
  <BottomNav />
<Header />
  <SearchProgram  />
  <ICONS />
  <Footer />
  </>
  )
}
