import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import Display from "./Display";

const Poem = () => {
  const [poems, setPoems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("/poem/")
        .then((response) => {
          setPoems(response.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };
    getData();
  });
  if (loading) {
    return <Loader />;
  }
  return <div>{poems && <Display posts={poems} />}</div>;
};

export default Poem;
