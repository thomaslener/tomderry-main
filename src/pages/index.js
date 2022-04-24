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
    <div align="center" style={{marginTop: 50}}>
    <StaticImage
      src="../images/title.svg"
      width={600}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Tom & Derry Logo"

      />
    </div>
    <div className="animation-container" ref={animationContainer} />





  </Layout>
);
};

export default IndexPage
