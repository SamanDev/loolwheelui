import React, { useEffect, useState } from "react";

const AdsComponent = (props) => {
  const { dataAdSlot } = props;
  const [show, setShow] = useState(true);
  useEffect(() => {
    try {
      setTimeout(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        setShow(true);
      }, 500);
    } catch (e) {
      //setShow(false);
      setTimeout(() => {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          setShow(true);
        } catch (e) {
          setShow(false);
        }
      }, 1500);
    }
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
