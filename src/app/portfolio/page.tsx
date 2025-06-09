import React from 'react'
import Header from '../components/navbar/Header'
import TaskForceOverview from '../components/TaskForceOverview'
import Footer from '../components/Footer'
import PortFolio from '../components/PortFolio'
import Copyright from '../components/Copyright'
import BackToTop from '../components/BackToTop'
import ScrollToTop from '../components/ScrollToTop'

const page = () => {
  return (
    <>
    
      <Header />
      <TaskForceOverview
              subheading="Portfolio"
              heading="Task Force Interiors"
            />
            
           <PortFolio />
            <Footer />
            <Copyright />
            <BackToTop/>
            <ScrollToTop />
    </>
  )
}

export default page
