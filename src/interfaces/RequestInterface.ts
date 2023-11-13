import { IUser } from "./UserInterface";

export interface IRequest {
  id: number;
  offerId: number;
  matchStatus: "매물 파악 완료" | "매물 파악 중" | "신청 완료";
  status: "N" | "Y" | "P" | "F";
  createdAt: string;
  updatedAt: string;
  writer: IUser;
  area: IArea;
  realtorThumbnail: IRealtor;
}

export interface IArea {
  areaId: number;
  name: string;
  radius: number;
  lat: number;
  lng: number;
}

export interface IAgencyThumbnailDto {
  id: string;
  name: string;
  type: string;
  status: "N" | "Y" | "P" | "F";
}

export interface IRealtor {
  id: number;
  agencyThumbnailDto: IAgencyThumbnailDto;
  name: string;
  position: string | null;
  status: "N" | "Y" | "P" | "F";
}
