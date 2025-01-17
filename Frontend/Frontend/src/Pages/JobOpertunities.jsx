import React from 'react'
import { TopNav } from '../Components/Navbar/TopNav'
import { BottomNav } from '../Components/Navbar/BottomNav'
import { Header } from '../Components/JobOpertunities/Header'
import Footer from '../Components/Footer/Footer'
import JobOpportunities from '../Components/JobOpertunities/Job'

export const JobOpertunities = () => {
  return (
    <div>
      <TopNav />
      <BottomNav />
    <Header />
    <JobOpportunities />
    <Footer />
    </div>
  )
}
