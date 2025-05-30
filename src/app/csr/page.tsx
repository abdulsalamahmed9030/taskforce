import React from 'react'
import Header from '../components/navbar/Header'
import TaskForceOverview from '../components/TaskForceOverview'
import Csr from '../components/Csr'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
      <Header />
       <TaskForceOverview subheading="# CSR" heading="Task Force Interiors" />
       <Csr />
       <Footer />
    </>
  )
}

export default page
