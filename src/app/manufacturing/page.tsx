import React from 'react'
import Header from '../components/navbar/Header'
import TaskForceOverview from '../components/TaskForceOverview'
import Footer from '../components/Footer'
import AboutText from '../components/about/AboutText'
import Gallery from '../components/Gallery'
import Copyright from '../components/Copyright'
import BackToTop from '../components/BackToTop'
import ScrollToTop from '../components/ScrollToTop'

const page = () => {
  return (
    <>
    <Header />
     <TaskForceOverview
      subheading="Our Equipments"
      heading="Task Force Interiors" />
      <AboutText />
      <Gallery />
      <Footer />
      <Copyright />
      <BackToTop/>
      <ScrollToTop />
    </>
  )
}

export default page
