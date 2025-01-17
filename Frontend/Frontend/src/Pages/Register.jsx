import React from 'react'
import { Header } from '../RegisterPage/RegisterHeader/Header'
import { TopNav } from '../Components/Navbar/TopNav'
import { BottomNav } from '../Components/Navbar/BottomNav'
import SignUp from '../RegisterPage/SignUp/SignUp'
import Footer from '../Components/Footer/Footer'
import { ICONS } from '../Components/Icons/Icons'

export const Register = () => {
  return (
 <>
<TopNav />
<BottomNav />
 <Header />
 <SignUp />
 <ICONS />
 <Footer />
 </>
  
  )
}
