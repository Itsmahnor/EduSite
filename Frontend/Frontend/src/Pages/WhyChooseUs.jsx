import React from 'react'
import { TopNav } from '../Components/Navbar/TopNav'
import { BottomNav } from '../Components/Navbar/BottomNav'
import { Header } from '../Components/ChooseUS/Header'
import WhyChoose from '../Components/ChooseUS/Content'

import Opportunities from '../Components/ChooseUS/slider'
import Footer from '../Components/Footer/Footer'
import { ICONS } from '../Components/Icons/Icons'
import { Tutor } from '../Components/Tutot/Tutor'
import { ServicesList } from '../Components/ServicesList'

export const WhyChooseUs = () => {
  return (
    <>
 
    <BottomNav />
    <Header />
  <WhyChoose />
<Tutor />
<ServicesList />
{/* <Opportunities /> */}
<ICONS />
<Footer />
    </>
  )
}
