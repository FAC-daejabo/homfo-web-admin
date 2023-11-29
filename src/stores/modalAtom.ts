import { atom } from "recoil";

export const modalAtom = atom<boolean>({ key: "ModalAtom", default: false });

export const realtorModalAtom = atom<boolean>({
  key: "realtorModalAtom",
  default: false,
});
