import React, { useState, useEffect } from "react";
import EventBus from "../common/EventBus";
import Comment from "../utils/msg";
import { stringToHslColor } from "../utils/include";
function ChatWheel(prop) {
  const [userbets, setuserbets] = useState([]);

  useEffect(() => {
    EventBus.on("chat", (data) => {
      if (data != []) {
        setuserbets((current) => [...current, data]);
      }
    });
    return () => {
      EventBus.remove("chat");
    };
  }, []);
  useEffect(() => {
    document.getElementById("chatarea").scroll({
      top: userbets.length * 100,

      behavior: "smooth",
    });
  }, [userbets]);

  return (
    <div
      className="mainwheel"
      id="chatarea"
      style={{
        width: "130%",
        height: 260,
        overflow: "auto",
        marginTop: 30,
        overflowX: "hidden",
        zIndex: 100,
      }}
    >
      {userbets.map((cmd, i) => {
        return (
          <Comment
            key={i}
            username={cmd.username}
            s
            image={
              "https://ui-avatars.com/api/?format=svg&background=" +
              stringToHslColor(cmd?.username, 80, 30) +
              "&color=" +
              stringToHslColor(cmd?.username, 100, 100) +
              "&bold=true&rounded=true&size=2&name=" +
              cmd?.username
            }
            txt={cmd.txt}
          />
        );
      })}
    </div>
  );
}

export default ChatWheel;
