module.exports = {
  //...
  devServer: {
    client: {
      webSocketURL: {
        hostname: "",
        pathname: "/ws",
        password: "dev-server",
        port: 3000,
        protocol: "ws",
        username: "webpack",
      },
    },
  },
};
