import React from 'react'
import Header from '../components/navbar/Header'
import TaskForceOverview from '../components/TaskForceOverview'
import Footer from '../components/Footer'
import PortFolio from '../components/PortFolio'

const page = () => {
  return (
    <>
      <Header />
      <TaskForceOverview
              subheading="# gallery"
              heading="Task Force Interiors"
            />
            
           <PortFolio />
            <Footer />
    </>
  )
}

export default page
