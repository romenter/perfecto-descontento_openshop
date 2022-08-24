import React, { Suspense } from "react";
import Loading from "../molecules/Loading";

const LazyContact = React.lazy(() => import("../pages/contact/Contact"));
const LazyFooter = React.lazy(() => import("../components/footer/Footer"));
const LazyAbout = React.lazy(() => import("./about/About"));
const LazyGallery = React.lazy(() => import("./gallery/Gallery"));

export const Footer = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <LazyFooter />
      </Suspense>
    </>
  );
};

export const About = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <LazyAbout />
      </Suspense>
    </>
  );
};

export const Contact = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <LazyContact />
      </Suspense>
    </>
  );
};

export const Gallery = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <LazyGallery />
      </Suspense>
    </>
  );
};
