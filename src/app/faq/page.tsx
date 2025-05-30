import React from "react";
import Header from "../components/navbar/Header";
import TaskForceOverview from "../components/TaskForceOverview";

import Footer from "../components/Footer";
import Faq from "../components/Faq";

const Page = () => {
  return (
    <>
      <Header />
      <TaskForceOverview subheading="# Faqs" heading="Task Force Interiors" />
      <Faq />
      <Footer />
    </>
  );
};

export default Page;
