import React from 'react'
import Header from '../components/navbar/Header'
import TaskForceOverview from '../components/TaskForceOverview'
import Clients from '../components/Clients'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
      <Header />
      <TaskForceOverview
        subheading="# CLIENTS"
        heading="Task Force Interiors"
      />
      <Clients />
      <Footer />
    </>
  )
}

export default page
