import React, { useEffect, useState } from "react";
var reef;
const AdsComponent = (props) => {
  const { dataAdSlot } = props;
  const [show, setShow] = useState(true);
  useEffect(() => {
    reef = setTimeout(() => {
      if (typeof window !== "undefined")
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, 500);
    return () => {
      clearTimeout(reef);
    };
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <ins
        className="adsbygoogle"
        style={{
          display: "inline-block",
          width: 728,
          height: 90,
        }}
        data-ad-client="ca-pub-7264153250850834"
        data-ad-slot={dataAdSlot}
      ></ins>
    </div>
  );
};

export default AdsComponent;
