import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Heading from "../Headings/Heading";
import styles from "./Carosel.module.css";
function Carosel() {
  const [state, setState] = useState({});
  useEffect(() => {
    const img1 = require("../../photos/CouncilInaugration.jpg");
    const img2 = require("../../photos/LanguageDay.jpeg");
    const img3 = require("../../photos/Openmic2.JPG");
    setState({
      index: 0,
      imgList: [img1, img2, img3],
      name: ["Council Inaugration", "Matrubasha Diwas", "Open Mic"],
      designation: [
        "President",
        "Chairperson",
        "Literature section",
        "Art Section",
        "PR & Managment",
        "Technical Adviser",
        "Secretary",
        "Assistance Technical Advisar",
      ],
    });
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1000 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1000, min: 700 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };

  if (!state.imgList) return <></>;
  else {
    return (
      <>
        {/* <h1 className={styles.heading}><span>Saviskar Council 2019-2020</span></h1> */}
        <Heading title="Events by Savishkaar" />
        <div className={styles.spacing}>
          <Carousel responsive={responsive}>
            {state.imgList.map((e, i) => (
              <div className={styles.card} key={i} data-aos="flip-right">
                <img src={e} alt="Avatar" className={styles.image} />
                <div className={styles.container}>
                  <h4 className={styles.name}>{state.name[i]}</h4>
                  {/* <p className={styles.designation}>{state.designation[i]}</p> */}
                </div>
              </div>
            ))}
            {/* <div className={styles.card} >
				<img src="https://cdn.pixabay.com/photo/2014/05/03/01/03/macbook-336704_960_720.jpg" alt="Avatar" style={{width:"100%"}}/>
				<div className={styles.container}>
					<h4><b>John Doe</b></h4> 
					<p>Architect & Engineer</p> 
				</div> 
				</div>*/}
          </Carousel>
        </div>
      </>
    );
  }
}

export default Carosel;
