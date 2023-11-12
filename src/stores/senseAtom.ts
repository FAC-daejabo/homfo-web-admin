import { atom } from "recoil";

export const sensePosterListAtom = atom<File[]>({
  key: "sensePosterList",
  default: [],
});

export const senseBannerAtom = atom<File | undefined>({
  key: "senseBanner",
  default: undefined,
});

export const senseTitleAtom = atom<string>({
  key: "senseTitle",
  default: "",
});

export const senseContentAtom = atom<string>({
  key: "senseContent",
  default: "",
});

export const senseIsPublicAtom = atom<boolean>({
  key: "senseIsPublic",
  default: false,
});

export const senseIdAtom = atom<number | undefined>({
  key: "senseId",
  default: undefined,
});
