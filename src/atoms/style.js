const { atom } = require("recoil");

const KEYS = {
  BACKGROUND: "backroundColorState",
  TEXT: "textColorState",
};

export const backroundColorState = atom({
  key: KEYS.BACKGROUND,
  default: window.localStorage.getItem(KEYS.BACKGROUND) || "#fff",
});

export const textColorState = atom({
  key: KEYS.TEXT,
  default: window.localStorage.getItem(KEYS.TEXT) || "#fff",
});
