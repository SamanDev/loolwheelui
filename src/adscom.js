import React, { useEffect, useState } from "react";
import { Ad } from "react-ad-manager";
import { AdScript, AdConfig } from "react-ad-manager";

const AdsComponent = (props) => {
  return (
    <>
      <Ad
        adUnit="/22964122449/reward"
        name="div-gpt-ad-1690853053465-0"
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
      />
    </>
  );
};

export default AdsComponent;
