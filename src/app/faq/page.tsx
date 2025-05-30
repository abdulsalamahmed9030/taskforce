import React from "react";
import Header from "../components/navbar/Header";
import TaskForceOverview from "../components/TaskForceOverview";

import Footer from "../components/Footer";
import Faq from "../components/Faq";
import Copyright from "../components/Copyright";

const Page = () => {
  return (
    <>
      <Header />
      <TaskForceOverview subheading="# Faqs" heading="Task Force Interiors" />
      <Faq />
      <Footer />
      <Copyright />
    </>
  );
};

export default Page;
