import { atom } from "recoil";
import { IRequest } from "../interfaces/RequestInterface";

export const requestAtom = atom<IRequest[]>({
  key: "requestAtom",
  default: [],
});
