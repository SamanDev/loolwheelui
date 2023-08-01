import React, { useEffect, useState } from "react";
import { Button, Modal, Icon, Progress, Segment } from "semantic-ui-react";
import AdsComponent from "./adscom";
import $ from "jquery";
function ModalExampleModal(prop) {
  const [open, setOpen] = useState(false);
  const [per, setPer] = useState(0);
  useEffect(() => {
    if (open) {
      var pers = setInterval(() => {
        setPer((prev) => prev + 10);
      }, 100);
    } else {
      setPer(0);
      clearInterval(pers);
    }

    return () => {
      setPer(0);
      clearInterval(pers);
    };
  }, [open]);

  return (
    <Modal
      open={open}
      basic
      size="fullscreen"
      closeOnDimmerClick={false}
      closeIcon={per > 60 ? true : false}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      trigger={
        <Icon
          circular
          inverted
          name="gift"
          color="red"
          id="playButton"
          style={{ position: "absolute", zIndex: -1 }}
        />
      }
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
