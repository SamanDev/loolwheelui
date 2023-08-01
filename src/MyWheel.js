import React from "react";
import ShowWheel from "./wheel/wheel";
import BottomWheel from "./wheel/bottom";
import InfoWheel from "./wheel/info";
import AdsComponent from "./adscom";
function MNyWheel() {
  return (
    <>
      <AdsComponent dataAdSlot="7427191858" />
      <InfoWheel />
      <div className="cadr">
        <ShowWheel />

        <BottomWheel />
      </div>
    </>
  );
}

export default MNyWheel;
