import React, { useEffect, useState } from "react";
import { Ad } from "react-ad-manager";
import { AdScript, AdConfig } from "react-ad-manager";

const AdsComponent = (props) => {
  return (
    <>
      <AdConfig networkCode={1} target={[["global", "true"]]} />
      <Ad
        adUnit="/22964122449/reward"
        name="div-gpt-ad-1690857849617-0"
        size={[
          [
            [1024, 768],
            [
              [750, 200],
              [728, 90],
            ],
          ],
          [[640, 480], [[300, 250]]],
        ]}
        refreshTimer={5000}
        type="INTERSTITIAL"
      />
    </>
  );
};

export default AdsComponent;
