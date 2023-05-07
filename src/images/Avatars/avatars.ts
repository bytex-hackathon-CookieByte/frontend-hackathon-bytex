import leprechaun from "./leprechaun.png";
import buddy from "./buddy.png";
import man from "./man.png";
import maya from "./maya.png";
import maya2 from "./maya-2.png";
import maya3 from "./maya-3.png";
import maya4 from "./maya-4.png";
import woman from "./woman.png";

export const availableAvatars = [
  "buddy",
  "leprechaun",
  "man",
  "maya",
  "maya-2",
  "maya-3",
  "maya-4",
  "woman",
];

export const getAvatar = (name: string) => {
  if (name === availableAvatars[0]) {
    return buddy;
  } else if (name === availableAvatars[1]) {
    return leprechaun;
  } else if (name === availableAvatars[2]) {
    return man;
  } else if (name === availableAvatars[3]) {
    return maya;
  } else if (name === availableAvatars[4]) {
    return maya2;
  } else if (name === availableAvatars[5]) {
    return maya3;
  } else if (name === availableAvatars[6]) {
    return maya4;
  } else if (name === availableAvatars[7]) {
    return woman;
  }
  return buddy;
};
