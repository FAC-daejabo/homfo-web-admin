import { atom } from "recoil";
import { IDeposits, IRequest } from "../interfaces/RequestInterface";

export const requestAtom = atom<IRequest[]>({
  key: "requestAtom",
  default: [],
});
// 요청서 id
export const requestIdAtom = atom<number | undefined>({
  key: "requestIdAtom",
  default: undefined,
});
// 구역 id
export const areaIdAtom = atom<number | undefined>({
  key: "areaIdAtom",
  default: undefined,
});
// 매물 유형
export const requestRealEstateTypeAtom = atom<string[]>({
  key: "requestRealEstateTypeAtom",
  default: [],
});
// 계약 유형
export const requestContractTypeAtom = atom<string>({
  key: "requestContractTypeAtom",
  default: "",
});
// 희망 거주기간
export const requestResidencePeriodAtom = atom<string>({
  key: "requestResidencePeriodAtom",
  default: "",
});
// 금액대
export const requestDepositsAtom = atom<IDeposits | undefined>({
  key: "requestDepositsAtom",
  default: undefined,
});
// 대출 가능 유무
export const requestLoanAvailabilityAtom = atom<string>({
  key: "requestLoanAvailabilityAtom",
  default: "",
});
// 대출 유형
export const requestLoanTypeAtom = atom<string>({
  key: "requestLoanTypeAtom",
  default: "",
});
// 예상 입주시기
export const requestMoveInPeriodAtom = atom<string>({
  key: "requestMoveInPeriodAtom",
  default: "",
});
// 옵션
export const requestOptionAtom = atom<string[]>({
  key: "requestOptionAtom",
  default: [],
});
// 추가 요청 사항
export const requestOtherOptionAtom = atom<string>({
  key: "requestOtherOptionAtom",
  default: "",
});
