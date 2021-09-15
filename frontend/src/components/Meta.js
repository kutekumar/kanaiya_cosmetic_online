import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title} </title>
      <meta name='description' content={description}></meta>
      <meta name='keyword' content={keywords}></meta>
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Kanaiya Cosmetics || Let Your Skin Breathe!!! ",
  description:
    "We produce and sell the preminum cosmetics products with an afforadable price for all.",
  keywords:
    "cosmetics, beauty products, face wash, lotion, cream pact, foundation makeup, makeup",
};

export default Meta;
