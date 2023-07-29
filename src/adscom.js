import React, { useEffect, useState } from "react";

const AdsComponent = (props) => {
  const { dataAdSlot } = props;
  const [show, setShow] = useState(true);
  useEffect(() => {
    try {
      setTimeout(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }, 500);
    } catch (e) {
      try {
        setTimeout(() => {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }, 500);
      } catch (e) {}
    }
  }, []);

  return (
    <>
      <ins
        className="adsbygoogle"
        data-ad-format="auto"
        data-full-width-responsive="true"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7264153250850834"
        data-ad-slot={dataAdSlot}
      ></ins>
    </>
  );
};

export default AdsComponent;
