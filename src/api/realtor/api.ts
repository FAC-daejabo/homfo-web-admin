import { IRealtor } from "../../interfaces/RealtorInterface";
import instance from "../util/instance";

export const getRealtors = async (
  setRealtors: React.Dispatch<React.SetStateAction<IRealtor[]>>
) => {
  const res = await instance.get("/admins/realtors/search", {
    params: {
      page: 0,
      size: 10,
      firstView: true,
    },
  });
  console.log(res);
  setRealtors(res.data.data);
  return res;
};
