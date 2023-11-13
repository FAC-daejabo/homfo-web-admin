export interface IUser {
  userId: number;
  userAccount: string;
  userPhoneNum: string | null;
  nickName: string;
  gender: "W" | "M";
  job: string;
  dateOfBirth: string;
  createdAt?: string;
  updatedAt?: string;
  role: "절대관리자" | "관리자" | "일반회원" | "회원";
  status: "N" | "Y" | "P" | "F";
}
