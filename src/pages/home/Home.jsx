import React, { Suspense } from "react";
const MainHeader = React.lazy(() => import("../../components/main/MainHeader"));
const Values = React.lazy(() => import("../../components/values/Values"));
const Question = React.lazy(() =>
  import("../../components/question/Questions")
);
const Testimonials = React.lazy(() =>
  import("../../components/testimonial/Testimonials")
);

import "./home.css";

import Loading from "../../molecules/Loading";

const Home = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <MainHeader />
        <Values />
        <Question />
        <Testimonials />
      </Suspense>
    </>
  );
};

export default Home;
