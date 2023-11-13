import { IAgencyThumbnailDto, IRequest } from "./RequestInterface";

export interface IOffer {
  id: number;
  name: string;
  status: "N" | "Y" | "P" | "F";
  homfoRequestThumbnail: IRequest;
  agencyThumbnail: IAgencyThumbnailDto;
}
