import { atom } from "recoil";

// 사무실 이름
export const agencyNameAtom = atom<string>({
  key: "agencyNameAtom",
  default: "",
});
// 사무실 등록번호
export const agencyIdAtom = atom<string>({
  key: "agencyIdAtom",
  default: "",
});
// 사무실 연락처
export const agencyNumberAtom = atom<string>({
  key: "agencyNumberAtom",
  default: "",
});
// 공인중개사 이름
export const realtorNameAtom = atom<string>({
  key: "realtorNameAtom",
  default: "",
});
// 공인중개사 연락처
export const realtorNumberAtom = atom<string>({
  key: "realtorNumberAtom",
  default: "",
});

// 해당 구역
export const areaAtom = atom<string>({
  key: "areaAtom",
  default: "계룡리슈빌",
});

// 개업/소속
export const isOpenAtom = atom<boolean>({
  key: "isOpenAtom",
  default: true,
});

// 도로명 주소
export const roadAddressAtom = atom<string>({
  key: "roadAddressAtom",
  default: "",
});

// 지번 주소
export const lotAddressAtom = atom<string>({
  key: "lotAddressAtom",
  default: "",
});

// 대표자명
export const chairmanNameAtom = atom<string>({
  key: "chairmanNameAtom",
  default: "",
});

// 대표자명
export const deductionAtom = atom<boolean>({
  key: "deductionAtom",
  default: false,
});

// 대표자명
export const noteAtom = atom<string>({
  key: "noteAtom",
  default: "",
});

export const phoneNumberAtom = atom<string>({
  key: "phoneNumberAtom",
  default: "",
});
