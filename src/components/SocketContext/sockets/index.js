import io from "socket.io-client";
import { socketEvents } from "./events";
import { joinChannel } from "./emit";

const SOCKETSERVER =
  process.env.REACT_APP_WEBSOCKET_SERVER ||
  "https://spaceland-clocks-vturnit-415749d8a7a5.herokuapp.com";

export const socket = io(SOCKETSERVER);
socket.on("connect", msg =>
  console.debug(`Established socket connection to ${SOCKETSERVER}`)
);

export const initSockets = ({ setValue }) => {
  socketEvents({ setValue });
  joinChannel("announcements");
};
