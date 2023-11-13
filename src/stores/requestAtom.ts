import { atom } from "recoil";
import { IRequest } from "../interfaces/RequestInterface";

export const requestAtom = atom<IRequest[]>({
  key: "requestAtom",
  default: [],
});

export const requestIdAtom = atom<number | undefined>({
  key: "requestIdAtom",
  default: undefined,
});
