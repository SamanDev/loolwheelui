export default function authHeader() {
  const url = window.location.href.toString().split("/");
  const user = url[url.length - 1];
  const accessToken = url[url.length - 2];
  if (user && accessToken) {
    // For Spring Boot back-end
    // return { Authorization: "Bearer " + user.accessToken };

    // for Node.js Express back-end
    return { Authorization: "LooLe  " + accessToken };
  } else {
    return {};
  }
}
