import React, { useState, useEffect } from "react";
import EventBus from "../common/EventBus";
import {
  Jetton,
  UsersIcon,
  formatDollar,
  stringToHslColor,
} from "../utils/include";
import Mod from "./modalinv";
import Modads from "./modalads";
import { Icon } from "semantic-ui-react";
function BetsWheel(prop) {
  const oldduser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(oldduser);
  const [online, setOnline] = useState(1);
  const [balance, setBalance] = useState(user?.balance2);
  useEffect(() => {
    window.addEventListener("message", function (event) {
      if (event?.data?.username) {
        localStorage.setItem("user", JSON.stringify(event?.data));

        EventBus.dispatch("user", event.data);
        EventBus.dispatch("balance", event.data.balance2);
      }
    });
    EventBus.on("user", (data) => {
      setUser(data);
      setBalance(data.balance2);
    });
    EventBus.on("balance", (data) => {
      setBalance(data);
    });
    EventBus.on("online", (data) => {
      setOnline(data);
    });

    return () => {
      EventBus.remove("user");
      EventBus.remove("balance");
      EventBus.remove("online");
    };
  }, []);
  useEffect(() => {
    var newuser = JSON.parse(localStorage.getItem("user"));
    try {
      newuser.balance2 = balance;
      localStorage.setItem("user", JSON.stringify(newuser));
    } catch (error) {}
  }, [balance]);
  if (!user?.username) {
    return false;
  }
  function reverse(s) {
    return s.split("").reverse().join("");
  }
  return (
    <>
      <Modads wheel={prop.wheel} />
      <div className="info">
        <img
          src={
            "https://ui-avatars.com/api/?format=svg&background=" +
            stringToHslColor(user?.username, 80, 30) +
            "&color=" +
            stringToHslColor(user?.username, 100, 100) +
            "&rounded=true&size=2&bold=true&name=" +
            user?.username
          }
          style={{ height: 25, padding: "0 10px" }}
        />
        <b>{user?.username}</b>
        <div style={{ float: "right" }}>
          <span>{online}</span>{" "}
          <span>
            {" "}
            <UsersIcon
              colors="outline:#794628,primary:#e8b730,secondary:#e8b730"
              style={{ width: 25, height: 25 }}
            />
          </span>
          <span>
            <Jetton />
          </span>{" "}
          <span>
            {" "}
            {balance == -1
              ? formatDollar(user?.balance2)
              : formatDollar(balance)}
          </span>
        </div>
      </div>
    </>
  );
}

export default BetsWheel;
