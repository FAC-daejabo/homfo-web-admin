import { atom } from "recoil";

export const offerImagesAtom = atom<File[]>({
  key: "offerImagesAtom",
  default: [],
});
