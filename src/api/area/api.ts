import { IArea } from "../../interfaces/RequestInterface";
import instance from "../util/instance";

export const getAreas = async (
  setAreas: React.Dispatch<React.SetStateAction<IArea[]>>
) => {
  const res = await instance.get("/transports/area");
  console.log(res);
  setAreas(res.data.data);
};
