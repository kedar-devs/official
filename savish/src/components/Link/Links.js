import React, { Component } from "react";
import styles from "./Link.module.css";
import { Link } from "react-router-dom";
import storybook from "../../icons/stroybook.svg";
import poem from "../../icons/poem.svg";
import classnames from "classnames";
import Heading from "../Headings/Heading";

class Links extends Component {
  render() {
    return (
      <>
        <Heading title="Artworks" />
        <div className={styles.linkcomponent}>
          <div
            className={styles.poem}
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            <Link to="/poemdisp">
              <p>
                <img src={poem} alt="poem pic" />
                <span>Poem</span>
              </p>
            </Link>
          </div>
          <div
            className={styles.paint}
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            <Link to="/paintdisp">
              <p>
                <img
                  src="https://img.icons8.com/color/48/000000/drawing--v2.png"
                  alt="painting icon"
                />
                <span>Painting</span>
              </p>
            </Link>
          </div>
          <div
            className={styles.story}
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            <Link to="/STORYdisp">
              <p>
                <img src={storybook} alt="story pic" />
                <span>Stories</span>
              </p>
            </Link>
          </div>
          <div
            className={styles.video}
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            <Link to="/videodisp">
              <p>
                <img
                  src="https://img.icons8.com/fluent/48/000000/video.png"
                  alt="video icon"
                />
                <span>Video</span>
              </p>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Links;
//<div>
//  <div className="row">
//      <div className="col-md-6 col-sm-6">
//          <button className="poem"><Link to="/poemdisp">Poem</Link></button>
//      </div>
//      <br /><br /><br />
//      <div className="col-md-6 col-sm-6">
//          <button className="paint"><Link to="/paintdisp">Painting</Link></button>
//      </div>

//      </div>
//      <br />
//      <div className="row">
//      <div className="col-md-6 col-sm-6">
//          <button className="story"><Link to="/STORYdisp">Stories</Link></button>
//      </div>
//      <br /><br /><br />
//      <div className="col-md-6 col-sm-6">
//          <button className="video"><Link to="/videodisp">Videos</Link></button>
//      </div>

//      </div>
// </div>
