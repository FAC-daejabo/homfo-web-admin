import { atom } from "recoil";
import { IOffer } from "../interfaces/OfferInterface";

export const offerImagesAtom = atom<File[]>({
  key: "offerImagesAtom",
  default: [],
});

export const offersAtom = atom<IOffer[]>({
  key: "offersAtom",
  default: [],
});
