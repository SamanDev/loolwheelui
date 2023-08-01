import React, { useEffect, useState } from "react";
import { Button, Modal, Icon, Progress, Segment } from "semantic-ui-react";
import AdsComponent from "./adscom";
import $ from "jquery";
function ModalExampleModal(prop) {
  const [per, setPer] = useState(0);
  useEffect(() => {
    if (prop.open) {
      var pers = setInterval(() => {
        setPer((prev) => prev + 1);
      }, 100);
    } else {
      clearInterval(pers);
      setPer(0);
    }

    return () => {
      setPer(0);
      clearInterval(pers);
    };
  }, [prop.open]);
  useEffect(() => {
    if (per == 95) {
      $("#showadsmodget").trigger("click");
    }
  }, [per]);
  return (
    <Modal
      open={prop.open}
      basic
      size="fullscreen"
      closeOnDimmerClick={false}
      closeIcon={per > 90 ? true : false}
      onClose={() => {
        prop.setOpenads(false);
      }}
    >
      <Progress percent={per} active color="green" attached="top" />
      <Segment
        inverted
        size="small"
        style={{ margin: 0, minHeight: "60vh", textAlign: "center" }}
      >
        <AdsComponent dataAdSlot="1405467157" />
      </Segment>
    </Modal>
  );
}

export default ModalExampleModal;
