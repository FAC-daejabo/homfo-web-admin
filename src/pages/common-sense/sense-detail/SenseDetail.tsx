import React from "react";
import { useParams } from "react-router-dom";

const SenseDetail = () => {
  const { senseId } = useParams();
  return <div>Hello !</div>;
};

export default SenseDetail;
