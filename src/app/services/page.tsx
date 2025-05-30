import React from 'react'
import Header from '../components/navbar/Header'
import Footer from '../components/Footer'
import RangeOfServices from '../components/RangeOfServices'
import TaskForceOverview from '../components/TaskForceOverview'

const page = () => {
  return (
    <>
      <Header />
      <TaskForceOverview
  subheading="# Services"
  heading="Task Force Interiors"
/>
      <RangeOfServices />
      <Footer />
    </>
  )
}

export default page
