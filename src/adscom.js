import React, { useEffect, useState } from "react";
import { Ad } from "react-ad-manager";
import { AdScript, AdConfig } from "react-ad-manager";

const AdsComponent = (props) => {
  return (
    <>
      <AdConfig
        networkCode={1}
        target={[["global", "true"]]}
        collapseEmptyDivs={true}
        eventImpressionViewable={(e) => console.log(e.slot)}
        eventSlotOnload={(e) => console.log(e.slot)}
        eventSlotRenderEnded={(e) => console.log(e.slot)}
        eventSlotRequested={(e) => console.log(e.slot)}
        eventSlotResponseReceived={(e) => console.log(e.slot)}
        eventSlotVisibilityChanged={(e) => console.log(e.slot)}
      />
      <Ad
        adUnit="/22964122449/reward"
        name="div-gpt-ad-1690857849617-0"
        size={["fluid"]}
        eventImpressionViewable={(e) => console.log(e.slot)}
        eventSlotOnload={(e) => console.log(e.slot)}
        eventSlotRenderEnded={(e) => console.log(e.slot)}
        eventSlotRequested={(e) => console.log(e.slot)}
        eventSlotResponseReceived={(e) => console.log(e.slot)}
        eventSlotVisibilityChanged={(e) => console.log(e.slot)}
      />
    </>
  );
};

export default AdsComponent;
