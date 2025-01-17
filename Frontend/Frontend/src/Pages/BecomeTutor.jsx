import React from 'react'
import { Header } from '../Components/BecomeTutor/Header'
import { TopNav } from '../Components/Navbar/TopNav'
import { BottomNav } from '../Components/Navbar/BottomNav'
import BecomeInstructorSection from '../Components/BecomeTutor/Content'
import InstructorFormSection from '../Components/BecomeTutor/Form'
import Footer from '../Components/Footer/Footer'
import { ICONS } from '../Components/Icons/Icons'

export const BecomeTutor = () => {
  return (
   <>
   <TopNav />
   <BottomNav />
   <Header />
   <BecomeInstructorSection />
<InstructorFormSection />
<ICONS />
<Footer />
   </>
  )
}
