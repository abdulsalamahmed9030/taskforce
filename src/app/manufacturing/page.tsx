import React from 'react'
import Header from '../components/navbar/Header'
import TaskForceOverview from '../components/TaskForceOverview'
import Footer from '../components/Footer'
import AboutText from '../components/about/AboutText'
import Gallery from '../components/Gallery'

const page = () => {
  return (
    <>
    <Header />
     <TaskForceOverview
      subheading="# Our Equipments"
      heading="Task Force Interiors" />
      <AboutText />
      <Gallery />
      <Footer />
    </>
  )
}

export default page
