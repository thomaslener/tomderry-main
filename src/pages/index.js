import React, { useEffect, createRef } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import lottie from "lottie-web";
import animation from "./hero.json";



const IndexPage = () => {

  let animationContainer = createRef();
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);
return (
  <Layout>
    <Seo title="Tom & Derry" />
        <h1 align="center">Nur gemeinsam ist Bewegung möglich.</h1>
    <div className="animation-container" ref={animationContainer} />





  </Layout>
);
};

export default IndexPage
