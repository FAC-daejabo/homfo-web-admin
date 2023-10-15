export interface IUser {
  userId: string;
  userAccount: string;
  userPhoneNum: string | null;
  nickName: string;
  gender: "W" | "M";
  job: string;
  dateOfBirth: string;
  createdAt?: string;
  updatedAt?: string;
  role: "관리자" | "일반회원";
  status: "N" | "Y" | "P" | "F";
}
