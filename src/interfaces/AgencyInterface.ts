import { IArea } from "./RequestInterface";

export interface IAgency {
  id: string;
  areas: {
    data: IArea[];
    length: number;
  };
  name: string;
  type: string;
  chairmanName: string;
  chairmanCertificateId: string;
  roadAddress: string;
  lotAddress: string;
  deduction: boolean;
  officePhoneNumber: string;
  phoneNumber: string;
  openedAt: string;
  partner: boolean;
  lat?: number;
  lng?: number;
  status: "N" | "Y" | "P" | "F";
}
