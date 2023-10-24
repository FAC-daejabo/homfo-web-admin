import { atom } from "recoil";

export const sensePosterList = atom<File[]>({
  key: "sensePosterList",
  default: [],
});
