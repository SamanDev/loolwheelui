import React from "react";
import { Icon, Button } from "semantic-ui-react";

const DiscordBtn = () => (
  <Button
    fluid
    color="purple"
    as="a"
    href="https://discord.gg/ytUZxGbhnp"
    target="_blank"
  >
    <Icon name="discord" size="big" />
    Join our support server
    <br />
    on DiSCORD
  </Button>
);

export default DiscordBtn;
