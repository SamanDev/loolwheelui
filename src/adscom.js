import React, { useEffect } from "react";

const AdsComponent = (props) => {
  const { dataAdSlot } = props;

  useEffect(() => {
    try {
      setTimeout(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }, 500);
    } catch (e) {}
  }, []);

  return (
    <>
      <ins
        className="adsbygoogle"
        style={{ display: "inline-block", width: 300, height: 600 }}
        data-ad-client="ca-pub-7264153250850834"
        data-ad-slot={dataAdSlot}
      ></ins>
    </>
  );
};

export default AdsComponent;
