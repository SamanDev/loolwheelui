import React, { useEffect, useState } from "react";

const AdsComponent = (props) => {
  const { dataAdSlot } = props;
  const [show, setShow] = useState(false);
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      setShow(true);
    } catch (e) {
      setShow(false);
      setTimeout(() => {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          setShow(true);
        } catch (e) {
          setShow(false);
        }
      }, 500);
    }
  }, []);
  if (!show) {
    return (
      <ins
        className="adsbygoogle"
        style={{ display: "none", width: 300, height: 600 }}
        data-ad-client="ca-pub-7264153250850834"
        data-ad-slot={dataAdSlot}
      ></ins>
    );
  }
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
