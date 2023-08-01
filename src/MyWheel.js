import React from "react";
import ShowWheel from "./wheel/wheel";
import BottomWheel from "./wheel/bottom";
import InfoWheel from "./wheel/info";
import AdsComponent from "./adscom";
function MNyWheel() {
  return (
    <>
      <InfoWheel />

      <div className="cadr">
        <ShowWheel />

        <BottomWheel />
        <AdsComponent dataAdSlot="1405467157" />
      </div>
    </>
  );
}

export default MNyWheel;
