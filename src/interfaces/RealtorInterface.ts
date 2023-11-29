import { IAgency } from "./AgencyInterface";

export interface IRealtor {
  id: number;
  name: string;
  certificateId: number | null;
  position: string | null;
  phoneNumber: string;
  status: "N" | "Y" | "P" | "F";
  agency: IAgency;
}
