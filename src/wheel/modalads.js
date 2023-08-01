import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  Segment,
  Icon,
  Divider,
  Dimmer,
} from "semantic-ui-react";
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import ModalAds from "../modalvideo";
import { Jetton, formatDollar } from "../utils/include";

const getchips = (user, setOpen) => {
  if (user?.balance2 < 100) {
    UserService.getchips().then((response) => {
      try {
        if (user?.username == response.data.username) {
          var newu = {
            username: response.data?.username,
            balance: response.data?.balance,
            balance2: response.data?.point,
            image: 0,
          };
          EventBus.dispatch("setuser", newu);
        }
      } catch (error) {}
    });
  }

  setOpen(false);
};
const olduser2 = JSON.parse(localStorage.getItem("user"));
function ModalExampleModal(prop) {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [openads, setOpenads] = useState(false);
  const [user, setUser] = useState(olduser2);
  const [link, setLink] = useState("");
  const [wheel, setWheel] = useState(JSON.parse(localStorage.getItem("wheel")));
  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  useEffect(() => {
    if (wheel?.status == "Done") {
      const olduser = JSON.parse(localStorage.getItem("user"));

      setUser(olduser);
    }
  }, [wheel?.status]);
  useEffect(() => {
    EventBus.on("user", (data) => {
      setUser(data);
    });
    EventBus.on("balance", (data) => {
      const wheelb = JSON.parse(localStorage.getItem("wheel"));

      if (wheelb?.status != "Pending") {
        var newuser = olduser2;
        newuser.balance2 = data;
        setUser(newuser);
      }
    });
    EventBus.on("wheel", (data) => {
      if (data?.status) {
        setWheel(data);
      }
    });
    return () => {
      EventBus.remove("user");
      EventBus.remove("balance");
      EventBus.remove("wheel");
    };
  }, []);

  return (
    <>
      <Modal
        onClose={() => {
          setOpen(false);
        }}
        onOpen={() => {
          setOpenads(false);
          setOpen(true);
        }}
        open={open}
        size="mini"
        basic
        closeOnDimmerClick={true}
        closeIcon={true}
        trigger={
          <Icon
            circular
            inverted
            name="gift"
            color="red"
            id="showadsmod"
            style={{ position: "absolute", zIndex: -1 }}
          />
        }
      >
        <Segment inverted style={{ textAlign: "center" }}>
          <h3 className="text-center">Free Diamond</h3>
          <Divider />
          <p>
            {" "}
            You can watch ads and get 100{" "}
            <span style={{ position: "relative", top: -1 }}>
              <Jetton />
            </span>{" "}
            for free, if your balance is less than 100.
          </p>

          <Divider />
          <p
            style={
              user?.balance2 >= 100 ? { color: "red" } : { color: "green" }
            }
          >
            Your balance is {formatDollar(user?.balance2)}{" "}
            <span style={{ position: "relative", top: -1 }}>
              <Jetton />
            </span>
            <br /> <br />
          </p>
          <Button
            color="facebook"
            disabled={user?.balance2 >= 1000}
            onClick={() => {
              setOpenads(true);
            }}
          >
            <Icon name="video" /> Watch Ads
          </Button>
          <Icon
            circular
            inverted
            name="gift"
            color="red"
            id="showadsmodget"
            style={{ position: "absolute", zIndex: -1 }}
            onClick={() => getchips(user, setOpen)}
          />
        </Segment>
      </Modal>
      <ModalAds
        open={openads}
        getchips={getchips}
        setOpenads={setOpenads}
        setOpen={setOpen}
      />
    </>
  );
}

export default ModalExampleModal;
