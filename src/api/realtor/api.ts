import { IRealtor } from "../../interfaces/RealtorInterface";
import instance from "../util/instance";

interface IRealtorSearchOptions {
  firstView: boolean;
  name: string | null;
  agencyId: string | null;
  agencyName: string | null;
  roadAddress: string | null;
  lotAddress: string | null;
  chairmanName: string | null;
  phoneNumber: string | null;
  areaName: string | null;
}

export const getRealtors = async (
  setRealtors: React.Dispatch<React.SetStateAction<IRealtor[]>>,
  options: IRealtorSearchOptions
) => {
  const res = await instance.get("/admins/realtors/search", {
    params: {
      page: 0,
      size: 100,
      firstView: options.firstView,
      name: options.name,
      agencyId: options.agencyId,
      agencyName: options.agencyName,
      roadAddress: options.roadAddress,
      lotAddress: options.lotAddress,
      chairmanName: options.chairmanName,
      phoneNumber: options.phoneNumber,
      areaName: options.areaName,
    },
  });
  console.log(res);
  setRealtors(res.data.data);
  return res;
};

export const putRealtor = async (
  agencyName: string,
  agencyId: string,
  agencyNumber: string,
  realtorName: string,
  realtorNumber: string,
  areaId: number | null,
  isOpen: boolean,
  roadAddress: string,
  lotAddress: string,
  chairmanName: string,
  deduction: boolean,
  note: string
) => {
  const res = await instance.put("/admins/realtors", {
    agencyId: agencyId,
    name: realtorName,
    certificateId: null,
    position: null,
    phoneNumber: realtorNumber,
    agency: {
      id: agencyId,
      areas: [areaId],
      name: agencyName,
      type: isOpen ? "개업" : "소속",
      chairmanName: chairmanName,
      chairmanCertificateId: null,
      roadAddress: roadAddress,
      lotAddress: lotAddress,
      deduction: deduction,
      officePhoneNumber: agencyNumber,
      phoneNumber: null,
      openedAt: null,
      note: note,
      partner: true,
    },
  });

  console.log(res);
};
