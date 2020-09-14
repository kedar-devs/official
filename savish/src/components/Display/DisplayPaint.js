import React, { Component } from "react";
import axios from "axios";
import styles from "./Display.module.css";
import PaintCard from "./PaintCard";
import Loader from "../Loader/Loader";

const Paint = (props) => {
  return <PaintCard post={props.paint} />;
};

class DisplayPaint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paint: [],
      loading: true,
    };
    this.state.paintlist = this.paintlist();
  }
  async componentDidMount() {
    axios
      .get("/paint/")
      .then((response) => {
        this.setState({
          paint: response.data,
          loading: false,
        });
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }

  paintlist() {
    return this.state.paint.map((currentpaint) => {
      return <Paint paint={currentpaint} key={currentpaint._id} />;
    });
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    }
    return (
      <div className={styles.top}>
        <div className={styles.container}>{this.paintlist()}</div>
      </div>
    );
  }
}

export default DisplayPaint;
